'use strict';

module.exports = function(app) {
    var bugs = require('../controllers/bugRecords');

    app
    .route("/bugs")
    .get(bugs.listAllBugs)
    .post(bugs.createNewBug);

    app
    .route("/bugs/:id")
    .put(bugs.updateBug)
    .delete(bugs.deleteBug);
};