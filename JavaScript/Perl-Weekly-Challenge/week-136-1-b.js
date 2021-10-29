const point_colour    = 'red';
const no_point_colour = 'rgba(255,0,0,.5)';

const twofriendly_config = {
    type: 'scatter',
    data: {
        datasets: [
            {
                backgroundColor: point_colour,
                borderColor:     point_colour,
                data: window . valid
                             . map (p => {return {"x": p [0], "y": p [1]}}),
            },
            {
                backgroundColor: no_point_colour,
                data: window . invalid
                             . map (p => {return {"x": p [0], "y": p [1]}}),
                pointRadius: 1,
            },
        ],
    },
    options: {
        plugins: {
            title: {
                text: 'Two-friendly numbers',
                display: true,
                font: {
                    size: 16,
                }
            },
            legend: {
                display: false,
            }
        },
        scales: {
            x: {
                title: {
                    text: "n",
                    display: true,
                }
            },
            y: {
                title: {
                    text: "m",
                    display: true,
                }
            },
        }
    }
};


window . addEventListener ("load", function () {
    const TwoFriendly = new Chart (
        document.getElementById ('twofriendly_scatter'),
        twofriendly_config
    );
})
