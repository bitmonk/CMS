const mongoose = require("mongoose");

exports.connectDatabase = async () => {

//Connection to DB
await mongoose.connect("mongodb+srv://bitmonk:bitm0nk@cms0.mbr5fqw.mongodb.net/?retryWrites=true&w=majority")
    console.log("Database connected successfully..")
}