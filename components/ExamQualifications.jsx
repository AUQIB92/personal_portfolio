import React from 'react'
import { Award } from 'lucide-react'

export default function ExamQualifications() {
  const qualifications = [
    { name: "GATE",subject:"CS&IT", year: "2018", score: "98.5 percentile", color: "from-purple-500 to-indigo-500" },
    { name: "NET-JRF", subject:"Computer Applications", year: "2018", score: "99.9 percentile",rank: "AIR 31", color: "from-green-500 to-teal-500" },
    { name: "JK-SET", subject:"Computer Applications", year: "2017", score: "Qualified", color: "from-red-500 to-pink-500" },

  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-100 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">
            Competitive Exam Qualifications
          </h2>
          <p className="max-w-[900px] mx-auto text-gray-600 md:text-xl">
            Showcasing my academic excellence through national and state-level competitive examinations.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {qualifications.map((qual, index) => (
            <div 
              key={index} 
              className={`rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl`}
            >
              <div className={`h-32 bg-gradient-to-br ${qual.color}`}>
                <div className="flex items-center justify-center h-full">
                  <Award className="h-16 w-16 text-white" />
                </div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold mb-2">{qual.name}-{qual.subject}</h3>
             
                <p className="text-gray-600 mb-2">{qual.year}</p>
                <p className="text-gray-800 font-medium">{qual.score}-{qual.rank}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}