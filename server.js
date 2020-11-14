const express = require("express");
const socket = require('socket.io')


const routes = require("./client/src/routes/apiRoutes");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

require('dotenv').config()

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Connect to the MySQL



app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
