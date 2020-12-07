import axios from 'axios';

function getGroupName(groupId) {
    return axios.get(`/api/groups/${groupId}`)
}

export default getGroupName;