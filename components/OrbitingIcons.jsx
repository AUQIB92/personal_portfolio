// OrbitingIcons.js
import * as THREE from 'three';
import { useEffect, useRef } from 'react';

const OrbitingIcons = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create some orbiting objects
    const icons = [];
    const numIcons = 5;
    const orbitRadius = 3;

    for (let i = 0; i < numIcons; i++) {
      const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
      const material = new THREE.MeshBasicMaterial({ color: 0xffc107 });
      const icon = new THREE.Mesh(geometry, material);
      icon.position.set(Math.cos((i / numIcons) * Math.PI * 2) * orbitRadius, Math.sin((i / numIcons) * Math.PI * 2) * orbitRadius, 0);
      scene.add(icon);
      icons.push(icon);
    }

    const animate = () => {
      requestAnimationFrame(animate);

      icons.forEach((icon, idx) => {
        icon.rotation.x += 0.01;
        icon.rotation.y += 0.01;
        icon.position.set(
          Math.cos((idx / numIcons) * Math.PI * 2 + Date.now() * 0.001) * orbitRadius,
          Math.sin((idx / numIcons) * Math.PI * 2 + Date.now() * 0.001) * orbitRadius,
          0
        );
      });

      renderer.render(scene, camera);
    };

    camera.position.z = 6;
    animate();

    return () => mountRef.current.removeChild(renderer.domElement);
  }, []);

  return <div ref={mountRef} style={{ width: '100vw', height: '100vh' }} />;
};

export default OrbitingIcons;
