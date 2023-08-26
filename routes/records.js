'use strict';

module.exports = function(app) {
    const records = require('../controllers/records');

    app
    .route("/records")
    .get(records.listAllRecords)
    .post(records.createNewRecord);

    app
    .route("/records/:id")
    .get(records.listSpecificRecord)
    .put(records.updateRecord)
    .delete(records.deleteRecord);
};