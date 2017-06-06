"use strict";

const assert = require( "assert" );
const stuffed = require( "./stuffed.js" );

assert.equal( stuffed( { "name": "simple" } ), true, "should be true" );
assert.equal( stuffed( { } ), false, "should be false" );

let Guest = { };
Guest.addGuest = function addGuest( name ) {
	console.log( name );
};

assert.equal( stuffed( Guest ), true, "should  be true" );

assert.equal( stuffed( { "data": [ 1, 2, 3 ] } ), true, "should be true" );

console.log( "ok" );
