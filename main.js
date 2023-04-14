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

//Camera Settings
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



body = new THREE.OBJLoader();
frontPal1 = new THREE.OBJLoader();
frontPal2 = new THREE.OBJLoader();
backPal1 = new THREE.OBJLoader();
backPal2 = new THREE.OBJLoader();
mastTaban = new THREE.OBJLoader();
mastUst = new THREE.OBJLoader();
mastTaban2 = new THREE.OBJLoader();
mastUst2 = new THREE.OBJLoader();
ptz1 = new THREE.OBJLoader();
turretBody = new THREE.OBJLoader();
turret = new THREE.OBJLoader();



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
	object.scale.set(8, 8, 8);

});

mastUst.load('objects/mast1.obj', function (object) {
	scene.add(object);
	object.position.x = 10;//boy
	object.position.z = -120;//en
	object.position.y = 450;
	object.scale.set(0.7, 0.6, 0.7);
	if (rightmast != null) {
		if (rightmast > 450) {
			object.position.y = 450;
		}
		else if (rightmast < -250) {
			object.position.y = -250;
		}
		else {
			object.position.y = rightmast;
		}

	}
	else {
		object.position.y = -250;
	}


});


mastTaban2.load('objects/mast_taban.obj', function (object) {
	scene.add(object);
	object.position.x = 0;//boy
	object.position.z = -100;//en
	object.position.y = 300;
	object.scale.set(8, 8, 8);
});

mastUst2.load('objects/mast1.obj', function (object) {
	scene.add(object);
	object.position.x = 10;//boy
	object.position.z = -520;//en
	if (leftmast != null) {
		if (leftmast > 450) {
			object.position.y = 450;

		}
		else if (leftmast < -250) {
			object.position.y = -250;

		}
		else {
			object.position.y = leftmast;
		}

	}
	else {
		object.position.y = -250;
	}

	object.scale.set(0.7, 0.6, 0.7);
});

ptz1.load('objects/ptz_kamera.obj', function (object) {
	scene.add(object);
	object.position.x = -20;//boy
	object.position.z = 350;//en
	object.rotateX(3.1);

	if (ptz != null) {
		// if (ptz > 0 && ptz <= 45) {
		// 	object.rotateY(0.5);

		// 	object.position.x = -70;//boy
		// 	object.position.z = 120;//en


		// }
		// else if (ptz > 45 && ptz <= 90) {
		// 	object.rotateY(1);

		// 	object.position.x = -220;//boy
		// 	object.position.z = 120;//en

		// }

		// else if (ptz > 90 && ptz <= 135) {

		// 	object.rotateY(1.5);

		// 	object.position.x = -70;//boy
		// 	object.position.z = 120;//en
		// }
		// else if (ptz > 135 && ptz <= 180) {

		// 	object.rotateY(2);

		// 	object.position.x = -70;//boy
		// 	object.position.z = 120;//en
		// }
		// else if (ptz > 180 && ptz <= 225) {

		// 	object.rotateY(2);

		// 	object.position.x = -70;//boy
		// 	object.position.z = 120;//en
		// }
		// else if (ptz > 225 && ptz <= 270) {

		// 	object.rotateY(-0.5);

		// 	object.position.x = -70;//boy
		// 	object.position.z = 120;//en
		// }
		// else if (ptz > 270 && ptz <= 315) {
		// 	object.rotateY(-1);
		// 	object.position.x = -70;//boy
		// 	object.position.z = 120;//en
		// }
		// else if (ptz > 315 && ptz <= 36) {
		// 	object.rotateY(-1);
		// 	object.position.x = -70;//boy
		// 	object.position.z = 120;//en
		// }
		// else {
		// 	//Sıfır Oldupu Durum
		// 	object.position.x = -70;//boy
		// 	object.position.z = 120;//en
		// }
		if (ptz > 360 || ptz < 0) {
			object.rotateY(3.1);
		}
		else {
			object.rotateY(ptz - 3.1);
		}

	}
	else {
		object.rotateY(3.1);
	}
	if (rightmast != null) {
		object.position.y = (900 + parseInt(rightmast) + 200);
	}
	else {
		object.position.y = (900);
	}
	object.scale.set(1, 1, 1);
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