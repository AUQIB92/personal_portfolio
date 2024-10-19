'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { X } from "lucide-react"

const CoursesSection = () => {
  const [search, setSearch] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const [currentCourse, setCurrentCourse] = useState(null);
  const [error, setError] = useState('');
  const [showResultCard, setShowResultCard] = useState(false);

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
      const response = await fetch('/api/fetch-result', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          rollNumber: search,  // Replace `search` with the actual roll number variable
        }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
  
      const data = await response.json();
      setFilteredResults([data]);
    } catch (error) {
      setError('Failed to load search results');
      console.error(error);
    }
  };
  

  return (
    <section id="courses" className="py-4 bg-teal-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-teal-800">Courses</h2>
        <h4 className="text-xl font-bold mb-8 text-teal-700">Courses that I am currently teaching or taught in the past</h4>
        {error && <p className="text-red-500">{error}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="overflow-hidden transition duration-300 transform hover:scale-105 hover:shadow-lg">
              <div className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-semibold ${course.ongoing ? 'bg-teal-500 text-white' : 'bg-gray-300 text-gray-700'}`}>
                {course.ongoing ? 'Ongoing' : 'Completed'}
              </div>
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-teal-700">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                {course.ongoing && (
                  <Button
                    className="bg-teal-600 hover:bg-teal-700 text-white"
                    onClick={() => {
                      setCurrentCourse(course.title);
                      setShowResultCard(true);
                    }}
                  >
                    View Results
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      {showResultCard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>Search Results for {currentCourse}</span>
                <Button variant="ghost" onClick={() => setShowResultCard(false)}>
                  <X className="h-6 w-6" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSearch} className="mb-4">
                <label htmlFor="enroll-no" className="block text-teal-700 mb-2">
                  Enter ID: (ID = Enrollment Number + DOB) : For an enrollment number 123 and DOB 15-03-1992, the generated ID would be: 2133
                </label>
                <Input
                  id="enroll-no"
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full p-2 border border-teal-300 rounded mb-4"
                  placeholder="Enrollment Number"
                  required
                />
                <Button type="submit" className="bg-teal-600 hover:bg-teal-700 text-white w-full">
                  Search
                </Button>
              </form>
              {filteredResults.length > 0 ? (
                <ul>
                  {filteredResults.map((result, i) => (
                    <li key={i} className="text-teal-700 mb-1">
                      {result.courseTitle}: {result.marks} (Minor: {result.minor})
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-teal-600">No results found. Please try searching.</p>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </section>
  );
};

export default CoursesSection;
