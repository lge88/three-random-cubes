
var arrgen = require( 'arr-gen' );
var THREE = require( 'three' );

module.exports = exports = function( num, xrange, yrange, zrange ) {
  num || ( num = 100 );
  return arrgen( num, function( i ) {
    return {
      x: random( xrange || [ -100, 100 ] ),
      y: random( yrange || [ -100, 100 ] ),
      z: random( zrange || [ -100, 100 ] )
    };
  } ).map( function( pos ) {
    var c = cube();
    c.position.copy( pos );
    return c;
  } );
};

function cube( w, h, t ) {
  var shininess = 50;
  var specular = 0x333333;
  var bumpScale = 1;
  var shading = THREE.SmoothShading;
  var m = new THREE.Mesh(
    new THREE.CubeGeometry( w || 40, h || 40, t || 40 ),
    new THREE.MeshPhongMaterial( {
      color: randomColor(), ambient: 0x000000,
      specular: 0x00ffaa,
      shininess: shininess,
      metal: true,
      shading: shading
    } )
  );
  m.material.wireframe = false;
  return m;
}

function randomColor() {
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}

function random( range ) {
  var a = range[0], b = range[1];
  return Math.random()*( b - a ) + a;
}
