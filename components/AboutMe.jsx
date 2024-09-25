import React, { useState, useEffect, useRef } from 'react';

export default function AboutMe() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const newsItems = [
    "New research paper published in Nature",
    "Upcoming guest lecture series announced",
    "Grant awarded for innovative AI project",
    "Student team wins international competition",
    "New course on Quantum Computing launching next semester"
  ];
  const colors = [
    'bg-blue-100 border-blue-500',
    'bg-green-100 border-green-500',
    'bg-purple-100 border-purple-500',
    'bg-yellow-100 border-yellow-500',
    'bg-pink-100 border-pink-500'
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const totalHeight = container.scrollHeight / 2;

    const interval = setInterval(() => {
      if (!isPaused) {
        setScrollPosition((prevPosition) => {
          if (prevPosition <= -totalHeight) {
            setIsPaused(true);
            setTimeout(() => {
              setIsPaused(false);
              return 0;
            }, 3000); // 3 seconds pause
            return 0;
          }
          return prevPosition - 1;
        });
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isPaused]);

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
                <div className="relative w-full h-0 pb-[85%] rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="./ProfTeaching.png?height=600&width=400"
                    alt="Professor teaching"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* News Section */}
          <div className="lg:w-1/3 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-semibold mb-6 text-blue-800 border-b-2 border-blue-300 pb-2">
              News & Updates
            </h3>
            <div className="h-64 overflow-hidden relative" aria-live="polite">
              <div 
                ref={containerRef}
                className="absolute w-full transition-transform duration-1000 ease-linear"
                style={{ transform: `translateY(${scrollPosition}px)` }}
              >
                {newsItems.concat(newsItems).map((item, index) => (
                  <div
                    key={index}
                    className={`${colors[index % colors.length]} bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-lg p-4 mb-4 transition-all duration-300 ease-in-out transform hover:scale-102 hover:shadow-md border-l-4`}
                  >
                    <p className="text-gray-800 font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md">
              View All News
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}