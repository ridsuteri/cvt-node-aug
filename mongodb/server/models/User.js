const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  firstName:{ 
    type: String,
    required: true
  },

  lastName: {
    type: String,
    default: ""
  },

  uidaiNo: {
    type:Number,
    required:true
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;