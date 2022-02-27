const mongoCollections = require("../config/mongoCollections");
const bands = mongoCollections.bands;
//const { ObjectId } = require("mongodb");
//const { albums } = require(".");


module.exports = {
    async create(bandId, title, releaseDate, tracks, rating) {
        
        //const albumCollection = await albums();

        let newAlbum = {
            bandId: bandId, 
            title: title, 
            releaseDate: releaseDate, 
            tracks: tracks, 
            rating: rating
        }
        
        return newAlbum  //formatOneBand(newBand)
    }
}