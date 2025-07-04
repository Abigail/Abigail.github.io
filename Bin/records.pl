#!/opt/perl/bin/perl

use 5.032;

use strict;
use warnings;
no  warnings 'syntax';

use experimental 'signatures';
use experimental 'lexical_subs';

use Getopt::Long;
use Date::Calc qw [Add_Delta_Days Delta_Days leap_year Day_of_Year];
use JSON;

sub process_file;
sub sec2time;
sub date2value;

my $distances = {
    big       => [qw [500m 5000m 1500m 10000m]],
    small     => [qw [500m 3000m 1500m  5000m]],
    old_small => [qw [500m 3000m 1000m  5000m]],
    mini      => [qw [500m 1500m 1000m  3000m]],
    sprint    => [qw [500m 1000m  500m  1000m]],
   '2x500'    => [qw [500m  500m]],
};

GetOptions ("input-dir=s"  =>  \my $input_dir,
            "output=s"     =>  \my $output,);

die "Usage: $0 --input_dir <dir> --output <file>" unless $input_dir && $output;

if (-f $input_dir && ! -d $input_dir) {
    #
    # We accept a file inside the input_dir. We do this so we can make
    # use of some Makefile variables.
    #
    $input_dir =~ s!/+[^/]+$!!;
}

die "$input_dir is not a directory" unless -d $input_dir;

$output  .= ".js"  unless $output =~ /\.js$/;

open my $o_fh, ">", $output or die "Failed to open $output: $!";
print $o_fh <<~ "--";
Record . init = function () {
--

opendir my $dh, $input_dir or die "Failed to opendir $input_dir: $!";
while (my $file = readdir $dh) {
    next unless $file =~ /\.txt/;
    process_file "$input_dir/$file", $o_fh;
}
print $o_fh <<~ "--";
}
--
close $o_fh  or die "Failed to close $output: $!";
closedir $dh or die "Failed to close $input_dir: $!";

