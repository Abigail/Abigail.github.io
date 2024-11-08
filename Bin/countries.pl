#!/opt/perl/bin/perl

use 5.032;

use strict;
use warnings;
no  warnings 'syntax';

use experimental 'signatures';
use experimental 'lexical_subs';

use Getopt::Long;

my $FLAG_TYPE    = 1;
my $COUNTRY_TYPE = 2;

GetOptions ("input=s"  =>  \ my $input,
            "output=s" =>  \ my $output,);

die "Usage: $0 --type <country|flag> --input <file> [--output <file>]" 
    unless $input;

$output ||= $input;
$input   .= ".txt" unless $input  =~ /\.txt$/;
$output  .= ".js"  unless $output =~ /\.js$/;

open my $i_fh, "<", $input  or die "Failed to open $input: $!";
open my $o_fh, ">", $output or die "Failed to open $output: $!";

$/ = "";
my @entries = <$i_fh>;

my $short_input = $input =~ s!.*/!!r;
my $short_me    = $0     =~ s!.*/!!r;


my $indent  = " " x 4;
my $indent2 = $indent x 2;
my $indent3 = $indent x 3;
my $indent4 = $indent x 4;

my $flag_info = "Country . flag_info = {\n";
my $name_info = "Country . name_info = {\n";

foreach my $entry (@entries) {
    $entry =~ s/\h*#\N*//gm;   # Remove comments
    $entry =~ s/\n\s*\n/\n/g;  # Remove blank lines

    my @lines = split /\n+/ => $entry;
    my ($code, $name) = split /\h+/, shift (@lines), 2;

    $name_info .= sprintf qq [%s%s: "%s",\n], $indent3, $code, $name;

    $flag_info .= sprintf qq {%s%s: [\n}, $indent3, $code;

    foreach my $line (@lines) {
        my ($date, $file) = $line =~ /^\h* (\d{4}(?:-\d{2}-\d{2})?) \h+
                                           (undefined|[A-Z1]{3}-\d{4})/x
             or die "Failed to parse $line";
        $flag_info .= sprintf qq [%s"%s",%s%s,\n] =>
                      $indent4, $date,
                      " " x (11 - length ($date)),
                      $file eq "undefined" ? " $file" : qq ["$file.svg"],
    }
    $flag_info .= "$indent3],\n";
}
$flag_info .= "$indent2}";
$name_info .= "$indent2}";

print $o_fh <<~ "--";
//
// Do not modify. Modify $short_input and regenerate this file
// by running $short_me.
//
class Country_Data {
    static init () {
        $name_info

        $flag_info
    }
}
--

close $o_fh or die "Failed to close $output: $!";

__END__
