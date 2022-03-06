const bands = require("../data/bands"); // must have two dots for get file
const albums = require("../data/albums");
const mongo_queries = require("../data/mongo_queries");
const connection = require("../config/mongoConnection");
const mongoCollections = require("../config/mongoCollections");
//const { albums } = require("../data");
const getBandInfo = mongoCollections.bands;

async function main() {
  const db = await connection.connectToDb();
  await db.dropDatabase();
  console.log("creating band")

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
    //console.log(addAnAlbum);
  } catch (e) {
    console.log(e);
  }

  await connection.closeConnection();
}

const displayAllBands = async () => {
  try {
      console.log("\n\nhere are all the bands\n\n")
      const bandList = await bands.getAll();
      console.log(bandList);
    } catch(e) {
      console.log(e);
    }
  const db = await connection.connectToDb();
  await connection.closeConnection();
  console.log("Done!");
}

const getById = async () => {
  console.log("finding band by id")
  soundGardenObjectId = await mongo_queries.getIdBandWithBandName("Sound Garden");
  pinkFloydObjectId = await mongo_queries.getIdBandWithBandName("Pink Floyd");
  soundGardObjectIdStr = soundGardenObjectId.toString()
  pinkFloydObjectIdStr = pinkFloydObjectId.toString()

  try {
      const bandList = await bands.get();
      console.log(bandList);
    } catch(e) {
      console.log(e);
    }

    try {
      const bandList = await bands.get(12898);
      console.log(bandList);
    } catch(e) {
      console.log(e);
    }

    try {
      const bandList = await bands.get(" ");
      console.log(bandList);
    } catch(e) {
      console.log(e);
    }

    try {
      const bandList = await bands.get(soundGardObjectIdStr);
      console.log(bandList);
    } catch(e) {
      console.log(e);
    }

    try {
      const bandList = await bands.get(pinkFloydObjectIdStr);
      console.log(bandList);
    } catch(e) {
      console.log(e);
    }

    try {
      const bandList = await bands.get("520b1d76ea1c4ade903d75b6f");
      console.log(bandList);
    } catch(e) {
      console.log(e);
    }

  const db = await connection.connectToDb();
  await connection.closeConnection();
  console.log("Done!");
}

const deleteById = async () => {
  console.log("removing band by id")
  try {
    soundGardenObjectId = await mongo_queries.getIdBandWithBandName("Sound Garden");
    soundGardObjectIdStr = soundGardenObjectId.toString()
  }catch(e) {
    console.log(e);
  }

  try {
      const bandList = await bands.remove();
      console.log(bandList);
    } catch(e) {
      console.log(e);
    }

    try {
      const bandList = await bands.remove(12898);
      console.log(bandList);
    } catch(e) {
      console.log(e);
    }

    try {
      const bandList = await bands.remove(" ");
      console.log(bandList);
    } catch(e) {
      console.log(e);
    }

    // does not exist
    try {
      const bandList = await bands.remove("620b1d950649482bf68ade53");
      console.log(bandList);
    } catch(e) {
      console.log(e);
    }

    try {
      const bandList = await bands.remove(soundGardObjectIdStr);
      console.log(bandList);
    } catch(e) {
      console.log(e);
    }


  const db = await connection.connectToDb();
  await connection.closeConnection();
  console.log("Done!");
}

const displayAllAlbums = async () => {
  console.log("finding all albums for a band by ID")
  soundGardenObjectId = await mongo_queries.getIdBandWithBandName("Nirvana");
  soundGardObjectIdStr = soundGardenObjectId.toString()

  try {
      const albumList = await albums.getAll(soundGardObjectIdStr);
      console.log(albumList);
    } catch(e) {
      console.log(e);
    }

//     try {
//       const bandList = await bands.get(12898);
//       console.log(bandList);
//     } catch(e) {
//       console.log(e);
//     }

//     try {
//       const bandList = await bands.get(" ");
//       console.log(bandList);
//     } catch(e) {
//       console.log(e);
//     }

//     try {
//       const bandList = await bands.get(soundGardObjectIdStr);
//       console.log(bandList);
//     } catch(e) {
//       console.log(e);
//     }

//     try {
//       const bandList = await bands.get(pinkFloydObjectIdStr);
//       console.log(bandList);
//     } catch(e) {
//       console.log(e);
//     }

//     try {
//       const bandList = await bands.get("520b1d76ea1c4ade903d75b6f");
//       console.log(bandList);
//     } catch(e) {
//       console.log(e);
//     }

  const db = await connection.connectToDb();
  await connection.closeConnection();
  console.log("Done!");
}

