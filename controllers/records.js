// import Record Model
const Record = require("../models/record");

exports.listAllRecords = (req, res) => {
    const limit = req.query.limit !== undefined ? parseInt(req.query.limit) : null;
    Record.find({}, (err, rec) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(rec);
    }).limit(limit);
};

exports.listSpecificRecord = (req, res) => {
    Record.find({ _id: req.params.id }, (err, rec) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(rec);
    });
};


exports.createNewRecord = (req, res) => {
    let newRecord = new Record (req.body);
    newRecord.save((err, rec) => {
        if (err) {
            res.status(500).send(err);
        }   
        res.status(201).json({id: rec._id});
    });
};

exports.updateRecord = (req, res) => {
    Record.findOneAndUpdate({ _id: req.params.id }, req.body, { new:true }, (err, rec) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json({id: req.params.id});
    });
};

exports.deleteRecord = async ( req, res) => {
    await Record.deleteOne({ _id:req.params.id }, (err) => {
        if (err) {
            return res.status(404).send(err);
        }
        res.status(200).json({ message:"Record successfully deleted"});
    });
};
