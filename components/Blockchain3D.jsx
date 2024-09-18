// Blockchain3D.js
'use client'
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Blockchain3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Set up scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Add light to the scene
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 1, 1).normalize();
    scene.add(light);

    // Function to create a block (cube)
    const createBlock = (size, color) => {
      const geometry = new THREE.BoxGeometry(size, size, size);
      const material = new THREE.MeshPhongMaterial({ color: color });
      const block = new THREE.Mesh(geometry, material);
      return block;
    };

    // Function to create a connection (line)
    const createConnection = (block1, block2) => {
      const material = new THREE.LineBasicMaterial({ color: 0x00ff00 });
      const points = [];
      points.push(block1.position);
      points.push(block2.position);
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geometry, material);
      return line;
    };

    // Create blocks and lines
    const blocks = [];
    const numBlocks = 6;
    const blockSpacing = 3;

    for (let i = 0; i < numBlocks; i++) {
      const block = createBlock(1, 0x1565c0);
      block.position.set(i * blockSpacing, 0, 0); // Arrange blocks in a line
      scene.add(block);
      blocks.push(block);
    }

    // Create connections (lines) between blocks
    for (let i = 0; i < numBlocks - 1; i++) {
      const line = createConnection(blocks[i], blocks[i + 1]);
      scene.add(line);
    }

    camera.position.z = 10;

    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);

      blocks.forEach((block) => {
        block.rotation.x += 0.01;
        block.rotation.y += 0.01;
      });

      renderer.render(scene, camera);
    };

    // Resize handling
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    // Start the animation
    animate();

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />;
};

export default Blockchain3D;
