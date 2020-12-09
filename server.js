// Requiring necessary npm packages
const express = require("express");
const session = require("express-session");
const passport = require("passport");

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 3001;
const db = require("./models");

// Creating express app and configuring middleware needed for authentication
const app = express();
const Auth0Strategy = require("passport-auth0");
// const userInViews = require("./lib/middleware/userInViews");
const strategy = new Auth0Strategy(
  {
    domain: process.env.REACT_APP_AUTH0_DOMAIN,
    clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
    clientSecret: process.env.REACT_APP_AUTH0_CLIENT_SECRET,
    callbackURL: process.env.REACT_APP_AUTH0_CALLBACK_URL || "http://localhost:3000/callback",
    useRefreshTokens: true,
    cacheLocation: "localstorage"
  },
  function (accessToken, refreshToken, extraParams, profile, done) {
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





const indexRouter = require("./routes/index");
const userRouter = require('./routes/userRoutes')
// const usersRouter = require("./routes/users");
// const authRouter = require("./routes/Auth");
// const apiUser = require("./routes/api-user");


const path = require("path");

const http = require('http').createServer(app);

const initializeSocketio = require("./client/src/utils/socket/index");

//move this line and lines 35-37 inside of promise when connecting to db
initializeSocketio(http);




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

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}




db.sequelize.sync().then(() => {
  http.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });

})
