const mongoCollections = require("../config/mongoCollections");
const bands = mongoCollections.bands;
const { ObjectId } = require("mongodb");

function formatOneBand(collection) {
    let obj = {}
    obj["_id"] = collection["_id"].toString()
    obj["name"] = collection["name"]
    obj["genre"] = collection["genre"]
    obj["website"] = collection["website"]
    obj["recordLabel"] = collection["recordLabel"]
    obj["bandMembers"] = collection["bandMembers"]
    obj["yearFormed"] = collection["yearFormed"]
    obj["albums"] = collection["albums"]
    obj["overallRating"] = collection["overallRating"]

    return obj
}

// move the creation of a band outside of module exports
// create still takes the parameters but then 
// we can pass back and forth data to make sub-documents
// and we can replace the object in create with a function

function formatData(collection, bandIndex) {
    let obj = {}
    obj["_id"] = collection[bandIndex]["_id"].toString()
    obj["name"] = collection[bandIndex]["name"]
    obj["genre"] = collection[bandIndex]["genre"]
    obj["website"] = collection[bandIndex]["website"]
    obj["recordLabel"] = collection[bandIndex]["recordLabel"]
    obj["bandMembers"] = collection[bandIndex]["bandMembers"]
    obj["yearFormed"] = collection[bandIndex]["yearFormed"]

    return obj
}


module.exports = {
    async create(name, genre, website, recordLabel, bandMembers, yearFormed) {
        let genreInvalid = false;
        let bandMembersInvalid = false;
        if(!name) throw `name was not provided`
        if(!genre || !Array.isArray(genre)) throw `an array of genre must be provided`
        if(!website) throw `website was not provided`
        if(!recordLabel) throw `recordLabel was not provided`
        if(!bandMembers || !Array.isArray(bandMembers)) throw `and array of bandMembers must be provided`
        if(!yearFormed) throw `yearFormed was not provided`
        
        if(name.trim().length === 0) throw `name parameter can't be empty string`
        if(website.trim().length === 0) throw `website parameter can't be empty string`
        if(recordLabel.trim().length === 0) throw `recordLabel parameter can't be empty string`

        for (i in genre) {
            if (typeof genre[i] !== 'string' || genre[i].trim() === 0) {
                genreInvalid = true;
                break;
            }
            genre[i] = genre[i].trim()
        }

        for (i in bandMembers) {
            if (typeof bandMembers[i] !== 'string' || bandMembers[i].trim() === 0) {
                bandMembersInvalid = true;
                break;
            }
            bandMembers[i] = bandMembers[i].trim()
        }

        if(genreInvalid) throw `all values in the genre array must be a string`
        if(bandMembersInvalid) throw `all values in the bandMembers array must be a string`

        if(typeof yearFormed !== 'number') throw `invalid type: yearFormed must be a number`
        if(yearFormed < 1900 || yearFormed > 2022) throw `invalid year must be between 1900 and 2022`

        if(!website.startsWith('http://www.') || !website.endsWith('.com')) throw `websites must start with http://www. or end with .com`
        const getDomainName = website.slice(
            website.indexOf('.')+1,
            website.lastIndexOf('.')
        );
        if(getDomainName.length < 5) throw `domain name must be 5 characters`
        //if(website.split(".")[1].length < 5) throw `domain name must be 5 characters`

        const bandCollection = await bands();

        let newBand = {
            name: name,
            genre: genre,
            website: website,
            recordLabel: recordLabel,
            bandMembers: bandMembers,
            yearFormed: yearFormed,
            albums: [],   // initialize as empty array
            overallRating: 0 // initialize as 0
        };

        const insertInfo = await bandCollection.insertOne(newBand);
        
        return formatOneBand(newBand)
    },
    async getAll() {
        const bandCollection = await bands();
        const bandsList = await bandCollection.find({}).toArray();
        if(!bandsList) throw `Band list is empty`
        
        let bandArray = []
        for(let i = 0; i<bandsList.length; ++i) {
            bandArray.push(formatData(bandsList, i))
        }

        return bandArray
    },

    async get(id) {
        if(!id) throw `you must provide an id`;
        if(typeof id !== 'string' || id.trim().length === 0) throw `value must be string and not empty`
        
        id = id.trim();
        if(!ObjectId.isValid(id)) throw `must provide a valid object id`

        const bandCollection = await bands();
        const findBand = await bandCollection.findOne({_id:ObjectId(id)});
        
        if(findBand === null) throw `no band with that id`
        
        return formatOneBand(findBand)
    },

    async remove(id) {
        if(!id) throw `you must provide an id`
        if(typeof id !== 'string' || id.trim().length === 0) throw `value must be string and not empty`

        id = id.trim()
        if(!ObjectId.isValid(id)) throw `You must provide a valid object id`

        const bandCollection = await bands();
        const findBand = await bandCollection.findOne({_id:ObjectId(id)});
        const deleteBand = await bandCollection.deleteOne({_id:ObjectId(id)})

        if(deleteBand.deletedCount === 0) {
            throw `band does not exist`
        }

        return findBand["name"] + " has been successfully deleted!";
    },

    async update(id, name, genre, website, recordLabel, bandMembers, yearFormed) {

        const bandCollection = await bands();

        const updateBand = {
                    name: name,
                    genre: genre,
                    website: website,
                    recordLabel: recordLabel,
                    bandMembers: bandMembers,
                    yearFormed: yearFormed,
                    albums: [],
                    overallRating: 0
                }

        const updatedBandInfo = await bandCollection
            .updateOne(
                {_id:ObjectId(id)},
                {$set:updateBand}
        )

        return updatedBandInfo

    },

}