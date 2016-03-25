/*var assert = require('assert');
var util = require('../js/sun.js');
describe('util', function() {
	describe('Fibonocci', function () {

		it('should return [0] when n is 1', function () {
			assert.equal([0].length,util.getFibonocci(1).length);
			assert.equal(0, util.getFibonocci(1)[0]);
		});
	});
});


*/
var assert = require('assert');
var calcy = require('../js/calcy.js');
describe('calcy', function() {
  it('Should display an error', function(){
   assert.equal(calcy.calcytest("11-+3"), "Error");
  });
});