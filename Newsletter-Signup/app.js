const express = require('express');
const bodyParser = require("body-parser");
const request = require('request');
const https = require('https');


const app = express();

app.listen(3000, function(){
    console.log("The server is booted up on port 3000");
});

app.get('/', function(request, response){
    response.sendFile(__dirname + "/signup.html");
});

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

app.post('/', function(req, res){
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    console.log(firstName, lastName, email);

    const data = {
        members: [{
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME: firstName,
                LNAME: lastName,
            }
        }]
    };
    
    const jsonData = JSON.stringify(data);

    const url = "https://us11.api.mailchimp.com/3.0/lists/e05506c057";

    const options = {
        method: "POST",
        auth: "gavin1:555478db7841bc90a38ba1c2b400b10b-us11xd",
    };

    const dataRequest = https.request(url, options, function(response){
        
        if (response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html");
        } else {
            res.sendFile(__dirname + "/failure.html");
        }

        response.on("data", function(data){
            console.log(JSON.parse(data));
        });
    });

    dataRequest.write(jsonData);

    dataRequest.end();

});

app.post('/failure', function(req, res){
    res.redirect('/');
});


// API Key
// 555478db7841bc90a38ba1c2b400b10b-us11

// Audience ID
// e05506c057
