//
// Callbacks to format the tooltip.
//
class Tooltip {
    static venue (context) {
        const  venue = context . raw . __venue
        const  date  = context . raw . __date
        return venue . name (date) + " \u{2014} " + venue . city (date)
    }

    static record (context) {
        const athlete = context . raw . __athlete
        const result  = context . raw . __result
        const date    = context . raw . __date

        return result + " " + athlete . name        (date) + ", "
                            + athlete . nationality (date)
                           
    }

    static date (context) {
        return context . raw . __date
    }

    static empty (context) {
        return ""
    }
}


//
// Callbacks to format the data points
//
class Point {
    static style (context) {
        const date  = context . raw . __date
        const venue = context . raw . __venue
        return venue ? venue . point_style (date) : ""
    }

    static colour (context) {
        const venue = context . raw . __venue
        return venue ? venue . point_colour () : ""
    }
}


//
// Callback to format the axis ticks
//
class Tick {
    static value (value, record) {  // y-axis
        if (record . is_combination ()) {
            let out     = value . toString ()
            const index = out . indexOf (".")
            if (index < 0) {return out + ".000"}
            while (out . length <= index + 3) {
                out += "0"
            }
            return out
        }
        return Utils . sec2time (value)
    }

    static year (value) {           // x-axis
        return value == Math . round (value) ? value : ""
    }
}



class Graph {
    static point_data_set (progression) {
        let data_set = {
            data:            progression,
            type:           'scatter',
            pointStyle:      Point . style,
            pointRadius:     5,
            backgroundColor: Point . colour,
            borderColor:     Point . colour,
            tooltip: {
                usePointStyle: true,
                bodyFont: {
                    size: 14,
                },
                callbacks: {
                    beforeLabel: Tooltip . date,
                    label:       Tooltip . record,
                    afterLabel:  Tooltip . venue,
                }
            }
        }
        return data_set
    }

    static line_data_set (progression) {
        //
        // For the line data, we add a single addition point: today
        //
        const data_set = {
            data:          progression . concat ([{
                               x: Utils . today2value (),   // Today
                               y: progression [progression . length - 1] . y
                           }]),
            type:         'line',
            stepped:       1,
            borderColor:  'black',
            borderWidth:   1,
            tooltip: {
                enabled: false,   // This doesn't seem to work
                callbacks: {
                    label: Tooltip . empty
                }
            }
        }
        return data_set
    }

    //
    // Calculate the first and last year to use in our graph
    //
    static min_max_years (progression, start_date = DAWN) {
        //
        // Calculate the first and last years
        //
        const years    = progression . filter (item => !item . is_suspension ())
                                     . map    (item =>  item . year ())
        let first_year = Math . min (... years) - 1
        let last_year  = new Date () . getFullYear () + 1  // Next year

        //
        // If we have a start date, set the first year to the year of the start
        // date, unless this year is less than the already calculated first year
        //
        if (start_date && start_date != DAWN) {
            const f_year = + start_date . substring (0, 4)
            if (f_year > first_year) {
                first_year = f_year
            }
        }
        return [first_year, last_year]
    }


    static make_config (args = {}) {
        const record      = args   . record
        const start_date  = args   . start_date || DAWN
        const progression = record . progression ({start_date: DAWN})
        if (!progression . length) {
            return
        }

        //
        // Wrap this into a data sets
        //
        const time_data_set = Graph . point_data_set (progression)
        const line_data_set = Graph . line_data_set  (progression)

        const [first_year, last_year] =
                              Graph . min_max_years (progression, start_date)


        //
        // Create the configuration
        //
        const config                 = record . config ()
        const scale_title_font_size  = 16;
        const legend_title_font_size = 16;

        const chart_config = {
            type: 'scatter',
            data: {
                datasets: [time_data_set, line_data_set]
            },
            options: {
                scales: {
                    x: {
                        type: 'linear',
                        ticks: {
                            callback: function (value, index, ticks) {
                                return Tick . year (value)
                            }
                        },
                        min: first_year,
                        max: last_year,
                        title: {
                            text: "Year",
                            display: true,
                            font: {
                                size: scale_title_font_size,
                            },
                        },
                    },
                    y: {
                        type: 'linear',
                        ticks: {
                            callback: function (value, index, ticks) {
                                return Tick . value (value, record)
                            },
                            stepSize: config . step_size,
                            autoSkip: false,
                        },
                        min: config . scale_y_min,
                        title: {
                            text: record . is_combination () ? "Points"
                                                             : "Time",
                            display: true,
                            font: {
                                size: scale_title_font_size,
                            },
                        },
                    },
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        font: {
                            size: legend_title_font_size,
                        },
                    },
                }
            }
        }

        return chart_config
    }




    //
    // build_chart: Build the chart
    //
    static build_chart (args = {}) {
        const chart_config = Graph . make_config (args)
        if (!chart_config) {
            return
        }

        chart_config . options . plugins . title . text = args . title

        const chart = new Chart (
            document . getElementById ('record_chart'),
            chart_config
        );

        return chart
        
    }


    //
    // Wrapper around build_chard; this method fiddles with
    // window . __private
    //
    static load_chart () {
        const title      = window . __private . title
        const record     = window . __private . record
        const start_date = window . __private . start_date == DAWN
                                                   ? MODERN : DAWN
        if (window . __private . chart) {
            window . __private . chart . destroy ()
        }

        const chart = Graph . build_chart ({record: record,
                                            title: title,
                                            start_date: start_date})

        $("#toggle") . html (
            start_date == DAWN ? "Toggle to modern era"
                               : "Toggle to all"
        )

        window . __private . start_date = start_date
        window . __private . chart      = chart
    }
}
