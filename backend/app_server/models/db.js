let mongoose = require("mongoose");

let dBURI = "mongodb://127.0.0.1:27017/project_paw";

mongoose.connect(dBURI, {useNewUrlParser: true,});

mongoose.connection.on("connected", () => {
    console.log("Connected To "+dBURI);
});

mongoose.connection.on("error", (error) => {
    console.log("Connection Error: " + error);
});

mongoose.connection.on("disconnected", () => {
    console.log("Disconnected from MongoDB");
});

require("./mahasiswa");
require("./history");