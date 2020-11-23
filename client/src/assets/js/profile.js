$(function () {

    //JQUERY Selectors
    const $firstName = $("#firstName");
    const $lastName = $("#lastName");
    const $username = $("#username");
    const $email = $("#email");
    const $groupName = $("#groupName");
    const $shopper = $("#shopper");
    const $updateProfile = $("#updateProfile");
    const $submitForm = $(".submitForm");
  
    // get the user id and group id 
    let userID = $updateProfile.data("id");
    let groupID = $groupName.data("groupid");
  
    // Get group Names for the drop-down and select the current group
    const getGroups = () => {
      axios.get("/api/groups")
        .then((response) => {
          let s = "<option value=\"-1\">group Selections</option>";
          for (let i = 0; i < response.data.length; i++) {
            if (groupID === response.data[i].id) {
              s += `<option selected value=${response.data[i].id}>${response.data[i].name} </option>`;
            } else {
              s += `<option value=${response.data[i].id}>${response.data[i].name}</option>`;
            }
          }
          $groupName.html(s);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
  
    // Update user info in database
    const addUserInfo = (userID) => {
      let firstName = $firstName.val().trim();
      let currentgroupId = parseInt($groupName.val());
  
      // check to see if a group is chosen before updating
      if (currentgroupId === -1) {
  
        axios.put("/api/profile", {
          id: userID,
          first_name: firstName,
          last_name: $lastName.val().trim(),
          nick_name: $nickName.val().trim() || firstName,
        })
          .then((response) => {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
  
        axios.put("/api/profile", {
          id: userID,
          first_name: firstName,
          last_name: $lastName.val().trim(),
          nick_name: $nickName.val().trim() || firstName,
          groupId: $groupName.val()
        })
          .then((response) => {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
  
    };
  
    // event listener on submit button
    $submitForm.on("submit", function (event) {
      event.preventDefault();
  
      const formData = new FormData($submitForm.get(0));
      const data = [];
      for (const [key, value] of formData.entries()) {
        data.push({ questionId: key, value: value });
      }
      axios.post(`/api/answer/all/${userID}`, data).then(function () {
        window.location.reload();
      });
  
      addUserInfo(userID);
    });
  });
  