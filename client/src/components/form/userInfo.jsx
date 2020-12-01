import axios from 'axios';

function userInfo(event, userInfo) {
    event.preventDefault();
    console.log(userInfo);
    axios.put("/api/users/profile/:id", userInfo)
    .then((response) => {
        console.log(response);
    }).catch(err => console.log(err));
}

// /profile/:id

// {
//   email: req.body.email,
//   // auth0_id: req.body.auth0_id,
//   last_name: req.body.last_name,
//   first_name: req.body.first_name,
//   shopper: req.body.shopper,
//   group_name: req.body.group_name
// } _______


export default userInfo;

// // Get Team Names for the drop-down and select the current team
// const getTeams = () => {
//     axios.get("/api/team")
//       .then((response) => {
//         let s = "<option value=\"-1\">Team Selections</option>";
//         for (let i = 0; i < response.data.length; i++) {
//           if (teamID === response.data[i].id) {
//             s += `<option selected value=${response.data[i].id}>${response.data[i].name} </option>`;
//           } else {
//             s += `<option value=${response.data[i].id}>${response.data[i].name}</option>`;
//           }
//         }
//         $teamDD.html(s);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   };

//   // Update user info in database
//   const addUserInfo = (userID) => {
//     let firstName = $firstName.val().trim();
//     let currentTeamId = parseInt($teamDD.val());

//     // check to see if a team is chosen before updating
//     if (currentTeamId === -1) {

//       axios.put("/api/profile", {
//         id: userID,
//         first_name: firstName,
//         last_name: $lastName.val().trim(),
//         nick_name: $nickName.val().trim() || firstName,
//       })
//         .then((response) => {
//           console.log(response);
//         })
//         .catch(function (error) {
//           console.log(error);
//         });
//     } else {

//       axios.put("/api/profile", {
//         id: userID,
//         first_name: firstName,
//         last_name: $lastName.val().trim(),
//         nick_name: $nickName.val().trim() || firstName,
//         TeamId: $teamDD.val()
//       })
//         .then((response) => {
//           console.log(response);
//         })
//         .catch(function (error) {
//           console.log(error);
//         });
//     }

//   };