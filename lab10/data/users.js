const mongoCollections = require("../config/mongoCollections");
const userData = mongoCollections.users;

const { ObjectId } = require("mongodb");
const bcrypt = require('bcrypt')

const saltRounds = 10

function formatData(collection, bandIndex) {
    return collection[bandIndex]["username"].toLowerCase()
}

function userNameCheck(name) {
    let nameRegex = /^[a-zA-Z0-9]{4,}$/;
    return !nameRegex.test(name)
}

function passWordCheck(password) {
    let nameRegex = /^[\S]{6,}$/;
    return !nameRegex.test(password)
}

async function getAll() {
    const usersCollection = await userData();
    const userList = await usersCollection
        .find({}).toArray();
    
    let userArray = []
    for(let i = 0; i<userList.length; ++i) {
        userArray.push(formatData(userList,i))
    }

    return userArray;
}

async function getUser(username) {
    const usersCollection = await userData();
    const userList = await usersCollection.findOne({ username: username });
    
    if(userList === null){
        throw `no user with that name`
    } else {
        return userList.password
    }
}

module.exports = {
    async createUser(username, password) {
        if(!username) throw `username was not provided`
        if(!password) throw `password was not provided`
        if(userNameCheck(username)) throw `username must be 4 characters or greater and alphanumeric or not contain spaces`
        if(passWordCheck(password)) throw `password must be 6 characters or greater or not contain spaces`
        
        const usersCollection = await userData();
        const hashedPassword = await bcrypt.hash(password, saltRounds)

        checkName = await getAll()
        if(checkName.includes(username.toLowerCase()))
            throw `username taken`
      
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
        if(passWordCheck(password)) throw `password must be 6 characters or greater or not contain spaces`

        getPasswordHash = await getUser(username)

    
        let compareToMatch = false
        compareToMatch = await bcrypt.compare(password, getPasswordHash);

        if(compareToMatch) {
            return {authenticated: true}
        } else {
            throw `Either the username or password is invalid`
        }

    }
}