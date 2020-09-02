//Import
const express = require("express");
const path = require("path");

//setting up Express and the PORT
const app = express();
const PORT = process.env.PORT || 3000;

//MiddleWare for POSTing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Table Array and Wait List Array
var tables = [];

var waitList = [];

var masterArray = [tables, waitList];

// Routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Display tables link
app.get("/api/waitlist", function(req, res) {
    res.json(waitList);
});

// Display wait list link
app.get("/api/tables", function(req, res) {
    res.json(tables);
});

app.get("/api/clear", function(req, res) {
    res.send("No table for you");
});
//Nolan - tell buttons to stop looking for reserve.html and tables.html
//View Tables 
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
    // send ==> res.json(masterArray);
});

//make a res
app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
    // send ==> res.json(masterArray);
});

// Create New Characters - takes in JSON input
app.post("/reserve", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReservation = req.body;
  
    // We then add the json the user sent to the character array
    (tables.length < 5) ? tables.push(newReservation) : waitList.push(newReservation);
   
    // We then display the JSON to the users
    // res.json(newReservation);
});

// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
