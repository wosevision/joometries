import { Point } from '../../src';
import { JoomError } from '../../src/utils/errors';

describe('Point', () => {
  describe('Bare necessities', () => {
  	let point = new Point(11, 22, 33);

    it('should be defined', function() {
        expect(point).to.exist;
    });

    it('should return an instance of Point', function() {
    	expect(point).to.be.instanceof(Point);
    });

    it('should have a length property with a value of 3', function() {
			expect(point).to.have.ownProperty('length');
			expect(point).to.have.lengthOf(3);
    });

    it('should have a working push() function', function() {
    	point.push(44);
			expect(...point).to.equal(...[11,22,33,44])
    });

    it('should error if no arguments provided', function() {
    	const errorProne = () => {
    		console.log(new Point());
    	}
    	expect(errorProne).to.throw('no values provided for point');
    });

  });
}); 