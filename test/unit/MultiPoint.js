import { Point, MultiPoint } from '../../src';
import { JoomError } from '../../src/utils/errors';

describe('MultiPoint', () => {
  describe('Bare necessities', () => {
  	let mp = new MultiPoint([11, 22, 33], [44, 55, 66]);

    it('should be defined', function() {
        expect(mp).to.exist;
    });

    it('should return an instance of MultiPoint', function() {
    	expect(mp).to.be.instanceof(MultiPoint);
    });

    it('should have a length property with a value of 2', function() {
			expect(mp).to.have.ownProperty('length');
			expect(mp).to.have.lengthOf(2);
    });

    it('should have a working push() function', function() {
    	mp.push(new Point(77, 88 , 99));
			expect(mp).to.deep.equal([[11, 22, 33], [44, 55, 66], [77, 88 , 99]])
    });

    it('should error if no arguments provided', function() {
    	const errorProne = () => {
    		console.log(new MultiPoint());
    	}
    	expect(errorProne).to.throw('no values provided for multipoint');
    });

  });
}); 