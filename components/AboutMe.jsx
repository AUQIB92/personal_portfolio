import React from 'react';

export default function AboutMe() {
  const newsItems = [
    "New research paper published in Nature",
    "Upcoming guest lecture series announced",
    "Grant awarded for innovative AI project",
    "Student team wins international competition",
    "New course on Quantum Computing launching next semester"
  ];

  return (
    <section id="about" className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-blue-800">About Me</h2>
        <div className="flex flex-col lg:flex-row items-start space-y-8 lg:space-y-0 lg:space-x-8">
          {/* About Me Section */}
          <div className="lg:w-2/3">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <p className="text-lg mb-4 text-gray-700">
                  As an Assistant Professor of Computer Science & Engineering, I bring over 7 years of specialized experience in teaching and research. My key expertise encompasses Information Security, Applied Cryptography, and Blockchain Technology. I earned my Ph.D. from NIT Srinagar and have authored numerous publications in esteemed journals.
                </p>
                <p className="text-lg mb-4 text-gray-700">
                  My research pursuits revolve around the Design and Development of Blockchain-based Applications, delving into the broader applications of Blockchain, and utilizing Blockchain Technology to address issues related to Security and Trust.
                </p>
                <h4 className="text-xl font-semibold italic mb-4 text-blue-600">
                  &quot;Security is balanced mix of Feeling and Reality&quot;
                </h4>
                <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md">
                  Learn More
                </button>
              </div>
              <div className="md:w-1/2 md:pl-8">
                <img
                  src="./ProfTeaching.png"
                  alt="Professor teaching"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* News Section */}
          <div className="lg:w-1/3 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl shadow-lg p-6 space-y-4">
            <h3 className="text-2xl font-semibold mb-6 text-blue-800 border-b-2 border-blue-300 pb-2">
              Latest News
            </h3>
            {newsItems.map((item, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-lg p-4 transition-all duration-300 ease-in-out transform hover:scale-102 hover:shadow-md border-l-4 border-blue-500"
              >
                <p className="text-gray-800 font-medium">{item}</p>
              </div>
            ))}
            <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md">
              View All News
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}