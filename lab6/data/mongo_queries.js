const mongoCollections = require('../config/mongoCollections');
const bands = mongoCollections.bands;
const { ObjectId } = require("mongodb");


module.exports = {
    getAllBands: async () => {
        const bandCollection = await bands();
        const bandList = await bandCollection.find({}).toArray();
        return bandList;
      },

    getAllBandsIdAndName: async () => {
        const bandCollection = await bands();
        const bandList = await bandCollection
          .find({}, {projection: {name:1} })
          .toArray();
        return bandList;
      },

    getIdBandWithBandName: async (bandName) => {
        if (bandName === undefined) throw 'You must provide an bandName';
        const bandCollection = await bands();
        const band = await bandCollection.findOne({ name: bandName });
    
        if (!band) {
          throw 'Could not find band with name of ' + bandName;
        }

        return band._id
      },

    getBandById: async (id) => {
      if (id === undefined) throw 'You must provide an id';
      const bandCollection = await bands();
      const band = await bandCollection.findOne({ _id: id });
  
      if (!band) {
        throw 'Could not find band with id of ' + id;
      }

      return band
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

    getOneAlbumIdByBandNameAndAlbum: async function (album) {

      const bandCollection = await bands();

      const bandAlbums = await bandCollection
          .findOne( 
               {'albums.title':album}
          )

        arr = []
        Object.values(bandAlbums.albums).forEach(val => {
            if(val.title === album) arr.push(val)
        })

        return arr[0]["_id"]
    },

    


}