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
const geometry = new THREE.SphereGeometry(1, 32, 32);
const uv2Geometry = new THREE.BufferAttribute(geometry.attributes.uv.array, 2);
geometry.setAttribute('uv2', uv2Geometry);

// load the lava textures
const lavaAlbedo = textureLoader.load(
  '/texture/columned-lava-rock-bl/columned-lava-rock_albedo.png'
);
lavaAlbedo.colorSpace = THREE.SRGBColorSpace;
const lavaAo = textureLoader.load(
  '/texture/columned-lava-rock-bl/columned-lava-rock_ao.png'
);
const lavaEmissive = textureLoader.load(
  '/texture/columned-lava-rock-bl/columned-lava-rock_emissive.png'
);
const lavaHeight = textureLoader.load(
  '/texture/columned-lava-rock-bl/columned-lava-rock_height.png'
);
const lavaMetallic = textureLoader.load(
  '/texture/columned-lava-rock-bl/columned-lava-rock_metallic.png'
);
const lavaNormal = textureLoader.load(
  '/texture/columned-lava-rock-bl/columned-lava-rock_normal-ogl.png'
);
const lavaRoughness = textureLoader.load(
  '/texture/columned-lava-rock-bl/columned-lava-rock_roughness.png'
);

// load the vines textures
const vinesAlbedo = textureLoader.load('/texture/vines-bl/vines_albedo.png');
vinesAlbedo.colorSpace = THREE.SRGBColorSpace;
const vinesAo = textureLoader.load('/texture/vines-bl/vines_ao.png');
const vinesHeight = textureLoader.load('/texture/vines-bl/vines_height.png');
const vinesMetallic = textureLoader.load(
  '/texture/vines-bl/vines_metallic.png'
);
const vinesNormal = textureLoader.load(
  '/texture/vines-bl/vines_normal-ogl.png'
);
const vinesRoughness = textureLoader.load(
  '/texture/vines-bl/vines_roughness.png'
);

// load the space cruiser textures
const spaceCruiserAlbedo = textureLoader.load(
  '/texture/space-cruiser-panels2-bl/space-cruiser-panels2_albedo.png'
);
spaceCruiserAlbedo.colorSpace = THREE.SRGBColorSpace;
const spaceCruiserAo = textureLoader.load(
  '/texture/space-cruiser-panels2-bl/space-cruiser-panels2_ao.png'
);
const spaceCruiserHeight = textureLoader.load(
  '/texture/space-cruiser-panels2-bl/space-cruiser-panels2_height.png'
);
const spaceCruiserMetallic = textureLoader.load(
  '/texture/space-cruiser-panels2-bl/space-cruiser-panels2_metallic.png'
);
const spaceCruiserNormal = textureLoader.load(
  '/texture/space-cruiser-panels2-bl/space-cruiser-panels2_normal-ogl.png'
);
const spaceCruiserRoughness = textureLoader.load(
  '/texture/space-cruiser-panels2-bl/space-cruiser-panels2_roughness.png'
);

// lava material
const lavaPane = pane.addFolder({
  title: 'lava Material',
  expanded: true,
});

const lavaMaterial = new THREE.MeshStandardMaterial();
lavaMaterial.map = lavaAlbedo;
lavaMaterial.emissiveMap = lavaEmissive;
lavaMaterial.roughnessMap = lavaRoughness;
lavaMaterial.metalnessMap = lavaMetallic;
lavaMaterial.normalMap = lavaNormal;
lavaMaterial.displacementMap = lavaHeight;
lavaMaterial.displacementScale = 0.1;
lavaMaterial.aoMap = lavaAo;

