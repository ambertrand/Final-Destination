import axios from 'axios';

function newGroupButton(event, groupId) {
    event.preventDefault();
    // console.log("button clicked");
    axios.post(`/api/groups/${groupId}`)
    .then((res) => {
        console.log(res);
    }).catch(err => console.log(err));
}

export default newGroupButton