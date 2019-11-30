'use-strict';

module.exports = input => input
	.replace(
		/(([^a-z0-9]+)([a-z0-9]))/gi,
		match => match
			.replace(/[^a-z0-9]+/gi, '')
					.toUpperCase())
	.replace(
		/^[A-Z]/,
		firstCharacter => firstCharacter
			.toLowerCase());
