const ctx = document.getElementById('myChart');

const data = {
    labels: [
        'i14',
        'i14 Plus',
        'i14 Pro',
        'i14 Pro Max',
        'iSE (2022)',
        'P6a',
        'P7',
        'P7 Pro',
        'P7a',
        'Galaxy A34 5G',
        'Galaxy A54 5G',
        'S23',
        'S23 Ultra',
        'S23+',
        'Z Flip4',
        'Z Fold4',
    ],
    datasets: [
        {
            label: 'DCD',
            data: [49, 47, 45, 48, 66, 91, 85, 71, 48, 55, 42, 27, 19, 22, 29, 23],
            // fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            // pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            // pointHoverBackgroundColor: '#fff',
            // pointHoverBorderColor: 'rgb(255, 99, 132)'
        },
        {
            label: 'CB',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 39, 9, 16, 14, 10, 17],
            // fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            // pointBackgroundColor: 'rgb(54, 162, 235)',
            // pointBorderColor: '#fff',
            // pointHoverBackgroundColor: '#fff',
            // pointHoverBorderColor: 'rgb(54, 162, 235)',
        },
        {
            label: 'TIB',
            data: [39, 41, 44, 39, 19, 0, 3, 19, 45, 7, 4, 30, 33, 29, 55, 55],
            // fill: true,
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderColor: 'rgb(255, 206, 86)',
            // pointBackgroundColor: 'rgb(255, 206, 86)',
            // pointBorderColor: '#fff',
            // pointHoverBackgroundColor: '#fff',
            // pointHoverBorderColor: 'rgb(255, 206, 86)',
        },
        {
            label: 'GC',
            data: [13, 12, 11, 13, 16, 9, 12, 9, 7, 13, 15, 34, 32, 35, 6, 5],
            // fill: true,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgb(75, 192, 192)',
            // pointBackgroundColor: 'rgb(75, 192, 192)',
            // pointBorderColor: '#fff',
            // pointHoverBackgroundColor: '#fff',
            // pointHoverBorderColor: 'rgb(75, 192, 192)'
        }
    ]
};


new Chart(ctx, {
    type: 'radar',
    data: data,
    options: {
        elements: {
            line: {
                borderWidth: 1,
            }
        },
        scales: {
            r: {
                pointLabels: {
                    font: {
                        weight: 'bold',
                    }
                },
                ticks: {
                    callback: function (value, index, values) {
                        return value + '%';
                    },
                    max: 100,
                    beginAtZero: true,
                }
            }
        }
    }
});

