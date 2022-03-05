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

  console.log('adding Misfits') 
  let misfits = undefined;

  misfits = await bands.create(
      "Misfits",
      ["Punk", "Hardcore"],
      "http://www.misfits.com",
      "Geffen",
      [
        "Jerry Only",
        "Glenn Danzig",
        "Dave Lombardo",
        "Acey Slad",
      ],
      1977
  )

  // get object id
  bandObjectId = await mongo_queries.getIdBandWithBandName("Misfits");

  const staticAge = await buildAnAlbum (
    bandObjectId,
    "Static Age",
    1996,
    ["Static Age", "Last Caress", "Hybrid Moments"],
    5
  )

  const famousMonsters = await buildAnAlbum (
    bandObjectId,
    "Famous Monsters",
    1998,
    ["Scream", "Lost in Space", "Witch Hunt"],
    3
  ) 

  console.log('adding Dead Kennedys') 
  let deadKennedys = undefined;

  deadKennedys = await bands.create(
      "Dead Kennedys",
      ["Punk", "Hardcore"],
      "http://www.deadkennedys.com",
      "Manifesto",
      [
        "East Bay Ray",
        "Ron Greer",
        "Jeff Penalty",
        "Ted",
      ],
      1978
  )

  // get object id
  bandObjectId = await mongo_queries.getIdBandWithBandName("Dead Kennedys");

  const battleForDemocracy = await buildAnAlbum (
    bandObjectId,
    "Bedtime for Democracy",
    1986,
    ["I Spy", "Fleshdunce", "Dear Abby"],
    4
  )

  const plasticSurgergyDisastors = await buildAnAlbum (
    bandObjectId,
    "Plastic Surgery Disastors",
    1982,
    ["Government Flu", "Buzzpop", "Well Paid Scientist"],
    3
  ) 

  console.log('adding The Mars Volta') 
  let marsVolta = undefined;

  marsVolta = await bands.create(
      "The Mars Volta",
      ["Punk", "experimental"],
      "http://www.marsvolta.com",
      "Warner Bros",
      [
        "Omar Rodriguiez-Lopez",
        "Cedric Bixler-Zavala",
        "The Mars Volta Group",
      ],
      2001
  )

  // get object id
  bandObjectId = await mongo_queries.getIdBandWithBandName("The Mars Volta");

  const delousedInTheComatorium = await buildAnAlbum (
    bandObjectId,
    "De-Loused in the Comatorium",
    2003,
    ["Son et lumiere", "Roulette Dares", "This Apparatus Must Be Unearthed"],
    5
  )

  const francesTheMute = await buildAnAlbum (
    bandObjectId,
    "Frances The Mute",
    2005,
    ["The Widow", "Cassandra Gemini"],
    4
  ) 

  console.log('adding At the Drive In') 
  let atTheDriveIn = undefined;

  atTheDriveIn = await bands.create(
      "At the Drive In",
      ["Punk", "experimental"],
      "http://www.atthedrivein.com",
      "Rise",
      [
        "Omar Rodriguiez-Lopez",
        "Cedric Bixler-Zavala",
        "Jim Ward",
      ],
      1994
  )

  // get object id
  bandObjectId = await mongo_queries.getIdBandWithBandName("At the Drive In");

  const relationsshipOfCommand = await buildAnAlbum (
    bandObjectId,
    "Relationship of Command",
    2000,
    ["One Armed Scissor", "Rolodex Propoganda", "Invalid Litter Dept"],
    4
  )

  const acrobaticTenement = await buildAnAlbum (
    bandObjectId,
    "Acrobatic Tenement",
    1997,
    ["Star Slight", "Paid Vacation Time"],
    4
  ) 

  console.log('adding Led Zeppelin') 
  let ledZeppelin = undefined;

  ledZeppelin = await bands.create(
      "Led Zeppelin",
      ["rock", "blues"],
      "http://www.ledzeppelin.com",
      "Atlantic",
      [
        "John Bonham",
        "Jimmy Page",
        "Robert Plant",
        "John Paul Jones"
      ],
      1968
  )

  // get object id
  bandObjectId = await mongo_queries.getIdBandWithBandName("Led Zeppelin");

  const ledZeppelinOne = await buildAnAlbum (
    bandObjectId,
    "Led Zeppelin",
    1969,
    ["Good Times Bad Times", "Dazed and Confused", "Babe I'm Gonna Leave You"],
    4
  )

  const ledZeppelinTwo = await buildAnAlbum (
    bandObjectId,
    "Led Zeppelin II",
    1969,
    ["Whole Lotta Love", "The Lemon Song", "Moby Dick"],
    4
  ) 


  await connection.closeConnection();
}

main()
