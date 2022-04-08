const primeNumRoutes = require('./primeNumber');

const constructorMethod = (app) => {
    app.use("/", primeNumRoutes);
  
    app.use("*", (req, res) => {
      res.status(404).json({ error: "Not Found" });
    });
  };
  
module.exports = constructorMethod;