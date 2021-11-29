const title_font_size = 16;

const dataset_memsize1 = {
    label: 'Memory Size',
    backgroundColor: 'red',
    borderColor:     'red',
    data: window . memsize1,
    parsing: {
        xAxisKey: 'x',
        yAxisKey: 'y'
    }
};


const memsize1_config = {
    type: 'line',
    data: {
        datasets: [dataset_memsize1]
    },
    options: {
        scales: {
            x: {
                type: 'linear',
                title: {
                    text: "i = j",
                    display: true,
                    font: {
                        size: title_font_size
                    },
                },
            },
            y: {
                type: 'linear',
                title: {
                    text: "Mb",
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
                text: 'Memory Size',
                display: true,
                font: {
                    size: title_font_size
                }
            }
        }
    }
};

window . addEventListener ("load", function () {
    const MemSize1 = new Chart (
        document.getElementById('memsize1'),
        memsize1_config
    );
})
