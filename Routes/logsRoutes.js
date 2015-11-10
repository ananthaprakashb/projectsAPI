var express = require('express');

var routes = function(logs){
    var Notes = express.Router();
    var logsController = require('../Controllers/logsController')(logs);
    Notes.route('/')
        .post(logsController.post)
        .get(logsController.get);
    Notes.route('/:project')
        .get(function(req,res){
            logs.find({project:req.params.project}, function(err, note){
                if(err){
                    res.status(500).send(err);
                } else {
                    res.json(note);
                }
            });
    });

    return Notes;
}
module.exports = routes;

