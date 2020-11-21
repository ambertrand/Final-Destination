const express = require("express");
const router = express.Router();
const db = require("../models");

router.get('/user', function(req, res, next){
    const { _raw, _json, ...userProfile } = req.userProfile;

    //get current user
    db.userProfile.findOne({
        where: {
            auth0_id: userProfile.id
        }
    }).then((userProfile) => {
        const hbsObject = {

            user: {
                id: userProfile.id,
                email: userProfile.email,
                picture: userProfile.picture,
                firstName: userProfile.firstName,
                lastName: userProfile.lastName,
                groupName: userProfile.groupName,
                shopper: userProfile.shopper
            }
        }

        res.render('user', hbsObject);

    }).catch(err => console.log(err));
});


module.exports = router;