const express = require('express');
const bodyParser = require("body-parser");
const request = require('request');

const app = express();

app.listen(3000, function(){
    console.log("The server is booted up on port 3000");
});

app.get('/', function(request, response){
    response.sendFile(__dirname + "/signup.html");
});

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

app.post('/', function(request, response){
    var firstName = request.body.firstName;
    var lastName = request.body.lastName;
    var email = request.body.email;
    console.log(firstName, lastName, email);
});