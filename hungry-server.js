var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var reservations = [{
        name: "John Doe",
        phoneNumber: "512-123-3556",
        email: "johndoe@thedoefamily.com",
    },
    {
        name: "1",
        phoneNumber: "33",
        email: "4",
    },
    {
        name: "Yeezy",
        phoneNumber: "000",
        email: "shemademecrazy@help.com",
    }];
var waitlist = [];

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res){
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reservations", function(req, res){
    res.sendFile(path.join(__dirname, "reservations.html"));
});
// app.get("/api/characters/:character")
app.get("/api/reservations", function(req, res) {
    return res.json(reservations);
  });


app.post("/api/reservations", function(req, res){
    var newReservation = req.body;
    console.log(newReservation);

    reservations.push(newReservation);
    res.json(newReservation);
});





app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
  