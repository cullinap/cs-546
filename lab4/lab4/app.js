const bands = require("./data/bands");
const connection = require("./config/mongoConnection");

const addOneBand = async () => {
  console.log("Let's add some bands");

  // test band empty string
  try {
    pinkFloyd = await bands.create(
      " ",
      ["Progressive Rock", "Psychedelic rock", "Classic Rock"],
      "http://www.pinkfloyd.com",
      "EMI",
      [
        "Roger Waters",
        "David Gilmour",
        "Nick Mason",
        "Richard Wright",
        "Sid Barrett",
      ],
      1965
    );
    console.log(pinkFloyd);
  } catch (e) {
    console.log(e);
  }

  // test website empty string
  try {
    pinkFloyd = await bands.create(
      "Pink Floyd",
      ["Progressive Rock", "Psychedelic rock", "Classic Rock"],
      " ",
      "EMI",
      [
        "Roger Waters",
        "David Gilmour",
        "Nick Mason",
        "Richard Wright",
        "Sid Barrett",
      ],
      1965
    );
    console.log(pinkFloyd);
  } catch (e) {
    console.log(e);
  }

  // test recordLabel 
  try {
    pinkFloyd = await bands.create(
      "Pink Floyd",
      ["Progressive Rock", "Psychedelic rock", "Classic Rock"],
      "http://www.pinkfloyd.com",
      " ",
      [
        "Roger Waters",
        "David Gilmour",
        "Nick Mason",
        "Richard Wright",
        "Sid Barrett",
      ],
      1965
    );
    console.log(pinkFloyd);
  } catch (e) {
    console.log(e);
  }

  // test genre is not an array 
  try {
    pinkFloyd = await bands.create(
      "Pink Floyd",
      "Progressive Metal",
      "http://www.pinkfloyd.com",
      "EMI",
      [
        "Roger Waters",
        "David Gilmour",
        "Nick Mason",
        "Richard Wright",
        "Sid Barrett",
      ],
      1965
    );
    console.log(pinkFloyd);
  } catch (e) {
    console.log(e);
  }

  // test bandMembers is not an array 
  try {
    pinkFloyd = await bands.create(
      "Pink Floyd",
      ["Progressive Rock", "Psychedelic rock", "Classic Rock"],
      "http://www.pinkfloyd.com",
      "EMI",
        "Roger Waters"
      ,
      1965
    );
    console.log(pinkFloyd);
  } catch (e) {
    console.log(e);
  }

  // test genre has wrong type
  try {
    pinkFloyd = await bands.create(
      "Pink Floyd",
      ["Progressive Rock", "Psychedelic rock", 1987],
      "http://www.pinkfloyd.com",
      "EMI",
      [
        "Roger Waters",
        "David Gilmour",
        "Nick Mason",
        "Richard Wright",
        "Sid Barrett",
      ],
      1965
    );
    console.log(pinkFloyd);
  } catch (e) {
    console.log(e);
  }

  // test bandMembers has wrong type
  try {
    pinkFloyd = await bands.create(
      "Pink Floyd",
      ["Progressive Rock", "Psychedelic rock", "Classic Rock"],
      "http://www.pinkfloyd.com",
      "EMI",
      [
        "Roger Waters",
        "David Gilmour",
        "Nick Mason",
        1987,
        "Sid Barrett",
      ],
      1965
    );
    console.log(pinkFloyd);
  } catch (e) {
    console.log(e);
  }

  // test boundaries of year
  try {
    pinkFloyd = await bands.create(
      "Pink Floyd",
      ["Progressive Rock", "Psychedelic rock", "Classic Rock"],
      "http://www.pinkfloyd.com",
      "EMI",
      [
        "Roger Waters",
        "David Gilmour",
        "Nick Mason",
        "Richard Wright",
        "Sid Barrett",
      ],
      1899
    );
    console.log(pinkFloyd);
  } catch (e) {
    console.log(e);
  }

   // test boundaries of year
   try {
    pinkFloyd = await bands.create(
      "Pink Floyd",
      ["Progressive Rock", "Psychedelic rock", "Classic Rock"],
      "http://www.pinkfloyd.com",
      "EMI",
      [
        "Roger Waters",
        "David Gilmour",
        "Nick Mason",
        "Richard Wright",
        "Sid Barrett",
      ],
      "1989"
    );
    console.log(pinkFloyd);
  } catch (e) {
    console.log(e);
  }

  // test url not ending with .com
  try {
    pinkFloyd = await bands.create(
      "Pink Floyd",
      ["Progressive Rock", "Psychedelic rock", "Classic Rock"],
      "http://www.pinkfloyd.net",
      "EMI",
      [
        "Roger Waters",
        "David Gilmour",
        "Nick Mason",
        "Richard Wright",
        "Sid Barrett",
      ],
      1989
    );
    console.log(pinkFloyd);
  } catch (e) {
    console.log(e);
  }

  // test url not starting with http://www.
  try {
    pinkFloyd = await bands.create(
      "Pink Floyd",
      ["Progressive Rock", "Psychedelic rock", "Classic Rock"],
      "www.pinkfloyd.com",
      "EMI",
      [
        "Roger Waters",
        "David Gilmour",
        "Nick Mason",
        "Richard Wright",
        "Sid Barrett",
      ],
      1989
    );
    console.log(pinkFloyd);
  } catch (e) {
    console.log(e);
  }

   // test url name < 5 characters
   try {
    pinkFloyd = await bands.create(
      "Pink Floyd",
      ["Progressive Rock", "Psychedelic rock", "Classic Rock"],
      "http://www.pink.com",
      "EMI",
      [
        "Roger Waters",
        "David Gilmour",
        "Nick Mason",
        "Richard Wright",
        "Sid Barrett",
      ],
      1989
    );
    console.log(pinkFloyd);
  } catch (e) {
    console.log(e);
  }

  // test a tricky example with a period in it
  try {
    pinkFloyd = await bands.create(
      "Pink Floyd",
      ["Progressive Rock", "Psychedelic rock", "Classic Rock"],
      "http://www.p.nk.com",
      "EMI",
      [
        "Roger Waters",
        "David Gilmour",
        "Nick Mason",
        "Richard Wright",
        "Sid Barrett",
      ],
      1989
    );
    console.log(pinkFloyd);
  } catch (e) {
    console.log(e);
  }

  try {
    pinkFloyd = await bands.create(
      "Pink Floyd",
      ["Progressive Rock", "Psychedelic rock", "Classic Rock"],
      "http://www.pinkfloyd.com",
      "EMI",
      [
        "Roger Waters",
        "David Gilmour",
        "Nick Mason",
        "Richard Wright",
        "Sid Barrett",
      ],
      1965
    );
    console.log(pinkFloyd);
  } catch (e) {
    console.log(e);
  }

  const db = await connection.connectToDb();
  await connection.closeConnection();
}

