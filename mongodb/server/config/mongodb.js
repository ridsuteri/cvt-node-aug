const mongoose = require("mongoose");

const db = mongoose.connect("mongodb+srv://ridsuteri:qYXUDTZE1VhnUffQ@cluster0.ob2ugjb.mongodb.net/").then(()=>{
    console.log('⚡️⚡️⚡️ Connected to the db ⚡️⚡️⚡️')
}).catch(()=>{
    console.log('error connecting to the db')
});

module.exports = db;