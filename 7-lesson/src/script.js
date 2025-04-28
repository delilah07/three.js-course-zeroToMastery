import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// initialize the scene
const scene = new THREE.Scene();

// create custom geomerty and add objects to the scene
const geometry = new THREE.BufferGeometry();
const vertices = new Float32Array([
  0,
  0,
  0.5, // p0
  0,
  2,
  0.5, // p1
  2,
  0,
  0.5, // p2
]);
geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
const material = new THREE.MeshBasicMaterial({
  color: 'red',
  wireframe: true,
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

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
