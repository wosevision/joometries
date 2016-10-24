import { ErrorMaker, ERRORS } from './utils/errors';

class JoomArray extends Array {
	constructor(flatmapFn, ...args) {
		// make a new error generator
		// error immediately if no args present
		const makeError = new ErrorMaker('JoomArray');
		makeError.if(args.length === 0, ERRORS.VALUE_MISSING);
		
		// const vals = Array.prototype.concat.apply([], args.map(flatmapFn));
		const vals = Reflect.apply(Array.prototype.concat, [], args.map(flatmapFn));
		super(...vals);
	}
}

export { JoomArray };