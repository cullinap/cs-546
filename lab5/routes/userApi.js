const express = require("express");
const router = express.Router();
const data = require("../data");
const apiData = data.apiData;

router.route("/people").get(async (req, res) => {
    try {
        const peopleJsonData = await apiData.getPeopleJsonData();
        res.json(peopleJsonData);
    } catch(e) {
        res.status(404).json({error:e})
    }
});

router.route("/work").get(async (req, res) => {
    try {
        const workJsonData = await apiData.getWorkJsonData();
        res.json(workJsonData);
    } catch(e) {
        res.status(404).json({error:e})
    } 
});

router.route("/people/:id").get(async (req, res) => {
    try {
        const peopleJsonDataById = await apiData.getPeopleJsonById(req.params.id);
        res.json(peopleJsonDataById);
    } catch(e) {
        res.status(404).json({error:e})
    }
});

router.route("/work/:id").get(async (req, res) => {
    try {
        const workJsonDataById = await apiData.getWorkJsonById(req.params.id);
        res.json(workJsonDataById);
    } catch(e) {
        res.status(404).json({error:e})
    }
});

module.exports = router;
