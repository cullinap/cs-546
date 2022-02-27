const express = require("express");
const router = express.Router();
const data = require("../data");
const bands = data.bands;
const mongoQueries = data.mongo_queries;

router.route("/bands").get(async (req, res) => {
    try {
        const bandJson = await mongoQueries.getAllBandsIdAndName();
        res.json(bandJson);
    } catch(e) {
        res.status(404).json({error: e})
    }
});

module.exports = router;


