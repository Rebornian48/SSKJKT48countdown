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
            title: "Jumlah Suara (Vote) - Peringkat 1-12 (Senbatsu)"
        },
        data: [{
            type: "bar",
            name: "members",
            color: "#014D65",
            axisYType: "secondary",
            dataPoints: [
                { y: 8270, label: "Cornelia Vanisa (Oniel)" },
                { y: 8586, label: "Indah Cahya (Indah)" },
                { y: 9564, label: "Grace Octaviani (Gracie)" },
                { y: 10362 , label: "Fiony Alveria (Fiony)" },
                { y: 12910, label: "Shania Gracia (Gracia)" },
                { y: 13326, label: "Marsha Lenathea (Marsha)" },
                { y: 13924, label: "Jessica Chandra (Jessi)" },
                { y: 17867 , label: "Freya Jayawardhana (Freya)" },
                { y: 18307, label: "Gita Sekar (Gita)" },
                { y: 23696 , label: "Mutiara Azzahra (Muthe)" },
                { y: 24020 , label: "Angelina Christy (Christy) " },
                { y: 31520, label: "Feni Fitriyanti (Feni)" }
            ]
        }]
    });
    chart.render();
    
    }