const getSingleAlbumById = async () => {
  console.log("finding and album by ID")
  nirvanaObjId = await mongo_queries.getOneAlbumIdByBandNameAndAlbum("Bleach");
  nirvanaObjIdStr = nirvanaObjId.toString()

  try {
      const albumList = await albums.get(nirvanaObjIdStr);
      console.log(albumList);
    } catch(e) {
      console.log(e);
    }

//     try {
//       const bandList = await bands.get(12898);
//       console.log(bandList);
//     } catch(e) {
//       console.log(e);
//     }

//     try {
//       const bandList = await bands.get(" ");
//       console.log(bandList);
//     } catch(e) {
//       console.log(e);
//     }

//     try {
//       const bandList = await bands.get(soundGardObjectIdStr);
//       console.log(bandList);
//     } catch(e) {
//       console.log(e);
//     }

//     try {
//       const bandList = await bands.get(pinkFloydObjectIdStr);
//       console.log(bandList);
//     } catch(e) {
//       console.log(e);
//     }

//     try {
//       const bandList = await bands.get("520b1d76ea1c4ade903d75b6f");
//       console.log(bandList);
//     } catch(e) {
//       console.log(e);
//     }

  const db = await connection.connectToDb();
  await connection.closeConnection();
  console.log("Done!");
}

const removeAlbumById = async () => {
  console.log("removing a album by ID")
  //soundGardenObjId = await mongo_queries.getIdBandWithBandName("Sound Garden")
  soundGardenAlbumObjId = await mongo_queries.getOneAlbumIdByBandNameAndAlbum("Badmotorfinger");
  //soundGardenObjIdStr = soundGardenObjId.toString()
  soundGardenAlbumObjIdStr = soundGardenAlbumObjId.toString()
  //console.log(soundGardenObjIdStr)
  console.log(soundGardenAlbumObjIdStr)

  try {
      const albumList = await albums.remove(soundGardenAlbumObjIdStr);
      console.log(albumList);
    } catch(e) {
      console.log(e);
    }

//     try {
//       const bandList = await bands.get(12898);
//       console.log(bandList);
//     } catch(e) {
//       console.log(e);
//     }

//     try {
//       const bandList = await bands.get(" ");
//       console.log(bandList);
//     } catch(e) {
//       console.log(e);
//     }

//     try {
//       const bandList = await bands.get(soundGardObjectIdStr);
//       console.log(bandList);
//     } catch(e) {
//       console.log(e);
//     }

//     try {
//       const bandList = await bands.get(pinkFloydObjectIdStr);
//       console.log(bandList);
//     } catch(e) {
//       console.log(e);
//     }

//     try {
//       const bandList = await bands.get("520b1d76ea1c4ade903d75b6f");
//       console.log(bandList);
//     } catch(e) {
//       console.log(e);
//     }

  const db = await connection.connectToDb();
  await connection.closeConnection();
  console.log("Done!");
}

const updateBand = async () => {
  console.log("updating a band")
  soundGardenObjId = await mongo_queries.getIdBandWithBandName("Nirvana")
  let newName = "Nudedragons"
  let newGenre = ["classical grunge"]
  let newWebsite = "http://www.espn.com"
  let newRecordLabel = "Spotify"
  let newBandMembers = ["Ozzy"]
  let newYearFormed = 2020

  try {
      const updaDatedBand = await bands.update(soundGardenObjId, newName, newGenre, newWebsite, newRecordLabel, newBandMembers, newYearFormed);
      console.log(updaDatedBand);
    } catch(e) {
      console.log(e);
    }

//     try {
//       const bandList = await bands.get(12898);
//       console.log(bandList);
//     } catch(e) {
//       console.log(e);
//     }

//     try {
//       const bandList = await bands.get(" ");
//       console.log(bandList);
//     } catch(e) {
//       console.log(e);
//     }

//     try {
//       const bandList = await bands.get(soundGardObjectIdStr);
//       console.log(bandList);
//     } catch(e) {
//       console.log(e);
//     }

//     try {
//       const bandList = await bands.get(pinkFloydObjectIdStr);
//       console.log(bandList);
//     } catch(e) {
//       console.log(e);
//     }

//     try {
//       const bandList = await bands.get("520b1d76ea1c4ade903d75b6f");
//       console.log(bandList);
//     } catch(e) {
//       console.log(e);
//     }

  const db = await connection.connectToDb();
  await connection.closeConnection();
  console.log("Done!");
}



//main();
displayAllBands();
//getById();
//deleteById();
//displayAllAlbums();
//getSingleAlbumById();
//removeAlbumById()
//updateBand()
