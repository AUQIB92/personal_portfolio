"use client";

import React, { useState } from "react";
import { ExternalLink, BookOpen } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";

const publications = [
  {
    title: "Applicability of mobile contact tracing in fighting pandemic (COVID-19): Issues, challenges, and solutions",
    authors: "AB Dar, AH Lone, S Zahoor, AA Khan, R Naaz",
    journal: "Computer Science Review",
    impactFactor: "13.3",
    pages: "169",
    year: "2020",
    link: "https://www.sciencedirect.com/science/article/pii/S157401372030407X?via%3Dihub",
  },
  {
    title: "Forensic-chain: Blockchain-based digital forensics chain of custody with PoC in Hyperledger Composer",
    authors: "AH Lone, R Naaz",
    journal: "Digital Investigation",
    impactFactor: "2.0",
    pages: "28, 44-55",
    year: "2019",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S174228761830344X",
  },
  {
    title: "Applicability of Blockchain smart contracts in securing Internet and IoT: A systematic literature review",
    authors: "AH Lone, R Naaz",
    journal: "Computer Science Review",
    impactFactor: "13.3",
    pages: "102700",
    year: "2020",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S1574013720304603",
  },
  {
    title: "Forgery protection of academic certificates through integrity preservation at scale using ethereum smart contract",
    authors: "AH Lone, R Naaz",
    journal: "Scalable Computing: Practice and Experience",
    impactFactor: "1.1",
    pages: "673-688",
    year: "2020",
    link: "https://www.scpe.org/index.php/scpe/article/view/1806",
  },
  {
    title: "Demystifying cryptography behind blockchains and a vision for post-quantum blockchains",
    authors: "AH Lone, R Naaz",
    journal: "IEEE International Conference for Innovation in Technology (INOCON)",
    pages: "1-6",
    year: "2020",
    link: "https://ieeexplore.ieee.org/document/9298215",
  },
  {
    title: "Reputation driven dynamic access control framework for iot atop poa ethereum blockchain",
    authors: "AH Lone, R Naaz",
    journal: "Cryptology ePrint Archive",
    year: "2020",
    pages: "2020/566",
    link: "https://eprint.iacr.org/2020/566",
  },
];

export default function Publications() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="publications" className="py-4 bg-gradient-to-br from-teal-50 to-emerald-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-teal-800">Publications</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {publications.map((publication, index) => (
            <Card
              key={index}
              className={`overflow-hidden transition-all duration-300 hover:shadow-xl ${
                hoveredIndex === index
                  ? "scale-105 rotate-1 bg-gradient-to-br from-teal-100 to-emerald-200"
                  : "bg-white"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-teal-700">{publication.title}</h3>
                <p className="text-teal-600 mb-2">{publication.authors}</p>
                <p className="text-teal-500 mb-2">
                  {publication.journal}, {publication.year}
                </p>
                <p className="text-teal-400 mb-4">Pages: {publication.pages}</p>
                <div className="flex items-center justify-between">
                  {publication.impactFactor && (
                    <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 font-semibold">
                      IF: {publication.impactFactor}
                    </Badge>
                  )}
                  {publication.link && (
                    <a
                      href={publication.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-teal-600 hover:text-teal-800 transition duration-300"
                    >
                      Read More
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-teal-800">
            To know more, please visit
          </h3>
          <a
            href="https://scholar.google.com/citations?user=WkdoSAgAAAAJ&hl=en&oi=ao"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition duration-300 shadow-lg hover:shadow-xl"
          >
            <BookOpen className="h-6 w-6 mr-2" />
            Google Scholar
          </a>
        </div>
      </div>
    </section>
  );
}