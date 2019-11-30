'use-strict';

let StringExtensions = function() {
	if(StringExtensions.prototype.instance)
		return StringExtensions.prototype.instance;
	else
		StringExtensions.prototype.instance = this;
	this.instance = undefined;

	/* Private Properties */
	let
	that = this,
	typePrototype = "".__proto__;


	/* Extension Methods */
	StringExtensions.prototype.toCamelCase = require('./lib/to-camel-case.js');


	/* Private Methods */
	let
	patchMethod = function(methodName, verbose) {
		if(typeof that[methodName] != 'function') return;

		if(!typePrototype[methodName]) {
			typePrototype[methodName] = function() {
				return that[methodName](this);
			};

			if(verbose) console.log(`"".${methodName}(...) is now supported.`);
		}
	};


	/* Methods */
	StringExtensions.prototype.patch = function(userConfig) {
		let
		extensionMethods = [
			'toCamelCase'
		],
		config = require('@fjbo-net/merge-objects')(
			userConfig || {},
			{
				verbose: false,
				methods: []
			}
		);

		for(let index in extensionMethods) {
			let methodName = extensionMethods[index];
			if ( config.methods.length == 0
				|| config.methods.includes(methodName) ) {
				patchMethod(methodName, config.verbose);
			}
		}
	};

	Object.freeze(this);
};


module.exports = new StringExtensions();
