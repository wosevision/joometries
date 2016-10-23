const ERRORS = {
	VALUE_MISSING: `no values provided`,
	NO_MATCHES: `no valid values found`,
	NOT_ENOUGH_VAL: `invalid number of values`
};

class JoomError extends Error {
  constructor(type, msg) {
    super(msg);
    this.type = type;
    this.message = `${this.message} for ${this.type}`;
    this.name = 'JoomError';
  }
  toString() {
	  return `${this.message} for ${this.type}`;
	}
}

class ErrorMaker {
	constructor(type) {
		this.type = type;
		Object.assign(this, ERRORS);
	}
	if (cond, msg) {
		if (!!cond) throw new JoomError(this.type, msg);
	}
}

export { ErrorMaker, ERRORS };