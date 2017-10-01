$(function () {

    $("#loadwebapi").click(function () {
        //cleardata
        $("#wpanel").empty();
        var city = $("#city").val();
        var d = new Date();
        var date = d.toDateString();
        console.log(date);
        var location = "<table><tr><td><h2 class = 'fontL'><img id = 'pixLo' src='location.png'>" + city + "</h2><td> │ </td><td><h2>" + date + "</h2></td></tr></table>";
        $("#wpanel").append(location);
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city;
        url += "&APPID=4576ca3716839506a449318ff6e31c7d";
        $.get(url, function (data) {
            console.log(data);
            var row = "<h4>" + "Longitude : " + " " + data.coord.lon + "</h4>";
            row += "<h4>" + "Latitude : " + " " + data.coord.lat + "</h4>";
            row += "<h4>" + "Cloud : " + " " + data.clouds.all + "</h4>";
            row += "<h4>" + "Wind : " + " " + data.wind.speed + "</h4>";
            row += "<h4>"+ "Temperature :" + " " + (data.main.temp / 10).toFixed(2) + "°C"+"</h4>";
            var pixWeMa = data.weather[0].main;
            if (pixWeMa == "Clouds") {
                var pixShow = "Clouds.png";
            }
            if (pixWeMa == "Rain") {
                var pixShow = "Rain.png";
            }
            if (pixWeMa == "Clear") {
                var pixShow = "Clear.png";
            }
            if (pixWeMa == "Thunderstorm") {
                var pixShow = "Thunder.png";
            }
            if (pixWeMa == "Mist") {
                var pixShow = "Mist.png";
            }
            console.log(data);
        var detail = "<table align = 'center'><tr><td><h2 class = 'fontM'><img id = 'fontM' src='" + pixShow + "' alt=''><br><td><h2>" + pixWeMa + "</h2></td></br></tr></table>";
            $("#wpanel").append(row,detail);

        });
    });


});