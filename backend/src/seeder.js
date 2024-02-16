const fs = require("fs");
const mongoose = require("mongoose");
const Client = require("./models/clients");
require("dotenv").config();

//connect to the db
mongoose.connect(process.env.MONGO_URL);
console.log(
  "******************* DB CONNECTED SUCCESSFULLY!! ***********************".cyan
);

const deleteClients = async () => {
  try {
    await Client.deleteMany();
    console.log("Deleted all the clients from db..".red.inverse);
    process.exit();
  } catch (error) {
    console.log(error.red);
  }
};

if (process.argv[2] === "-d") {
  deleteClients();
}
