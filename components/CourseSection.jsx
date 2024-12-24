"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { ScrollArea } from "../components/ui/scroll-area";
import { Alert, AlertTitle, AlertDescription } from "./ui/alert";
import {
  X,
  Search,
  AlertCircle,
  Hash,
  User,
  Code,
  Award,
  BookOpen,
  Star,
  ChevronDown,
  ChevronUp,
  Calendar,
  MapPin,
  FileDown,
} from "lucide-react";
import CongratulationsMessage from "./CongratulationsMessage";
import { motion, AnimatePresence } from "framer-motion";
const courses = [
  {
    title: "Cryptography & Network Security",
    description: "Learn the fundamentals of Cryptography and Network Security.",
    image: "./Crypto_Net-Sec.jpeg",
    ongoing: false,
  },
  {
    title: "Computer Programming",
    description:
      "Learn the fundamentals of Computer Programming. Explore and implement different programming concepts using C Programming Language.",
    image: "./Computer_Prog.jpg",
    ongoing: true,
  },
  {
    title: "Java Programming",
    description:
      "Explore the world of JAVA. Learn the classic elements of Object-Oriented Programming.",
    image: "./Java.jpeg",
    ongoing: true,
  },
  {
    title: "Introduction to Blockchain",
    description:
      "Learn about the fascinating world of Blockchain Technology that is shaping the future of payments and beyond.",
    image: "./Block.png",
    ongoing: false,
  },
  {
    title: "Seminars/Guest Lectures",
    description: "Explore various topics through seminars and guest lectures.",
    image: "/placeholder.svg?height=200&width=300",
    ongoing: true,
  },
];
const seminarTopics = [
  {
    title: "Git and GitHub",
    description:
      "Version control and collaborative development using Git and GitHub.",
    details:
      "Learn how to effectively use Git for version control and collaborate on projects using GitHub. Topics include branching, merging, pull requests, and best practices for team development.",
    date: "06-11-2024",
    venue: "Lecture Hall A",
    slides: "/slides/git&github.pdf",
  },
  {
    title: "Blockchain Technology",
    description: "Introduction to blockchain and its applications.",
    details:
      "Explore the fundamentals of blockchain technology, including distributed ledgers, consensus mechanisms, and smart contracts. Discuss real-world applications in finance, supply chain, and beyond.",
    date: "2023-06-22",
    venue: "Virtual Auditorium",
    slides: "/slides/blockchain-seminar.pdf",
  },
  {
    title: "Artificial Intelligence and Machine Learning",
    description: "Overview of AI and ML techniques and applications.",
    details:
      "Dive into the world of AI and ML, covering topics such as neural networks, deep learning, and natural language processing. Explore current trends and future possibilities in various industries.",
    date: "2023-07-10",
    venue: "Conference Room 2B",
    slides: "/slides/ai-ml-seminar.pdf",
  },
  {
    title: "Cybersecurity in the Digital Age",
    description: "Current trends and best practices in cybersecurity.",
    details:
      "Understand the latest threats and defense mechanisms in cybersecurity. Topics include encryption, network security, ethical hacking, and strategies for protecting personal and organizational data.",
    date: "2023-08-05",
    venue: "Lecture Hall C",
    slides: "/slides/cybersecurity-seminar.pdf",
  },
];

const SeminarTopicCard = ({
  title,
  description,
  details,
  date,
  venue,
  slides,
  isOpen,
  onClick,
}) => (
  <Card className="mb-4 overflow-hidden">
    <CardHeader
      className="cursor-pointer bg-teal-100 hover:bg-teal-200 transition-colors duration-200"
      onClick={onClick}
    >
      <CardTitle className="text-lg font-semibold text-teal-800 flex justify-between items-center">
        {title}
        {isOpen ? (
          <ChevronUp className="w-5 h-5" />
        ) : (
          <ChevronDown className="w-5 h-5" />
        )}
      </CardTitle>
    </CardHeader>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <CardContent className="pt-4">
            <p className="text-gray-600 mb-2">{description}</p>
            <p className="text-gray-700 mb-4">{details}</p>
            <div className="flex flex-col space-y-2 text-sm text-gray-600">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Date: {new Date(date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Venue: {venue}</span>
              </div>
            </div>
            <Button
              className="mt-4 bg-teal-600 hover:bg-teal-700 text-white"
              onClick={(e) => {
                e.stopPropagation();
                window.open(slides, "_blank");
              }}
            >
              <FileDown className="w-4 h-4 mr-2" />
              Download Slides
            </Button>
          </CardContent>
        </motion.div>
      )}
    </AnimatePresence>
  </Card>
);

