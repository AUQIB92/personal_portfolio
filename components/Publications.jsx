"use client";

import React, { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const publications = [
  {
    title:
      "Applicability of mobile contact tracing in fighting pandemic (COVID-19): Issues, challenges, and solutions",
    authors: "AB Dar, AH Lone, S Zahoor, AA Khan, R Naaz",
    journal: "Computer Science Review",
    impactFactor: "13.3",
    pages: "169",
    year: "2020",
    link: "https://www.sciencedirect.com/science/article/pii/S157401372030407X?via%3Dihub",
  },
  {
    title:
      "Forensic-chain: Blockchain-based digital forensics chain of custody with PoC in Hyperledger Composer",
    authors: "AH Lone, R Naaz",
    journal: "Digital Investigation",
    impactFactor: "2.0",
    pages: "28, 44-55",
    year: "2019",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S174228761830344X",
  },
  {
    title:
      "Applicability of Blockchain smart contracts in securing Internet and IoT: A systematic literature review",
    authors: "AH Lone, R Naaz",
    journal: "Computer Science Review",
    impactFactor: "13.3",
    pages: "102700",
    year: "2020",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S1574013720304603",
  },
  {
    title:
      "Forgery protection of academic certificates through integrity preservation at scale using ethereum smart contract",
    authors: "AH Lone, R Naaz",
    journal: "Scalable Computing: Practice and Experience",
    impactFactor: "1.1",
    pages: "673-688",
    year: "2020",
    link: "https://www.scpe.org/index.php/scpe/article/view/1806",
  },
  {
    title:
      "Demystifying cryptography behind blockchains and a vision for post-quantum blockchains",
    authors: "AH Lone, R Naaz",
    journal:
      "IEEE International Conference for Innovation in Technology (INOCON)",
    pages: "1-6",
    year: "2020",
    link: "https://ieeexplore.ieee.org/document/9298215",
  },
  {
    title:
      "Reputation driven dynamic access control framework for iot atop poa ethereum blockchain",
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
    <section
      id="publications"
      className="py-16 bg-gradient-to-br from-purple-50 to-indigo-100"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-indigo-900">
          Publications
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {publications.map((publication, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl border border-indigo-100 transform ${
                hoveredIndex === index
                  ? "scale-105 -rotate-1 bg-gradient-to-br from-indigo-50 to-purple-100"
                  : "bg-gradient-to-br from-white to-indigo-50"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <h3 className="text-xl font-semibold mb-3 text-indigo-800">
                {publication.title}
              </h3>
              <p className="text-indigo-600 mb-2">{publication.authors}</p>
              <p className="text-indigo-500 mb-2">
                {publication.journal}, {publication.year}
              </p>
              <p className="text-indigo-400 mb-4">Pages: {publication.pages}</p>
              <div className="flex items-center justify-between">
                {publication.impactFactor && (
                  <Badge
                    variant="secondary"
                    className="bg-amber-100 text-green-950 hover:bg-amber-200 font-semibold"
                  >
                    IF: {publication.impactFactor}
                  </Badge>
                )}
                {publication.link && (
                  <a
                    href={publication.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-indigo-600 hover:text-indigo-800 transition duration-300"
                  >
                    Read More
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-indigo-900">
            To know more, please visit
          </h3>
          <a
            href="https://scholar.google.com/citations?user=WkdoSAgAAAAJ&hl=en&oi=ao"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition duration-300"
          >
            <svg
              className="h-6 w-6 mr-2"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
            </svg>
            Google Scholar
          </a>
        </div>
      </div>
    </section>
  );
}
