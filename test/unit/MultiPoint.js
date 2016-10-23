import { MultiPoint } from '../../src';
import { JoomError } from '../../src/utils/errors';

describe('MultiPoint', () => {
  describe('Bare necessities', () => {
  	let point = new MultiPoint([11, 22, 33], [44, 55, 66]);

    it('should be defined', function() {
        expect(point).to.exist;
    });

    it('should return an instance of MultiPoint', function() {
    	expect(point).to.be.instanceof(MultiPoint);
    });

    it('should have a length property with a value of 2', function() {
			expect(point).to.have.ownProperty('length');
			expect(point).to.have.lengthOf(2);
    });

    it('should have a working push() function', function() {
    	point.push(44);
			expect(...point).to.equal(...[[11, 22, 33], [44, 55, 66],44])
    });

    it('should error if no arguments provided', function() {
    	const errorProne = () => {
    		console.log(new MultiPoint());
    	}
    	expect(errorProne).to.throw('no values provided for multipoint');
    });

  });
}); 