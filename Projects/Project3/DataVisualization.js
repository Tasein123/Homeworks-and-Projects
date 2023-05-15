// stored data 
var labels = data.boroughs.map(function (e) {
    return e.location;
});
var data = data.boroughs.map(function (e) {
    return e.number;
});

// chart1
var ctx = document.getElementById('doughnut').getContext('2d');
var myChart2 = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: labels,
        datasets: [{
            data: data,
            backgroundColor: [
                'rgba(204, 153, 255, 0.2)',
                'rgba(153, 204, 255, 0.2)',
                'rgba(0, 204, 153, 0.2)',
                'rgba(255, 255, 204, 0.2)',
                'rgba(1255, 102, 102, 0.2)',
            ],
        }],
    },

});

// chart 2
var ctx = document.getElementById('Horizontall-bar-chart').getContext('2d');
var myChart1 = new Chart(ctx, {
    type: 'horizontalalBar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Number of Complaints',
            data: data,
            backgroundColor: [
                'rgba(204, 153, 255, 0.2)',
                'rgba(153, 204, 255, 0.2)',
                'rgba(0, 204, 153, 0.2)',
                'rgba(255, 255, 204, 0.2)',
                'rgba(1255, 102, 102, 0.2)',
            ],
        }],
    },

});