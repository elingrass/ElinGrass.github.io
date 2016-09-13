
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Amount'],
          ['2006',  37323],
          ['2007',  52261],
          ['2008',  67291],
          ['2009',  77455],
          ['2010',  61986],
          ['2011',  62569],
          ['2012',  53041],
          ['2013',  51554],
          ['2014',  55690],
          ['2015',  96979]
        ]);


        var options = {

          fontName : 'Vera Type',
          title: ' ',
          titleTextStyle: {color: '#AD405D'},
          series: [{
            color: 'black'
          }]

        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);


      }
