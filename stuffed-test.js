
const assert = require( "assert" );
const stuffed = require( "./stuffed.js" );

assert.equal( stuffed( { "name": "simple" } ), true, "should be true" );

assert.equal( stuffed( { } ), false, "should be false" );

console.log( "ok" );
