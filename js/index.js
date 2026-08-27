
document.addEventListener("DOMContentLoaded", () => {


    const ctx = document.getElementById('bar');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [
                'Dune: Part Two',
                'Avengers: Endgame',
                'Interstellar',
                'Avatar 2',
                'Inception'
            ],
            datasets: [{
                label: 'Tickets Booked',
                data: [420, 365, 310, 275, 230],
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            // responsive: true,
            scales: {
                x: {
                    // beginAtZero: true
                }
            }
        }
    });



    const lineGraph = document.getElementById('lineGraph');

    new Chart(lineGraph, {
        type: 'line',
        data: {
            labels: ['Aug 22', 'Aug 23', 'Aug 24', 'Aug 25', 'Aug 26', 'Aug 27', 'Aug 28'],
            datasets: [{
                label: 'Tickets Booked',
                data: [165, 192, 178, 214, 186, 245, 221],
                fill: true,
                tension: 0.2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    // display: true
                }
            },

        }
    });

    const lineGraph2 = document.getElementById('lineGraph2');

    new Chart(lineGraph2, {
        type: 'line',
        data: {
            labels: ['Aug 22', 'Aug 23', 'Aug 24', 'Aug 25', 'Aug 26', 'Aug 27', 'Aug 28'],
            datasets: [{
                label: 'Revenue',
                data: [41200, 48600, 45200, 57800, 52300, 68400, 61200],
                fill: true,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    // beginAtZero: true,
                    ticks: {
                        callback: function (value) {
                            return '₹' + value;
                        }
                    }
                }
            }
        }
    });



    const doughnut = document.getElementById('doughnut');

    new Chart(doughnut, {
        type: 'doughnut',
        data: {
            labels: [
                'Confirmed',
                'Cancelled',
                'Pending',
                'Refunded'
            ],
            datasets: [{
                label: 'Bookings',
                data: [72, 12, 10, 6],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true
        }
    });

})