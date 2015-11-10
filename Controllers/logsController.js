var logsController = function(notes){
    var post = function(req, res){
        if(!req.body.project){
            res.status(400);
            res.send('Project information is required');
        } else {
            var note = new notes(req.body);
            note.save();
            res.status(201);
            res.send(note);
        }
    }
    var get = function(req, res){
        var query = {};

        if(req.query.project){
            query.project = req.query.project;
        }
        notes.find(query,function(err, note){
            if(err){
                res.status(500).send(err);
            }
            else{
                res.json(note);
            }
        });
    }
    return{
        post:post,
        get:get
    }
};
module.exports = logsController;