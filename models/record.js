'use strict';
// Import mongoose
const mongoose = require("mongoose");

// Declare schema and assign Schema class
const { Schema } = mongoose;

// Create Schema Instance and add schema propertise
const recordSchema = new Schema({
    id: Number,
    account_type: String,      
    balance: Number,             
    last_transaction_date: {
        type:Date,
        default:Date.now
    },                   
    first_name: String,                                
    last_name: String,
    status: String
});

// create and export model
module.exports = mongoose.model("record", recordSchema);