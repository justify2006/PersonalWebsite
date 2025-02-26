"use client";
import React from 'react';

export default function Experience() {
  return (
    <div className="min-h-screen bg-[#f5f5dc]">
      <div className="container mx-auto px-4 py-12 space-y-12">

        {/* Lilypad*/}
        <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
          <div className="md:w-1/2">
            <img
              src="/Lilypad.jpg"
              alt="Lilypad"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-6 md:w-1/2 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">
              Lilypad - Chief Technical Officer
            </h2>
            <p className="text-gray-700">
              As Chief Technical Officer of a student-run consulting organization, 
              I spearhead the creation of a robust digital infrastructure that supports 
              over 200 student consultants and 40+ startup clients. By overseeing 
              cross-functional projects and mentorship initiatives, I help drive alumni 
              placement at top universities (such as Stanford and Brown) and facilitate 
              internships at industry-leading companies (NASA, American Express, and more). 
              My role involves bridging technology and business objectives, ensuring 
              seamless collaboration across teams, and continually innovating to meet 
              evolving client needs.
            </p>
          </div>
        </div>

        {/* Stealth Startup */}
        <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
          
          <div className="md:w-1/2">
            <img
              src="/ThePulsate.jpg"
              alt="Stealth Startup"
              className="w-full h-full object-cover"
            />
          </div>
       
          <div className="p-6 md:w-1/2 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">
              Stealth Startup - Full-Stack Engineer
            </h2>
            <p className="text-gray-700">
              Coming soon...
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
