import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Building2, Calendar, MapPin, Briefcase } from "lucide-react"

const experiences = [
  {
    company: 'GCET Kashmir',
    location: "Ganderbal Kashmir, India",
    role: "Assistant professor (Computer Science & Engineering)",
    jobDescription: "At GCET, I am teaching various core and specialized undergrad courses to BTech CSE Students",
    date: 'March-2024 to ongoing',
    type: 'Full-Time',
    color: 'from-teal-500 to-emerald-400'
  },
  {
    company: 'Parity Financial',
    location: "London, UK",
    role: "Research Scientist (Blockchain & cryptography)",
    jobDescription: "At Parfin, I was responsible to understand and improve the underlying mechanisms in particular in regards to Cryptography, Blockchain and Security. I conducted research, developed PoCs (Proof of Concepts) and applied knowledge to assist other team members in implementing solutions to integrate new Blockchain Platforms and timely improve the existing ones",
    date: 'April-2021 to Feb-2024',
    type: 'Full-Time',
    color: 'from-teal-600 to-cyan-400'
  },
  {
    company: 'Bloom Tech',
    location: "Remote (USA)",
    role: "Subject Matter Expert",
    jobDescription: "I was Subject Matter Expert at Bloom Tech, USA for the Web3 course. In particular, I was SME for Ethereum Tokens (ERC20 and ERC721)",
    date: 'June-2022 to Dec-2022',
    type: 'Part-Time',
    color: 'from-teal-500 to-green-400'
  },
  {
    company: 'Colleges and Universities',
    location: "Remote",
    role: "Technical Trainer",
    jobDescription: "I have conducted Training/Teaching sessions for College students on Blockchain Technology. I have developed a curriculum that helps students to understand the ins and outs of the technology",
    date: 'April-2021 to Dec-2023',
    type: 'Part-Time',
    color: 'from-teal-400 to-emerald-300'
  }
]

export default function Component() {
  return (
    <section id="experience" className="py-6 bg-gradient-to-b from-teal-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-teal-800">Experience</h2>
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card key={index} className="relative overflow-hidden transition-all duration-300 hover:shadow-xl bg-teal-50 border-t border-b border-teal-200 group">
              <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${experience.color} group-hover:w-2 transition-all duration-300 -mt-px -mb-px`} />
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center space-x-2 text-xl font-bold text-teal-800">
                  <Building2 className={`h-6 w-6 bg-gradient-to-br ${experience.color} rounded-full p-1 text-white`} />
                  <span>{experience.company}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  <div className="flex items-center text-sm font-medium text-teal-600">
                    <MapPin className="h-4 w-4 mr-2 text-teal-400" />
                    {experience.location}
                  </div>
                  <div className="flex items-center text-sm font-semibold text-teal-800">
                    <Briefcase className={`h-4 w-4 mr-2 text-gradient-to-br ${experience.color}`} />
                    {experience.role}
                  </div>
                  <p className="text-sm text-teal-700 font-medium mt-2 group-hover:text-teal-800 transition-colors duration-300">{experience.jobDescription}</p>
                  <div className="flex items-center justify-between mt-4">
                    <Badge 
                      variant="secondary" 
                      className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${experience.color} text-white transform group-hover:scale-105 transition-transform duration-300`}
                    >
                      {experience.type}
                    </Badge>
                    <div className="flex items-center text-sm font-medium text-teal-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      {experience.date}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}