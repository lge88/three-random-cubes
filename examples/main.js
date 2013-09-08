var ISEViewport = require( 'ise-viewport' );
var randomCubes = require( 'three-random-cubes' );

var viewport = ISEViewport();
var scene = viewport.scene;
var cubes = randomCubes(
  100,
  [-200, 200],
  [-300, 300],
  [-100, 100]
);

cubes.forEach( function( c ) { scene.add(c); } );
