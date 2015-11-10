var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var projectsModel = new Schema({

    project:{type: String},
    projected_completion_date: {type: Date},
    start_date:{type:Date},
    lead:{type:String}
});

module.exports = mongoose.model('milestones', projectsModel);