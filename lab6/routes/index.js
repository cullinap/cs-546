const bandsRoutes = require("./bands");
const albumRoutes = require("./albums");


const constructorMethod = (app) => {
  app.use("/", bandsRoutes);
  app.use("/", albumRoutes);

  app.use("*", (req, res) => {
    res.status(404).json({ error: "Not Found" });
  });
};

module.exports = constructorMethod;