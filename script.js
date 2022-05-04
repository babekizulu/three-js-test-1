import { render } from 'node-sass';
import * as THREE from 'three';
const canvas = document.querySelector('#canvas');
const {WebGLRenderer, PerspectiveCamera, Scene, BoxGeometry, MeshBasicMaterial, Mesh} = THREE;

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
const material = new MeshBasicMaterial({color: '#44aa88'});

//Create a Mesh
const cube = new Mesh(geometry, material);

//Add the Mesh to the Scene 
scene.add(cube);

//Render the Scene 
renderer.render(scene, camera);
