const tvApiRoutes = require('./tvApi');

const constructorMethod = (app) => {
    app.use("/", tvApiRoutes);
  
    app.use("*", (req, res) => {
      res.status(404).json({ error: "Not Found" });
    });
  };
  
  module.exports = constructorMethod;