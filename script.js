import * as THREE from './node_modules/three/build/three.module.js';
const canvas = document.querySelector('#canvas');
const {
    WebGLRenderer, 
    PerspectiveCamera, 
    Scene, 
    BoxGeometry, 
    MeshPhongMaterial, 
    Mesh,
    DirectionalLight
} = THREE;

//Create a new WebGL Renderer instance
//Args: Canvas Element that we want to render 3D onto
const renderer = new WebGLRenderer({canvas});

//Create a Perspective Camera
const fieldOfView = 75,
    displayAspect = 2, //Canvas element default value 
    near = 0.1,
    far = 5;
const camera = new PerspectiveCamera(fieldOfView, displayAspect, near, far);

camera.position.z = 2;

//Make a Scene 
const scene = new Scene();

//Create a BoxGeometry 
const boxWidth = 1,
    boxHeight = 1,
    boxDepth = 1;
const geometry = new BoxGeometry(boxWidth, boxHeight, boxDepth);

//Create a material and set its colors 
const material = new MeshPhongMaterial({color: '#44aa88'});

//Create a Mesh
const cube = new Mesh(geometry, material);

//Add the Mesh to the Scene 
scene.add(cube);

//Render the Scene 
renderer.render(scene, camera);

//Animate the Cube to spin by rendering it inside of render loop 
const render = (time) => {
    time *= 0.001; //Convert time to seconds 

    cube.rotation.x = time;
    cube.rotation.y = time;

    renderer.render(scene, camera);

    requestAnimationFrame(render);
};
requestAnimationFrame(render);

//Create a directional light
const color = '#fff',
    intensity = 1;
const light = new DirectionalLight(color, intensity);
light.position.set(-1, 2, 4);
scene.add(light);

