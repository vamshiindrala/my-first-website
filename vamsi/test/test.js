var assert = require('assert');
var series = require('../js/script.js');
describe('series', function() {
		it('should return [0] when n is 1', function () {
			assert.equal(0, series.getFibonocci(1)[0]);
		});

		it('should return [0,1,1] when n is 3', function () {
			assert.equal(1, series.getFibonocci(3)[2]);
		});

		it('should return [0,1,1,2] when n is 4', function () {
			assert.equal(2, series.getFibonocci(4)[3]);
		});

		it('should return ["Specify an integer > 0"] when n is 0', function () {
			assert.equal('Specify an integer which is > 0',series.getFibonocci(0));
		});

		

});