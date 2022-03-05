const mongoCollections = require("../config/mongoCollections");
const bands = mongoCollections.bands;
const mongo_queries = require("./mongo_queries")
const { ObjectId, ReturnDocument } = require("mongodb");


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
    },

    async getAll(id) {
        if(!id) throw `you must provide an id`;
        if(typeof id !== 'string' || id.trim().length === 0) throw `value must be string and not empty`
        
        id = id.trim();
        if(!ObjectId.isValid(id)) throw `must provide a valid object id`

        const bandCollection = await bands();
        
        const bandAlbums = await bandCollection
            .findOne( 
                {_id:ObjectId(id)},
                { projection: { _id:0, albums:1 } }
            )

        return typeof bandAlbums
        
    },
}