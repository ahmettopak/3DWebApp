const fov = 45;
const near = 1;
const aspect = window.innerWidth / window.innerHeight;
const far = 8000;

scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

const urlParams = new URLSearchParams(window.location.search);

const frontpal = urlParams.get('frontpal');
const backpal = urlParams.get('backpal');
const leftmast = urlParams.get('leftmast');
const rightmast = urlParams.get('rightmast');
const ptz = urlParams.get('ptz');

console.log(frontpal);
console.log(backpal);
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


// keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
// keyLight.position.set(-100, 0, 100);
// scene.add(keyLight);

// fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(165, 6%, 13%)'), 0.75);
// fillLight.position.set(300, 300, -300);
// scene.add(fillLight);

backLight = new THREE.DirectionalLight(0xFF222222, 1.0);
backLight.position.set(-300, 300, 300).normalize();
scene.add(backLight);

backLight1 = new THREE.DirectionalLight(0xFF222222, 1.0);
backLight1.position.set(300, 300, -300).normalize();
scene.add(backLight1);



mtlLoader = new THREE.MTLLoader();
mtlLoader.setTexturePath('objects/');

body = new THREE.OBJLoader();
frontPal1 = new THREE.OBJLoader();
frontPal2 = new THREE.OBJLoader();
backPal1 = new THREE.OBJLoader();
backPal2 = new THREE.OBJLoader();
mastTaban = new THREE.OBJLoader();
mastUst = new THREE.OBJLoader();

body.load('objects/body_yeni.obj', function (object) {
	scene.add(object);
	object.position.x = 0;
	object.position.z = 0;
});

frontPal1.load('objects/pal.obj', function (object) {
	scene.add(object);
	if (frontpal != null) {
		if (frontpal > 0 && frontpal <= 30) {
			object.rotateZ(0.5);

			object.position.x = 800;
			object.position.z = 600;
			object.position.y = 150;


		}
		else if (frontpal > 30 && frontpal <= 60) {
			object.rotateZ(1);

			object.position.x = 650;
			object.position.z = 600;
			object.position.y = 300;

		}

		else if (frontpal > 60 && frontpal <= 90) {

			object.rotateZ(1.5);

			object.position.x = 500;
			object.position.z = 600;
			object.position.y = 350;
		}
		else if (frontpal > 90 && frontpal <= 120) {

			object.rotateZ(2);

			object.position.x = 350;
			object.position.z = 600;
			object.position.y = 350;
		}
		else if (frontpal > 120) {

			object.rotateZ(2);

			object.position.x = 350;
			object.position.z = 600;
			object.position.y = 350;
		}
		else if (frontpal > -30 && frontpal < 0) {

			object.rotateZ(-0.5);

			object.position.x = 750;
			object.position.z = 600;
			object.position.y = -200;
		}
		else if (frontpal > -60 && frontpal <= -30) {
			object.rotateZ(-1);
			object.position.x = 600;
			object.position.z = 600;
			object.position.y = -300;
		}
		else if (frontpal < -60) {
			object.rotateZ(-1);
			object.position.x = 600;
			object.position.z = 600;
			object.position.y = -300;
		}
		else {
			//Sıfır Oldupu Durum
			object.position.x = 800;
			object.position.z = 600;
		}
	}
	else {
		object.position.x = 800;
		object.position.z = 600;
	}
});
frontPal2.load('objects/pal.obj', function (object) {
	scene.add(object);
	if (frontpal != null) {
		if (frontpal > 0 && frontpal <= 30) {
			object.rotateZ(0.5);

			object.position.x = 800;
			object.position.z = -450;
			object.position.y = 150;


		}
		else if (frontpal > 30 && frontpal <= 60) {
			object.rotateZ(1);

			object.position.x = 650;
			object.position.z = -450;
			object.position.y = 300;

		}

		else if (frontpal > 60 && frontpal <= 90) {

			object.rotateZ(1.5);

			object.position.x = 500;
			object.position.z = -450;
			object.position.y = 350;
		}
		else if (frontpal > 90 && frontpal <= 120) {

			object.rotateZ(2);

			object.position.x = 350;
			object.position.z = -450;
			object.position.y = 350;
		}
		else if (frontpal > 120) {

			object.rotateZ(2);

			object.position.x = 350;
			object.position.z = -450;
			object.position.y = 350;
		}
		else if (frontpal > -30 && frontpal < 0) {

			object.rotateZ(-0.5);

			object.position.x = 750;
			object.position.z = -450;
			object.position.y = -200;
		}
		else if (frontpal > -60 && frontpal <= -30) {
			object.rotateZ(-1);
			object.position.x = 600;
			object.position.z = -450;
			object.position.y = -300;
		}
		else if (frontpal < -60) {
			object.rotateZ(-1);
			object.position.x = 600;
			object.position.z = -450;
			object.position.y = -300;
		}
		else {
			//Sıfır Oldupu Durum
			object.position.x = 800;
			object.position.z = -450;
		}

	}
	else {
		object.position.x = 800;
		object.position.z = -450;
	}


});
backPal1.load('objects/pal.obj', function (object) {
	scene.add(object);

	object.rotateZ(-3.1);

	object.rotateX(3.1);
	if (backpal != null) {
		if (backpal > 0 && backpal <= 30) {
			object.rotateZ(0.5);
			object.position.x = -700;
			object.position.z = -400;
			object.position.y = 100;
		}
		else if (backpal > 30 && backpal <= 60) {
			object.rotateZ(1);
			object.position.x = -600;
			object.position.z = -400;
			object.position.y = 300;
		}

		else if (backpal > 60 && backpal <= 90) {
			object.rotateZ(1.5);
			object.position.x = -450;
			object.position.z = -400;
			object.position.y = 350;
		}
		else if (backpal > 90 && backpal <= 120) {
			object.rotateZ(2);
			object.position.x = -300;
			object.position.z = -400;
			object.position.y = 350;
		}
		else if (backpal > 120) {
			object.rotateZ(2);
			object.position.x = -300;
			object.position.z = -400;
			object.position.y = 350;
		}
		else if (backpal > -30 && backpal < 0) {
			object.rotateZ(-0.5);
			object.position.x = -650;
			object.position.z = -400;
			object.position.y = -200;
		}
		else if (backpal > -60 && backpal <= -30) {
			//
			object.rotateZ(-1);
			object.position.x = -550;
			object.position.z = -400;
			object.position.y = -300;
		}
		else if (backpal < -60) {
			object.rotateZ(-1);
			object.position.x = -550;
			object.position.z = -400;
			object.position.y = -300;
		}
		else {
			//Sıfır Oldupu Durum
			object.rotateZ(0);
			object.rotateX(0);
			object.position.x = -750;
			object.position.z = -400;
			object.position.y = -50;
		}
	}
	else {
		object.rotateZ(0);
		object.rotateX(0);
		object.position.x = -750;
		object.position.z = -400;
		object.position.y = -50;
	}


});

