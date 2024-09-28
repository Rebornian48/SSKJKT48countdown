new Chart(document.getElementById("senbatsu"), {
  type: "bar",
  data: {
    labels: [
      "Feni Fitriyanti (Feni)",
      "Angelina Christy (Christy) ",
      "Mutiara Azzahra (Muthe)",
      "Gita Sekar (Gita)",
      "Freya Jayawardhana (Freya)",
      "Jessica Chandra (Jessi)",
      "Marsha Lenathea (Marsha)",
      "Shania Gracia (Gracia)",
      "Fiony Alveria (Fiony)",
      "Grace Octaviani (Gracie)",
      "Indah Cahya (Indah)",
      "Cornelia Vanisa (Oniel)",
    ],
    datasets: [
      {
        label: "Jumlah Suara",
        data: [
          31520, 24020, 23696, 18307, 17867, 13924, 13326, 12910, 10362, 9564,
          8586, 8270,
        ],
      },
    ],
  },
  options: {
    plugins: {
      // 'legend' now within object 'plugins {}'
      legend: {
        labels: {
          color: "white",
        },
      },
    },
    indexAxis: "y",
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "white",
        },
      },
      x: {
        ticks: {
          color: "white",
        },
      },
    },
    bar: {
      borderWidth: 4,
    },
    responsive: true,
  },
});

new Chart(document.getElementById("undergirls"), {
  type: "bar",
  data: {
    labels: [
      "Aurellia (Lia)",
      "Flora Shafiq (Flora",
      "Greesella Adhalia (Greesel)",
      "Helisma Putri (Eli)",
      "Kathrina Irene (Kathrin)",
      "Gabriela Abigail (Ella)",
      "Febriola Sinambela (Olla)",
      "Catherina Vallencia (Erine)",
      "Aurhel Alana (Lana)",
      "Indira Seruni (Indira)",
      "Celline Thefannie (Elin)",
      "Cathleen Nixie (Cathy)",
    ],
    datasets: [
      {
        label: "Jumlah Suara",
        data: [
          7151, 7144, 6984, 6790, 6551, 6490, 6282, 5592, 5549, 5373, 5195,
          4969,
        ],
      },
    ],
  },
  options: {
    plugins: {
      // 'legend' now within object 'plugins {}'
      legend: {
        labels: {
          color: "white",
        },
      },
    },
    indexAxis: "y",
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "white",
        },
      },
      x: {
        ticks: {
          color: "white",
        },
      },
    },
    bar: {
      borderWidth: 4,
    },
    responsive: true,
  },
});
