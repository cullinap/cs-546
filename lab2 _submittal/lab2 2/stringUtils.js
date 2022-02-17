function checkString(string) {
    if(typeof string === 'undefined' || string === null) throw `${string || "provided input"} is undefined or null`
    if(typeof string !== 'string') throw `${string || "provided input"} is not a string` 
    if(string.length === 0) throw `${string || "provided input"} must be greater than zero` 
}

module.exports = {
    camelCase: (string) => {
        checkString(string)
        let stringSplit = string.split(' ')

        let endString = []
        for (let i=1; i<stringSplit.length; ++i){
            endString.push(stringSplit[i][0].toUpperCase() + stringSplit[i].slice(1))
        }

        return stringSplit[0] + endString.join('')
    },

    replaceChar: (string) => {
        checkString(string)
        let firstCharacter = string[0]
        
        let endStr = []
        let switchVal = 0

        for (let i=1; i<string.length; ++i){
            let equalTo = string[i].toLowerCase() === firstCharacter.toLowerCase()
            if(equalTo & switchVal === 0) {
                endStr.push(string[i] = "*")
                switchVal = 1
            } else if (equalTo & switchVal === 1) {
                endStr.push(string[i] = "$") 
                switchVal = 0
            } else {
                endStr.push(string[i])
            }
        }

        return firstCharacter + endStr.join('')
    },
    
    mashUp: (string1, string2) => {
        checkString(string1)
        checkString(string2)
        if(string1.length < 2 || string2.length < 2) throw "provided input must be greater 1"

        let stringTwoVal = string1.slice(0,2) + string2.slice(2)
        let stringOneVal = string2.slice(0,2) + string1.slice(2)

        return stringOneVal + " " + stringTwoVal
    }
}