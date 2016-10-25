import { JoomArray } from './JoomArray';
import { MultiPoint } from './MultiPoint';
import { ErrorMaker, ERRORS } from './utils/errors';

class Polygon extends JoomArray  {
	constructor(...args) {
		
		const makeError = new ErrorMaker('polygon');
		makeError.if(args.length === 0, ERRORS.VALUE_MISSING);

		super(
			// force matches to numbers and return them
			arg => arg instanceof MultiPoint
				// if arg is a number, it's good to return
				? [ arg ]
				: arg
				// if not, convert it to a string...
				.toString()
				// ...scour it for any semblance of a signed decimal...
				.match(/((\ *(\-?[\d]+(\.?\d+)?)+\ *[\,]?){3})+/g)
				// ...and force all matches to number or zero
				.map(item => ( new MultiPoint(item) || 0 ) ),
			...args
		);
		makeError.if( (!this || !this.length), ERRORS.NO_MATCHES);
	}
}

export { Polygon };