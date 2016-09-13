(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define('three.Vector2Node', ['three'], factory);
    }
    else if ('undefined' !== typeof exports && 'undefined' !== typeof module) {
        module.exports = factory(require('three'));
    }
    else {
        factory(root.THREE);
    }
}(this, function(THREE) {

/**
 * @author sunag / http://www.sunag.com.br/
 */

THREE.Vector2Node = function( x, y ) {

	THREE.InputNode.call( this, 'v2', { share: false } );

	this.value = new THREE.Vector2( x, y );

};

THREE.Vector2Node.prototype = Object.create( THREE.InputNode.prototype );
THREE.Vector2Node.prototype.constructor = THREE.Vector2Node;

THREE.NodeMaterial.addShortcuts( THREE.Vector2Node.prototype, 'value', [ 'x', 'y' ] );
}));