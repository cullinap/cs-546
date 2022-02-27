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

    return obj
}

// move the creation of a band outside of module exports
// create still takes the parameters but then 
// we can pass back and forth data to make sub-documents
// and we can replace the object in create with a function





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

}