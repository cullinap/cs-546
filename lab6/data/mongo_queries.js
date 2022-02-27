const mongoCollections = require('../config/mongoCollections');
const bands = mongoCollections.bands;
const { ObjectId } = require("mongodb");


module.exports = {
    getBand: async (bandName) => {
        // if (id === undefined) throw 'You must provide an ID';
        const bandCollection = await bands();
        const band = await bandCollection.findOne({ name: bandName });
    
        // if (!movie) {
        //   throw 'Could not find movie with id of ' + id;
        // }

        return band._id
      },

    addAlbum: async function (id, album) {
        // if (id === undefined) return Promise.reject('No id provided');
        // if (newCastMember === undefined)
        //   return Promise.reject('no newCastMember provided');
        const bandCollection = await bands();
       

        return bandCollection
          .updateOne({ _id: id }, { $push: { albums: album } })
        //   .then(function () {
        //     return module.exports.getMovie(id);
        //   });
      },
}