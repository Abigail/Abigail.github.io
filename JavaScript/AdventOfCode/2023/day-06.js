const title_font_size = 16;

const time = 30;
const data_race_3 =
    [...Array (time + 1) . keys ()]
                         . map (i => {return {x: i, y: i * (time - i)}});

const dataset_race_3 = {
    backgroundColor: 'red',
    borderColor:     'red',
    data: data_race_3,
    parsing: {
        xAxisKey: 'x',
        yAxisKey: 'y'
    }
};


const race_3_config = {
    type: 'scatter',
    data: {
        datasets: [dataset_race_3]
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
