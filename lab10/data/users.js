const mongoCollections = require("../config/mongoCollections");
const userData = mongoCollections.users;

const { ObjectId } = require("mongodb");
const bcrypt = require('bcrypt')

const saltRounds = 10

function userNameCheck(name) {
    let nameRegex = /^[a-zA-Z0-9]{4,30}$/;
    return !nameRegex.test(name)
}

async function checkUserName(name) {
    const usersCollection = await userData();
    const userList = await usersCollection
        .findOne({username:name}, {_id:0,username:1} )
        //.toArray();
        //{projection: {_id:0, username:1} }
    return userList;
}

// PHILL is not being checked against phill 
module.exports = {
    async createUser(username, password) {
        if(!username) throw `username was not provided`
        if(!password) throw `password was not provided`
        if(userNameCheck(username)) throw `username must be 4 characters or greater and alphanumeric or not contain spaces`

        const usersCollection = await userData();
        const hashedPassword = await bcrypt.hash(password, saltRounds)

        // console.log(username.toLowerCase())
        checkName = await checkUserName(username.toLowerCase())
        console.log(checkName)
        // if(checkName !== null)
        //     throw `the username ${username} already exists`

        let newUser = {
            username: username,
            password: hashedPassword,
        };

        const insertInfo = await usersCollection.insertOne(newUser);
        return {userInserted: true}
    },

    async checkUser(username, password) {
        if(!username) throw `username was not provided`
        if(!password) throw `password was not provided`
        if(userNameCheck(username)) throw `username must be 4 characters or greater and alphanumeric or not contain spaces`



    }


}