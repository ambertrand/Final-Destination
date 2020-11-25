import axios from 'axios';

function userInfo(event, userInfo) {
    event.preventDefault();
    // console.log(userInfo);
    axios.put("/updateUser", userInfo)
    .then((response) => {
        console.log(response);
    }).catch(err => console.log(err));
}

export default userInfo;