'use client';

import React, { useState } from 'react';

const CoursesSection = () => {
  const [search, setSearch] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [currentCourse, setCurrentCourse] = useState(null);
  const [error, setError] = useState('');

  // Static course data
  const courses = [
    { 
      title: 'Cryptography & Network Security', 
      description: 'Learn the fundamentals of Cryptography and Network Security.', 
      image: './Crypto_Net-Sec.jpeg',
      ongoing: false
    },
    { 
      title: 'Computer Programming', 
      description: 'Learn the fundamentals of Computer Programming. Explore and implement different programming concepts using C Programming Language.', 
      image: './Computer_Prog.jpg',
      ongoing: true
    },
    { 
      title: 'Java Programming', 
      description: 'Explore the world of JAVA. Learn the classic elements of Object-Oriented Programming.', 
      image: './Java.jpeg',
      ongoing: true
    },
    { 
      title: 'Introduction to Blockchain', 
      description: 'Learn about the fascinating world of Blockchain Technology that is shaping the future of payments and beyond.', 
      image: './Block.png',
      ongoing: false
    },
  ];

  const handleSearch = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await fetch('/data.json');
      if (!response.ok) throw new Error('Failed to fetch data');
      const data = await response.json();
      const results = data.filter(item => item.enrollmentNo === search && item.courseTitle === currentCourse);
      setFilteredResults(results);
    } catch (error) {
      setError('Failed to load search results');
      console.error(error);
    }
  };


  return (
    <section id="courses" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Courses</h2>
        <h4 className="text-xl font-bold mb-8">Courses that I am currently teaching or taught in the past</h4>
        {error && <p className="text-red-500">{error}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 transform hover:scale-105 relative"
            >
                 <div className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-semibold ${course.ongoing ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-700'}`}>
                {course.ongoing ? 'Ongoing' : 'Completed'}
              </div>
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                {course.ongoing && (
                  <div>
                    <button
                      className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                      onClick={() => {
                        setCurrentCourse(course.title);
                        setIsSearching(currentCourse !== course.title || !isSearching);
                      }}
                    >
                      View Results
                    </button>
                    {isSearching && currentCourse === course.title && (
                      <div className="absolute inset-x-0 bottom-0 bg-gray-200 rounded p-4 mt-4">
                        <form onSubmit={handleSearch}>
                          <label htmlFor="enroll-no" className="block text-gray-700 mb-2">
                            Enter ID: (ID =Enrollment Number+DOB) : For an enrollment number 123 and DOB 15-03-1992, the generated ID would be: 2133


                          </label>
                          <input
                            id="enroll-no"
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded mb-4"
                            placeholder="Enrollment Number"
                            required
                          />
                          <button
                            type="submit"
                            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                          >
                            Search
                          </button>
                        </form>
                        {filteredResults.length > 0 ? (
                          <div className="mt-4">
                            <h4 className="text-lg font-bold mb-2">Search Results</h4>
                            <ul>
                              {filteredResults.map((result, i) => (
                                <li key={i} className="text-gray-700 mb-1">
                                  {result.courseTitle}: {result.marks} (Minor: {result.minor})
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : (
                          <p className="text-gray-600">No results found</p>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
