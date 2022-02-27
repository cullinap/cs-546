const bands = require("../data/bands"); // must have two dots for get file
const albums = require("../data/albums")
const mongo_queries = require("../data/mongo_queries")
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
    soundGarden = await bands.create(
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
    );

    // get object id 
    bandObjectId = await mongo_queries.getBand("Sound Garden");

    // need the await kw otherwise the album won't be entered
    badmotorfinger = await albums.create(
        bandObjectId,
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

    louderThanLove = await albums.create(
      bandObjectId,
      "Louder Than Love",
      1989,
      [
        "Ugly Truth",
        "Hands All Over",
        "Gun",
        "Power Trip",
      ],
      5
  )
    
    const addBadMotor = await mongo_queries.addAlbum(bandObjectId, badmotorfinger)
    const addLouderThanLove = await mongo_queries.addAlbum(bandObjectId, louderThanLove)
    //console.log(addAnAlbum);

  } catch (e) {
    console.log(e);
  }

  await connection.closeConnection();
}

main();