const SeminarCard = ({ onClose }) => {
  const [openTopic, setOpenTopic] = useState(null);

  const toggleTopic = (index) => {
    setOpenTopic(openTopic === index ? null : index);
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Card className="w-full max-w-2xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-4">
          <CardTitle className="text-xl font-bold flex items-center justify-between">
            <span>Seminars/Guest Lectures</span>
            <Button
              variant="ghost"
              onClick={onClose}
              className="text-white hover:text-teal-200"
            >
              <X className="h-6 w-6" />
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <ScrollArea className="h-[60vh] pr-4">
            <p className="text-gray-700 mb-4">
              Explore a variety of topics through our engaging seminars and
              guest lectures. These sessions provide valuable insights from
              industry experts and academics, covering cutting-edge
              technologies, research findings, and practical applications in the
              field of computer science and engineering.
            </p>
            {seminarTopics.map((topic, index) => (
              <SeminarTopicCard
                key={index}
                {...topic}
                isOpen={openTopic === index}
                onClick={() => toggleTopic(index)}
              />
            ))}
          </ScrollArea>
        </CardContent>
        <CardFooter className="bg-gray-50 p-4">
          <Button
            onClick={onClose}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white transition duration-200 ease-in-out transform hover:scale-105 shadow-lg"
          >
            Close
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const CoursesSection = () => {
  const [search, setSearch] = useState("");
  const [filteredResults, setFilteredResults] = useState(null);
  const [currentCourse, setCurrentCourse] = useState(null);
  const [error, setError] = useState("");
  const [showResultCard, setShowResultCard] = useState(false);
  const [showSeminarCard, setShowSeminarCard] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setError("");
    setFilteredResults(null);
    setIsLoading(true);
    try {
      if (currentCourse !== "Computer Programming") {
        setError("Search is only available for Computer Programming.");
        setIsLoading(false);
        return;
      }

      const response = await fetch("/api/fetch-result", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rollNumber: search,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setFilteredResults(data);
      setShowResultCard(true);
      setIsLoading(false);
    } catch (error) {
      setError("Failed to load search results");
      window.alert("Not available");
      setIsLoading(false);
      console.error(error);
    }
  };

  const handleClose = () => {
    setShowResultCard(false);
    setShowSeminarCard(false);
    setSearch("");
    setFilteredResults(null);
    setCurrentCourse(null);
  };

  return (
    <section id="courses" className="py-12 bg-teal-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-teal-800">Courses</h2>
        <h4 className="text-xl font-semibold mb-8 text-teal-700">
          Courses that I am currently teaching or taught in the past
        </h4>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="overflow-hidden transition duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <div
                className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-semibold ${
                  course.ongoing
                    ? "bg-teal-500 text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
              >
                {course.ongoing ? "Ongoing" : "Completed"}
              </div>
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-teal-700">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                {course.ongoing && (
                  <Button
                    className="bg-teal-600 hover:bg-teal-700 text-white"
                    onClick={() => {
                      if (course.title === "Seminars/Guest Lectures") {
                        setShowSeminarCard(true);
                      } else {
                        setCurrentCourse(course.title);
                        setShowResultCard(true);
                      }
                    }}
                  >
                    {course.title === "Seminars/Guest Lectures"
                      ? "View Details"
                      : "View Results"}
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {showResultCard && currentCourse && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-40">
            <Card className="w-full max-w-md shadow-lg">
              <CardHeader className="bg-gradient-to-r from-teal-600 to-teal-700 text-white">
                <CardTitle className="flex justify-between items-center">
                  <span className="text-xl font-bold">
                    Search Results for {currentCourse}
                  </span>
                  <Button
                    variant="ghost"
                    onClick={handleClose}
                    className="text-white hover:text-teal-200"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                {currentCourse === "Computer Programming" ? (
                  <form onSubmit={handleSearch} className="space-y-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="enroll-no"
                        className="text-teal-700 font-medium"
                      >
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
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <span className="flex items-center justify-center">
                          <span className="mr-2">Loading...</span>
                          <div className="loader ease-linear rounded-full border-4 border-t-4 border-white h-5 w-5"></div>
                        </span>
                      ) : (
                        "Search"
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
        {showSeminarCard && (
          <SeminarCard onClose={() => setShowSeminarCard(false)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default CoursesSection;