sub process_file ($input, $o_fh) {
    state $genders     = [qw [men women mixed]];
    state $distance    = [qw [500 1000 1500 3000 5000 10000]];
    state $combination = [qw [big small mini old_small sprint 2x500]];
    state $team        = [qw [pursuit team_sprint relay]];
    state $p_skater    = "(?:[-a-z_]+)";
    state $p_country   = "(?:[A-Z]{3})";
    state $p_rink      = "(?:[-a-z_]+)";
    state $p_result    = "(?:[0-9:.]+)";
    state $p_date      = "(?:[0-9]{4}-[0-9]{2}-[0-9]{2})";
    local $" = "|";
    $input =~ m!/(?<gender>@$genders) _
                 (?<discipline>@$distance|@$combination|@$team) \.txt $!x
              or die "Failed to parse $input";
    my $gender         = $+ {gender};
    my $discipline     = $+ {discipline};
    my $result_is_time = $discipline =~ /^(?:\d+|pursuit|team_sprint|relay)$/;

    my $event = {
        sport          => 'speedskating',
        age            => 'senior',
        type           => 'world',
        gender         =>  $gender,
        discipline     =>  $discipline,
        is_combination => scalar (grep {$_ eq $discipline} @$combination),
        is_team        => scalar (grep {$_ eq $discipline} @$team),
    };

    if ($$distances {$discipline}) {
        $$event {distances} = $$distances {$discipline};
    }

    open my $i_fh, "<", $input or die "Failed to open $input: $!";
    local $/ = undef;

    my $text = <$i_fh>;
       $text =~ s/^\h*#.*\n//gm;

    while ($text =~ s/^ \h* %% \h* (?<key>[a-z_]+): \h*
                                   (?<value> (?:\S .* (?:\n\h{4,} .*)*)? \S)
                                             \h*\n//mx) {
        my $key   = $+ {key};
        my $value = $+ {value} =~ s/\n\h{4,}/ /gr;
        if ($key eq "scale_y_min" && $value =~ /([0-9]+):([0-9]+)/) {
            $value = 60 * $1 + $2;
        }

        $$event {$key} = $value;
    }

    $event = encode_json ($event);

    print $o_fh "    Record . event ($event)\n";


    my @entries = split /^(?=[a-z])/im => $text;
    my @output;
    foreach my $entry (@entries) {
        if ($entry =~ /^SUSPENDED \h+ (?<date> $p_date) \h* \n
                        \s* (?<message> (?s:.*)) \n/x) {
            my $date    = $+ {date};
            my $message = $+ {message} =~ s/\s+/ /gr;
            my $new     = {
                date      => $date,
                message   => $message,
                suspended => 1,
                x         => date2value ($date),
            };
            push @output => $new;
            next;
        }
        $entry =~ m{^(?:(?<skater>  $p_skater) |
                        (?<country> $p_country))             \h+
                     (?<result>  $p_result)                  \h+
                     (?<date>    \d{4}-\d{2}-\d{2} (?:/\d)?) \h+
                     (?<rink>    $p_rink)                    \h* \n
                     (?<members> (?:\h+ $p_skater)* \n)?
                     (?<times>   (?:\h+ $p_result)* \n)?
                    }x or die "Cannot parse $entry";

        my $skater  = $+ {skater};
        my $country = $+ {country};
        my $result  = $+ {result};
        my $date    = $+ {date};
        my $rink    = $+ {rink};
        my $times   = $+ {times};
        my $members = $+ {members};
           $times   = [$times   =~ /\S+/g] if $times;
           $members = [$members =~ /\S+/g] if $members;

        my $precision = $result =~ /\.(\d+)$/ ? length ($1) : 0;

        my $new = {
            venue     =>   $rink,
            result    =>   $result,
            precision =>   $precision,
        };

        $$new {athlete} = $skater  if $skater;
        $$new {country} = $country if $country;
        $$new {times}   = $times   if $times;
        $$new {members} = $members if $members;

        if ($result_is_time) {
            $result =~ /^(?:(?:(?<hours>\d+):)?
                               (?<minutes>\d{1,2}):)?
                               (?<seconds>\d{1,2}(?:\.\d{1,3})?)$/x
                or die "Failed to parse result '$result'";
            $$new {time_in_sec} = ($+ {hours}   || 0) * 3600 +
                                  ($+ {minutes} || 0) *   60 +
                                   $+ {seconds};
        }

        $date =~ m     [^(?<year> [0-9]{4}) -
                         (?<month>[0-9]{2}) -
                         (?<day>  [0-9]{2}) 
                     (?:/(?<duration>[1-3]))?]x
                 or die "Failed to parse date '$date'";

        my ($year, $month, $day, $duration) = @+ {qw [year month day duration]};
        my $first_date = "$year-$month-$day";
        my $last_date  =  $first_date;
        if ($duration && $duration > 1) {
            my ($y, $m, $d) = Add_Delta_Days ($year, $month, $day,
                                              $duration - 1);
            $last_date = sprintf "%04d-%02d-%02d" => $y, $m, $d;
        }
        $$new {first_date} = $first_date;
        $$new {date}       = $last_date;
        $$new {year}       = $year;
        $$new {month}      = $month;
        $$new {day}        = $day;

        #
        # Calculate the improvement. This can only be done if:
        #  - The record itself isn't suspended
        #  - The previous record exists
        #  - The previous record isn't suspended
        #
        if (@output) {
            my $previous = $output [-1];
            unless ($$previous {suspended} || $$new {suspended}) {
                my $key = $result_is_time ? "time_in_sec" : "result";
                my $improvement = $$previous {$key} - $$new {$key};
                   $improvement = 0 if $improvement < 0;
                if ($improvement && $improvement > 0) {
                    my $width = $$previous {precision} < $$new {precision}
                              ? $$previous {precision} : $$new {precision};
                    $$new {improvement} = sprintf "%.${width}f" => $improvement;
                    $$new {improvement_formatted} =
                       $result_is_time ? sec2time ($$new {improvement}, $width)
                                       :           $$new {improvement};
                }
            }
        }

        #
        # x and y values are required for the plotting.
        #
        $$new {x} = date2value ($last_date);  # Date as a float.
        $$new {y} = $result_is_time ? $$new {time_in_sec} : $$new {result};

        push @output => $new;
    }

    #
    # Calculate the duration. For each record, find the first record
    # which is an improvement (to deal with equalized records), or
    # a suspension and calculate the duration.
    #
    # "Current" records will *not* get a duration, nor will suspensions.
    #
    for (my $i = 0; $i < @output; $i ++) {
        my $entry = $output [$i];
        next if $$entry {suspended};
        for (my $j = $i + 1; $j < @output; $j ++) {
            my $next = $output [$j];
            next if !$$next {suspended} && !$$next {improvement};
            $$entry {duration} = Delta_Days (split (/-/ => $$entry {date}),
                                             split (/-/ => $$next  {date}));
            last;
        }
    }

    #
    # Find the "current" records. Walk from the end, as long as there is
    # neither an improvement, or a suspension, it's current.
    #
    for (my $i = @output - 1; $i >= 0; $i --) {
        my $entry = $output [$i];
        last if $$entry {suspended} || $$entry {duration};
        $$entry {current} = 1;
    }

    foreach my $entry (@output) {
        my $json = encode_json ($entry);
        my $method = $$entry {suspended} ? "add_suspension" : "add_record";
        printf $o_fh "    . $method ($json)\n";
    }
    print $o_fh "\n";
    close $i_fh or die "Failed to close $input: $!";
}



sub sec2time ($seconds, $precision) {
    my $time = "";
    if ($seconds >= 3600) {
        my $hours = int ($seconds / 3600);
        $seconds -= $hours * 3600;
        $time = "$hours:";
    }
    my $minutes = int ($seconds / 60);
    $seconds -= $minutes * 60;
    $time .= "0" if $time && $minutes < 10;
    $time .= "$minutes:";
    my $width = 3 + $precision;
    $time .= sprintf "%0${width}.${precision}f" => $seconds;
}


sub date2value ($date) {
    my ($year, $month, $day) = split /-/ => $date;
    my $doy  = Day_of_Year ($year, $month, $day) - 1;
    my $days = 365 + (leap_year ($year) ? 1 : 0);
    $year + $doy / $days;
}
