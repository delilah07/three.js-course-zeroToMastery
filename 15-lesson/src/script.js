import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { distance } from 'three/tsl';
import { Pane } from 'tweakpane';

// initialize pane
const pane = new Pane();

// initialize the scene
const scene = new THREE.Scene();

// add texture Loader
const textureLoader = new THREE.TextureLoader();

// add stuff here
const sunTexture = textureLoader.load('/textures/2k_sun.jpg');
const mercuryTexture = textureLoader.load('/textures/2k_mercury.jpg');
// mercuryTexture.colorSpace = THREE.SRGBColorSpace
const venusTexture = textureLoader.load('/textures/2k_venus_surface.jpg');
// venusTexture.colorSpace = THREE.SRGBColorSpace
const earthTexture = textureLoader.load('/textures/2k_earth_daymap.jpg');
// earthTexture.colorSpace = THREE.SRGBColorSpace
const marsTexture = textureLoader.load('/textures/2k_mars.jpg');
// marsTexture.colorSpace = THREE.SRGBColorSpace
const moonTexture = textureLoader.load('/textures/2k_moon.jpg');
// moonTexture.colorSpace = THREE.SRGBColorSpace

// add materials
const mercuryMaterial = new THREE.MeshStandardMaterial({
  map: mercuryTexture,
});
const venusMaterial = new THREE.MeshStandardMaterial({
  map: venusTexture,
});
const earthMaterial = new THREE.MeshStandardMaterial({
  map: earthTexture,
});
const marsMaterial = new THREE.MeshStandardMaterial({
  map: marsTexture,
});
const moonMaterial = new THREE.MeshStandardMaterial({
  map: moonTexture,
});

const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
const sunMeterial = new THREE.MeshBasicMaterial({ map: sunTexture });
const sun = new THREE.Mesh(sphereGeometry, sunMeterial);
sun.scale.setScalar(5);
scene.add(sun);

const planets = [
  {
    name: 'Mercury',
    radius: 0.5,
    distance: 10,
    speed: 0.01,
    material: mercuryMaterial,
    moons: [],
  },
  {
    name: 'Venus',
    radius: 0.8,
    distance: 15,
    speed: 0.007,
    material: venusMaterial,
    moons: [],
  },
  {
    name: 'Earth',
    radius: 1,
    distance: 20,
    speed: 0.005,
    material: earthMaterial,
    moons: [
      {
        name: 'Moon',
        radius: 0.3,
        distance: 3,
        speed: 0.015,
      },
    ],
  },
  {
    name: 'Mars',
    radius: 0.7,
    distance: 25,
    speed: 0.003,
    material: marsMaterial,
    moons: [
      {
        name: 'Phobos',
        radius: 0.1,
        distance: 2,
        speed: 0.02,
      },
      {
        name: 'Deimos',
        radius: 0.2,
        distance: 3,
        speed: 0.015,
        color: 0xffffff,
      },
    ],
  },
];

const createPlanet = (planet) => {
  const planetMesh = new THREE.Mesh(sphereGeometry, planet.material);
  planetMesh.scale.setScalar(planet.radius);
  planetMesh.position.x = planet.distance;
  return planetMesh;
};
const createMoon = (moon) => {
  const moonMesh = new THREE.Mesh(sphereGeometry, moonMaterial);
  moonMesh.scale.setScalar(moon.radius);
  moonMesh.position.x = moon.distance;
  return moonMesh;
};

const planetMeshes = planets.map((planet) => {
  //create the Mesh
  const planetMesh = createPlanet(planet);
  // add it to the scene
  scene.add(planetMesh);

  //loop through each moon  and create the moon
  planet.moons.forEach((moon) => {
    const moonMesh = createMoon(moon);
    // add the moon to the planet
    planetMesh.add(moonMesh);
  });
  return planetMesh;
});

//add light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// initialize the camera
const camera = new THREE.PerspectiveCamera(
  35,
  window.innerWidth / window.innerHeight,
  0.1,
  400
);
camera.position.z = 100;
camera.position.y = 5;

// initialize the renderer
const canvas = document.querySelector('canvas.threejs');
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// add controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.maxDistance = 200;
controls.minDistance = 20;

// add resize listener
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// initialize a clock
const clock = new THREE.Clock();

// render loop
const renderloop = () => {
  const elapsedTime = clock.getElapsedTime();
  //add animation
  planetMeshes.forEach((planet, i) => {
    planet.rotation.y += planets[i].speed;
    planet.position.x = Math.sin(planet.rotation.y) * planets[i].distance;
    planet.position.z = Math.cos(planet.rotation.y) * planets[i].distance;
    planet.children.forEach((moon, j) => {
      moon.rotation.y += planets[i].moons[j].speed;
      moon.position.x =
        Math.sin(moon.rotation.y) * planets[i].moons[j].distance;
      moon.position.z =
        Math.cos(moon.rotation.y) * planets[i].moons[j].distance;
    });
  });
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(renderloop);
};

renderloop();
