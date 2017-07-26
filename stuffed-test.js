
const assert = require( "assert" );
const stuffed = require( "./stuffed.js" );

assert.equal( stuffed( { "name": "simple" } ), true, "should be equal to true" );

assert.equal( stuffed( { } ), false, "should be equal to false" );

console.log( "ok" );
