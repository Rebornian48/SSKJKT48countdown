window.onload = function () {
	
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,	
        title: {
            text:"Pemilihan Member Single Ke-26 JKT48 (#Sukinanda)",
        },
        axisX: {
            interval: 1
        },
        axisY2: {
            interlacedColor: "rgba(1,77,101,.2)",
            gridColor: "rgba(1,77,101,.1)",
            title: "Jumlah Suara (Vote) - Peringkat 13-24 (Undergirls)"
        },
        data: [{
            type: "bar",
            name: "members",
            color: "#014D65",
            axisYType: "secondary",
            dataPoints: [
                { y: 4969, label: "Cathleen Nixie (Cathy)" },
                { y: 5195, label: "Celline Thefannie (Elin)" },
                { y: 5373, label: "Indira Seruni (Indira)" },
                { y: 5549, label: "Aurhel Alana (Lana)" },
                { y: 5592, label: "Catherina Vallencia (Erine)" },
                { y: 6282, label: "Febriola Sinambela (Olla)" },
                { y: 6490, label: "Gabriela Abigail (Ella)" },
                { y: 6551, label: "Kathrina Irene (Kathrin)" },
                { y: 6790, label: "Helisma Putri (Eli)" },
                { y: 6984, label: "Greesella Adhalia (Greesel)" },
                { y: 7144, label: "Flora Shafiq (Flora" },
                { y: 7151, label: "Aurellia (Lia)" },
            ]
        }]
    });
    chart.render();
    }