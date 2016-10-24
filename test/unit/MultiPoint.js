import { Point, MultiPoint } from '../../src';
import { JoomError } from '../../src/utils/errors';

describe('MultiPoint', () => {
	let mp;
  describe('Bare necessities', () => {

	  beforeEach( () => {
	  	mp = new MultiPoint([11, 22, 33], [44, 55, 66]);
	  });

    it('should be defined', () => {
        expect(mp).to.exist;
    });

    it('should return an instance of MultiPoint', () => {
    	expect(mp).to.be.instanceof(MultiPoint);
    });

    it('should have a length property with a value of 2', () => {
			expect(mp).to.have.ownProperty('length');
			expect(mp).to.have.lengthOf(2);
    });

    it('should have a working push() function', () => {
    	mp.push(new Point(77, 88 , 99));
			expect(mp).to.deep.equal([[11, 22, 33], [44, 55, 66], [77, 88 , 99]])
    });

    it('should error if no arguments provided', () => {
    	const errorProne = () => {
    		console.log(new MultiPoint());
    	}
    	expect(errorProne).to.throw('no values provided for multipoint');
    });

  });

  describe('String matching', () => {

    it('should parse a pair of strings that represent a Point each', () => {
  		mp = new MultiPoint('11, 22, 33', '44, 55, 66');
      expect(mp).to.deep.equal([[11,22,33], [44, 55, 66]]);
    });

    it('should parse a single string that represents two Points', () => {
  		mp = new MultiPoint('11,22,33 44,55,66');
      expect(mp).to.deep.equal([[11,22,33], [44, 55, 66]]);
    });

    it('should parse two strings that represent two Points each', () => {
  		mp = new MultiPoint('11,22,33 44,55,66', '11,22,33 44,55,66');
      expect(mp).to.deep.equal([[11,22,33], [44, 55, 66], [11,22,33], [44, 55, 66]]);
    });

    it('should tolerate extra spaces, missing commas and divided strings', () => {
  		mp = new MultiPoint('11,   22 33   44,55  66', '11   22, 33   44 55 66');
      expect(mp).to.deep.equal([[11,22,33], [44, 55, 66], [11,22,33], [44, 55, 66]]);
    });

  });
}); 