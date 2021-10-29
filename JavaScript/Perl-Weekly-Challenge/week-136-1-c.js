const labels = ['GNU AWK', 'bc', 'C*', 'Go*', 'Java*', 'Lua', 'Node.js', 'Pascal*', 'Perl', 'Python', 'R', 'Ruby', 'Scheme', 'Tcl'];
const times  = ['16.04830002784729', '11.7886868476867676', '0.495032787322998047', '16.9304596424102783', '2.93439974784851074', '2.0311457633972168', '3.05634317398071289', '0.449591398239135742', '3.99915118217468262', '1.0733665943145752', '35.9964518547058105', '1.15962471961975098', '8.25080060958862305', '33.5656960010528564'];

const runtime_config = {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [
            {
                backgroundColor: ['rgba(255,0,0,.2)', 'rgba(0,255,0,.2)'],
                data: times,
            },
        ],
    },
    options: {
        plugins: {
            title: {
                text: 'Run time',
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
                    text: "Language",
                    display: true,
                    font: {
                        size: 16,
                    }
                }
            },
            y: {
                title: {
                    text: "Seconds",
                    display: true,
                    font: {
                        size: 16,
                    }
                }
            },
        }
    }
};


window . addEventListener ("load", function () {
    const TwoFriendly = new Chart (
        document.getElementById ('runtimes'),
        runtime_config,
    );
})
