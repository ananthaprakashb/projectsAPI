var express = require('express'),
    mongoose = require('mongoose')
    bodyParser = require('body-parser');


mongoose.connect('mongodb://localhost/projects');

var projects = require('./models/projectsModel');
var logs = require('./models/logsModel');

var app = express();

Projects = require('./routes/projectRoutes')(projects);
Notes = require('./routes/logsRoutes')(logs);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

var port = process.env.PORT || 9001;
app.use('/api/projects', Projects);
app.use('/api/notes', Notes);

/*var notesRouter = express.Router();
notesRouter.route('/')
    .post(function(req,res){
        var log = new logs(req.body);
        log.save(function(err){
            if(err){
                res.status(400).send(err);
            } else {
                res.status(201).send(log);
            }
        })

    })
    .get(function(req,res){
        logs.find(function(err, notes){
            if(err){
                res.status(400).send(err);
            } else {
                res.json(notes);
            }
        });
    });
notesRouter.route('/:id')
    .get(function(req,res){
        logs.findByid(req.params.id, function(err, note){
            if(err){
                res.status(400).send(err);
            } else {
                res.json(note);
            }
        })
    })
app.use('/api/notes', notesRouter);*/

app.get('/', function(req,res){
    res.send('Projects....');
});

app.listen(port, function(){
    console.log('listening port' + port);
});