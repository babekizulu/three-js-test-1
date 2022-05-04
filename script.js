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

// //Create a Mesh
// const cube = new Mesh(geometry, material);

// //Add the Mesh to the Scene 
// scene.add(cube);

//Render the Scene 
renderer.render(scene, camera);

//Create a directional light
const color = '#fff',
    intensity = 1;
const light = new DirectionalLight(color, intensity);
light.position.set(-1, 2, 4);
scene.add(light);

const makeInstance = (geometry, color, x) => {
    const material = new MeshPhongMaterial({color});
    const cube = new Mesh(geometry, material);
    scene.add(cube);
    cube.position.x = x;
    return cube;
}

const cubes = [
    makeInstance(geometry, '#44aa88', 0),
    makeInstance(geometry, '#8844aa', -2),
    makeInstance(geometry, '#aa8844', 2),
];

//Animate all 3 Cubes to spin by rendering it inside of render loop
//Give slightly different rotations to each Cube
const render = (time) => {
    time *= 0.001; //Convert time to seconds 

    cubes.forEach((cube, ndx) => {
        const speed = 1 + ndx * 0.1;
        const rot = time * speed;
        cube.rotation.x = rot;
        cube.rotation.y = rot;
    });

    renderer.render(scene, camera);

    requestAnimationFrame(render);
};
requestAnimationFrame(render);

