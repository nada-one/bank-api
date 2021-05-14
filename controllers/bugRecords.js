// import Bug Model
const Bug = require("../models/bugRecord");

exports.listAllBugs = (req, res) => {
    Bug.find({}, (err, bug) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(bug);
    });
};

exports.createNewBug = (req, res) => {
    let  newBug = new Bug (req.body);
    newBug.save((err, bug) => {
        if (err) {
            res.status(500).send(err);
        }   
        res.status(201).json(bug);
    });
};

exports.updateBug = (req, res) => {
    Bug.findOneAndUpdate({ _id:req.params.id }, req.body, { new:true }, (err, bug) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(bug);
    });
};

exports.deleteBug = async ( req, res) => {
    await Bug.deleteOne({ _id:req.params.id }, (err) => {
        if (err) {
            return res.status(404).send(err);
        }
        res.status(200).json({ message:"Bug successfully deleted"});
    });
};
