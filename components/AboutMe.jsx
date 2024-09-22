import React from 'react';

const AboutMe = () => {
  return (
    <section id="about" className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <p className="text-lg mb-4">
              As an Assistant Professor of Computer Science & Engineering, I bring over 7 years of specialized experience in teaching and research. My key expertise encompasses Information Security, Applied Cryptography, and Blockchain Technology. I earned my Ph.D. from NIT Srinagar and have authored numerous publications in esteemed journals.
            </p>
            <p className="text-lg mb-4">
              My research pursuits revolve around the Design and Development of Blockchain-based Applications, delving into the broader applications of Blockchain, and utilizing Blockchain Technology to address issues related to Security and Trust.
            </p>
            <h4 className="text-xl font-semibold italic mb-4">
              &quot;Security is balanced mix of Feeling and Reality&quot;
            </h4>
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
              Learn More
            </button>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <img
              src="./ProfTeaching.png"
              alt="Professor teaching"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;