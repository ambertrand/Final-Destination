const express = require("express");

const path = require("path");
const PORT = process.env.PORT || 3001;
const db = require("./models");
const app = express();
const http = require('http').createServer(app);

const initializeSocketio = require("./socket");

//move this line and lines 35-37 inside of promise when connecting to db
initializeSocketio(http);

require('dotenv').config()

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
// });
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// Connect to the MySQL


db.sequelize.sync().then(() => {
  http.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });

})
