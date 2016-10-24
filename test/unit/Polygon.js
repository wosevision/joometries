import { Polygon, MultiPoint, Point } from '../../src';
import { JoomError } from '../../src/utils/errors';

describe('Polygon', () => {
	let poly;
  describe('Bare necessities', () => {

	  beforeEach( () => {
	  	// poly = new Polygon([11,11,11],[22,22,22],[33,33,33],[44,44,44]);
	  	poly = new Polygon( '11,11,11 22,22,22 33,33,33 44,44,44' );
	  });

    it('should be defined', () => {
        expect(poly).to.exist;
    });

    it('should return an instance of Polygon', () => {
    	expect(poly).to.be.instanceof(Polygon);
    });

    it('should have a length property with a value of 1', () => {
			expect(poly).to.have.ownProperty('length');
			expect(poly).to.have.lengthOf(1);
    });

    it('should always start with three square brackets: [ [ [', () => {
    	console.log(poly);
			expect(poly).to.deep.equal([[[11,11,11],[22,22,22],[33,33,33],[44,44,44]]])
    });

    it('should error if no arguments provided', () => {
    	const errorProne = () => {
    		console.log(new Polygon());
    	}
    	expect(errorProne).to.throw('no values provided for polygon');
    });

  });

  describe('String matching', () => {

    it('should parse two string pointsets into a Polygon of two Multipoints', () => {
  		poly = new Polygon('11, 22, 33 44, 55, 66', '11, 22, 33 44, 55, 66');
      expect(poly).to.deep.equal([[[11,22,33],[44,55,66]],[[11,22,33],[44,55,66]]]);
    });

    it('should parse two arrays of strings into a Polygon of two Multipoints', () => {
  		poly = new Polygon(['11, 22, 33','44, 55, 66'], ['11, 22, 33','44, 55, 66']);
      expect(poly).to.deep.equal([[[11,22,33],[44,55,66]],[[11,22,33],[44,55,66]]]);
    });

  });

  describe('Child geometry', () => {

	  beforeEach( () => {
	  	const point1 = new Point(11, 22, 33);
	  	const point2 = new Point(44, 55, 66);
    	const mp = new MultiPoint([11, 22, 33], [44, 55, 66]);
  		poly = new Polygon(mp, [point1, point2]);
	  });

    it('should accept any child class or array of child classes as input', () => {
      expect(poly).to.deep.equal([[[11,22,33],[44,55,66]],[[11,22,33],[44,55,66]]]);
    });

    it('should have a number at Polygon index[0][0][0]', () => {
      expect(poly[0][0][0]).to.be.a('number');
    });

    it('should maintain the integrity of its child class types', () => {
    	expect(poly[0]).to.be.instanceof(MultiPoint);
    	expect(poly[0][0]).to.be.instanceof(Point);
    });

  });

}); 