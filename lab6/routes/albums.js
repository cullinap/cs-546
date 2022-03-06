const express = require("express");
const router = express.Router();
const data = require("../data");
const albums = require("../data/albums");
const { update } = require("../data/bands");
const bands = data.bands;
const mongo_queries = data.mongo_queries;
const { ObjectId } = require("mongodb");


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

router.route("/albums/:id").get(async (req, res) => {
  const bandId = req.params.id

  try {
    const bandJson = await albums.getAll(bandId)
    res.json(bandJson);
  } catch (e) {
    res.status(404).json({ error: e });
  }
});

router.route("/albums/album/:id").get(async (req, res) => {
    const albumId = req.params.id
  
    try {
      const bandJson = await albums.get(albumId)
      res.json(bandJson);
    } catch (e) {
      res.status(404).json({ error: e });
    }
  });

router.post("/albums/:id", async (req, res) => {
  const albumData = req.body;

  // if (!bandData.name) {
  //   res.status(400).json({ error: 'You must provide blog post title' });
  //   return;
  // }
  // if (!bandData.genre) {
  //   res.status(400).json({ error: 'You must provide blog post body' });
  //   return;
  // }
  // if (!bandData.wesbite) {
  //   res.status(400).json({ error: 'You must provide poster ID' });
  //   return;
  // }

  try {
    const { title, releaseDate, tracks, rating } = albumData
    console.log(typeof req.params.id)

    newAlbum = await albums.create(
        req.params.id,
        title,
        releaseDate,
        tracks,
        rating
    );

    const addAlbum = await mongo_queries.addAlbum(
        ObjectId(req.params.id),
        newAlbum
    );
    
    res.json(bands.get(ObjectId(req.params.id)));
  } catch (e) {
    res.status(500).json({ error: e });
  }
});


router.delete("/albums/:id", async (req, res) => {
  if(!req.params.id) {
    res.status(400).json({ error: 'You must supply an ID to delete'})
    return 
  }

  try {
    await albums.get(req.params.id);
  } catch (e) {
    res.status(404).json({ error: "Album not found" });
    return;
  }

  try {
    const removeAlbum = await albums.remove(req.params.id);
    res.sendStatus(200);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

module.exports = router;