const addManyBands = async () => {
  console.log("Let's add some bands");

  try {
    pinkFloyd = await bands.create(
      "Pink Floyd",
      ["Progressive Rock", "Psychedelic rock", "Classic Rock"],
      "http://www.pinkfloyd.com",
      "EMI",
      [
        "Roger Waters",
        "David Gilmour",
        "Nick Mason",
        "Richard Wright",
        "Sid Barrett",
      ],
      1965
    );
    console.log("Added a band!");
    console.log(pinkFloyd);
  } catch (e) {
    console.log(e);
  }

  try {
    metallica = await bands.create(
      "Metallica",
      ["Thrash", "Metal"],
      "http://www.metallica.com",
      "Elecktra",
      [
        "James Hetfield",
        "Lar Ulrich",
        "Kirk Hammet",
        "Cliff Burton",
      ],
      1981
    );
    console.log("Added a band!");
    console.log(metallica);
  } catch (e) {
    console.log(e);
  }

  try {
    fugazi = await bands.create(
      "Fugazi",
      ["post-hardcore", "alternative rock"],
      "http://www.fugazi.com",
      "Sub pop",
      [
        "Ian MacKaye",
        "Joe Lally",
        "Brendan Canty",
        "Guy Picciotto"
      ],
      1986
    );
    console.log("Added a band!");
    console.log(fugazi);
  } catch (e) {
    console.log(e);
  }

  const db = await connection.connectToDb();
  await connection.closeConnection();
  console.log("Done!");
};

