import React from 'react'
import { Award } from 'lucide-react'
import { Card, CardContent, CardHeader } from "../components/ui/card"

export default function ExamQualifications() {
  const qualifications = [
    { name: "GATE", subject: "CS&IT", year: "2018", score: "98.5 percentile", color: "from-teal-500 to-emerald-500" },
    { name: "NET-JRF", subject: "Computer Applications", year: "2018", score: "99.9 percentile", rank: "AIR 31", color: "from-teal-600 to-cyan-500" },
    { name: "JK-SET", subject: "Computer Applications", year: "2017", score: "Qualified", color: "from-teal-400 to-green-500" },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4 text-teal-800">
            Competitive Exams Qualified
          </h2>
          <p className="max-w-[900px] mx-auto text-teal-600 md:text-xl">
            Showcasing my academic excellence through national and state-level competitive examinations.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {qualifications.map((qual, index) => (
            <Card 
              key={index} 
              className="overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl"
            >
              <CardHeader className={`h-32 bg-gradient-to-br ${qual.color}`}>
                <div className="flex items-center justify-center h-full">
                  <Award className="h-16 w-16 text-white" />
                </div>
              </CardHeader>
              <CardContent className="p-6 bg-white">
                <h3 className="text-xl font-semibold mb-2 text-teal-700">{qual.name} - {qual.subject}</h3>
                <p className="text-teal-600 mb-2">{qual.year}</p>
                <p className="text-teal-800 font-medium">{qual.score}{qual.rank && ` - ${qual.rank}`}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}