// CentralOrb.js
import * as THREE from 'three';
import { useEffect, useRef } from 'react';

const CentralOrb = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(1, 64, 64);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 1.0 },
        color1: { value: new THREE.Color(0x1565c0) },
        color2: { value: new THREE.Color(0x8e44ad) }
      },
      vertexShader: `varying vec3 vUv; void main() { vUv = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
      fragmentShader: `uniform float time; uniform vec3 color1; uniform vec3 color2; varying vec3 vUv; void main() { gl_FragColor = vec4(mix(color1, color2, sin(time)), 1.0); }`
    });
    const orb = new THREE.Mesh(geometry, material);
    scene.add(orb);

    const animate = () => {
      requestAnimationFrame(animate);
      orb.rotation.y += 0.01;
      material.uniforms.time.value += 0.01;
      renderer.render(scene, camera);
    };
    camera.position.z = 5;
    animate();

    return () => mountRef.current.removeChild(renderer.domElement);
  }, []);

  return <div ref={mountRef} style={{ width: '100vw', height: '100vh' }} />;
};

export default CentralOrb;
