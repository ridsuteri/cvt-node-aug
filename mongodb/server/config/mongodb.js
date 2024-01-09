const mongoose = require("mongoose");

const db = mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log('⚡️⚡️⚡️ Connected to the db ⚡️⚡️⚡️')
}).catch(()=>{
    console.log('error connecting to the db')
});

module.exports = db;