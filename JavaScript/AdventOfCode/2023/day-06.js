const title_font_size = 16;

const time   =  30;
const record = 200;

const data_race_3 =
    [...Array (time + 1) . keys ()]
                         . map (i => {return {x: i, y: i * (time - i)}});
const data_race_record_3 =
    [{x: 0,    y: record},
     {x: time, y: record}];

const point_color = function (context) {
    const index = context . dataIndex;
    const value = context . dataset . data [index] . y;
    console . log (value);
    return value <= record ? 'red' : 'green'
};

const dataset_race_3 = {
    type:            'scatter',
    data:             data_race_3,
    backgroundColor:  point_color,
    borderColor:      point_color,
};

const dataset_race_3_record = {
    type:            'line',
    data:             data_race_record_3,
    borderColor:     'purple',
    pointStyle:       false,
};


const race_3_config = {
    data: {
        datasets: [dataset_race_3,
                   dataset_race_3_record]
    },
    options: {
        scales: {
            x: {
                type: 'linear',
                title: {
                    text: "Time button pressed",
                    display: true,
                    font: {
                        size: title_font_size
                    },
                },
            },
            y: {
                type: 'linear',
                title: {
                    text: "Distance travelled",
                    display: true,
                    font: {
                        size: title_font_size
                    },
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            title: {
                text: 'Race 3',
                display: true,
                font: {
                    size: title_font_size
                }
            },
            tooltip: {
                enabled: false
            },
        }
    }
};

window . addEventListener ("load", function () {
    const MemSize1 = new Chart (
        document.getElementById('race-3'),
        race_3_config
    );
})
