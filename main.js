const fov = 45;
const near = 1;
const aspect = window.innerWidth / window.innerHeight;
const far = 8000;

scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

camera.position.z = 2000;
camera.position.y = -80;

//CAmera Settings
//camera.position.x = -6.612;
//camera.position.y = -144.651;
//camera.position.z = 0;
//camera.rotation.x = 1.535/ 180 * Math.PI;
//camera.rotation.y =  10 / 180 * Math.PI;
//camera.rotation.z = -0.013/ 180 * Math.PI;

camera.lookAt(new THREE.Vector3(0, 0, 0));


renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;


keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
keyLight.position.set(-100, 0, 100);
scene.add(keyLight);

fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
fillLight.position.set(100, 0, 100);
scene.add(fillLight);

backLight = new THREE.DirectionalLight(0xffffff, 1.0);
backLight.position.set(100, 0, -100).normalize();
scene.add(backLight);


mtlLoader = new THREE.MTLLoader();
mtlLoader.setTexturePath('objects/');

body = new THREE.OBJLoader();
frontPal1 = new THREE.OBJLoader();
frontPal2 = new THREE.OBJLoader();
backPal1 = new THREE.OBJLoader();
backPal2 = new THREE.OBJLoader();

body.load('objects/body_yeni.obj', function (object) {
	scene.add(object);
	object.position.x = 0;
	object.position.z = 0;
});

frontPal1.load('objects/pal.obj', function (object) {
	scene.add(object);
	object.rotateZ(0);
	object.position.x = 800;
	object.position.z = 600;
});
frontPal2.load('objects/pal.obj', function (object) {
	scene.add(object);
	object.rotateZ(0);
	object.position.x = 800;
	object.position.z = -500;
});

window.addEventListener('resize', onResize, false);

function onResize() {
	renderer.setSize(window.innerWidth, window.innerHeight);
	camera.aspect = (window.innerWidth / window.innerHeight);
	camera.updateProjectionMatrix();
	console.log('resize windows');
}

function animate() {
	requestAnimationFrame(animate);
	//Turn Anim
	//scene.rotation.x += 0.01
	//scene.rotation.y += 0.01
	//scene.rotation.z += 0.01

	controls.update();
	renderer.render(scene, camera);
};

animate();