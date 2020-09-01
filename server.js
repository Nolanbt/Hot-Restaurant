//Import
var express = require("express");
var path = require("path");

//setting up Express and the PORT
var app = express();
var PORT = 3000;

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

// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
