import axios from 'axios';

function userInfo(event, userId, userInfo) {
    event.preventDefault();
    console.log(userInfo);
    axios.put(`/api/users/profile/${userId}`, userInfo)
        .then((response) => {
            console.log(response);
        }).catch(err => console.log(err));
}


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