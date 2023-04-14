const fov = 45;
const near = 1;
const aspect = window.innerWidth / window.innerHeight;
const far = 8000;

scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

const urlParams = new URLSearchParams(window.location.search);

const frontPalAngle = urlParams.get('frontpal');
const backPalAngle = urlParams.get('backpal');
const leftMastAngle = urlParams.get('leftmast');
const rightMastAngle = urlParams.get('rightmast');
const ptzAngle = urlParams.get('ptz');
const turretAngle = urlParams.get('turret');

//Camera Settings
camera.position.z = 2000;
camera.position.y = 2000;
camera.position.x = -400;
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



bodyLoader = new THREE.OBJLoader();
frontPal1Loader = new THREE.OBJLoader();
frontPal2Loader = new THREE.OBJLoader();
backPal1Loader = new THREE.OBJLoader();
backPal2Loader = new THREE.OBJLoader();
mastTabanLoader = new THREE.OBJLoader();
mastUstLoader = new THREE.OBJLoader();
mastTaban2Loader = new THREE.OBJLoader();
mastUst2Loader = new THREE.OBJLoader();
ptzLoader = new THREE.OBJLoader();
turretBodyLoader = new THREE.OBJLoader();
turretLoader = new THREE.OBJLoader();
shoulderLoader = new THREE.OBJLoader();
elbowLoader = new THREE.OBJLoader();


bodyLoader.load('objects/body_yeni.obj', function (object) {
	scene.add(object);
	object.position.x = 0;
	object.position.z = 0;
});

