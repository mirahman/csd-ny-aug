var expect  = require('chai').expect;
var request = require('request');

describe('Status and content', function() {
    describe ('Main page', function() {
        it('status', function(done){
            request('http://csdnyoct.test/', function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it('content', function(done) {
            request('http://csdnyoct.test/' , function(error, response, body) {
                expect(body).to.contain('CSD');
                done();
            });
        });
    });

    describe ('About page', function() {
        it('status', function(done){
            request('http://csdnyoct.test/about.html', function(error, response, body) {
                expect(response.statusCode).to.equal(404);
                done();
            });
        });

    });
});