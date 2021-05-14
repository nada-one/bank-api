'use strict';
// Import mongoose
    const mongoose = require("mongoose");

// Declare schema and assign Schema class
    const Schema = mongoose.Schema;

// Create Schema Instance and add schema propertise
    const recordSchema = new Schema({
        id: {
            type:Number
            //required:true
        },
        subject: {
            type:String
            //required:true
        },        
        description: {
            type:String
            //required:true
        },             
        created_date: {
            type:Date,
            default:Date.now
        },                   
        assigned_to: {
            type:String
            //required:true
        },                                
        status:{
            type:String
            //required:true
        }
    });

// create and export model
module.exports = mongoose.model("bugRecord", recordSchema);