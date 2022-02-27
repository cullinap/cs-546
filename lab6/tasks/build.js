const bands = require("../data/bands"); // must have two dots for get file
const albums = require("../data/albums")
const connection = require("../config/mongoConnection");
const mongoCollections = require("../config/mongoCollections");
//const { albums } = require("../data");
const getBandInfo = mongoCollections.bands;

const makeBand = function(name, genre, website, recordLabel, bandMembers, yearFormed) {
    return {
        name: name,
        genre: genre,
        website: website,
        recordLabel: recordLabel,
        bandMembers: bandMembers,
        yearFormed: yearFormed,
        albums: [],   // initialize as empty array
        overallRating: 0 // initialize as 0
    }
}

const makeAlbum = function(bandId, title, releaseDate, tracks, rating) {
    return {
        bandId: bandId, 
        title: title, 
        releaseDate: releaseDate, 
        tracks: tracks, 
        rating: rating
    }
}

async function main() {
  const db = await connection.connectToDb();
  await db.dropDatabase();

  let soundGarden = undefined;

  // 1. create the band
  try {
    soundGarden = makeBand(
      "Sound Garden",
      ["Grunge", "Alternative", "Metal"],
      "http://www.soundgarden.com",
      "EMI",
      [
        "Chris Cornell",
        "Matt Cameron",
        "Ben Shepard",
        "Kim Thayil",
        "Jason Everman",
      ],
      1984,
    )

    badmotorfinger = makeAlbum(
        1,
        "Badmotorfinger",
        1991,
        [
          "Rusty Cage",
          "Outshined",
          "Slaves & Bulldozers",
          "Jesus Christ Pose",
        ],
        5
    )
    
    soundGarden.albums.push(badmotorfinger)
    const bandCollection = await bands();
    const insertInfo = await bandCollection.insertOne(newBand);

    console.log(soundGarden);
  } catch (e) {
    console.log(e);
  }

  await connection.closeConnection();
}

main();
