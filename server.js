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

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    // res.send("Welcome to the Home Page!")
    res.sendFile(path.join(__dirname, "index.html"));
});


// Display tables link or waitList
app.get("/api/waitlist", function (req, res) {
    if (waitList.length === 0) {
        //if no reservations
        return res.json(false);
    }
    return res.json(waitList);
});

app.get("/api/tables", function (req, res) {
    if (tables.length === 0) {
        //if no reservations
        return res.json(false);
    }
    return res.json(tables);
});

//View Tables 
// Displays all characters
app.get("/tables", function (req, res) {
    return res.json(tablse, waitList);
});

// Reserve - takes in JSON input
app.post("/reserve", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReservation = req.body;
    console.log(newReservation);

    // We then add the json the user sent to the character array
    if (tables.length < 5) {
        tables.push(newReservation);
    }
    else {
        waitList.push(newReservation);
    }

    // We then display the JSON to the users
    res.json(newReservation);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});