import axios from 'axios';

function getUserInfo(userId) {
    return axios.get(`/api/users/profile/${userId}`)
}

export default getUserInfo;