const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://shubhamchhangani1998:aMOjtaX5SPDJa9CR@try.d7lcf.mongodb.net/DevTinder",
    );
    console.log("connected to the database");
  } catch (error) {
    console.log("error connecting to the database: ", error);
  }
};

module.exports = connect;
