const title_font_size = 16;

const dataset_fuel_cost1 = {  
    label: 'Part One',
    yAxisID: 'A',
    backgroundColor: 'red', 
    borderColor:     'red', 
    data: window . fuel,
    parsing: {
        xAxisKey: 'x',
        yAxisKey: 'y'
    }
};

const dataset_fuel_cost2 = {  
    label: 'Part Two',   
    yAxisID: 'B',
    backgroundColor: 'green', 
    borderColor:     'green', 
    data: window . fuel,
    parsing: {
        xAxisKey: 'x',
        yAxisKey: 'z'
    }
};



const config_fuel_cost = {  
    type: 'line',
    data: {
        datasets: [dataset_fuel_cost1, dataset_fuel_cost2]
    },
    options: {
        scales: {
            x: {
                type: 'linear',
                title: {
                    text: "position to converge",
                    display: true,
                    font: {
                        size: title_font_size
                    },      
                },
            },
            A: {
                type: 'linear',
                position: 'left',
                suggestedMin: 0,
                suggestedMax: 1600000,
                title: {
                    text: "fuel cost part one",
                    display: true,
                    font: {
                        size: title_font_size
                    },
                },
            },
            B: {
                type: 'linear',
                position: 'right',
                suggestedMin: 0,
                suggestedMax: 1600000000,
                title: {
                    text: "fuel cost part two",
                    display: true,
                    font: {
                        size: title_font_size
                    },
                },
            },
        },
        plugins: {
            legend: {
                display: true,
            },  
            title: {
                text: 'Fuel Cost',
                display: true, 
                font: {
                    size: title_font_size
                }
            }
        }
    }
};



window . addEventListener ("load", function () {
    const FuelCost = new Chart (
        document.getElementById('fuel'),
        config_fuel_cost
    );
})
