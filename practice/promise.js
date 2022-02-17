const isMomHappy = true

const willIGetNewPhone = new Promise (
    (resolve, reject) => {
        if (isMomHappy) {
            const phone = {
                brand: `Samsung`,
                color: `Black`
            };
            resolve(phone);
        } else {
            const reason = new Error('mom is not happy');
            reject(reason);
        }
    }
);

async function showOff(phone) {
    return new Promise(
        (resolve, reject) => {
            
        }
    var message = `Hey friend I have a new ` + phone.color + ' ' + phone.brand + ` phone`
    return Promise.resolve(message);
}

var askMom = function() {
    console.log('before asking mom');
    willIGetNewPhone 
        .then(showOff)
        .then(function (fulfilled) {
        console.log(fulfilled);
        })
        .catch(function (error) {
            console.log(error.message);
        });
    console.log('after asking mom');
};

askMom();



