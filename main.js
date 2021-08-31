//Boilerplate THREE setup
//1. Initialize the scene and PerspectiveCamera
//2. Initialize renderer and set the size
//3. Append the renderer to the browser body

//Textures
const textureLoader = new THREE.TextureLoader();
const normalTexture = textureLoader.load('/assets/normal-map-stone.jpeg')

//DAT GUI
const gui = new dat.GUI();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Make responsive
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
})

//Create a floating shape
const geometry = new THREE.SphereGeometry(1, 64, 64);
const material = new THREE.MeshStandardMaterial();
// material.roughness = 0;
// material.metalness = 1;
material.normalMap = normalTexture;

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 3;

//Red color point light
const light = new THREE.PointLight( 0xff0000, 2);
light.position.set( -1.21, 1.34, 0.89 );
light.intensity = 1;
scene.add( light );

//White color poiont light
const light2 = new THREE.PointLight( 0xffffff, 1)
light2.position.set(2, 3, 4);
scene.add( light2 );

//Indigo light
const light3 = new THREE.PointLight('#00b7ff', 2)
light3.position.set(2.04, -3, -0.48);
light3.intensity = 1;
scene.add(light3)

//Point light helper
// const pointLightHelper = new THREE.PointLightHelper(light, 1);
// const pointLightHelper2 = new THREE.PointLightHelper(light3, 1);
// scene.add(pointLightHelper);
// scene.add(pointLightHelper2);

//Add lights to the GUI
gui.add(light2.position, 'y').min(-3).max(3).step(0.01);
gui.add(light2.position, 'x').min(-6).max(6).step(0.01);
gui.add(light2.position, 'z').min(-3).max(3).step(0.01);
gui.add(light3, 'intensity').min(0).max(10).step(0.01);

//Create an animate loop to render cube to Scene
const animate = () => {
  requestAnimationFrame(animate);
  //mesh.rotation.x += .02;
  mesh.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();
