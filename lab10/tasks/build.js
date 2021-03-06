const userData = require("../data/users"); // must have two dots for get file
const connection = require("../config/mongoConnections");
const mongoCollections = require("../config/mongoCollections");

const getUserInfo = mongoCollections.userData;

async function main() {
    const db = await connection.connectToDb();
    await db.dropDatabase();
    console.log("creating user") 

    try {
        await userData.createUser(
            'Jose Canseco'
            , 'password'
        )

    } catch(e) {
        console.log(e)
    }

    // username is missing
    try {
        await userData.createUser(
            ''
            , 'password'
        )

    } catch(e) {
        console.log(e)
    }

    // password missing
    try {
        await userData.createUser(
            'username'
            , ''
        )

    } catch(e) {
        console.log(e)
    }

    // user name < 4 chars
    try {
        await userData.createUser(
            'pat'
            , 'password'
        )

    } catch(e) {
        console.log(e)
    }

    //check john and JOHN
    try {
        await userData.createUser(
            'john'
            , 'password'
        )

    } catch(e) {
        console.log(e)
    }

    try {
        await userData.createUser(
            'john'
            , 'password'
        )

    } catch(e) {
        console.log(e)
    }

    try {
        await userData.createUser(
            'JoHn'
            , 'password'
        )

    } catch(e) {
        console.log(e)
    }

    try {
        await userData.createUser(
            'PHILL'
            , 'password'
        )

    } catch(e) {
        console.log(e)
    }

    try {
        await userData.createUser(
            'phill'
            , 'password'
        )

    } catch(e) {
        console.log(e)
    }

    try {
        await userData.createUser(
            'Phill'
            , 'password'
        )

    } catch(e) {
        console.log(e)
    }

    try {
        await userData.createUser(
            'joseph'
            , 'pwd5a'
        )

    } catch(e) {
        console.log(e)
    }

    try {
        await userData.createUser(
            'joseph10'
            , 'pa$$word'
        )

    } catch(e) {
        console.log(e)
    }

    try {
        await userData.createUser(
            'joseph20'
            , 'pa$$wo rd'
        )

    } catch(e) {
        console.log(e)
    }

    try {
        await userData.createUser(
            'pat rick'
            , 'pa$$word'
        )

    } catch(e) {
        console.log(e)
    }

    await connection.closeConnection();
}

async function userCheck() {
    const db = await connection.connectToDb();
    await db.dropDatabase();
    console.log("checking user") 

    try {
        await userData.createUser(
            'josecanseco'
            , 'password'
        )

    } catch(e) {
        console.log(e)
    }

    try {
        await userData.checkUser(
            'josecanseco'
            , 'password'
        )

    } catch(e) {
        console.log(e)
    }

    try {
        await userData.checkUser(
            'josecanseco'
            , 'notthepassword'
        )

    } catch(e) {
        console.log(e)
    }

    await connection.closeConnection();
}

//main() 
userCheck()