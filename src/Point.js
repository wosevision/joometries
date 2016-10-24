import { JoomArray } from './JoomArray';
import { MultiPoint } from './MultiPoint';
import { ErrorMaker, ERRORS } from './utils/errors';

class Point extends JoomArray {
	constructor(...args) {
		// make a new error generator
		const makeError = new ErrorMaker('point');
		makeError.if(args.length === 0, ERRORS.VALUE_MISSING);
		// super(fn, ...args) a new JoomArray with a flatmap function
		super(
			// force matches to numbers and return them
			arg => typeof arg === 'number' 
				// if arg is a number, it's good to return
				? [ arg ]
				: arg
				// if not, convert it to a string...
				.toString()
				// ...scour it for any semblance of a signed decimal...
				.match(/(\-?\d+(\.\d+)?)/g)
				// ...and force all matches to number or zero
				.map(item => ( Number(item) || 0 ) ),
			...args
		);
		// error if no matches
		makeError.if(!this, ERRORS.NO_MATCHES);
		// error if final point has more than 3 coords
		makeError.if(this.length !== 3, ERRORS.NOT_ENOUGH_VAL);
	}
	push(...vals) {
		const point = new Point(vals);
		return new MultiPoint(this, point);
	}
}

export { Point };