import axios from 'axios';

function userInfo(event, userId, userInfo) {
    event.preventDefault();
    // console.log(userInfo);
    axios.put(`/api/users/profile/${userId}`, userInfo)
        .then((response) => {
            // console.log(response);
        }).catch(err => console.log(err));
}


export default userInfo;