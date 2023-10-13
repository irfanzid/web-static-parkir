let chart = new ej.charts.Chart({
  title: "Data Jumlah Pemarkir Seminggu Terakhir",
  tooltip: { enable: true },
  //Initializing Primary X Axis
  primaryXAxis: {
    valueType: "Category",
    title: "Hari",
  },
  //Initializing Primary Y Axis
  primaryYAxis: {
    title: "Jumlah Pemarkir",
  },

  //Initializing Chart Series
  series: [
    {
      type: "Column",
      dataSource: [
        { hari: "Senin", pemarkir: 50 },
        { hari: "Selasa", pemarkir: 40 },
        { hari: "Rabu", pemarkir: 70 },
        { hari: "Kamis", pemarkir: 60 },
        { hari: "Jumat", pemarkir: 30 },
        { hari: "Sabtu", pemarkir: 50 },
        { hari: "Minggu", pemarkir: 30 },
      ],
      xName: "hari",
      yName: "pemarkir",
      marker: {
        visible: true,
        dataLabel: { visible: true },
      },
    },
  ],
});
chart.appendTo("#container");
