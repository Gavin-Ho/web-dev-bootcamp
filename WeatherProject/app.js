const express = require('express');
const app = express();
const https = require('https');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");


});

app.post("/", function(req,res){
    const query = req.body.cityName;
    const apiKey = "31253368b0b20ad71d9eefb03b022f0d"
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query + ",ca&appid="+ apiKey + "&units=" + unit;

    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const iconID = weatherData.weather[0].icon;
            const imageURL = "http://openweathermap.org/img/wn/"+ iconID + "@2x.png";

            res.write("<p><img src=" + imageURL + ">");

            res.write("<p>The weather is currently " + weatherDescription + "<p>");
            res.write("<h1>The temperature in " + query + " is " + temp  + " degrees Celsius</h1>");
            
            res.send();
        });
    });
});


app.listen(3000, function(){
    console.log("Server is running on port 3000.")
});
