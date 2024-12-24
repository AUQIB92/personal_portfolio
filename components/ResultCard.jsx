"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import { Separator } from "../components/ui/separator";
import { ScrollArea } from "../components/ui/scroll-area";
import { Star, Award, X } from "lucide-react";
import CongratulationsMessage from "./CongratulationsMessage";

const InfoItem = ({ icon: Icon, label, value }) => (
  <motion.div
    className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm"
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <div className="flex items-center space-x-3">
      <div className="p-2 bg-teal-100 rounded-full">
        <Icon className="w-5 h-5 text-teal-600" />
      </div>
      <span className="font-medium text-gray-700">{label}</span>
    </div>
    <span className="text-gray-900 font-semibold">{value}</span>
  </motion.div>
);

const ResultCard = ({
  rollNumber,
  name,
  branch,
  theoryMarks,
  practicalMarks,
  courseTitle,
  onClose,
}) => {
  const totalMarks = theoryMarks + practicalMarks;
  const percentage = (totalMarks / 100) * 100;
  const stars = Math.round((totalMarks / 100) * 5);

  const lowMarks = theoryMarks < 20 || practicalMarks < 20;

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Card className="w-full max-w-md mx-auto bg-gradient-to-br from-teal-50 to-white shadow-xl rounded-xl overflow-hidden sm:w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12 flex flex-col max-h-[90vh]">
        <CardHeader className="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-4 sm:p-6">
          <CardTitle className="text-xl sm:text-2xl font-bold flex items-center justify-between">
            <span className="flex items-center space-x-2">
              <Award className="w-6 h-6" />
              <span>Internal Exam Results</span>
            </span>
            <Button
              variant="ghost"
              onClick={onClose}
              className="text-white hover:text-teal-200"
            >
              <span className="sr-only">Close</span>
              <X className="h-6 w-6" />
            </Button>
          </CardTitle>
        </CardHeader>

        <ScrollArea className="flex-grow overflow-auto">
          <CardContent className="p-4 sm:p-6 space-y-4">
            <InfoItem icon={Star} label="Roll Number" value={rollNumber} />
            <InfoItem icon={Star} label="Name" value={name} />
            <InfoItem icon={Star} label="Branch" value={branch} />
            <InfoItem icon={Star} label="Course" value={courseTitle} />

            <Separator className="my-4" />

            <div className="space-y-2">
              <h4 className="font-semibold text-lg text-teal-700">
                Marks Breakdown
              </h4>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Theory Marks:</span>
                <span className="font-semibold">{theoryMarks}/50</span>
              </div>
              <Progress value={(theoryMarks / 50) * 100} className="h-2" />
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Practical Marks:</span>
                <span className="font-semibold">{practicalMarks}/50</span>
              </div>
              <Progress value={(practicalMarks / 50) * 100} className="h-2" />
            </div>

            {lowMarks && (
              <div
                className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded"
                role="alert"
              >
                <p className="font-bold">Warning</p>
                <p>
                  Your marks are below the passing threshold in one or more
                  sections.
                </p>
              </div>
            )}

            <motion.div
              className="bg-teal-100 p-4 rounded-lg shadow text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Award className="w-6 h-6 text-teal-600" />
                  <span className="font-semibold text-teal-800">
                    Total Score:
                  </span>
                </div>
                <span className="text-2xl font-bold text-teal-800">
                  {totalMarks}
                </span>
              </div>
            </motion.div>

            {theoryMarks >= 20 && practicalMarks >= 20 && (
              <div className="mt-4">
                <CongratulationsMessage stars={stars} />
              </div>
            )}
          </CardContent>
        </ScrollArea>

        <CardFooter className="bg-teal-50 p-4 sm:p-6">
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

export default ResultCard;
