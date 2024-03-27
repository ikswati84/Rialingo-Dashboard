var options = {
  chart: {
    height: 280,
    type: "radialBar",
  },

  series: [100],

  plotOptions: {
    radialBar: {
      hollow: {
        margin: 15,
        size: "70%",
      },

      dataLabels: {
        showOn: "always",
        name: {
          offsetY: -10,
          show: true,
          color: "#888",
          fontSize: "13px",
        },
        value: {
          color: "#111",
          fontSize: "30px",
          show: true,
        },
      },
    },
  },

  stroke: {
    lineCap: "round",
  },
  labels: ["Completed Job"],
};

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();
