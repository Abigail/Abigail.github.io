#!/opt/perl/bin/perl

use 5.032;

use strict;
use warnings;
no  warnings 'syntax';

use JSON;

use experimental 'signatures';
use experimental 'lexical_subs';

use Getopt::Long;

my $VENUE_TYPES = {NATURAL    =>  1,
                   ARTIFICIAL =>  2,
                   INDOOR     =>  3,};
            

GetOptions ("input=s"  =>  \my $input,
            "output=s" =>  \my $output,);

die "Usage: $0 --input <file> [--output <file>]" unless $input;

$output ||= $input;
$input   .= ".txt" unless $input  =~ /\.txt$/;
$output  .= ".js"  unless $output =~ /\.js$/;

open my $i_fh, "<", $input  or die "Failed to open $input: $!";
open my $o_fh, ">", $output or die "Failed to open $output: $!";

undef $/;
my $text = <$i_fh>;

$text =~ s/^\h*#\N*\n//gm;  # Remove comments
my @entries = split /^(?=[a-z])/m, $text;

my $short_input = $input =~ s!.*/!!r;
my $short_me    = $0     =~ s!.*/!!r;

print $o_fh <<~ "--";
//
// Do not modify. Modify $short_input and regenerate this file
// by running $short_me.
//
class Rinks {
    static init () {
--

my $key_p       = qr /[-a-z_]+/;
my $name_p      = qr /\S.*\S/;
my $city_p      = qr /\S.*\S/;
my $country_p   = qr /[A-Z]{3}/;
my $type_p      = qr /NATURAL|ARTIFICIAL|INDOOR/;
my $elevation_p = qr /-?[0-9]{1,4}/;
my $date_p      = qr /[0-9]{4}-[0-9]{2}-[0-9]{2}/;

my sub esc ($str) {$str =~ s/\\u\{([0-9a-fA-F]+)\}/chr hex $1/ger}

foreach my $entry (@entries) {
    my $blank = 0;
    if ($entry =~ s/\n\n+$/\n/) {
        $blank = 1;
    }

    #
    # Split into lines
    #
    my @lines = split /\n\s*/ => $entry;

    my ($key, $name, $city, $country, $type, $elevation);

    #
    # We either have two lines, or more; in the latter case,
    # name, city, country or type will change on a particular date.
    #
    if (@lines == 2) {
        ($key, $name) = $lines [0] =~ /^($key_p) \h+ ($name_p) \h* $/x
              or die "Failed to parse: ", $entry;
        ($city, $country, $type, $elevation) = 
                $lines [1] =~ /^\h* ($city_p) \h+ ($country_p)   \h+
                                    ($type_p) \h+ ($elevation_p) \h*/x
              or die "Failed to parse ", $entry;
        $city = esc $city;
        $name = esc $name;
        $type = $$VENUE_TYPES {$type};
    }
    else {
        #
        # First line has the key
        #
        ($key) = $lines [0] =~ /^($key_p) \h* $/x
               or die "Failed to parse ", $entry;

        my ($date, $name_d, $city_d, $country_d, $type_d, $elevation_d);
        $name      = [];
        $city      = [];
        $country   = [];
        $type      = [];
        $elevation = [];

        for (my $i = 1; $i < @lines; $i += 2) {
            ($date, $name_d) = $lines [$i] =~
                        /^\h* ($date_p) \h+ ($name_p) \h* $/x
                 or die "Failed to parse: ", $entry;
            ($city_d, $country_d, $type_d, $elevation_d) = 
                    $lines [$i + 1] =~ /^\h* ($city_p) \h+ ($country_p)   \h+
                                        ($type_p) \h+ ($elevation_p) \h*/x
                  or die "Failed to parse ", $entry;
            push @$name      => [$date, esc $name_d];
            push @$city      => [$date, esc $city_d];
            push @$country   => [$date, $country_d];
            push @$type      => [$date, $$VENUE_TYPES {$type_d}];
            push @$elevation => [$date, $elevation_d];
        }

        #
        # Now, eliminate duplicates, and flatten
        #
        foreach my $thingy ($name, $city, $country, $type, $elevation) {
            my @old = @$thingy;
            my @new = shift @old;
            foreach my $old (@old) {
                push @new => $old unless $$old [1] eq $new [-1] [1];
            }
            @$thingy = map {@$_} @new;
        }

        #
        # Just one left?
        #
        $name      = $$name      [1] if @$name      == 2;
        $city      = $$city      [1] if @$city      == 2;
        $country   = $$country   [1] if @$country   == 2;
        $type      = $$type      [1] if @$type      == 2;
        $elevation = $$elevation [1] if @$elevation == 2;
    }

    my $args = encode_json {
        key       => $key,
        name      => $name,
        city      => $city,
        country   => $country,
        type      => $type,
        elevation => $elevation,
    };

    print $o_fh "        Venue . add_venue ($args)\n";
    print $o_fh "\n" if $blank;
}

print $o_fh <<~ "--";
    }
}
--

close $o_fh or die "Failed to close $output: $!";

__END__
