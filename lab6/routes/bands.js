const express = require("express");
const router = express.Router();
const data = require("../data");
const { update } = require("../data/bands");
const bands = data.bands;
const mongoQueries = data.mongo_queries;

router.route("/bands").get(async (req, res) => {
  try {
    const bandJson = await mongoQueries.getAllBandsIdAndName();
    res.json(bandJson);
  } catch (e) {
    res.status(404).json({ error: e });
  }
});

router.post("/bands/:id", async (req, res) => {
  const bandData = req.body;

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
    const { name, genre, website, recordLabel, bandMembers, yearFormed } = bandData;
    const newBand = await bands.create(
      name,
      genre,
      website,
      recordLabel,
      bandMembers,
      yearFormed
    );
    res.json(newBand);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

router.route("/bands/:id").get(async (req, res) => {
  try {
    const bandById = await bands.get(req.params.id);
    res.json(bandById);
  } catch (e) {
    res.status(404).json({ error: e });
  }
});

router.put("/bands/:id", async (req, res) => {
  const updatedData = req.body;

  if (!updatedData.name || !updatedData.genre || !updatedData.website) {
    res.status(400).json({ error: "You must Supply All fields" });
    return;
  }

  try {
    await bands.get(req.params.id);
  } catch (e) {
    res.status(404).json({ error: "Band not found" });
    return;
  }

  try {
    const updatedBand = await bands.update(
      req.params.id,
      updatedData.name,
      updatedData.genre,
      updatedData.website,
      updatedData.recordLabel,
      updatedData.bandMembers,
      updatedData.yearFormed
    );
    res.json(updatedBand);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

router.delete("/bands/:id", async (req, res) => {
  if(!req.params.id) {
    res.status(400).json({ error: 'You must supply an ID to delete'})
    return 
  }

  try {
    await bands.get(req.params.id);
  } catch (e) {
    res.status(404).json({ error: "Band not found" });
    return;
  }

  try {
    const updatedBand = await bands.remove(req.params.id);
    res.sendStatus(200);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

module.exports = router;
