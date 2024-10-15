import React, { useState, useEffect } from 'react';
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Box, Lightbulb, Rocket, ArrowRight, Github, Linkedin, Twitter, Menu, X } from "lucide-react";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-slate-200">
      <header className={`px-4 lg:px-6 h-16 flex items-center fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto flex items-center justify-between">
          <a className="flex items-center justify-center" href="#">
            <Box className="h-8 w-8 text-emerald-500" />
            <span className="ml-2 text-2xl font-bold text-slate-100">ArwaaLabs</span>
          </a>
          <nav className="hidden md:flex space-x-8">
            {['Services', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button className="bg-emerald-600 text-white hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Get Started
            </Button>
          </div>
          <button
            className="md:hidden text-slate-300 hover:text-emerald-400 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-md flex items-center justify-center">
          <nav className="flex flex-col items-center space-y-8">
            {['Services', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-2xl font-medium text-slate-300 hover:text-emerald-400 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button className="mt-4 bg-emerald-600 text-white hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Get Started
            </Button>
          </nav>
        </div>
      )}
      <main className="flex-1 mt-16">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-slate-800">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-slate-100">
                  Empowering the Future with Blockchain and AI
                </h1>
                <p className="mx-auto max-w-[700px] text-slate-400 md:text-xl lg:text-2xl">
                  ArwaaLabs: Your trusted partner for Full Stack Blockchain Development, Advisory, and Consultancy in Web3 and AI.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-emerald-600 text-white hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  Get Started
                </Button>
                <Button variant="outline" className="text-emerald-400 border-emerald-400 hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        {/* Rest of the sections remain unchanged */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-slate-900">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-slate-100">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Rocket, title: "Full Stack Blockchain Development", description: "End-to-end blockchain solutions tailored to your business needs." },
                { icon: Lightbulb, title: "Web3 Advisory", description: "Expert guidance to navigate the decentralized web landscape." },
                { icon: Box, title: "AI Integration", description: "Cutting-edge AI solutions to enhance your blockchain projects." }
              ].map((service, index) => (
                <div key={index} className="flex flex-col items-center text-center p-6 bg-slate-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <service.icon className="h-12 w-12 text-emerald-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-slate-100">{service.title}</h3>
                  <p className="text-slate-400">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-slate-800">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-100">About ArwaaLabs</h2>
                <p className="text-slate-400 text-lg">
                  ArwaaLabs is at the forefront of blockchain innovation, providing cutting-edge solutions and expert consultancy. 
                  Our team of seasoned professionals is dedicated to helping businesses leverage the power of blockchain and AI 
                  to transform their operations and stay ahead in the rapidly evolving digital landscape.
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  alt="Team meeting"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center shadow-2xl"
                  height="310"
                  src="/placeholder.svg?height=310&width=550"
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-slate-900">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-100">Get in Touch</h2>
                <p className="mx-auto max-w-[600px] text-slate-400 md:text-xl">
                  Ready to revolutionize your business with blockchain and AI? Contact us today for a consultation.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col space-y-4">
                  <Input className="bg-slate-800 text-slate-100 border-slate-700 focus:border-emerald-500" placeholder="Enter your email" type="email" />
                  <Button type="submit" className="bg-emerald-600 text-white hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-slate-900 border-t border-slate-800">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col gap-2 sm:flex-row items-center">
            <p className="text-xs text-slate-500">© 2024 ArwaaLabs. All rights reserved.</p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
              <a className="text-xs text-slate-500 hover:text-emerald-400 transition-colors" href="#">Terms of Service</a>
              <a className="text-xs text-slate-500 hover:text-emerald-400 transition-colors" href="#">Privacy</a>
            </nav>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-slate-500 hover:text-emerald-400 transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-slate-500 hover:text-emerald-400 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-slate-500 hover:text-emerald-400 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;