//Boilerplate THREE setup
//1. Initialize the scene and PerspectiveCamera
//2. Initialize renderer and set the size
//3. Append the renderer to the browser body
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setClearColor("#e5e5e5");
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Make responsive
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
})

//Create a floating torus knot
const geometry = new THREE.TorusKnotGeometry();
const material = new THREE.MeshStandardMaterial({ color: "#215873" });
const torusKnot = new THREE.Mesh(geometry, material);
scene.add(torusKnot);
camera.position.z = 5;

const light = new THREE.PointLight(0xFFFFFF, 1, 500);
light.position.set(10, 0, 25);
scene.add(light);

//Create an animate loop to render cube to Scene
const animate = () => {
  requestAnimationFrame(animate);
  torusKnot.rotation.x += 0.01;
  torusKnot.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();
