# string-extensions
> String extension methods.


## Install
Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save @fjbo-net/string-extensions
```


## Usage
Pro tip: [Read this guide and try @fjbo-net/string-extensions side by side in RunKit](https://npm.runkit.com/@fjbo-net/string-extensions)
```js
'use-strict';

// To use string-extensions, you would have to:
// 1. Import it
const ext = require('@fjbo-net/string-extensions');


// 2. Call the methods you want to use:
// 2.1: You can call the methods in a "static" fashion
console.log(
	ext.toCamelCase('New Programs Makers')
)

// 2.2: "Patch" (or polyfill) your run-time environment:
// Calling the 'patch' method will make extension methods
// available natively like "any string".toCamelCase()
ext.patch(
	// (optional) param: userConfig [plain object]
	// This parameter lets you configure this process...
	{
		// property: verbose [boolean]
		// This option will output information to the console,
		// i.e list the methods that were added to the string class.
		verbose: true,

		// property: methods [string array]
		// This options lets you whitelist the methods you actually
		// want or need.
		// ONLY these methods will become available in the string class.
		// But, passing an empty array is like not passing a list at all.
		methods: [
			'toCamelCase'
		]
	}
);

// Now you can call extension methods just like any other native method.
console.log(
	"Neutral Political Machine".toCamelCase(),
)
// => "neutralPoliticalMachine"

console.log(
	"Even weird !@#$!@ characters___get cl*eaned up *(&^)%$ 2".toCamelCase()
)
// => "evenWeirdCharactersGetClEanedUp2"


/*
	But wait, if you are feeling adventurous you can forget
	about everything above and just import the extensions
	and used them right away:

	// you could either skip or use a config object ;)
	require('@fjbo-net/string-extensions').patch();

	console.log(
		"Neutral Political Machine".toCamelCase(),
	)
*/

```


## About
### Author
**FJBO | Francisco Javier Becerra-Ortiz**

### License
Copyright © 2019, [FJBO](https://github.com/fjbo-net).
Released under the [MIT License](LICENSE).
