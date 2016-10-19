// app/models/user.js
// load the things we need
var mongoose = require('mongoose')
var Schema = mongoose.Schema;

// define the schema for our user model
var listingSchema = mongoose.Schema({
    title: String,
    owner: String,
    gallery: String,
}, {
    timestamps: true
});


// create the model for users and expose it to our app
module.exports = mongoose.model('listings', listingSchema); // nama collection
