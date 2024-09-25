'use client'
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="bg-gradient-to-r from-blue-50 to-indigo-50 py-6 shadow-lg">
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center">
          <img
            src="./Logo.jpeg"
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
            aria-label="Toggle menu"
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
  )
}