const displayAllBands = async () => {
    try {
        console.log("\n\nhere are all the bands\n\n")
        const bandList = await bands.getAll();
        console.log(bandList);
      } catch(e) {
        console.log(e);
      }
    const db = await connection.connectToDb();
    await connection.closeConnection();
    console.log("Done!");
}

const getById = async () => {
    console.log("finding band by id")
    try {
        const bandList = await bands.get();
        console.log(bandList);
      } catch(e) {
        console.log(e);
      }

      try {
        const bandList = await bands.get(12898);
        console.log(bandList);
      } catch(e) {
        console.log(e);
      }

      try {
        const bandList = await bands.get(" ");
        console.log(bandList);
      } catch(e) {
        console.log(e);
      }

      try {
        const bandList = await bands.get("620b1d76ea13cbe903d75b6f");
        console.log(bandList);
      } catch(e) {
        console.log(e);
      }

      try {
        const bandList = await bands.get("620b1d76ea1c4ade903d75b6f");
        console.log(bandList);
      } catch(e) {
        console.log(e);
      }

      try {
        const bandList = await bands.get("520b1d76ea1c4ade903d75b6f");
        console.log(bandList);
      } catch(e) {
        console.log(e);
      }

    const db = await connection.connectToDb();
    await connection.closeConnection();
    console.log("Done!");
}


const deleteById = async () => {
  console.log("removing band by id")
    try {
        const bandList = await bands.remove();
        console.log(bandList);
      } catch(e) {
        console.log(e);
      }

      try {
        const bandList = await bands.remove(12898);
        console.log(bandList);
      } catch(e) {
        console.log(e);
      }

      try {
        const bandList = await bands.remove(" ");
        console.log(bandList);
      } catch(e) {
        console.log(e);
      }

      // does not exist
      try {
        const bandList = await bands.remove("620b1d950649482bf68ade53");
        console.log(bandList);
      } catch(e) {
        console.log(e);
      }

      try {
        const bandList = await bands.remove("620b1d950649482bf68ade54");
        console.log(bandList);
      } catch(e) {
        console.log(e);
      }

      try {
        const bandList = await bands.remove("520b1d76ea1c4ade903d75b6f");
        console.log(bandList);
      } catch(e) {
        console.log(e);
      }

  const db = await connection.connectToDb();
  await connection.closeConnection();
  console.log("Done!");
}

const renameById = async () => {
  console.log("renaming band by id")
    // try {
    //     const bandList = await bands.rename();
    //     console.log(bandList);
    //   } catch(e) {
    //     console.log(e);
    //   }

    //   try {
    //     const bandList = await bands.rename(12898);
    //     console.log(bandList);
    //   } catch(e) {
    //     console.log(e);
    //   }

    //   try {
    //     const bandList = await bands.rename(" ");
    //     console.log(bandList);
    //   } catch(e) {
    //     console.log(e);
    //   }

    //   // doesn't exist
    //   try {
    //     const bandList = await bands.rename("620b1d950649482bf68ade53");
    //     console.log(bandList);
    //   } catch(e) {
    //     console.log(e);
    //   }

      try {
        const bandList = await bands.rename("620b1fdf2a0a4c26a7f23254", "Phish");
        console.log(bandList);
      } catch(e) {
        console.log(e);
      }

      // try {
      //   const bandList = await bands.rename("520b1d76ea1c4ade903d75b6f");
      //   console.log(bandList);
      // } catch(e) {
      //   console.log(e);
      // }

  const db = await connection.connectToDb();
  await connection.closeConnection();
  console.log("Done!");
}


//addOneBand();
//addManyBands();
//displayAllBands();
//getById();
//deleteById()
//renameById()

