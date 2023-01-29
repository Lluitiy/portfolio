import { useEffect } from 'react';

import * as THREE from 'three';

import spaceImg from '../../../assets/space.jpeg';
import avatarImg from '../../../assets/pasha.jpg';

import { Canva } from './Canvas.styled';

export const Canvas = () => {
	useEffect(() => {
		const scene = new THREE.Scene();

		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);
		const bg = document.getElementById('bg');
		const renderer = new THREE.WebGLRenderer({
			canvas: bg,
		});

		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(window.innerWidth, 500);
		camera.position.setZ(30);

		const ambientLight = new THREE.AmbientLight(0xffffff);
		const spaceTexture = new THREE.TextureLoader().load(spaceImg);
		const pashaTexture = new THREE.TextureLoader().load(avatarImg);

		scene.background = spaceTexture;

		const avatar = new THREE.Mesh(
			new THREE.BoxGeometry(10, 10, 10),
			new THREE.MeshBasicMaterial({ map: pashaTexture })
		);

		avatar.position.z = 0;
		avatar.position.setX(-10);
		scene.add(ambientLight, avatar);

		function moveCamera() {
			const t = document.body.getBoundingClientRect().top;
			avatar.rotation.z += 0.01;
			avatar.rotation.x += 0.025;
			avatar.rotation.y += 0.01;

			camera.position.z = 30 + t * 0.03;
		}
		document.body.onscroll = moveCamera;

		function animate() {
			requestAnimationFrame(animate);
			renderer.render(scene, camera);
		}
		animate();
	}, []);

	return (
		<>
			<Canva id="bg"></Canva>
		</>
	);
};
