import { JoomArray } from './JoomArray';
import { Point } from './Point';
import { ErrorMaker, ERRORS } from './utils/errors';

class MultiPoint extends JoomArray {
	constructor(...args) {
		
		const makeError = new ErrorMaker('multipoint');
		makeError.if(args.length === 0, ERRORS.VALUE_MISSING);
		super(
				// force matches to numbers and return them
				arg => arg instanceof Point
					// if arg is a number, it's good to return
					? [ arg ]
					: arg
					// if not, convert it to a string...
					.toString()
					// ...scour it for any semblance of a signed decimal...
					.match(/(\ *([\-?\d]+[\.\d]?)\w+\ *[\,]?){3}/g)
					// ...and force all matches to number or zero
					.map(item => ( new Point(item) || 0 ) ),
			...args
		);
		// error if no matches
		makeError.if( (!this || !this.length), ERRORS.NO_MATCHES);
		// makeError.if( (this.length === 1), ERRORS.NOT_ENOUGH_VAL);
	}
}

export { MultiPoint };