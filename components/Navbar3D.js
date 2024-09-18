// Import Three.js dependencies
import * as THREE from 'three';
import { useEffect, useRef } from 'react';

const Navbar3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Transparent background
    renderer.setSize(300, 300);
    mountRef.current.appendChild(renderer.domElement);

    // Create a 3D cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x007bff });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;

    // Render loop
    const animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <header className="bg-gray-50 py-6 shadow-lg">
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
        {/* 3D Element */}
        <div className="w-20 h-20" ref={mountRef}></div>

        {/* Logo and Title */}
        <div className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-700">
            Auqib Hamid Lone (Ph.D.)
          </h1>
        </div>

        {/* Hamburger Icon */}
        <div className="block lg:hidden">
          <button
            className="text-blue-700 hover:bg-blue-600 hover:text-white focus:outline-none px-4 py-2 rounded-md"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="lg:flex lg:items-center w-full lg:w-auto">
          <ul className="flex flex-col lg:flex-row lg:space-x-4 rounded-lg lg:p-0 p-4 bg-blue-50 lg:bg-transparent">
            <li>
              <a
                href="#about"
                className="text-blue-700 hover:text-blue-400 text-lg px-4 py-2 rounded-md transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="text-blue-700 hover:text-blue-400 text-lg px-4 py-2 rounded-md transition duration-300"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#courses"
                className="text-blue-700 hover:text-blue-400 text-lg px-4 py-2 rounded-md transition duration-300"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#publications"
                className="text-blue-700 hover:text-blue-400 text-lg px-4 py-2 rounded-md transition duration-300"
              >
                Publications
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-blue-700 hover:text-blue-400 text-lg px-4 py-2 rounded-md transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Navbar3D;