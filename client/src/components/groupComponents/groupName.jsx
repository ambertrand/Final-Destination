import axios from 'axios';

function groupName(event, groupId, groupName) {
    event.preventDefault();
    console.log(groupName);
    axios.put(`/api/users/profile/${groupId}`, groupName)
        .then((response) => {
            console.log(response);
        }).catch(err => console.log(err));
}


export default groupName;