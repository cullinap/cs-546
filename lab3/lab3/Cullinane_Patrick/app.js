const people = require("./people");
const stocks = require("./stocks");

async function testPersonById() {
    try {
        let full_name = await people.getPersonById("7989fa5e-8f3f-458d-ad58-23c8d9ef5a10")
        console.log(full_name);
    } catch(e) {
        console.log(e);
    }

    try {
        let notString = await people.getPersonById(-1)
        console.log(full_name);
    } catch(e) {
        console.log(e);
    }

    try {
        let notString = await people.getPersonById(1001)
        console.log(full_name);
    } catch(e) {
        console.log(e);
    }

    try {
        let notString = await people.getPersonById()
        console.log(full_name);
    } catch(e) {
        console.log(e);
    }

    try {
        let notString = await people.getPersonById('7989fa5e-5617-43f7-a931-46036f9dbcff')
        console.log(full_name);
    } catch(e) {
        console.log(e);
    }

}

async function testSameEmail() {
    try {
        let emailArr = await people.sameEmail("harvard.edu")
        console.log(emailArr);
    } catch(e) {
        console.log(e);
    }

    // check case
    console.log('check case')
    try {
        let emailArr = await people.sameEmail("HARVARD.EDU")
        console.log(emailArr);
    } catch(e) {
        console.log(e);
    }

    try {
        let emailArr = await people.sameEmail("foobar")
        console.log(emailArr);
    } catch(e) {
        console.log(e);
    }

    try {
        let emailArr = await people.sameEmail("foobar.")
        console.log(emailArr);
    } catch(e) {
        console.log(e);
    }

    try {
        let emailArr = await people.sameEmail("google.com.br")
        console.log(emailArr);
    } catch(e) {
        console.log(e);
    }

    try {
        let emailArr = await people.sameEmail("foobar.123")
        console.log(emailArr);
    } catch(e) {
        console.log(e);
    }

    try {
        let emailArr = await people.sameEmail("google.com.b")
        console.log(emailArr);
    } catch(e) {
        console.log(e);
    }

    try {
        let emailArr = await people.sameEmail(123)
        console.log(emailArr);
    } catch(e) {
        console.log(e);
    }

    try {
        let emailArr = await people.sameEmail()
        console.log(emailArr);
    } catch(e) {
        console.log(e);
    }

    try {
        let emailArr = await people.sameEmail("privacy.gov.au")
        console.log(emailArr);
    } catch(e) {
        console.log(e);
    }

    try {
        let emailArr = await people.sameEmail("51.la")
        console.log(emailArr);
    } catch(e) {
        console.log(e);
    }

    try {
        let emailArr = await people.sameEmail("google.ru")
        console.log(emailArr);
    } catch(e) {
        console.log(e);
    }

    try {
        let emailArr = await people.sameEmail("google.com")
        console.log(emailArr);
    } catch(e) {
        console.log(e);
    }

    try {
        let emailArr = await people.sameEmail("google.com.hk")
        console.log(emailArr);
    } catch(e) {
        console.log(e);
    }

}


async function testmanipulateIp() {
    try {
        let emailArr = await people.manipulateIp()
        console.log(emailArr);
    } catch(e) {
        console.log(e);
    }

}

async function testSameBirthday() {
    try {
        let emailArr = await people.sameBirthday(11, 30)
        console.log(emailArr);
    } catch(e) {
        console.log(e);
    }

    try {
        let emailArr = await people.sameBirthday(-1, 12)
        console.log(emailArr);
    } catch(e) {
        console.log(e);
    }

    try {
        let emailArr = await people.sameBirthday(4, 31)
        console.log(emailArr);
    } catch(e) {
        console.log(e);
    }

    try {
        let emailArr = await people.sameBirthday(1, 35)
        console.log(emailArr);
    } catch(e) {
        console.log(e);
    }

    try {
        let emailArr = await people.sameBirthday(1, -1)
        console.log(emailArr);
    } catch(e) {
        console.log(e);
    }

    try {
        let emailArr = await people.sameBirthday(9,25)
        console.log(emailArr);
    } catch(e) {
        console.log(e);
    }

    try {
        let emailArr = await people.sameBirthday("09", "25")
        console.log(emailArr);
    } catch(e) {
        console.log(e);
    }

    try {
        let emailArr = await people.sameBirthday("09", "31")
        console.log(emailArr);
    } catch(e) {
        console.log(e);
    }

    try {
        let emailArr = await people.sameBirthday("thirty", "eleven")
        console.log(emailArr);
    } catch(e) {
        console.log(e);
    }

    try {
        let emailArr = await people.sameBirthday("      ", "25")
        console.log(emailArr);
    } catch(e) {
        console.log(e);
    }

    try {
        let emailArr = await people.sameBirthday()
        console.log(emailArr);
    } catch(e) {
        console.log(e);
    }

}

