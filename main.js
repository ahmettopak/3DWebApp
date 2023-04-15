const fov = 45;
const near = 1;
const aspect = window.innerWidth / window.innerHeight;
const far = 8000;

scene = new THREE.Scene();
shoulder = new THREE.Object3D();
elbow = new THREE.Object3D();
wrist = new THREE.Object3D();
clampTurret = new THREE.Object3D();

camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
//örnek link
//frontpal=30&backpal=-45&turret=300&shoulder=200&clamp=200&clampturret=300&elbow=300&wrist=600
const urlParams = new URLSearchParams(window.location.search);

const frontPalAngle = urlParams.get('frontpal');
const backPalAngle = urlParams.get('backpal');
const leftMastAngle = urlParams.get('leftmast');
const rightMastAngle = urlParams.get('rightmast');
const ptzAngle = urlParams.get('ptz');
const turretAngle = urlParams.get('turret');
const shoulderAngle = urlParams.get('shoulder');
const elbowAngle = urlParams.get('elbow');
const wristAngle = urlParams.get('wrist');
const clampTurretAngle = urlParams.get('clampturret');
const clampAngle = urlParams.get('clamp');

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


const size = 10000; // ızgara boyutu
const divisions = 100; // ızgara bölümleri
const colorCenterLine = new THREE.Color(0x00ff00); // merkez çizgisi rengi
const colorGrid = new THREE.Color(0xffffff); // ızgara rengi
const gridHelper = new THREE.GridHelper(size, divisions, colorCenterLine, colorGrid);
gridHelper.position.set(0, -250, 0); // ızgara konumu
gridHelper.material.opacity = 0.5; // ızgara saydamlığı
gridHelper.material.transparent = true; // saydamlık etkinleştirme
gridHelper.material.depthWrite = false; // z-buffer kullanımını devre dışı bırakma
scene.add(gridHelper); 

// PlaneGeometry 
/*var planeGeometry = new THREE.PlaneGeometry(10000, 10000); // Genişlik ve yüksekliği 10 birim olan bir düzlem
var material = new THREE.MeshBasicMaterial({ color: 0x964B00}); // Yeşil renkte bir materyal oluşturun
var plane = new THREE.Mesh(planeGeometry, material);
plane.rotateX(-Math.PI / 2);
plane.position.set(0, -500, 0); 
scene.add(plane);*/


keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
keyLight.position.set(-100, 0, 100);
scene.add(keyLight);

fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(165, 6%, 13%)'), 0.75);
fillLight.position.set(300, 300, -300);
scene.add(fillLight);

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
wristLoader = new THREE.OBJLoader();
clampTurretLoader = new THREE.OBJLoader();
clampLeftLoader = new THREE.OBJLoader();
clampRightLoader = new THREE.OBJLoader();




bodyLoader.load('objects/body_yeni.obj', function (object) {
	object.Color = 0x00ff00;
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
 		 if (ptz > 0 && ptz <= 45) {
 		 	object.rotateY(0.5);

 		 	object.position.x = -70;//boy
 		 	object.position.z = 120;//en


 		 }
 		 else if (ptz > 45 && ptz <= 90) {
 		 	object.rotateY(1);

 		 	object.position.x = -220;//boy
 		 	object.position.z = 120;//en

 		 }

 		 else if (ptz > 90 && ptz <= 135) {

 		 	object.rotateY(1.5);

 		 	object.position.x = -70;//boy
 		 	object.position.z = 120;//en
		 }
 		 else if (ptz > 135 && ptz <= 180) {

 			object.rotateY(2);

		 	object.position.x = -70;//boy
		 	object.position.z = 120;//en
 		 }
 		 else if (ptz > 180 && ptz <= 225) {

 		 	object.rotateY(2);

		 	object.position.x = -70;//boy
 		 	object.position.z = 120;//en
		 }
 		 else if (ptz > 225 && ptz <= 270) {

 		 	object.rotateY(-0.5);

 		 	object.position.x = -70;//boy
 		 	object.position.z = 120;//en
 		 }
 		 else if (ptz > 270 && ptz <= 315) {
 		 	object.rotateY(-1);
 		 	object.position.x = -70;//boy
 		 	object.position.z = 120;//en
		 }
else if (ptz > 315 && ptz <= 36) {
 	object.rotateY(-1);
 		 	object.position.x = -70;//boy
		 	object.position.z = 120;//en
 		 }
 		 else {
 		 	//Sıfır Oldupu Durum
 		 	object.position.x = -70;//boy
 		 	object.position.z = 120;//en
 		 }
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

	//0 6 önden sağ
	//0 -6 önden sol
	//toplam 12 derce
	//0 6 olur 

	if (turretAngle != null) {
		object.rotation.set(300, 0, 300 + parseInt(turretAngle));
	}
	else {
		object.rotation.set(300, 0, 300);
	}

	object.scale.set(1, 1, 1);
});

