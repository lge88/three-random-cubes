
var lib = require( 'three-random-cubes' );
var expect = require( 'expect.js' );

describe( 'three-random-cubes', function() {

  it( 'should return Hello World', function() {
    expect( lib() ).to.be( 'Hello World' );
  } );

} );
