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

// cubeMesh.rotation.reorder('YXZ');

// cubeMesh.rotation.y = THREE.MathUtils.degToRad(90); // Math.PI * 0.5; // 90 deg
// cubeMesh.rotation.x = THREE.MathUtils.degToRad(45);

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
// controls.autoRotate = true;

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

//initialization the clock
const clock = new THREE.Clock();
let previousTime = 0;

// render
function animate() {
  const currentTime = clock.getElapsedTime();
  const delta = currentTime - previousTime;
  previousTime = currentTime;

  cubeMesh.rotation.y += THREE.MathUtils.degToRad(1) * delta * 10;

  cubeMesh.scale.x = Math.sin(currentTime) * 10;
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();
