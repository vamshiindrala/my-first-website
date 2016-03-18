var assert = require('assert');
var util = require('../js/script.js');
describe('util', function() {
	describe('Fibonocci', function () {

		it('should return [0] when n is 1', function () {
			assert.equal([0].length,util.getFibonocci(1).length);
			assert.equal(0, util.getFibonocci(1)[0]);
		});
	});
});