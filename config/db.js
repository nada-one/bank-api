const mongoose = require("mongoose");

//Assign MongoDB connection string to Uri and declare options settings
var  uri = "mongodb+srv://admin_10:<password>@cluster0.nzoac.mongodb.net/bank-api?retryWrites=true&w=majority";

// Declare a variable named option and assign optional settings
const  options = {
    useNewUrlParser:  true,
    useUnifiedTopology:  true
};

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

// Connect MongoDB Atlas using mongoose connect method
mongoose.connect(uri, options).then(() => {
    console.log("Database connection established!");
    },
    err  => {
    {
    console.log("Error connecting Database instance due to:", err);
    }
});
