import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Pane } from 'tweakpane';

// initialize the pane
const pane = new Pane();

// initialize the scene
const scene = new THREE.Scene();

// initialize the loader
const textureLoader = new THREE.TextureLoader();

// initialize the geometry
const geometry = new THREE.BoxGeometry(1, 1, 1);
const uv2Box = new THREE.BufferAttribute(geometry.attributes.uv.array, 2);
geometry.setAttribute('uv2', uv2Box);

const torusKnotGeometry = new THREE.TorusKnotGeometry(0.5, 0.15, 100, 16);
const uv2Torus = new THREE.BufferAttribute(
  torusKnotGeometry.attributes.uv.array,
  2
);
torusKnotGeometry.setAttribute('uv2', uv2Torus);

const planeGeometry = new THREE.PlaneGeometry(1, 1);
const uv2Plane = new THREE.BufferAttribute(
  planeGeometry.attributes.uv.array,
  2
);
planeGeometry.setAttribute('uv2', uv2Plane);

const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const uv2Sphere = new THREE.BufferAttribute(
  sphereGeometry.attributes.uv.array,
  2
);
sphereGeometry.setAttribute('uv2', uv2Sphere);

const cylinderGeometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 32);
const uv2Cylinder = new THREE.BufferAttribute(
  cylinderGeometry.attributes.uv.array,
  2
);
cylinderGeometry.setAttribute('uv2', uv2Cylinder);

// initialize the texture
// const textureTest = textureLoader.load('/texture/uvMappingTest.jpg');
const textureAlbedo = textureLoader.load(
  '/texture/patchy-meadow1-bl/patchy-meadow1_albedo.png'
);
const textureAo = textureLoader.load(
  '/texture/patchy-meadow1-bl/patchy-meadow1_ao.png'
);
const textureHeight = textureLoader.load(
  '/texture/patchy-meadow1-bl/patchy-meadow1_height.png'
);
const textureMetallic = textureLoader.load(
  '/texture/patchy-meadow1-bl/patchy-meadow1_metallic.png'
);
const textureNormal = textureLoader.load(
  '/texture/patchy-meadow1-bl/patchy-meadow1_normal-ogl.png'
);
const textureRoughness = textureLoader.load(
  '/texture/patchy-meadow1-bl/patchy-meadow1_roughnes0s.png'
);

// initialize the material
const material = new THREE.MeshStandardMaterial();
material.map = textureAlbedo;
material.roughnessMap = textureRoughness;
material.roughness = 0.1;
material.metalnessMap = textureMetallic;
material.metalness = 0.1;
material.normalMap = textureNormal;
material.displacementMap = textureHeight;
material.displacementScale = 0.01;

material.aoMap = textureAo;

// initialize the mesh
const cube = new THREE.Mesh(geometry, material);

const knot = new THREE.Mesh(torusKnotGeometry, material);
knot.position.x = 1.5;

const plane = new THREE.Mesh(planeGeometry, material);
plane.position.x = -1.5;

const sphere = new THREE.Mesh(sphereGeometry, material);
sphere.position.y = -1.5;

const cylinder = new THREE.Mesh(cylinderGeometry, material);
cylinder.position.y = 1.5;

// add the mesh to the scene
const group = new THREE.Group();
group.add(cube, knot, plane, sphere, cylinder);
scene.add(group);

// initialize the light
const light = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light);

const pointLight = new THREE.PointLight(0xffffff, 1.2);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

// initialize the camera
const camera = new THREE.PerspectiveCamera(
  35,
  window.innerWidth / window.innerHeight,
  0.1,
  200
);
camera.position.z = 10;

// initialize the renderer
const canvas = document.querySelector('canvas.threejs');
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// instantiate the controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

scene.children;

// render the scene
const renderloop = () => {
  group.children.forEach((el) => {
    if (el instanceof THREE.Mesh) {
      el.rotation.y += 0.001;
    }
  });
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(renderloop);
};

renderloop();
