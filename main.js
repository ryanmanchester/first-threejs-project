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
renderer.setClearColor("#dddab4");
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Make responsive
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
})

//Create a floating torus knot
const geometry = new THREE.TorusGeometry(1, 0.4, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: "#78c9ad" });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
camera.position.z = 5;

const light = new THREE.PointLight(0xFFFFFF, 1);
light.position.set(10, 0, 25);
scene.add(light);

//Create an animate loop to render cube to Scene
const animate = () => {
  requestAnimationFrame(animate);
  mesh.rotation.x += .02;
  mesh.rotation.y += 0.02;
  renderer.render(scene, camera);
}

animate();