lavaPane.addBinding(lavaMaterial, 'metalness', {
  min: 0,
  max: 1,
  step: 0.01,
});
lavaPane.addBinding(lavaMaterial, 'roughness', {
  min: 0,
  max: 1,
  step: 0.01,
});
lavaPane.addBinding(lavaMaterial, 'displacementScale', {
  min: 0,
  max: 1,
  step: 0.01,
});
lavaPane.addBinding(lavaMaterial, 'aoMapIntensity', {
  min: 0,
  max: 1,
  step: 0.01,
});
lavaPane.addBinding(lavaMaterial, 'emissive', {
  min: 0,
  max: 1,
  step: 0.01,
});

// vines material
const vinesPane = pane.addFolder({
  title: 'vines Material',
  expanded: true,
});

const vinesMaterial = new THREE.MeshStandardMaterial();
vinesMaterial.map = vinesAlbedo;
vinesMaterial.roughnessMap = vinesRoughness;
vinesMaterial.metalnessMap = vinesMetallic;
vinesMaterial.normalMap = vinesNormal;
vinesMaterial.displacementMap = vinesHeight;
vinesMaterial.displacementScale = 0.1;
vinesMaterial.aoMap = vinesAo;

vinesPane.addBinding(vinesMaterial, 'metalness', {
  min: 0,
  max: 1,
  step: 0.01,
});
vinesPane.addBinding(vinesMaterial, 'roughness', {
  min: 0,
  max: 1,
  step: 0.01,
});
vinesPane.addBinding(vinesMaterial, 'displacementScale', {
  min: 0,
  max: 1,
  step: 0.01,
});
vinesPane.addBinding(vinesMaterial, 'aoMapIntensity', {
  min: 0,
  max: 1,
  step: 0.01,
});

// space cruiser material
const spaceCruiserPane = pane.addFolder({
  title: 'Space Cruiser Material',
  expanded: true,
});

const spaceCruiserMaterial = new THREE.MeshStandardMaterial();
spaceCruiserMaterial.map = spaceCruiserAlbedo;
spaceCruiserMaterial.roughnessMap = spaceCruiserRoughness;
spaceCruiserMaterial.metalnessMap = spaceCruiserMetallic;
spaceCruiserMaterial.normalMap = spaceCruiserNormal;
spaceCruiserMaterial.displacementMap = spaceCruiserHeight;
spaceCruiserMaterial.displacementScale = 0.1;
spaceCruiserMaterial.aoMap = spaceCruiserAo;

spaceCruiserPane.addBinding(spaceCruiserMaterial, 'metalness', {
  min: 0,
  max: 1,
  step: 0.01,
});
spaceCruiserPane.addBinding(spaceCruiserMaterial, 'roughness', {
  min: 0,
  max: 1,
  step: 0.01,
});
spaceCruiserPane.addBinding(spaceCruiserMaterial, 'displacementScale', {
  min: 0,
  max: 1,
  step: 0.01,
});
spaceCruiserPane.addBinding(spaceCruiserMaterial, 'aoMapIntensity', {
  min: 0,
  max: 1,
  step: 0.01,
});

// intialize a group
const group = new THREE.Group();

// initialize the mesh

const lava = new THREE.Mesh();
lava.geometry = geometry;
lava.material = lavaMaterial;

const vines = new THREE.Mesh();
vines.geometry = geometry;
vines.material = vinesMaterial;
vines.position.x = 2.5;

const spaceCruiser = new THREE.Mesh();
spaceCruiser.geometry = geometry;
spaceCruiser.material = spaceCruiserMaterial;
spaceCruiser.position.x = -2.5;

// add the mesh to the scene
group.add(lava, vines, spaceCruiser);
scene.add(group);

// initialize the light
const light = new THREE.AmbientLight(0xffffff, 1);
scene.add(light);

const pointLight = new THREE.PointLight(0xffffff, 200);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

// initialize the camera
const camera = new THREE.PerspectiveCamera(
  35,
  window.innerWidth / window.innerHeight,
  0.1,
  10000
);
camera.position.z = 10;
camera.position.y = 5;

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

// render the scene
const renderloop = () => {
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(renderloop);
};

renderloop();
