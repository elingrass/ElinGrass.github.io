    google.charts.load("current", {packages:['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ["Party", "%", { role: "style" } ],
        ["SD", 41, "#56B5E4"],
        ["M", 29, "R:0 G:158 B:224"],
        ["S", 16, "#ED1B34"],
        ["FP", 5, "#0094D7"],
        ["KD", 3, "#073192"],
        ["V", 2, "red"],
        ["MP", 2, "#53a045"],
        ["FI", 0, "Pink"]

      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
        fontName : 'Quicksand-Bold',
        width: 500,
        height: 250,
        chartArea: {'width': '500', 'height': '250'},
        bar: {groupWidth: "70%"},
        legend: { position: "none" },

      };
      var chart = new google.visualization.ColumnChart(document.getElementById("chart_div"));
      chart.draw(view, options);
  }
