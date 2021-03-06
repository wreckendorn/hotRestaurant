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
        uniqueID: "johnny boi"
    },
    {
        name: "1",
        phoneNumber: "33",
        email: "4",
        uniqueID: "numnum"
    },
    {
        name: "2",
        phoneNumber: "33333",
        email: "44444",
        uniqueID: "eeenumnum"
    },
    {
        name: "Yeezy",
        phoneNumber: "000",
        email: "shemademecrazy@help.com",
        uniqueID: "lol"
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
app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist);
  });

app.post("/api/tables", function(req, res){
    var newReservation = req.body;
    console.log(newReservation);

    if(reservations.length < 5){
    reservations.push(newReservation);
    res.json(true);
    }else{
        waitlist.push(newReservation);
        res.json(false);
    }
});





app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
  