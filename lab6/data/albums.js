const mongoCollections = require("../config/mongoCollections");
const bands = mongoCollections.bands;
const mongo_queries = require("./mongo_queries")
const { ObjectId, ReturnDocument } = require("mongodb");


module.exports = {
    async create(bandId, title, releaseDate, tracks, rating) {

        let tracksInvalid = false;
        if(!bandId) throw `bandId was not provided`
        if(!title) throw `title was not provided`
        if(!releaseDate) throw `releaseDate was not provided`
        if(!tracks || !Array.isArray(tracks)) throw `and array of tracks must be provided`
        if(!rating) throw `releaseDate was not provided`

        bandId = bandId.toString()

        bandId = bandId.trim();
        if(!ObjectId.isValid(bandId)) throw `must provide a valid object id`
        
        if(bandId.trim().length === 0) throw `bandId parameter can't be empty string`
        if(title.trim().length === 0) throw `title parameter can't be empty string`
        if(releaseDate.trim().length === 0) throw `releaseDate parameter can't be empty string`

        for (i in tracks) {
            if (typeof tracks[i] !== 'string' || tracks[i].trim() === 0) {
                genreInvalid = true;
                break;
            }
            tracks[i] = tracks[i].trim()
        }

        if(tracksInvalid || tracks.length < 3) throw `all values in the tracks array must be a string and contain three songs`
        if(+releaseDate.slice(-4) < 1900 || +releaseDate.slice(-4) > 2022 + 1) throw `invalid year must be between 1900 and 2022`
        if(rating < 1 || rating > 5) throw `rating must be between 1 and 5`                
        
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

        if(bandAlbums === null) throw `no album with that id`
        
        albumArr = []
        Object.entries(bandAlbums).forEach(
            ([ _ , value]) => albumArr.push(value)
        )

        return albumArr[0]
        
    },

    async get(id) {
        if(!id) throw `you must provide an id`;
        if(typeof id !== 'string' || id.trim().length === 0) throw `value must be string and not empty`
        
        id = id.trim();
        if(!ObjectId.isValid(id)) throw `must provide a valid object id`

        const bandCollection = await bands();
        const findAlbum = await bandCollection
            .findOne(
                {'albums._id':ObjectId(id)}
            )


        if(findAlbum === null) throw `no album with that id`

        arr = []
        Object.values(findAlbum.albums).forEach(val => {
            if(val._id.toString() === id.toString()) arr.push(val)
        })

       arr[0]["_id"] = arr[0]["_id"].toString()
       return arr[0]

    },

    async remove(id) {
        if(!id) throw `you must provide an id`
        if(typeof id !== 'string' || id.trim().length === 0) throw `value must be string and not empty`

        id = id.trim()
        if(!ObjectId.isValid(id)) throw `You must provide a valid object id`

        const bandCollection = await bands();

        const deleteBand = await bandCollection
            .updateOne(
                { 'albums._id':ObjectId(id) }, 
                { $pull: { albums: { _id:ObjectId(id) }}}
        )

        let calcRating = await mongo_queries.updateOverAllRating(id)

        console.log(calcRating)

        const updateReview = await bandCollection
          .updateOne({ _id: id }, { $set: { overallRating:calcRating } })

        console.log(updateReview)

        if(deleteBand.deletedCount === 0) {
            throw `band does not exist`
        }

    },


}