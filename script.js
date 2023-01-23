const ctx = document.getElementById('myChart1');
      
      new Chart(ctx, {
        type: 'doughnut',
        data: {
        datasets: [{
          data: [42, 58],
          backgroundColor: [
          'rgb(145, 46, 46)',
          'rgb(220,220,220)',
          'rgb(255, 205, 86)'
          ],
        
      }],
      options : {
        tooltips: false,
      }
  }
  });

  const cty = document.getElementById('myChart2');
      
  new Chart(cty, {
    type: 'doughnut',
    data: {
    datasets: [{
      data: [19, 71],
      backgroundColor: [
        'rgb(145, 46, 46)',
        'rgb(220,220,220)',
      'rgb(255, 205, 86)'
      ],
    
  }],
  options : {
    tooltips: false,
  }
}
});

const ctz = document.getElementById('myChart3');
      
  new Chart(ctz, {
    type: 'doughnut',
    data: {
    datasets: [{
      data: [16, 84],
      backgroundColor: [
        'rgb(145, 46, 46)',
        'rgb(220,220,220)',
      'rgb(255, 205, 86)'
      ],
    
  }],
  options : {
    tooltips: false,
  }
}
});

