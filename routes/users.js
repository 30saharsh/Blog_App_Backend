var mongoose = require('mongoose');


mongoose.connect("mongodb://127.0.0.1:27017/Blog_App_Database");



var userSchema = mongoose.Schema({
  Title: String,
  Description: String
})

module.exports = mongoose.model("users" , userSchema)