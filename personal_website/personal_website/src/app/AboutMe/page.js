"use client";
import React from 'react';

function AboutMe() {
  return (
    <div className="min-h-screen bg-[#f5f5dc]">
      <div className="container mx-auto px-4 py-12">
        <p className="text-center text-xl md:text-2xl text-gray-900 mb-12 ">
          In my free time, I love to travel and play jazz. Last semester, I got the chance to study abroad in Seoul, South Korea, where I also got the chance to travel to a bunch of other countries in Asia. Here are a couple photos of me and my friends from that trip.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src="/IMG_0134.JPG"
              alt="Travel Photo 1"
              className="w-full h-auto transform transition duration-300 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src="/IMG_0272.JPG"
              alt="Travel Photo 2"
              className="w-full h-auto transform transition duration-300 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src="/IMG_6562.jpg"
              alt="Travel Photo 3"
              className="w-full h-auto transform transition duration-300 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src="/IMG_7116.JPG"
              alt="Travel Photo 4"
              className="w-full h-auto transform transition duration-300 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src="/IMG_7830.jpg"
              alt="Travel Photo 5"
              className="w-full h-auto transform transition duration-300 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src="/IMG_8064.jpg"
              alt="Travel Photo 6"
              className="w-full h-auto transform transition duration-300 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src="/IMG_8289.jpg"
              alt="Travel Photo 6"
              className="w-full h-auto transform transition duration-300 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src="/IMG_8430.jpg"
              alt="Travel Photo 6"
              className="w-full h-auto transform transition duration-300 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src="/IMG_8459.jpg"
              alt="Travel Photo 6"
              className="w-full h-auto transform transition duration-300 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src="/IMG_8608.JPG"
              alt="Travel Photo 6"
              className="w-full h-auto transform transition duration-300 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src="/KL.jpg"
              alt="Travel Photo 6"
              className="w-full h-auto transform transition duration-300 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src="/IMG_0213.JPG"
              alt="Travel Photo 6"
              className="w-full h-auto transform transition duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
