import { ErrorMaker, ERRORS } from './utils/errors';

// Object.defineProperties(Array.prototype, {
// 	'flatMap': {
// 		value: function(lambda) {
// 			return Array.prototype.concat.apply([], this.map(lambda));
// 		},
// 		writeable: false,
// 		enumerable: false
// 	}
// });

class JoomArray extends Array {
	constructor(fn, ...args) {
		// make a new error generator
		// error immediately if no args present
		const makeError = new ErrorMaker('JoomArray');
		makeError.if(args.length === 0, ERRORS.VALUE_MISSING);
		
		// super( ...args.flatMap(fn) );
		
		let vals = Array.prototype.concat.apply([], args.map(fn));
		super(...vals);
	}
}

export { JoomArray };