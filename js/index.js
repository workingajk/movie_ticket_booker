
document.addEventListener("DOMContentLoaded", () => {


    const ctx = document.getElementById('bar');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'grey'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3, 6].sort((a,b)=>b-a),
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            // scales: {
            //     y: {
            //         beginAtZero: true
            //     }
            // }
        }
    });



    const lineGraph = document.getElementById('lineGraph');
    new Chart(lineGraph, {
        type: 'line',
        data: {
            labels: [22, 23, 24, 25, 26, 27, 28],
            datasets: [{
                label: 'Tickets Booked in Last 7 Days',
                data: [16500, 15900, 18000, 18100, 15600, 15500, 14000],
                fill: true,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        },
    });


    const lineGraph2 = document.getElementById('lineGraph2');
    new Chart(lineGraph2, {
        type: 'line',
        data: {
            labels: [22, 23, 24, 25, 26, 27, 28],
            datasets: [{
                label: 'Revenue from Last 7 Days',
                data: [16500, 15900, 18000, 18100, 15600, 15500, 14000,],
                fill: true,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        },
    });



    const doughnut = document.getElementById('doughnut');

    new Chart(doughnut, {
        type: 'doughnut',
        data: {
            labels: [
                'Red',
                'Blue',
                'Yellow'
            ],
            datasets: [{
                label: 'My First Dataset',
                data: [300, 50, 100],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                ],
                hoverOffset: 4
            }]
        },
    });


})