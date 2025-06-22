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
class Skaters {
    static init () {
--

foreach my $entry (@entries) {
    my $blank = 0;
    if ($entry =~ s/\n\n+$/\n/) {
        $blank = 1;
    }

    #
    # Strip the key and the nationality
    #
    $entry =~ s/^([-a-z_]+)     \h+//x;     my $key = $1;
    $entry =~ s/\h+ ([A-Z1]{3}) \h* \n$//x; my $nat = $1;

    my  $name = $entry;


    if ($name =~ /^\d{4}/) {
        #
        # Compound name
        #
        $name =~ s[(\d{4}-\d{2}-\d{2}) \h+ (\N+\S) \s*]
                  [                                     "$1", "$2",\n]gx;
        $name = "[$name]";
        $name =~ s/\[\h+/[/;
        $name =~ s/,\n]/]/;
    }
    else {
        $name = qq [ "$name"];
    }

    my $out  = sprintf qq [Athlete . add_athlete ({key:         "%s",\n], $key;
       $out .= sprintf qq [                        name:       %s,\n],    $name;
       $out .= sprintf qq [                        nationality: "%s"})\n], $nat;
       $out .= "\n" if $blank;

    print $o_fh $out =~ s/^/        /gmr;
}

print $o_fh <<~ "--";
    }
}
--

close $o_fh or die "Failed to close $output: $!";

__END__
