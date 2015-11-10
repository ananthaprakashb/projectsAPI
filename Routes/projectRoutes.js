var express = require('express');

var routes = function(projects){
    var Projects = express.Router();
    var ProjectController = require('../Controllers/projectController')(projects);
    Projects.route('/')
        .post(ProjectController.post)
        .get(ProjectController.get);
    Projects.use('/:id', function(req, res, next){
        projects.findById(req.params.id, function(err, project){
            if(err){
                res.status(500).send(err);
            }
            else if(project){
                req.project = project;
                next();
            }
            else{
                res.status(404).send('no project found');
            }
        });
    });
    Projects.route('/:id')

        .get(function(req, res){
            res.json(req.project);
        })
        .put(function(req, res){
            req.project.project_name = req.body.project_name;
            req.project.projected_end_date = req.body.projected_end_date;
            req.project.save(function(err){
                if(err)
                    res.status(500).send(err);
                else
                    res.json(req.project);
            });
        }
        )
        .patch(function(req,res){
            if(req.body._id) delete req.body._id;
            for(var p in req.body){
                req.project[p] = req.body[p];
            }
            req.project.save(function(err){
                if(err)
                    res.status(500).send(err);
                else
                    res.json(req.project);
            });
        })
        .delete(function(req,res){
            req.project.remove(function(err){
                if(err)
                    res.status(500).send(err);
                else
                    res.status(204).send('Removed');
            })
        });

    return Projects;
}
module.exports = routes;

