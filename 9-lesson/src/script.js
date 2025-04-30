import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// initialize the scene
const scene = new THREE.Scene();

// add objects to the scene
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({
  color: 'red',
  // transparent: true,
  // opacity: 0.5,
});
const planeGeometry = new THREE.PlaneGeometry(1, 1);

cubeMaterial.transparent = true;
cubeMaterial.opacity = 0.5;
cubeMaterial.color = new THREE.Color(0x0ff000);
cubeMaterial.side = THREE.DoubleSide;
// cubeMaterial.fog = false; // objects will not be foggy

const fog = new THREE.Fog(0xffffff, 1, 10);
scene.fog = fog;
scene.background = new THREE.Color(0xffffff);

const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
const cubeMesh2 = new THREE.Mesh(cubeGeometry, cubeMaterial);
const planeMesh = new THREE.Mesh(planeGeometry, cubeMaterial);
cubeMesh2.position.x = 1.5;
planeMesh.position.x = -1.5;
scene.add(cubeMesh);
scene.add(cubeMesh2);
scene.add(planeMesh);
// seen only from one side because Three.js has one side material,
// to make it doublside - use .side = THREE.DoubleSide or .side = 2

const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

// initialize the camera
const camera = new THREE.PerspectiveCamera(
  35,
  window.innerWidth / window.innerHeight,
  0.1,
  200
);

camera.position.z = 5;

// initialize the renderer
const canvas = document.querySelector('canvas.threejs');
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);

// orbit controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.autoRotate = true;

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// render
function animate() {
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();
