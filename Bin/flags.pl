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

$/ = "";
my @entries = <$i_fh>;

my $short_input = $input =~ s!.*/!!r;
my $short_me    = $0     =~ s!.*/!!r;

print $o_fh <<~ "--";
//
// Do not modify. Modify $short_input and regenerate this file
// by running $short_me.
//
class Flags_Data {
    static init () {
        Flags . info = {
--

foreach my $entry (@entries) {
    $entry =~ s/\h*#\N*//gm;   # Remove comments
    $entry =~ s/\n\s*\n/\n/g;  # Remove blank lines
    $entry =~ s/^([A-Z1]{3})\h*// or die "Failed to find country: $entry";
    my $country = $1;

    say $o_fh "            $country: [";

    foreach my $line (split /\n+/ => $entry) {
        my ($date, $file) = $line =~ /(\d{4}(?:-\d{2}-\d{2})?) \h+
                                      (undefined|[A-Z1]{3}-\d{4})/x
             or die "Failed to parse $line";
        print $o_fh qq [                "$date",],
                    " " x (11 - length ($date)),
                    $file eq "undefined" ? " $file" : qq ["$file.svg"],
                    ",\n";
    }
    say $o_fh "            ],";
}

print $o_fh <<~ "--";
        }
    }
}
--

close $o_fh or die "Failed to close $output: $!";

__END__
