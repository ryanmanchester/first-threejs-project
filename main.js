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
const geometry = new THREE.SphereGeometry(1.5, 64, 64);
const material = new THREE.MeshStandardMaterial({ color: "#78c9ad" });
material.roughness = 0;
material.metalness = 1;
material.normalMap = normalTexture;

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 3;

const light = new THREE.PointLight( 0xff0000, 2);
light.position.set( 1, 1, 1 );
scene.add( light );

const light2 = new THREE.PointLight( 0xffffff, 1)
light2.position.set(2, 3, 4);
scene.add( light2 );


//Create an animate loop to render cube to Scene
const animate = () => {
  requestAnimationFrame(animate);
  //mesh.rotation.x += .02;
  mesh.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();
