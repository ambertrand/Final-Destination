const express = require("express");
require ("dotenv").config();

const session = require("express-session");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");
const userInViews = require("./lib/middleware/userInViews");


const indexRouter = require("./routes/index");

// const usersRouter = require("./routes/users");
// const authRouter = require("./routes/Auth");
// const apiUser = require("./routes/api-user");


const path = require("path");
const PORT = process.env.PORT || 3001;
const db = require("./models");
const app = express();
const http = require('http').createServer(app);
const userRouter = require('./routes/userRoutes')

const initializeSocketio = require("./socket");

//move this line and lines 35-37 inside of promise when connecting to db
initializeSocketio(http);

//console.log(process.env);

const strategy = new Auth0Strategy(
  {
    domain: process.env.REACT_APP_AUTH0_DOMAIN,
    clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
    clientSecret: process.env.REACT_APP_AUTH0_CLIENT_SECRET,
    callbackURL: process.env.REACT_APP_AUTH0_CALLBACK_URL || "http://localhost:3000/callback"
  },
  function(accessToken, refreshToken, extraParams, profile, done){
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
    return done(null, profile);
  }
);

// Define middleware here
passport.use(strategy);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

const sess = {
  secret: "pop pop",
  cookie: {},
  resave: false,
  saveUninitialized: true
};

if (app.get("env") === "production") {
  sess.cookie.secure = true;
  
}

app.use(session(sess));

app.use(userRouter);
app.use("/api", indexRouter);

// app.use("/", authRouter);

// app.use("/", usersRouter);

// app.use("/", apiUser);

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
