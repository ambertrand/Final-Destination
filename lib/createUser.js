const db = require("../models");

// This function checks to see if a user logging in with Auth0 has a
// profile in the  table
// If not, the profile is created and populated with whatever
// user information is in their Auth0 login

module.exports = function (userProfile) {
  return new Promise((resolve, reject) => {
    db.UserProfile.findOne({
      where: {
        auth0_id: userProfile.id
      }
    }).then((dbUserProfile) => {
      // if user is not in UserProfiles, add them
      if (!dbUserProfile) {
        db.UserProfile.create({
          auth0_id: userProfile.id,
          email: userProfile.emails[0].value,
          first_name: userProfile.name.givenName ? userProfile.name.givenName : "First Name",
          last_name: userProfile.name.familyName ? userProfile.name.familyName : "Last Name",
          picture: userProfile.picture
        }).then((result) => {
          // after adding user, return result
          resolve(result);
        }).catch((err) => {
          reject(err);
        });
      } else {
        resolve();
      }
    });
  });
};