shoulderLoader.load('objects/omuz.obj', function (object) {
	scene.add(object);
	object.position.x = 400;//boy
	object.position.z = 100;//en
	object.position.y = 450;
	shoulder = object;
	//Rotasyonu taretle eşitliyor
	if (turretAngle != null) {
		object.rotateY(parseInt(turretAngle));
	}
	else {
		object.rotateY(0);
	}

	//0 6 omuz 
	if (shoulderAngle != null) {
		object.rotateZ(parseInt(shoulderAngle));
	}
	else {
		object.rotateZ(0);
	}
	object.scale.set(1, 1, 1);
});

elbowLoader.load('objects/dirsek.obj', function (object) {
	//scene.add(object);
	shoulder.add(object);
	elbow = object;
	object.position.x = -500;//boy
	object.position.z = 0;//en
	object.position.y = 0;
	if (elbowAngle != null) {
		object.rotation.set(600, 0, parseInt(elbowAngle));
	}
	else {
		object.rotation.set(600, 0, 600);
	}
	//1 kapalı - 8 açık

	//yeni 1200 açık 600 kapalı
	object.scale.set(1, 1, 1);
});


wristLoader.load('objects/bilek.obj', function (object) {
	//scene.add(object);
	elbow.add(object);
	wrist = object;
	object.position.x = -400;//boy
	object.position.z = 30;//en
	object.position.y = 0;
	if (wristAngle != null) {
		object.rotation.set(600, 0, parseInt(wristAngle));
	}
	else {
		object.rotation.set(600, 0, 0);
	}

	//yeni 600 açık 0 kapalı
	//eksi verince tersten geliyor
	//yada yeni 1200 açık 0 kapalı
	object.scale.set(1, 1, 1);
	object.rotateZ(-60)
});

clampTurretLoader.load('objects/clamp_body.obj', function (object) {
	//scene.add(object);
	wrist.add(object);
	clampTurret = object;
	object.position.x = 100;//boy
	object.position.z = -50;//en
	object.position.y = 0;
	if (clampTurretAngle != null) {
		object.rotation.set(parseInt(clampTurretAngle), 300, 600);
	}
	else {
		object.rotation.set(0, 300, 600);
	}

	//yeni 600 açık 0 kapalı
	//300 tam yatay
	//eksi verince tersten geliyor
	//yada yeni 1200 açık 0 kapalı
	object.scale.set(1, 1, 1);
});

/*var mtlLoader = new THREE.MTLLoader();
mtlLoader.load('objects/clamp_mtl', function(materials){
materials.preload();
clampLeftLoader.setMaterials(materials);*/ //_mtl ile materyal yüklemek için

clampLeftLoader.load('objects/clamp.obj', function (object) {
	//scene.add(object);
	clampTurret.add(object);
	//clampTurret = object;
	object.position.x = 0;//boy
	object.position.z = 0;//en
	object.position.y = 30;
	if (clampAngle != null) {
		object.rotation.set(-parseInt(clampAngle), 300, 0);
	}
	else {
		object.rotation.set(0, 300, 0);
	}

	//yeni 600 açık 0 kapalı
	//300 tam yatay
	//eksi verince tersten geliyor
	//yada yeni 1200 açık 0 kapalı
	object.scale.set(1, 1, 1);

// });
});


clampRightLoader.load('objects/clamp.obj', function (object) {
	//scene.add(object);
	clampTurret.add(object);
	//clampTurret = object;
	object.position.x = 0;//boy
	object.position.z = 0;//en
	object.position.y = -30;
	if (clampAngle != null) {
		object.rotation.set(parseInt(clampAngle), 900, 600);
	}
	else {
		object.rotation.set(0, 900, 600);
	}

	//yeni 300 açık 0 kapalı
	//300 tam yatay

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