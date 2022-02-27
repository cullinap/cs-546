const bandsRoutes = require("./bands");

const constructorMethod = (app) => {
  app.use("/", bandsRoutes);

  app.use("*", (req, res) => {
    res.status(404).json({ error: "Not Found" });
  });
};

module.exports = constructorMethod;