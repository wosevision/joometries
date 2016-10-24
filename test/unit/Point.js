import { Point, MultiPoint } from '../../src';
import { JoomError } from '../../src/utils/errors';

describe('Point', () => {

	let point;

  describe('Bare necessities', () => {

	  beforeEach( () => {
	  	point = new Point(11, 22, 33);
	  });

    it('should be defined', () => {
        expect(point).to.exist;
    });

    it('should return an instance of Point', () => {
    	expect(point).to.be.instanceof(Point);
    });

    it('should have a length property with a value of 3', () => {
			expect(point).to.have.ownProperty('length');
			expect(point).to.have.lengthOf(3);
    });

    it('should have working array mechanics', () => {
    	expect(point.push).to.be.a('function');
    	expect(point.length).to.be.a('number');
    });

  });

  describe('Validation and errors', () => {

    it('should error if no arguments provided', () => {
    	const errorProne = () => {
    		console.log(new Point());
    	}
    	expect(errorProne).to.throw('no values provided for point');
    });

    it('should error if insufficient arguments provided', () => {
    	const errorProne = () => {
    		console.log(new Point(11, 22));
    	}
    	expect(errorProne).to.throw('invalid number of values for point');
    });

    it('should push new Points into a new MultiPoint instead of onto the Point', () => {
    	const newPoint = point.push(44, 55, 66);
    	expect(newPoint).to.be.instanceof(MultiPoint);
    	expect(newPoint).to.deep.equal([[ 11, 22, 33 ], [ 44, 55, 66 ]]);
    });

	});

  describe('String matching', () => {

    it('should parse an easy, well-formatted string', () => {
  		point = new Point('11, 22, 33');
      expect(point).to.deep.equal([11,22,33]);
    });

    it('should tolerate wacky spacing', () => {
  		point = new Point('  11 , 22   , 33   ');
      expect(point).to.deep.equal([11,22,33]);
    });

    it('should recover from mixing strings with numbers', () => {
  		const point1 = new Point('11', 22, 33);
  		const point2 = new Point('11, 22', 33);
  		const point3 = new Point(11, '22', '33');
      expect(point1).to.deep.equal([11,22,33]);
      expect(point2).to.deep.equal([11,22,33]);
      expect(point3).to.deep.equal([11,22,33]);
    });

  });

  describe('Recovery from bad formatting', () => {
    it('should accept an already-initialized Point', () => {
  		const newPoint = new Point(point);
      expect(newPoint).to.deep.equal([11,22,33]);
    });
    it('should tolerate infinite levels of inappropriately nested arrays', () => {
  		const point1 = new Point([11, 22, 33]);
  		const point2 = new Point([[11, 22], 33]);
  		const point3 = new Point([[11], [[22], 33]]);
      expect(point1).to.deep.equal([11,22,33]);
      expect(point2).to.deep.equal([11,22,33]);
      expect(point3).to.deep.equal([11,22,33]);
    });
    it('should recover from basically any abuse', () => {
  		point = new Point([[11, ['22']], '33abc']);
      expect(point).to.deep.equal([11,22,33]);
    });
  });

}); 