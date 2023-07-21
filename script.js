const ctx = document.getElementById('myChart');

const data = {
    labels: [
        'Apple iPhone 14',
        'Apple iPhone 14 Plus',
        'Apple iPhone 14 Pro',
        'Apple iPhone 14 Pro Max',
        'Apple iPhone SE (2022)',
        'Google Pixel 6a',
        'Google Pixel 7',
        'Google Pixel 7 Pro',
        'Google Pixel 7a',
        'Samsung Galaxy A34 5G',
        'Samsung Galaxy A54 5G',
        'Samsung Galaxy S23',
        'Samsung Galaxy S23 Ultra',
        'Samsung Galaxy S23+',
        'Samsung Galaxy Z Flip4',
        'Samsung Galaxy Z Fold4',
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
        responsive: false,
        maintainAspectRatio: false,
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
                    max: 200,
                    beginAtZero: true,
                }
            }
        }
    }
});

