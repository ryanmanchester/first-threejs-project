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

//Create a floating cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 5;

//Create an animate loop to render cube to Scene
const animate = () => {
  requestAnimationFrame( animate );
  renderer.render( scene, camera);
}

animate();
