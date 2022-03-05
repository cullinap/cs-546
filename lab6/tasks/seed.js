const bands = require("../data/bands"); // must have two dots for get file
const albums = require("../data/albums");
const mongo_queries = require("../data/mongo_queries");
const connection = require("../config/mongoConnection");
const mongoCollections = require("../config/mongoCollections");
//const { albums } = require("../data");
const getBandInfo = mongoCollections.bands;

async function buildAnAlbum(bandObjectId, albumName, albumYear, albumSongs, rating) {
  const newAlbum = await albums.create(
    bandObjectId,
    albumName,
    albumYear,
    albumSongs,
    rating
  )

  const addNewAlbum = await mongo_queries.addAlbum(
    bandObjectId,
    newAlbum
  );

}


async function main() {
  const db = await connection.connectToDb();
  await db.dropDatabase();
  console.log("adding soundgarden");

  let soundGarden = undefined;

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
    1984
  );

  // get object id
  bandObjectId = await mongo_queries.getIdBandWithBandName("Sound Garden");

  // need the await kw otherwise the album won't be entered
  badmotorfinger = await albums.create(
    bandObjectId,
    "Badmotorfinger",
    1991,
    ["Rusty Cage", "Outshined", "Slaves & Bulldozers", "Jesus Christ Pose"],
    5
  );

  louderThanLove = await albums.create(
    bandObjectId,
    "Louder Than Love",
    1989,
    ["Ugly Truth", "Hands All Over", "Gun", "Power Trip"],
    5
  );

  const addBadMotor = await mongo_queries.addAlbum(
    bandObjectId,
    badmotorfinger
  );
  const addLouderThanLove = await mongo_queries.addAlbum(
    bandObjectId,
    louderThanLove
  );

  console.log('adding nirvana') 
  let nirvana = undefined;

  nirvana = await bands.create(
      "Nirvana",
      ["Grunge", "Alternative", "Punk"],
      "http://www.nirvana.com",
      "Sub Pop",
      [
        "Kurt Cobain",
        "Dave Grohl",
        "Kris Novaselic",
        "Pat Smear",
      ],
      1987
  )

  // get object id
  bandObjectId = await mongo_queries.getIdBandWithBandName("Nirvana");

  const nevermind = await buildAnAlbum (
    bandObjectId,
    "Nevermind",
    1991,
    ["Smells Like Teen Spirit", "Polly", "Territorial Pissings"],
    5
  )

  const bleach = await buildAnAlbum (
    bandObjectId,
    "Bleach",
    1989,
    ["Blew", "About a Girl", "Negative Creep"],
    5
  ) 


  console.log('adding Mayhem') 
  let mayhem = undefined;

  mayhem = await bands.create(
      "Mayhem",
      ["Black Metal", "Metal"],
      "http://www.mayhem.com",
      "Necropolis",
      [
        "Hellhammer",
        "Attlia Calhar",
        "Necrobutcher",
        "Ghul",
        "Teloch"
      ],
      1984
  )

  // get object id
  bandObjectId = await mongo_queries.getIdBandWithBandName("Mayhem");

  const chimeria = await buildAnAlbum (
    bandObjectId,
    "Chimera",
    2004,
    ["Chimera", "You Must Fall", "My Death"],
    3
  )

  const daemon = await buildAnAlbum (
    bandObjectId,
    "Daemon",
    2019,
    ["Agenda Ignis", "Bad Blood", "Invoke The Oath"],
    4.5
  ) 

  console.log('adding Tool') 
  let tool = undefined;

  tool = await bands.create(
      "Tool",
      ["Progessive Metal", "Metal"],
      "http://www.toolband.com",
      "RCA",
      [
        "Maynard James Keenan",
        "Danny Carey",
        "Justin Chancellor",
        "Adam Jones",
      ],
      1990
  )

  // get object id
  bandObjectId = await mongo_queries.getIdBandWithBandName("Tool");

  const aenima = await buildAnAlbum (
    bandObjectId,
    "Aenima",
    1996,
    ["Aenima", "Jimmy", "Stinkfist"],
    5
  )

  const lateralus = await buildAnAlbum (
    bandObjectId,
    "Lateralus",
    2001,
    ["The Grudge", "Parabola", "Schism"],
    5
  ) 

  console.log('adding Deftones') 
  let deftones = undefined;

  deftones = await bands.create(
      "Deftones",
      ["Metal", "Nu-metal"],
      "http://www.deftones.com",
      "Warner",
      [
        "Chino Moreno",
        "Abe Cunningham",
        "Stephen Carpenter",
        "Sergio Vega",
      ],
      1988
  )

  // get object id
  bandObjectId = await mongo_queries.getIdBandWithBandName("Deftones");

  const aroundTheFur = await buildAnAlbum (
    bandObjectId,
    "Around The Fur",
    1997,
    ["Shove it", "Headup", "Be Quiet and Drive Far Away"],
    4
  )

  const whitePony = await buildAnAlbum (
    bandObjectId,
    "White Pony",
    2001,
    ["Passenger", "Change", "Back to School"],
    4
  ) 


  await connection.closeConnection();
}

main()
