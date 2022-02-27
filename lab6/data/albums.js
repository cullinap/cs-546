const mongoCollections = require("../config/mongoCollections");
const bands = mongoCollections.bands;
const mongo_queries = require("./mongo_queries")
const { ObjectId } = require("mongodb");

//const { albums } = require(".");


module.exports = {
    async create(bandId, title, releaseDate, tracks, rating) {
        
        let newAlbum = {
            _id: new ObjectId(), 
            title: title, 
            releaseDate: releaseDate, 
            tracks: tracks, 
            rating: rating
        }

        //const addAnAlbum = await mongo_queries.addAlbum(bandId, newAlbum)

        return newAlbum
    }
}