async function testlistShareholders() {
    try {
        let shareHolders = await stocks.listShareholders("Powell Industries, Inc.")
        console.log(shareHolders);
    } catch(e) {
        console.log(e);
    }

    try {
        let shareHolders = await stocks.listShareholders("Aeglea BioTherapeutics, Inc.")
        console.log(shareHolders);
    } catch(e) {
        console.log(e);
    }

    try {
        let shareHolders = await stocks.listShareholders('foobar')
        console.log(shareHolders);
    } catch(e) {
        console.log(e);
    }

    try {
        let shareHolders = await stocks.listShareholders()
        console.log(shareHolders);
    } catch(e) {
        console.log(e);
    }

    try {
        let shareHolders = await stocks.listShareholders(1)
        console.log(shareHolders);
    } catch(e) {
        console.log(e);
    }

    try {
        let shareHolders = await stocks.listShareholders('   ')
        console.log(shareHolders);
    } catch(e) {
        console.log(e);
    }
}

async function testTotalShares() {
    try {
        let shareHolders = await stocks.totalShares('Aeglea BioTherapeutics, Inc.')
        console.log(shareHolders);
    } catch(e) {
        console.log(e);
    }

    try {
        let shareHolders = await stocks.totalShares('Nuveen Preferred and Income 2022 Term Fund')
        console.log(shareHolders);
    } catch(e) {
        console.log(e);
    }

    try {
        let shareHolders = await stocks.totalShares('Powell Industries, Inc.')
        console.log(shareHolders);
    } catch(e) {
        console.log(e);
    }

    try {
        let shareHolders = await stocks.totalShares(43)
        console.log(shareHolders);
    } catch(e) {
        console.log(e);
    }

    try {
        let shareHolders = await stocks.totalShares(' ')
        console.log(shareHolders);
    } catch(e) {
        console.log(e);
    }

    try {
        let shareHolders = await stocks.totalShares('Foobar Inc')
        console.log(shareHolders);
    } catch(e) {
        console.log(e);
    }

    try {
        let shareHolders = await stocks.totalShares()
        console.log(shareHolders);
    } catch(e) {
        console.log(e);
    }
}

async function testListStocks() {
    try {
        let shareHolders = await stocks.listStocks("Grenville", "Pawelke")
        console.log(shareHolders);
    } catch(e) {
        console.log(e);
    }

    try {
        let shareHolders = await stocks.listStocks('Patrick', "Hill")
        console.log(shareHolders);
    } catch(e) {
        console.log(e);
    }

    try {
        let shareHolders = await stocks.listStocks()
        console.log(shareHolders);
    } catch(e) {
        console.log(e);
    }

    try {
        let shareHolders = await stocks.listStocks('foo')
        console.log(shareHolders);
    } catch(e) {
        console.log(e);
    }

    try {
        let shareHolders = await stocks.listStocks("      ", "        ")
        console.log(shareHolders);
    } catch(e) {
        console.log(e);
    }

    try {
        let shareHolders = await stocks.listStocks(1,2)
        console.log(shareHolders);
    } catch(e) {
        console.log(e);
    }
}

async function testGetStockById() {
    try {
        let shareHolders = await stocks.getStockById("f652f797-7ca0-4382-befb-2ab8be914ff0")
        console.log(shareHolders);
    } catch(e) {
        console.log(e);
    }

    try {
        let shareHolders = await stocks.getStockById(-1)
        console.log(shareHolders);
    } catch(e) {
        console.log(e);
    }

    try {
        let shareHolders = await stocks.getStockById(1001)
        console.log(shareHolders);
    } catch(e) {
        console.log(e);
    }

    try {
        let shareHolders = await stocks.getStockById()
        console.log(shareHolders);
    } catch(e) {
        console.log(e);
    }

    try {
        let shareHolders = await stocks.getStockById('7989fa5e-5617-43f7-a931-46036f9dbcff')
        console.log(shareHolders);
    } catch(e) {
        console.log(e);
    }
}


testPersonById();
testSameEmail();
testmanipulateIp();
testSameBirthday();
testlistShareholders()
testTotalShares()
testListStocks()
testGetStockById() 






