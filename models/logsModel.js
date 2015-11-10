var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var logsModel = new Schema({
    log_date:{type: Date},
    note: {type: String},
    project:{type:String}
});

module.exports = mongoose.model('logs', logsModel);