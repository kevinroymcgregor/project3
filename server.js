// DEPENDENCIES =============================================================
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const app = express();
const path = require("path");

// BODY-PARSER (MIDDLEWARE) =============================================================

app
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended:false }))
    .use(bodyParser.text())
    .use(bodyParser.json({ type: 'application/vnd.api+json' }))

// PASSPORT CONFIG =============================================================

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);

// DATABASE CONFIG =============================================================

const PORT = process.env.PORT || 8080; // process.env.port is Heroku's port if you choose to deploy the app there

mongoose.Promise = Promise;

const dbURI = process.env.MONGODB_URI || "mongodb://localhost:27017/retrogamer";

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Database configuration with mongoose
mongoose.connect(dbURI, { useNewUrlParser: true });

const DB = mongoose.connection;
const db = require("./config/keys").dbURI;

// Show any mongoose errors
DB.on("error", function(error) {
    console.log("Mongoose Error: ", error);
});

// Added for heroku deploy to work
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

// Once logged in to the db through mongoose, log a success message
DB.once("open", function() {
    console.log("Mongoose connected SUCCESSFULLY");
    // start the server, listen on port
    app.listen(PORT, function() {
        console.log("App running on port " + PORT);
    });
});