backPal2.load('objects/pal.obj', function (object) {
	scene.add(object);
	object.rotateZ(-3.1);

	object.rotateX(3.1);
	if (backpal != null) {
		if (backpal > 0 && backpal <= 30) {
			object.rotateZ(0.5);
			object.position.x = -700;
			object.position.z = 650;
			object.position.y = 100;
		}
		else if (backpal > 30 && backpal <= 60) {
			object.rotateZ(1);
			object.position.x = -600;
			object.position.z = 650;
			object.position.y = 300;
		}

		else if (backpal > 60 && backpal <= 90) {
			object.rotateZ(1.5);
			object.position.x = -450;
			object.position.z = 650;
			object.position.y = 350;
		}
		else if (backpal > 90 && backpal <= 120) {
			object.rotateZ(2);
			object.position.x = -300;
			object.position.z = 650;
			object.position.y = 350;
		}
		else if (backpal > 120) {
			object.rotateZ(2);
			object.position.x = -300;
			object.position.z = 650;
			object.position.y = 350;
		}
		else if (backpal > -30 && backpal < 0) {
			object.rotateZ(-0.5);
			object.position.x = -650;
			object.position.z = 650;
			object.position.y = -200;
		}
		else if (backpal > -60 && backpal <= -30) {
			//
			object.rotateZ(-1);
			object.position.x = -550;
			object.position.z = 650;
			object.position.y = -300;
		}
		else if (backpal < -60) {
			object.rotateZ(-1);
			object.position.x = -550;
			object.position.z = 650;
			object.position.y = -300;
		}
		else {
			//Sıfır Oldupu Durum
			object.rotateZ(0);
			object.rotateX(0);
			object.position.x = -750;
			object.position.z = 650;
			object.position.y = -50;
		}
	}
	else {
		object.rotateZ(0);
		object.rotateX(0);
		object.position.x = -750;
		object.position.z = 650;
		object.position.y = -50;
	}

});

mastTaban.load('objects/mast_taban.obj', function (object) {
	scene.add(object);
	object.position.x = 0;//boy
	object.position.z = 300;//en
	object.position.y = 300;
	object.scale.set(8, 9, 8);

});
mastUst.load('objects/mast2_acik.obj', function (object) {
	scene.add(object);
	object.position.x = 0;//boy
	object.position.z = 300;//en
	object.position.y = 50;
	object.scale.set(15, 10, 15);

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