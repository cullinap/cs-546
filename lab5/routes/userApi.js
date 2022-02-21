const express = require("express");
const router = express.Router();
const data = require("../data");
const apiData = data.apiData;

router.route("/people").get(async (req, res) => {
  const peopleJsonData = await apiData.getPeopleJsonData();
  res.send(peopleJsonData);
});

router.route("/work").get(async (req, res) => {
    const workJsonData = await apiData.getWorkJsonData();
    res.send(workJsonData);
})

router.route("/people/:id").get(async (req, res) => {
    const numId = parseInt(req.params.id)
    const peopleJsonDataById = await apiData.getPeopleJsonById(numId);
    res.send(peopleJsonDataById);
});

router.route("/work/:id").get(async (req, res) => {
    const numId = parseInt(req.params.id)
    const workJsonDataById = await apiData.getWorkJsonById(numId);
    res.send(workJsonDataById);
});

module.exports = router;
