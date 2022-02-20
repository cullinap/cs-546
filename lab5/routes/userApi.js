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

module.exports = router;
