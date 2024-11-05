#!/opt/perl/bin/perl

use 5.032;

use strict;
use warnings;
no  warnings 'syntax';

use experimental 'signatures';
use experimental 'lexical_subs';

use Getopt::Long;

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

my sub str ($thingy, $quote //= 1) {
    if (ref $thingy) {
        return str ($$thingy [0] [1]) if @$thingy == 1;
        my $out = '[';
        foreach my $item (@$thingy) {
            my ($date, $name) = @$item;
            $out .= qq ["$date", ];
            $out .= $quote ? qq ["$name"] : $name;
            $out .= ",\n                                ";
        }
        $out =~ s/\n\h+$/]/;
        return $out;
    }
    else {
        return $quote ? qq ["$thingy"] : " $thingy";
    }
}

foreach my $entry (@entries) {
    my $blank = 0;
    if ($entry =~ s/\n\n+$/\n/) {
        $blank = 1;
    }

    #
    # Split into lines
    #
    my @lines = split /\n\s*/ => $entry;

    #
    # First line has the key and the name of the rink.
    #
    my ($key, $name) = split /\h+/ => shift @lines, 2;

    #
    # Now, we either have a single line with city, country, type, elevation,
    # or set of lines with the same, each preceeded by a date
    #
    my ($city, $country, $type, $elevation);
    my  $seen_date;
    foreach my $line (@lines) {
        my $date;
        if ($line =~ s/^\h*(\d{4}-\d{2}-\d{2})\h+//) {
            $date      = $1;
            if (!$seen_date) {
                $city      = [];
                $country   = [];
                $type      = [];
                $seen_date = 1;
            }
        }
        $line =~ /^\h* (\S.*\S)                    \h+
                       ([A-Z1]{3})                 \h+
                       (NATURAL|ARTIFICIAL|INDOOR) \h+
                       (\d+)/x or die "Failed to parse $line";
        my ($e_city, $e_country, $e_type, $e_elevation) = 
           ($1, $2, "Venue . $3", $4);
        if ($date) {
            push @$city    => [$date, $e_city]    unless
                 @$city    && $$city [-1] [1]     eq $e_city;
            push @$country => [$date, $e_country] unless
                 @$country && $$country [-1] [1]  eq $e_country;
            push @$type    => [$date, $e_type]    unless
                 @$type    && $$type [-1] [1]     eq $e_type;
        }
        else {
            $city    = $e_city;;
            $country = $e_country;;
            $type    = $e_type;
        }
        $elevation = $e_elevation;;
    }
    if ($seen_date) {
        if (@$city == 1) {
            $city = $$city [0] [1];
        }
        if (@$country == 1) {
            $country = $$country [0] [1];
        }
        if (@$type == 1) {
            $type = $$type [0] [1];
        }
    }

    my $out  = sprintf qq [Venue . add_venue ({key:       "%s",\n],  $key;
       $out .= sprintf qq [                    name:      "%s",\n],  $name;
       $out .= sprintf qq [                    city:      %s,\n],  str $city;
       $out .= sprintf qq [                    country:   %s,\n],  str $country;
       $out .= sprintf qq [                    type:      %s,\n],  str $type, 0;
       $out .= sprintf qq [                    elevation:  %4d})\n], $elevation;
       $out .= "\n" if $blank;

    print $o_fh $out =~ s/^/        /gmr;
}

print $o_fh <<~ "--";
    }
}
--

close $o_fh or die "Failed to close $output: $!";

__END__
