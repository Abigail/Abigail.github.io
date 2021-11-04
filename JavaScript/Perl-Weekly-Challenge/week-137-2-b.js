const config = {
    type: 'scatter',
    data: {
        datasets: [
            {
                label: "Becomes palindrome",
                backgroundColor: 'green',
                borderColor:     'green',
                data: window . points . filter ((e) => {
                    return (e . result == 0)}
                ),
                parsing: {
                    xAxisKey: 'num',
                    yAxisKey: 'iterations',
                },
            },
            {
                label: "Exceeds 10,000,000",
                backgroundColor: 'red',
                borderColor:     'red',
                data: window . points . filter ((e) => {
                    return (e . result >  0)}
                ),
                parsing: {
                    xAxisKey: 'num',
                    yAxisKey: 'iterations',
                }
            }
        ],
    },
    options: {
        plugins: {
            title: {
                text: 'Number of iterations',
                display: true,
                font: {
                    size: 16
                }
            },
            legend: {
                display: true,
            }
        },
        scales: {
            x: {
                title: {
                    text: "number",
                    display: true,
                }
            },
            y: {
                title: {
                    text: "iterations",
                    display: true,
                }
            },
        }
    }
};


window . addEventListener ("load", function () {
    const Plot1 = new Chart (
        document . getElementById ('iterations'),
        config
    );
});
                
