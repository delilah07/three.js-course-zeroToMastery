import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// initialize the scene
const scene = new THREE.Scene();

// add objects to the scene
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({
  color: 'red',
  wireframe: true,
});
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cubeMesh);

const geometry1 = new THREE.CapsuleGeometry(1, 1, 1, 8);
const material1 = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
  wireframe: true,
});
const capsule = new THREE.Mesh(geometry1, material1);
capsule.position.x = 3;
scene.add(capsule);

const geometry2 = new THREE.CylinderGeometry(1, 1, 2, 32);
const material2 = new THREE.MeshBasicMaterial({
  color: 0xffff00,
  wireframe: true,
});
const cylinder = new THREE.Mesh(geometry2, material2);
cylinder.position.x = -3;
scene.add(cylinder);

const geometry3 = new THREE.PlaneGeometry(1, 1);
const material3 = new THREE.MeshBasicMaterial({
  color: 0xffff00,
  side: THREE.DoubleSide,
});
const plane = new THREE.Mesh(geometry3, material3);
plane.position.z = -2;
scene.add(plane);

const geometry = new THREE.TorusKnotGeometry(2, 0.5, 100, 4);
const material = new THREE.MeshBasicMaterial({
  color: 'blue',
  wireframe: true,
});
const torusKnot = new THREE.Mesh(geometry, material);
torusKnot.position.z = 5;
scene.add(torusKnot);

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
