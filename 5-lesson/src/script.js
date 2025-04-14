import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// initialize the scene
const scene = new THREE.Scene();

// add objects to the scene
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 'red' });
const cubeMaterial2 = new THREE.MeshBasicMaterial({ color: 'green' });
const cubeMaterial3 = new THREE.MeshBasicMaterial({ color: 'yellow' });

const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
cubeMesh.position.y = -1;
cubeMesh.scale.setScalar(0.5);
const cubeMesh2 = new THREE.Mesh(cubeGeometry, cubeMaterial2);
cubeMesh2.position.x = 2;
const cubeMesh3 = new THREE.Mesh(cubeGeometry, cubeMaterial3);
cubeMesh3.position.x = -2;

const group = new THREE.Group();

group.add(cubeMesh);
group.add(cubeMesh2);
group.add(cubeMesh3);
scene.add(group);

group.position.y = 2;
group.scale.setScalar(2);

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
