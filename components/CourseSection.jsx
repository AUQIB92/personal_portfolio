'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Alert, AlertTitle, AlertDescription } from './ui/alert';
import { X, Search, AlertCircle, Star } from "lucide-react";
import CongratulationsMessage from "./CongratulationsMessage";

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

const ResultCard = ({
  rollNumber,
  name,
  branch,
  theoryMarks,
  practicalMarks,
  courseTitle,
  onClose
}) => {
  const totalMarks = theoryMarks + practicalMarks;
  const percentage = (totalMarks / 100) * 100; // Calculate percentage
  const stars = Math.round((totalMarks / 100) * 5); // Map percentage to a 5-star system
  
  const lowMarks = theoryMarks < 20 || practicalMarks < 20;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-md mx-auto bg-white shadow-xl rounded-xl overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-6">
          <CardTitle className="text-2xl font-bold flex items-center justify-between">
            <span>Internal Exam Results</span>
            <Button variant="ghost" onClick={onClose} className="text-white hover:text-teal-200">
              <X className="h-6 w-6" />
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div className="flex justify-between">
            <span className="font-semibold">Roll Number:</span>
            <span>{rollNumber}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Name:</span>
            <span>{name}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Branch:</span>
            <span>{branch}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Course:</span>
            <span>{courseTitle}</span>
          </div>
          <div className="border-t border-gray-200 my-4"></div>

          {lowMarks ? (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md flex items-center space-x-3">
              <p className="text-sm font-medium">
                Please contact the course instructor for your results.
              </p>
            </div>
          ) : (
            <>
              <div className="flex justify-between">
                <span className="font-semibold">Theory Marks (MM=50):</span>
                <span>{theoryMarks}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Practical Marks (MM=50):</span>
                <span>{practicalMarks}</span>
              </div>
              
              {/* Render stars based on the percentage score */}
              
              {/* Render CongratulationsMessage here if the student has passed */}
              {theoryMarks >= 20 && practicalMarks >= 20 && (
                <CongratulationsMessage stars={stars} /> 
              )}
            </>
          )}
        </CardContent>
        <CardFooter className="bg-gray-50 p-6">
          <Button 
            onClick={onClose} 
            className="w-full bg-teal-600 hover:bg-teal-700 text-white transition duration-200 ease-in-out transform hover:scale-105"
          >
            Close
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

const CoursesSection = () => {
  const [search, setSearch] = useState('');
  const [filteredResults, setFilteredResults] = useState(null);
  const [currentCourse, setCurrentCourse] = useState(null);
  const [error, setError] = useState('');
  const [showResultCard, setShowResultCard] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Spinner state

  const handleSearch = async (e) => {
    e.preventDefault();
    setError('');
    setFilteredResults(null);
    setIsLoading(true); // Show spinner
    try {
      if (currentCourse !== 'Computer Programming') {
        setError('Search is only available for Computer Programming.');
        setIsLoading(false);
        return;
      }

      const response = await fetch('/api/fetch-result', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          rollNumber: search,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      setFilteredResults(data);
      setShowResultCard(true);
      setIsLoading(false); // Hide spinner
    } catch (error) {
      setError('Failed to load search results');
      window.alert("Not available");
      setIsLoading(false); // Hide spinner
      console.error(error);
    }
  };

  const handleClose = () => {
    setShowResultCard(false);
    setSearch('');
    setFilteredResults(null); // Reset the search data
    setCurrentCourse(null); // Reset the current course
  };

  return (
    <section id="courses" className="py-12 bg-teal-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-teal-800">Courses</h2>
        <h4 className="text-xl font-semibold mb-8 text-teal-700">Courses that I am currently teaching or taught in the past</h4>
        {error && <p className="text-red-500 mb-4">{error}</p>}
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

      {showResultCard && currentCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-40">
          <Card className="w-full max-w-md shadow-lg">
            <CardHeader className="bg-gradient-to-r from-teal-600 to-teal-700 text-white">
              <CardTitle className="flex justify-between items-center">
                <span className="text-xl font-bold">Search Results for {currentCourse}</span>
                <Button variant="ghost" onClick={handleClose} className="text-white hover:text-teal-200">
                  <X className="h-6 w-6" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              {currentCourse === 'Computer Programming' ? (
                <form onSubmit={handleSearch} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="enroll-no" className="text-teal-700 font-medium">
                      Enrollment Number :
                    </Label>
                  </div>
                  <div className="relative">
                    <Input
                      id="enroll-no"
                      type="text"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border-2 border-teal-300 rounded-md focus:border-teal-500 focus:ring focus:ring-teal-200 focus:ring-opacity-50"
                      placeholder="Enter your ID"
                      required
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-500 h-5 w-5" />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white transition-colors duration-300"
                    disabled={isLoading} // Disable button when loading
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center">
                        <span className="mr-2">Loading...</span>
                        <div className="loader ease-linear rounded-full border-4 border-t-4 border-white h-5 w-5"></div>
                      </span>
                    ) : (
                      'Search'
                    )}
                  </Button>
                </form>
              ) : (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Not Available</AlertTitle>
                  <AlertDescription>
                    Search is only available for "Computer Programming".
                  </AlertDescription>
                </Alert>
              )}
              {filteredResults && (
                <div className="mt-6">
                  <ResultCard
                    rollNumber={filteredResults.RollNumber}
                    name={filteredResults.Name}
                    branch={filteredResults.Branch}
                    theoryMarks={filteredResults.TheoryMarks}
                    practicalMarks={filteredResults.PracticalMarks}
                    courseTitle={currentCourse}
                    onClose={handleClose}
                    lowMarks={false}
                  />
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </section>
  );
};

export default CoursesSection;