frontPal1Loader.load('objects/pal.obj', function (object) {
	scene.add(object);
	if (frontPalAngle != null) {
		if (frontPalAngle > 0 && frontPalAngle <= 30) {
			object.rotateZ(0.5);

			object.position.x = 800;
			object.position.z = 600;
			object.position.y = 150;


		}
		else if (frontPalAngle > 30 && frontPalAngle <= 60) {
			object.rotateZ(1);

			object.position.x = 650;
			object.position.z = 600;
			object.position.y = 300;

		}

		else if (frontPalAngle > 60 && frontPalAngle <= 90) {

			object.rotateZ(1.5);

			object.position.x = 500;
			object.position.z = 600;
			object.position.y = 350;
		}
		else if (frontPalAngle > 90 && frontPalAngle <= 120) {

			object.rotateZ(2);

			object.position.x = 350;
			object.position.z = 600;
			object.position.y = 350;
		}
		else if (frontPalAngle > 120) {

			object.rotateZ(2);

			object.position.x = 350;
			object.position.z = 600;
			object.position.y = 350;
		}
		else if (frontPalAngle > -30 && frontPalAngle < 0) {

			object.rotateZ(-0.5);

			object.position.x = 750;
			object.position.z = 600;
			object.position.y = -200;
		}
		else if (frontPalAngle > -60 && frontPalAngle <= -30) {
			object.rotateZ(-1);
			object.position.x = 600;
			object.position.z = 600;
			object.position.y = -300;
		}
		else if (frontPalAngle < -60) {
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

frontPal2Loader.load('objects/pal.obj', function (object) {
	scene.add(object);
	if (frontPalAngle != null) {
		if (frontPalAngle > 0 && frontPalAngle <= 30) {
			object.rotateZ(0.5);

			object.position.x = 800;
			object.position.z = -450;
			object.position.y = 150;


		}
		else if (frontPalAngle > 30 && frontPalAngle <= 60) {
			object.rotateZ(1);

			object.position.x = 650;
			object.position.z = -450;
			object.position.y = 300;

		}

		else if (frontPalAngle > 60 && frontPalAngle <= 90) {

			object.rotateZ(1.5);

			object.position.x = 500;
			object.position.z = -450;
			object.position.y = 350;
		}
		else if (frontPalAngle > 90 && frontPalAngle <= 120) {

			object.rotateZ(2);

			object.position.x = 350;
			object.position.z = -450;
			object.position.y = 350;
		}
		else if (frontPalAngle > 120) {

			object.rotateZ(2);

			object.position.x = 350;
			object.position.z = -450;
			object.position.y = 350;
		}
		else if (frontPalAngle > -30 && frontPalAngle < 0) {

			object.rotateZ(-0.5);

			object.position.x = 750;
			object.position.z = -450;
			object.position.y = -200;
		}
		else if (frontPalAngle > -60 && frontPalAngle <= -30) {
			object.rotateZ(-1);
			object.position.x = 600;
			object.position.z = -450;
			object.position.y = -300;
		}
		else if (frontPalAngle < -60) {
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

backPal1Loader.load('objects/pal.obj', function (object) {
	scene.add(object);

	object.rotateZ(-3.1);

	object.rotateX(3.1);
	if (backPalAngle != null) {
		if (backPalAngle > 0 && backPalAngle <= 30) {
			object.rotateZ(0.5);
			object.position.x = -700;
			object.position.z = -400;
			object.position.y = 100;
		}
		else if (backPalAngle > 30 && backPalAngle <= 60) {
			object.rotateZ(1);
			object.position.x = -600;
			object.position.z = -400;
			object.position.y = 300;
		}

		else if (backPalAngle > 60 && backPalAngle <= 90) {
			object.rotateZ(1.5);
			object.position.x = -450;
			object.position.z = -400;
			object.position.y = 350;
		}
		else if (backPalAngle > 90 && backPalAngle <= 120) {
			object.rotateZ(2);
			object.position.x = -300;
			object.position.z = -400;
			object.position.y = 350;
		}
		else if (backPalAngle > 120) {
			object.rotateZ(2);
			object.position.x = -300;
			object.position.z = -400;
			object.position.y = 350;
		}
		else if (backPalAngle > -30 && backPalAngle < 0) {
			object.rotateZ(-0.5);
			object.position.x = -650;
			object.position.z = -400;
			object.position.y = -200;
		}
		else if (backPalAngle > -60 && backPalAngle <= -30) {
			//
			object.rotateZ(-1);
			object.position.x = -550;
			object.position.z = -400;
			object.position.y = -300;
		}
		else if (backPalAngle < -60) {
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

backPal2Loader.load('objects/pal.obj', function (object) {
	scene.add(object);
	object.rotateZ(-3.1);

	object.rotateX(3.1);
	if (backPalAngle != null) {
		if (backPalAngle > 0 && backPalAngle <= 30) {
			object.rotateZ(0.5);
			object.position.x = -700;
			object.position.z = 650;
			object.position.y = 100;
		}
		else if (backPalAngle > 30 && backPalAngle <= 60) {
			object.rotateZ(1);
			object.position.x = -600;
			object.position.z = 650;
			object.position.y = 300;
		}

		else if (backPalAngle > 60 && backPalAngle <= 90) {
			object.rotateZ(1.5);
			object.position.x = -450;
			object.position.z = 650;
			object.position.y = 350;
		}
		else if (backPalAngle > 90 && backPalAngle <= 120) {
			object.rotateZ(2);
			object.position.x = -300;
			object.position.z = 650;
			object.position.y = 350;
		}
		else if (backPalAngle > 120) {
			object.rotateZ(2);
			object.position.x = -300;
			object.position.z = 650;
			object.position.y = 350;
		}
		else if (backPalAngle > -30 && backPalAngle < 0) {
			object.rotateZ(-0.5);
			object.position.x = -650;
			object.position.z = 650;
			object.position.y = -200;
		}
		else if (backPalAngle > -60 && backPalAngle <= -30) {

			object.rotateZ(-1);
			object.position.x = -550;
			object.position.z = 650;
			object.position.y = -300;
		}
		else if (backPalAngle < -60) {
			object.rotateZ(-1);
			object.position.x = -550;
			object.position.z = 650;
			object.position.y = -300;
		}
		else {
			//Sıfır OlduĞu Durum
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

mastTabanLoader.load('objects/mast_taban.obj', function (object) {
	scene.add(object);
	object.position.x = 0;//boy
	object.position.z = 300;//en
	object.position.y = 300;
	object.scale.set(8, 8, 8);

});

mastUstLoader.load('objects/mast1.obj', function (object) {
	scene.add(object);
	object.position.x = 10;//boy
	object.position.z = -120;//en
	object.position.y = 450;
	object.scale.set(0.7, 0.6, 0.7);
	if (rightMastAngle != null) {
		if (rightMastAngle > 450) {
			object.position.y = 450;
		}
		else if (rightMastAngle < -250) {
			object.position.y = -250;
		}
		else {
			object.position.y = rightMastAngle;
		}

	}
	else {
		object.position.y = -250;
	}


});


mastTaban2Loader.load('objects/mast_taban.obj', function (object) {
	scene.add(object);
	object.position.x = 0;//boy
	object.position.z = -100;//en
	object.position.y = 300;
	object.scale.set(8, 8, 8);
});

mastUst2Loader.load('objects/mast1.obj', function (object) {
	scene.add(object);
	object.position.x = 10;//boy
	object.position.z = -520;//en
	if (leftMastAngle != null) {
		if (leftMastAngle > 450) {
			object.position.y = 450;

		}
		else if (leftMastAngle < -250) {
			object.position.y = -250;

		}
		else {
			object.position.y = leftMastAngle;
		}

	}
	else {
		object.position.y = -250;
	}

	object.scale.set(0.7, 0.6, 0.7);
});

ptzLoader.load('objects/ptz_kamera.obj', function (object) {
	scene.add(object);
	object.position.x = -20;//boy
	object.position.z = 350;//en
	object.rotateX(3.1);

	if (ptzAngle != null) {
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
		if (ptzAngle > 360 || ptzAngle < 0) {
			object.rotateY(3.1);
		}
		else {
			object.rotateY(ptzAngle - 3.1);
		}

	}
	else {
		object.rotateY(3.1);
	}
	if (rightMastAngle != null) {
		object.position.y = (900 + parseInt(rightmast) + 200);
	}
	else {
		object.position.y = (900);
	}
	object.scale.set(1, 1, 1);
});
turretBodyLoader.load('objects/turret_body.obj', function (object) {
	scene.add(object);
	object.position.x = 400;//boy
	object.position.z = 100;//en
	object.position.y = 320;
	object.rotation.set(300, 0, 600);
	object.scale.set(1, 1, 1);
});
turretLoader.load('objects/turret.obj', function (object) {
	scene.add(object);
	object.position.x = 400;//boy
	object.position.z = 100;//en
	object.position.y = 370;
	object.rotation.set(300, 0, 600);
	object.scale.set(1, 1, 1);
});
shoulderLoader.load('objects/omuz.obj', function (object) {
	scene.add(object);
	object.position.x = 400;//boy
	object.position.z = 100;//en
	object.position.y = 450;
	object.rotation.set(0, 300, 0);
	object.scale.set(1, 1, 1);
});
// elbowLoader.load('objects/dirsek.obj', function (object) {
// 	scene.add(object);
// 	object.position.x = -100;//boy
// 	object.position.z = 50;//en
// 	object.position.y = 450;
// 	object.rotation.set(0, 0, 600);
// 	//600 - 0
// 	object.scale.set(1, 1, 1);
// });

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