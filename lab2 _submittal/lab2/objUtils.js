function objChecks(obj) {
    if(typeof obj === 'undefined' || obj === null) throw `${obj || "provided input"} is undefined or null`
    if(typeof obj !== 'object') throw `${obj || "provided input"} is not an object` 
}

function arrayChecks(arr) {
    if(Array.isArray(arr) !== true) throw "input should be an array"
    for (let i=0; i<arr.length; ++i) {
        if (typeof arr[i] !== "object")
            throw "all values must be object"
    }
    for (let i=0; i<arr.length; ++i) {
        if (Object.keys(arr[i]).length === 0)
            throw "objects are empty"
    }

}

module.exports = {
    
    makeArrays: (objects) => {
        arrayChecks(objects)
        let outerArr = []
        for (let i=0; i<objects.length; ++i) {
            for (const [key, value] of Object.entries(objects[i])){
                outerArr.push([key,value])
            }
        }
        return outerArr
    },

    isDeepEqual: (obj1, obj2) => {
        objChecks(obj1)
        objChecks(obj2)
        if(Array.isArray(obj1) === true || Array.isArray(obj1) === true) throw "input should not be array"
        
        function checkDeep(obj1, obj2) {
            if (typeof obj1 != typeof obj2) return false;
            if(typeof obj1 !== 'object') return obj1 === obj2;
            if (Object.keys(obj1).length != Object.keys(obj2).length) return false;
            for (var k in obj1) {
                if (!(k in obj2)) return false;
                if (!checkDeep(obj1[k], obj2[k])) return false
            }
            return true;
        }

        return checkDeep(obj1, obj2)
    },

    computeObject: (object, func) => {
        objChecks(object)
        if(typeof func !== 'function') throw `${func || "provided input"} is not an function` 
        for (const [key, value] of Object.entries(object)){
            if (typeof value !== "number")
                throw "all values must be numbers"
        }

        let newObj = {}
        for (const [key, value] of Object.entries(object)){
            newObj[key] = func(value)
        }

        return newObj
    }

}

/*
https://stackoverflow.com/questions/30803168/data-map-is-not-a-function
https://stackoverflow.com/questions/29532094/recursive-deep-compare
https://stackoverflow.com/questions/29532094/recursive-deep-compare
https://levelup.gitconnected.com/different-ways-to-check-if-an-object-is-empty-in-javascript-e1252d1c0b34
*/