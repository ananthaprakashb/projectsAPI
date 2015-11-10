var projectController = function(projects){
    var post = function(req, res){
        if(!req.body.project){
            res.status(400);
            res.send('Project name is required');
        } else {
            var project = new projects(req.body);
            project.save();
            res.status(201);
            res.send(project);
        }
    }
    var get = function(req, res){
        var query = {};

        if(req.query.project_name || req.query.project){
            query.project_name = req.query.project_name || req.query.project;
        }
        projects.find(query,function(err, projects){
            if(err){
                res.status(500).send(err);
            }
            else{
                res.json(projects);
            }
        });
    }
    return{
        post:post,
        get:get
    }
};
module.exports = projectController;