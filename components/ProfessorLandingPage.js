import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Menu, X } from 'lucide-react'
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { FaGoogleScholar } from 'react-icons/fa6';
import Blockchain3D from './Blockchain3D';
import CentralOrb from './CentralOrb';
import OrbitingIcons from './OrbitingIcons';
import Navbar3D from './Navbar3D';
import CoursesSection from './CourseSection';
import ExamQualifications from './ExamQualifications';
const ProfessorLandingPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
    };
  emailjs.send(
    'service_2n6ytvp',  // Replace with your EmailJS Service ID
    'template_sqiaceg', // Replace with your EmailJS Template ID
    templateParams,
    'Abp-GUV--L0OBZACO'      // Replace with your EmailJS User ID
  )
  .then((response) => {
    console.log('Email successfully sent!', response.status, response.text);
  })
  .catch((err) => {
    console.error('Error sending email:', err);
  });

  // Reset form fields
  setName('');
  setEmail('');
  setSubject('');
  setMessage('');
};
const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => {
  setIsOpen(!isOpen);
};


  return (
    <div className="font-sans">

{/* Header Section */}
<header className="bg-gradient-to-r from-blue-50 to-indigo-50 py-6 shadow-lg">
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center">
          <img
            src="/Logo.jpeg"
            alt="Professor's Logo"
            className="w-20 h-20 rounded-full mr-4 border-2 border-blue-500 shadow-md"
          />
          <h1 className="text-2xl md:text-3xl font-bold text-blue-700 tracking-wide">
            Auqib Hamid Lone <span className="text-lg font-normal">(Ph.D.)</span>
          </h1>
        </div>

        {/* Hamburger Icon */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-blue-700 hover:bg-blue-600 hover:text-white focus:outline-none px-4 py-2 rounded-md transition-colors duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } lg:flex lg:items-center w-full lg:w-auto mt-4 lg:mt-0`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-2 rounded-lg lg:bg-transparent">
            {['About', 'Experience', 'Courses', 'Publications', 'Contact'].map((item) => (
              <li key={item} className="my-1 lg:my-0">
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block text-blue-700 hover:bg-blue-600 hover:text-white text-lg px-4 py-2 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>



      {/* About Section */}
      
      <section id="about" className="py-10 bg-white">
        <div className="container mx-auto px-4">
       
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <p className="text-lg mb-4">
              As an Assistant Professor of Computer Science & Engineering, I bring over 7 years of specialized experience in teaching and research. My key expertise encompasses Information Security, Applied Cryptography, and Blockchain Technology. I earned my Ph.D. from NIT Srinagar and have authored numerous publications in esteemed journals.
              </p>
              <p className="text-lg mb-4">
              My research pursuits revolve around the Design and Development of Blockchain-based Applications, delving into the broader applications of Blockchain, and utilizing Blockchain Technology to address issues related to Security and Trust.
              </p>
              <h4><i> "Security is balanced mix of Feeling and Reality"</i></h4>
              <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                Learn More
              </button>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <img
                src="/ProfTeaching.png"
                alt="Professor teaching"
                className="rounded-lg shadow-lime-100 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      {/*Exam Qualification Section */}
      <ExamQualifications />
{/* Experience Section */}

<section id="experience" className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-8">Experience</h2>
    <div className="space-y-6">
      {[
        { 
          company: 'GCET Kashmir',
          location: "Ganderbal Kashmir, India",
          role: "Assistant professor (Computer Science & Engineering)",
          job_description: "At GCET, I am teaching various core and specialized undergrad courses to BTech CSE Students",
          date: 'March-2024 to ongoing',
          type: 'Full-Time'
        },
        {
          company: 'Parity Financial',
          location: "London, UK",
          role: "Research Scientist (Blockchain & cryptography)",
          job_description: "At Parfin, I was responsible to understand and improve the underlying mechanisms in particular in regards to Cryptography, Blockchain and Security. I conducted research, developed PoCs (Proof of Concepts) and applied knowledge to assist other team members in implementing solutions to integrate new Blockchain Platforms and timely improve the existing ones",
          date: 'April-2021 to Feb-2024',
          type: 'Full-Time'
        },
        {
          company: 'Bloom Tech',
          location: "Remote (USA)",
          role: "Subject Matter Expert",
          job_description: "I was Subject Matter Expert at Bloom Tech, USA for the Web3 course. In particular, I was SME for Ethereum Tokens (ERC20 and ERC721)",
          date: 'June-2022 to Dec-2022',
          type: 'Part-Time'
        },
        {
          company: 'Colleges and Universities',
          location: "Remote",
          role: "Technical Trainer",
          job_description: "I have conducted Training/Teaching sessions for College students on Blockchain Technology. I have developed a curriculum that helps students to understand the ins and outs of the technology",
          date: 'April-2021 to Dec-2023',
          type: 'Part-Time'
        }
      ].map((experience, index) => (
        <div
          key={index}
          className="bg-gray-100 p-6 transition duration-300 transform hover:scale-105 rounded-lg hover:shadow-lg hover:bg-gradient-to-r hover:from-gray-100 hover:via-gray-200 hover:to-gray-300 hover:text-gray-900"
        >
          <h3 className="text-xl font-bold mb-2">{experience.company}</h3>
          <p className="text-gray-600 italic mb-2 hover:text-gray-700">{experience.location}</p>
          <p className="text-gray-600 font-bold mb-2 hover:text-gray-700">{experience.role}</p>
          <p className="text-gray-600 mb-2 hover:text-gray-700">{experience.job_description}</p>
          <p className="text-gray-600 mb-2 hover:text-gray-700">{experience.type}</p>
          <p className="text-gray-500 font-bold mb-4 hover:text-gray-700">{experience.date}</p>
        </div>
      ))}    </div>
  </div>
</section>





      {/* Courses Section */}
    <CoursesSection />

      {/* Publications Section */}
      <section id="publications" className="py-162 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Publications</h2>
          <div className="space-y-6">
            {[
             { title: 'Applicability of mobile contact tracing in fighting pandemic (COVID-19): Issues, challenges, and solutions', authors: 'AB Dar, AH Lone, S Zahoor, AA Khan, R Naaz', journal: 'Computer Science Review',impact_factor:'13.3', pages: '169', year: '2020',link:'https://www.sciencedirect.com/science/article/pii/S157401372030407X?via%3Dihub' },
              {title: 'Forensic-chain: Blockchain-based digital forensics chain of custody with PoC in Hyperledger Composer', authors: 'AH Lone, R Naaz', journal: 'Digital Investigation',impact_factor:'2.0' , pages: ' 28, 44-55', year: '2019',link:'https://www.sciencedirect.com/science/article/abs/pii/S174228761830344X' },
              {title: 'Applicability of Blockchain smart contracts in securing Internet and IoT: A systematic literature review', authors: 'AH Lone, R Naaz', journal:'Computer Science Review', impact_factor:'13.3' ,pages: '102700', year: '2020',link:'https://www.sciencedirect.com/science/article/abs/pii/S1574013720304603' },
             { title: 'Demystifying cryptography behind blockchains and a vision for post-quantum blockchains',authors:'AH Lone, R Naaz', jounral :'IEEE International Conference for Innovation in Technology (INOCON)',pages:'1-6' ,year:'2020'}
            ].map((publication, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg transition duration-300 hover:shadow-md">
                <h3 className="text-xl font-semibold mb-2">{publication.title}</h3>
                <p className="text-gray-600 mb-2">{publication.authors}</p>
                <p className="text-gray-500 mb-4">{publication.date}</p>
                <p className="text-gray-500 mb-4">{publication.journal}</p>
                {publication.impact_factor && (
              <div className="ml-3 flex items-center"> 
                <span className="w-10 h-10 bg-green-500 text-white text-xs flex items-center justify-center rounded-full">
                  {"IF:" +publication.impact_factor}
                </span>
              </div>
            )}
                <a href={publication.link} className="text-blue-600 hover:underline">Read More</a>
              
              </div>
            ))}
          </div>
        </div>
        <div className="container mx-auto px-4">
              <h3 className="text-xl font-semibold  pl-2">To know more please visit</h3>
              
             
                <a href="https://scholar.google.com/citations?user=WkdoSAgAAAAJ&hl=en&oi=ao" className="text-blue-800 hover:text-black transition duration-300">
                  <FaGoogleScholar size={42} />
                </a>
              </div>   
             
      </section>




      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-1">Message</label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-600"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition duration-300">
                  Send Message
                </button>
              </form>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
              <p className="mb-4">Feel free to reach out through any of the following channels:</p>
              <div className="flex space-x-4 mb-6">
                <a href="https://x.com/Auqib92" className="text-gray-600 hover:text-blue-600 transition duration-300">
                  <FaTwitter size={24} />
                </a>
                <a href="https://www.linkedin.com/in/dr-auqib-hamid-lone-45996067/" className="text-gray-600 hover:text-blue-600 transition duration-300">
                  <FaLinkedin size={24} />
                </a>
                <a href="https://github.com/AUQIB92" className="text-gray-600 hover:text-blue-600 transition duration-300">
                  <FaGithub size={24} />
                </a>
                <a href="mailto:auqib.cse@gcetkashmir.ac.in" className="text-gray-600 hover:text-blue-600 transition duration-300">
                  <FaEnvelope size={24} />
                </a>
              </div>
              <p className="text-gray-600">
                Email: auqib.cse@gcetkashmir.ac.in<br />
                Office: Room XXX, Admin  Building<br />
                GCET Safapora Ganderbal Kashmir<br />
                Office Hours: Mon-Sat, 2-3 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024  Dr. Auqib. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
export default ProfessorLandingPage;