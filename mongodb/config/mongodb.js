const mongoose = require("mongoose");

const db = mongoose.connect("mongodb://localhost:27017/cvtDb").then(()=>{
    console.log('⚡️⚡️⚡️Connected to the db ⚡️⚡️⚡️')
}).catch(()=>{
    console.log('error connecting to the db')
});

module.exports = db;