/**
 * Aurthor: Ntuthuko Mthiyane
 * Date: 30/01/2018
 * Description: This programs groups users according to their roles, and allows to filter users by role,type etc
 * @param {*} users 
 */

function orchestrateUsers(users) {
    //object that will group users according to their property type
    let groupUsersByproperty = {
        Admin: [],
        Moderator: [],
        User: []
    };

    //add the users into their proper lists based on their property
     for(let i=0; i<users.length; i++){
        if(users[i].type=="Admin"){
            groupUsersByproperty.Admin.push(users[i]);
        }
        else if(users[i].type=="Moderator"){
            groupUsersByproperty.Moderator.push(users[i]);
        }
        else{
            groupUsersByproperty.User.push(users[i]);
        }
    }
    return groupUsersByproperty;
}
 
function searchUsers(orchestratedUsers, userTypes, property, value) {
    //will store all the selected users
    let filteredUers = [];
    //first iterate through list with specified user types
    for(let i=0; i<userTypes.length;i++){
        let users = orchestratedUsers[userTypes[i]];
        //iterating through the users with the selected type
        for(let j=0; j<users.length;j++){
            // add the user if matches the required property
            if((users[j])[property]===value){
                filteredUers.push(users[j]);
            }
        }
    }
    return filteredUers;
}

//test data
var para = [
    {
      "name": "Joe",
      "companyId": "A2100",
      "type": "Admin"
    },
    {
      "name": "Jane",
      "companyId": "A2100",
      "type": "Moderator"
    },
    {
      "name": "Smith",
      "companyId": "A2100",
      "type": "User"
    },
    {
      "name": "Smith",
      "companyId": "A2100",
      "type": "User"
    },
    {
      "name": "Rocket",
      "companyId": "A3100",
      "type": "Admin"
    },
    {
      "name": "Rick",
      "companyId": "A3100",
      "type": "User"
    },
    {
      "name": "Tim",
      "companyId": "A4100",
      "type": "Admin"
    }
  ]

  let orch = orchestrateUsers(para);
//console.log(orchestrateUsers(para));
console.log(searchUsers(orch, ["Admin", "User"], "companyId", "A2100"));

