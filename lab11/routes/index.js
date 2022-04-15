const tvRoutes = require('./tvApi');

const constructorMethod = (app) => {
    app.use("/", tvRoutes);
  
    app.use("*", (req, res) => {
      res.status(404).json({ error: "Not Found" });
    });
  };
  
module.exports = constructorMethod;