"use client"
import React, { useState, useEffect } from 'react';
import BlurText from "../components/BlurText";
import './globals.css';
import { FaUser, FaFileAlt, FaCode, FaBriefcase } from 'react-icons/fa';
import Link from "next/link";

function Homepage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <section className="bg-[#f5f5dc] relative pb-32">
        <main className="container mx-auto px-4 md:px-8 pt-20 pb-20 flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="w-full md:w-2/5 mb-12 md:mb-0">
            <BlurText
              text="Welcome to my website!"
              delay={100}
              animateBy="words"
              direction="top"
              className="text-5xl md:text-7xl font-light text-gray-900 tracking-tight leading-tight"
            />
            <p
              className={`
                text-lg md:text-xl text-gray-700 mb-6 font-light tracking-wide
                transition-opacity duration-1000
                ${isLoaded ? "opacity-100" : "opacity-0"}
              `}
            >
              My name is Justin Han. I am a current student at UNC Chapel Hill studying Computer Science and Business. I am interested in AI, Full-Stack Development, and Business Analytics
            </p>
            <p
              className={`
                text-lg text-gray-900 italic font-serif
                transition-opacity duration-1000
                ${isLoaded ? "opacity-100" : "opacity-0"}
              `}
            >
              feel free to explore!
            </p>
          </div>

          <div className="w-full md:w-3/5 relative h-[600px] flex justify-center items-center">
            {/* bubble thingys */}
            <div
              className={`absolute w-48 h-48 rounded-full bg-[#ffd700] opacity-0 bottom-[-7%] left-[45%] z-40 transition-opacity duration-1000 animate-float-slow ${isLoaded ? "opacity-40" : ""}`}
              style={{ transitionDelay: '300ms' }}
            ></div>

            <div
              className={`absolute w-24 h-24 rounded-full bg-[#ffa07a] opacity-0 bottom-[0%] left-[25%] z-40 transition-opacity duration-1000 animate-float-medium ${isLoaded ? "opacity-50" : ""}`}
              style={{ transitionDelay: '450ms' }}
            ></div>

            <div
              className={`absolute w-36 h-36 rounded-full bg-[#ffdab9] opacity-0 bottom-[-5%] right-[20%] z-40 transition-opacity duration-1000 animate-float-slow ${isLoaded ? "opacity-35" : ""}`}
              style={{ transitionDelay: '600ms' }}
            ></div>

            <div
              className={`absolute w-28 h-28 rounded-full bg-[#ffd700] opacity-0 bottom-[-8%] right-[5%] z-40 transition-opacity duration-1000 animate-float-fast ${isLoaded ? "opacity-60" : ""}`}
              style={{ transitionDelay: '750ms' }}
            ></div>

            <div
              className={`absolute w-34 h-34 rounded-full bg-[#ffa07a] opacity-0 bottom-[-2%] right-[10%] z-40 transition-opacity duration-1000 animate-float-medium ${isLoaded ? "opacity-45" : ""}`}
              style={{ transitionDelay: '400ms' }}
            ></div>

            <div
              className={`absolute w-48 h-48 rounded-full bg-[#ffdab9] opacity-0 bottom-[3%] left-[5%] z-40 transition-opacity duration-1000 animate-float-slow ${isLoaded ? "opacity-40" : ""}`}
              style={{ transitionDelay: '550ms' }}
            ></div>

            <div
              className={`absolute w-32 h-32 rounded-full bg-[#ffd700] opacity-0 bottom-[-1%] left-[40%] z-40 transition-opacity duration-1000 animate-float-medium ${isLoaded ? "opacity-35" : ""}`}
              style={{ transitionDelay: '500ms' }}
            ></div>

            <div
              className={`absolute w-48 h-48 rounded-full bg-[#ffa07a] opacity-0 bottom-[8%] left-[25%] z-40 transition-opacity duration-1000 animate-float-slow ${isLoaded ? "opacity-30" : ""}`}
              style={{ transitionDelay: '350ms' }}
            ></div>

            <div
              className={`absolute w-32 h-32 rounded-full bg-[#ffdab9] opacity-0 bottom-[-3%] right-[15%] z-40 transition-opacity duration-1000 animate-float-fast ${isLoaded ? "opacity-45" : ""}`}
              style={{ transitionDelay: '700ms' }}
            ></div>

            {/* Portrait 1 */}
            <div className="absolute left-[10%] bottom-25%] w-[200px] h-[300px] md:w-[240px] md:h-[320px] z-10">
              <div
                className={`w-full h-full rounded-2xl border-2 border-[#ffd700] overflow-hidden transform transition-all duration-500 delay-100 shadow-lg hover:shadow-xl hover:-translate-y-2 ${
                  isLoaded ? "translate-y-0" : "translate-y-full"
                }`}
              >
                <img
                  src="/Portrait1.PNG"
                  alt="Portrait 1"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Portrait 2 */}
            <div className="absolute left-[60%] -translate-x-1/2 top-[-10%] w-[280px] h-[380px] md:w-[340px] md:h-[440px] z-30">
              <div
                className={`w-full h-full rounded-2xl border-2 border-[#ffa07a] overflow-hidden transform transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-2 ${
                  isLoaded ? "translate-y-0" : "translate-y-full"
                }`}
              >
                <img
                  src="/Portrait2.JPG"
                  alt="Portrait 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Portrait 3  */}
            <div className="absolute right-[3%] bottom-[8%] w-[200px] h-[300px] md:w-[240px] md:h-[320px] z-10">
              <div
                className={`w-full h-full rounded-2xl border-2 border-[#ffdab9] overflow-hidden transform transition-all duration-500 delay-200 shadow-lg hover:shadow-xl hover:-translate-y-2 ${
                  isLoaded ? "translate-y-0" : "translate-y-full"
                }`}
              >
                <img
                  src="/Portrait3.JPG"
                  alt="Portrait 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </main>
       
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[1200px] h-[250px] md:w-[2000px] md:h-[300px] bg-[#fff5eb] rounded-t-[100%] -mb-[50px] md:-mb-[100px]" />
      </section>

      <section className="py-24 bg-[#fff5eb]">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 pt-8">
            Learn more about <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">me...</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* About Me Box - Large */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 md:col-span-8">
              <div className="flex items-start">
                <div className="mr-6 flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
                    <FaUser className="h-8 w-8 text-orange-500" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-4">About Me</h3>
                  <p className="text-gray-600 mb-6">
                    Learn about my background, interests, and the journey that has shaped my career and passion for creating meaningful experiences.
                  </p>
                  <Link href="/AboutMe">
                    <button className="mt-6 px-6 py-2 bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-md hover:opacity-90 transition-opacity">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* My Resume Box - Small */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 md:col-span-4">
              <div className="flex items-start">
                <div className="mr-4 flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <FaFileAlt className="h-8 w-8 text-blue-500" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-4">My Resume</h3>
                  <p className="text-gray-600 mb-6">
                    Explore my professional experience, education, and skills.
                  </p>
                  <Link href="/Resume">
                    <button className="px-6 py-2 bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-md hover:opacity-90 transition-opacity">
                      View Resume
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* My Projects Box - Small */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 md:col-span-4">
              <div className="flex items-start">
                <div className="mr-4 flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <FaCode className="h-8 w-8 text-green-500" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-4">My Projects</h3>
                  <p className="text-gray-600 mb-6">
                    Browse through the projects I've worked on and my creative approach.
                  </p>
                  <Link href="/Projects">
                    <button className="px-6 py-2 bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-md hover:opacity-90 transition-opacity">
                      View Projects
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* My Experiences Box - Large */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 md:col-span-8">
              <div className="flex items-start">
                <div className="mr-6 flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
                    <FaBriefcase className="h-8 w-8 text-purple-500" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-4">My Experiences</h3>
                  <p className="text-gray-600 mb-6">
                    Discover my journey through various roles and organizations, highlighting key achievements and growth throughout my career path.
                  </p>
                  <Link href="/Experience">
                    <button className="mt-6 px-6 py-2 bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-md hover:opacity-90 transition-opacity">
                      View Experiences
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
