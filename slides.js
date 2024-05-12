
import * as THREE from 'three'

//
function init() {
    // initialize the renderer
    var renderer = new THREE.WebGLRenderer();

    // This is usually used for HiDPI device to prevent blurring output canvas (docs)
    renderer.setPixelRatio(window.devicePixelRatio);

    // sets the viewport size (docs)
    renderer.setSize(window.innerWidth, window.innerHeight);
    console.log(window.innerWidth, window.innerHeight);

    // A canvas where the renderer draws its output (docs)
    // The renderer gives us a domElement (our viewport) and we append it as a child to webglviewer
    document.getElementById('webgl').appendChild(renderer.domElement);

    // Scenes allow you to set up what and where is to be rendered by three.js. This is where you place objects, lights, and cameras (docs)
    // We initialize a scene and get a reference to it which we store in the variable scene
    var scene = new THREE.Scene();

    // Initialize a camera that uses perspective projection (docs)
    // The second parameter set the ratio of camera view to the ratio of the window itself
    // The third and the fourth parameters decide the near and far plane of the camera
    // Any object with a lower distance than the third parameter will not be visible
    // Any object with a higher distance than the fourth parameter will not be visible
    var camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        1,
        10000000);

    // Set the position of the in the scene
    camera.position.set(0, 0, 0);

    // Make the camera point in a particular direction
    // We don't really have a lot of things to points towards so pointing towards a point at the (10, 0, 0) coordinates does not sound like a bad idea.
    camera.lookAt(10, 0, 0);

    // the geometry that we want the shape to be
    // parameters are the radius, width segments, and height segments
    var geometry = new THREE.SphereGeometry( 3, 32, 32 );

    // the material we want to put on the shape
    // the colour parameter defines the colour the material is composed of
    // currently it is green because the hex value of green is 00ff00
    // we can also add images here instead of colours to wrap
    // around the objects
    var material = new THREE.MeshBasicMaterial( {color: 0x00ff00, wireframe: true} );

    // combining the geometry and material to form a mesh
    var sphere = new THREE.Mesh( geometry, material );

    // setting the positon of the sphere to x = 10
    sphere.position.set(10, 0, 0)

    // the sphere to the scene
    scene.add( sphere );

    // push the scene and the camera into the renderer
    renderer.render(scene, camera);
}

init();



