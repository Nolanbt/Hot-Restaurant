//Import
var express = require("express");
var path = require("path");

//setting up Express and the PORT
var app = express();
const PORT = process.env.PORT || 3000;

//MiddleWare for POSTing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Table Array and Wait List Array
var tables = [
    {
        routeName: "yoda",
        name: "Yoda",
        phoneNumber: "Jedi Master",
        id: 900,
        email: 2000
    }
];

var waitList = [
    {
        routeName: "babyyoda",
        name: "Baby Yoda",
        phoneNumber: "Jedi Master",
        id: 900,
        email: 2000
    }
];

var masterArray = [tables, waitList];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    // res.send("Welcome to the Home Page!")
    res.sendFile(path.join(__dirname, "index.html"));
});

// Display tables link or waitList
app.get("/api/waitlist", function(req, res) {
    // if (waitList.length === 0) {
    //     //if no reservations
    //     return res.json(false);
    // }
    return res.json(waitList);
});

app.get("/api/tables", function(req, res) {
    // if (tables.length === 0) {
    //     //if no reservations
    //     return res.json(false);
    // }
    return res.json(tables);
});

//View Tables 
// Displays all characters
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
    return res.json(masterArray);
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
    return res.json(masterArray);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
