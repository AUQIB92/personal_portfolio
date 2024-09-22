import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Menu, X } from 'lucide-react'
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { FaGoogleScholar } from 'react-icons/fa6';
import CoursesSection from './CourseSection';
import ExamQualifications from './ExamQualifications';
import Header from './Header';
import AboutMe from './AboutMe';
import ExperienceSection from './ExperienceSection';
import Publications from './Publications';
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

<Header/>

      {/* About Section */}
      
      <AboutMe/>   
      {/*Exam Qualification Section */}
      
{/* Experience Section */}

<ExperienceSection />





      {/* Courses Section */}
    <CoursesSection />

      {/* Publications Section */}
<Publications/>
<ExamQualifications />
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