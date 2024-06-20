const { expect } = require('chai');
const request = require('request');

describe('Index page', function () {
    const url = 'http://localhost:7865';
    it('should return 200', function (done) {
        request(url, function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('should return "Welcome to the payment system"', function (done) {
        request(url, function (error, response, body) {
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });
});