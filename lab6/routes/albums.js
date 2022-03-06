const express = require("express");
const router = express.Router();
const data = require("../data");
const albums = require("../data/albums");
const { update } = require("../data/bands");
const bands = data.bands;
const mongo_queries = data.mongo_queries;
const { ObjectId } = require("mongodb");



router.route("/albums/:id").get(async (req, res) => {
  const bandId = req.params.id
  try {
    await bands.get(bandId)
  } catch(e) {
    res.status(400).json({ error: e });
    return 
  }

  try {
    const bandJson = await albums.getAll(bandId)
    res.status(200).json(bandJson);
  } catch (e) {
    res.status(404).json({ error: e });
  }
});

router.route("/albums/album/:id").get(async (req, res) => {
    const albumId = req.params.id
  
    try {
      const bandJson = await albums.get(albumId)
      rres.status(200).json(bandJson);
    } catch (e) {
      res.status(404).json({ error: e });
    }
  });

router.post("/albums/:id", async (req, res) => {
  const albumData = req.body;

  if (!albumData.title || !albumData.releaseDate  || !albumData.tracks ) {
    res.status(400).json({ error: 'You must provide fields' });
    return;
  }

  try {
    const { title, releaseDate, tracks, rating } = albumData

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

    console.log(addAlbum)

    res.status(200).json(await bands.get(req.params.id));
  } catch (e) {
    res.status(400).json({ error: e });
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
    res.status(200).json({ "albumId": req.params.id, "deleted": true });
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

module.exports = router;