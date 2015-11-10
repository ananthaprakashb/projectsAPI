var should = require('should'),
    sinon = require('sinon');

describe('Project Controller Test', function(){
    describe('Post', function(){
        it('should not accept allow empty project_name', function(){
            var Project = function(project){
                this.save = function(){}
            };
            var req = {
                body: {
                    projected_completion_date: 'Mar 31 2016'
                }
            }
            var res = {
                status: sinon.spy(),
                send: sinon.spy()
            }

            var projectControl = require('../Controllers/projectController')(Project);
            projectControl.post(req,res);
            res.status.calledWith(400).should.equal(true, 'Bad Status'+ res.status.args[0][0]);
            res.send.calledWith('Project name is required').should.equal(true);
        })
    })
})
