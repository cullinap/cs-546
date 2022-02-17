const bands = require("./data/bands");
const connection = require("./config/mongoConnection");
const mongoCollections = require("./config/mongoCollections");
const getBandInfo = mongoCollections.bands;


const main = async () => {
    const db = await connection.connectToDb();
    await db.dropDatabase();

    let soundGarden = undefined;
    let deadKennedy = undefined;
    let badBrains = undefined;
    let pinkFloyd = undefined;

    // 1. create a band
    try {
        soundGarden = await bands.create(
        "Sound Garden",
        ["Grunge", "Alternative","Metal"],
        "http://www.soundgarden.com",
        "EMI",
        [
            "Chris Cornell",
            "Matt Cameron",
            "Ben Shepard",
            "Kim Thayil",
            "Jason Everman",
        ],
        1984
        );
        console.log(soundGarden); // log the band
    } catch (e) {
        console.log(e);
    }

    // 3. create another band
    try {
        deadKennedy = await bands.create(
        "Dead Kennedys",
        ["Punk", "Hardcore"],
        "http://www.deadkennedys.com",
        "EMI",
        [
            "Jello Biafra",
            "Brandon Cruz",
            "6025",
            "Ted",
            "Jeff Penalty",
        ],
        1987
        );
        console.log(deadKennedy);
    } catch (e) {
        console.log(e);
    }

    // 4. query & log all bands
    try {
        console.log("\nhere are all the bands\n")
        const bandList = await bands.getAll();
        console.log(bandList);
    } catch (e) {
        console.log(e);
    }

    // 5. create a 3rd band
    try {
        badBrains = await bands.create(
        "Bad Brains",
        ["Punk", "Hardcore"],
        "http://www.badbrains.com",
        "EMI",
        [
            "Dr Know",
            "Darryl Jenifer",
            "H.R.",
            "Earl Hudson",
        ],
        1976
        );
        console.log(badBrains); // 6. log the band
    } catch (e) {
        console.log(e);
    }

    //7. rename the first band
    try {
        const bandCollection = await getBandInfo();
        let getSoundGardenId = await bandCollection.findOne({"name":"Sound Garden"})
        let getNudeDragons = await bands.rename(getSoundGardenId["_id"].toString(), "Nudedragons")
        console.log('\nrenaming band based on id retrieved from fn\n')
        console.log(getNudeDragons);
    } catch (e) {
        console.log(e);
    }

    //8. log that band that got updated 
    try {
        const bandCollection = await getBandInfo();
        let getSoundGardenId = await bandCollection.findOne({"name":"Nudedragons"})
        let getNudeDragons = await bands.get(getSoundGardenId["_id"].toString())
        console.log(getNudeDragons);
    } catch (e) {
        console.log(e);
    }

    // 9. remove the second band created
    try {
        const bandCollection = await getBandInfo();
        let getDeadKennedysId = await bandCollection.findOne({"name":"Dead Kennedys"})
        let removeDeadKennedys = await bands.remove(getDeadKennedysId["_id"].toString())
        console.log('\nremoving dead kennedys\n')
    } catch (e) {
        console.log(e);
    }

    // 10. query all bands now 
    try {
        console.log("\nhere are all the bands\n")
        const bandList = await bands.getAll();
        console.log(bandList);
      } catch(e) {
        console.log(e);
    }

    // 11. creating a band with bad input parameters -- empty website string
    try {
        pinkFloyd = await bands.create(
        "Pink Floyd",
        ["Progressive Rock", "Psychedelic rock", "Classic Rock"],
        " ",
        "EMI",
        [
            "Roger Waters",
            "David Gilmour",
            "Nick Mason",
            "Richard Wright",
            "Sid Barrett",
        ],
        1965
        );
        console.log(pinkFloyd);
    } catch (e) {
        console.log(e);
    }

    // 12. creating a band with bad input parameters -- empty website string
    try {
        pinkFloyd = await bands.create(
        "Pink Floyd",
        ["Progressive Rock", "Psychedelic rock", "Classic Rock"],
        " ",
        "EMI",
        [
            "Roger Waters",
            "David Gilmour",
            "Nick Mason",
            "Richard Wright",
            "Sid Barrett",
        ],
        1965
        );
        console.log(pinkFloyd);
    } catch (e) {
        console.log(e);
    }

    // 12. remove a band that DNE appending a string to the objectID
    try {
        const bandCollection = await getBandInfo();
        let getDeadKennedysId = await bandCollection.findOne({"name":"Dead Kennedys"})
        let makeWrongId = getDeadKennedysId + "123"
        let removeDeadKennedys = await bands.remove(makeWrongId)
        console.log('\nremoving dead kennedys\n')
    } catch (e) {
        console.log(e);
    }

    // 13. rename a band that DNE appending a string to the objectID
    try {
        const bandCollection = await getBandInfo();
        let getDeadKennedysId = await bandCollection.findOne({"name":"Dead Kennedys"})
        let makeWrongId = getDeadKennedysId + "123"
        let renameDeadKennedys = await bands.rename(makeWrongId, "Phish")
        console.log('\nremoving dead kennedys\n')
    } catch (e) {
        console.log(e);
    }

    // 14. rename but with invalid newName
     try {
        const bandCollection = await getBandInfo();
        let getNudeDragonsId = await bandCollection.findOne({"name":"Nudedragons"})
        let reameNudeDragons = await bands.rename(getNudeDragonsId, 6052)
        console.log('\nremoving dead kennedys\n')
    } catch (e) {
        console.log(e);
    }

    // 14. rename but with invalid newName
    try {
        const bandList = await bands.get("1985");
        console.log(bandList);
      } catch(e) {
        console.log(e);
      }

    // //const db = await connection.connectToDb();
    await connection.closeConnection();

}

main()
