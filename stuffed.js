"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2016 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "stuffed",
			"path": "stuffed/stuffed.js",
			"file": "stuffed.js",
			"module": "stuffed",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/stuffed.git",
			"test": "stuffed-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Check if object contains something.
	@end-module-documentation
*/

var stuffed = function stuffed( object ){
	/*;
		@meta-configuration:
			{
				"object:required": "object"
			}
		@end-meta-configuration
	*/

	return ( Object.keys( object ).length != 0 &&

		JSON.stringify( object ) != JSON.stringify( { } ) &&

		Object.getOwnPropertyNames( object )
			.filter( function onEachProperty( property ){
				let descriptor = Object.getOwnPropertyDescriptor( object, property ) || { };

				return !!descriptor.enumerable;
			} ).length != 0 );
};

if( typeof module != "undefined" ){
	module.exports = stuffed;
}
