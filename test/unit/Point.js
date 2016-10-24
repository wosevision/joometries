import { Point } from '../../src';
import { JoomError } from '../../src/utils/errors';

describe('Point', () => {

	let point;

  describe('Bare necessities', () => {

	  beforeEach( () => {
	  	point = new Point(11, 22, 33);
	  });

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
			expect(point).to.deep.equal([11,22,33,44])
    });

    it('should error if no arguments provided', function() {
    	const errorProne = () => {
    		console.log(new Point());
    	}
    	expect(errorProne).to.throw('no values provided for point');
    });

    it('should error if insufficient arguments provided', function() {
    	const errorProne = () => {
    		console.log(new Point(11, 22));
    	}
    	expect(errorProne).to.throw('invalid number of values for point');
    });

  });

  describe('String matching', () => {

    it('should parse an easy, well-formatted string', function() {
  		point = new Point('11, 22, 33');
      expect(point).to.deep.equal([11,22,33]);
    });

    it('should tolerate wacky spacing', function() {
  		point = new Point('  11 , 22   , 33   ');
      expect(point).to.deep.equal([11,22,33]);
    });

    it('should recover from mixing strings with numbers', function() {
  		let point1 = new Point('11', 22, 33);
  		let point2 = new Point('11, 22', 33);
  		let point3 = new Point(11, '22', '33');
      expect(point1).to.deep.equal([11,22,33]);
      expect(point2).to.deep.equal([11,22,33]);
      expect(point3).to.deep.equal([11,22,33]);
    });

  });

  describe('Recovery from bad formatting', () => {
    it('should accept an already-initialized Point', function() {
  		let newPoint = new Point(point);
      expect(newPoint).to.deep.equal([11,22,33]);
    });
    it('should tolerate infinite levels of inappropriately nested arrays', function() {
  		let point1 = new Point([11, 22, 33]);
  		let point2 = new Point([[11, 22], 33]);
  		let point3 = new Point([[11], [[22], 33]]);
      expect(point1).to.deep.equal([11,22,33]);
      expect(point2).to.deep.equal([11,22,33]);
      expect(point3).to.deep.equal([11,22,33]);
    });
    it('should recover from basically any abuse', function() {
  		point = new Point([[11, ['22']], '33abc']);
      expect(point).to.deep.equal([11,22,33]);
    });
  });

}); 