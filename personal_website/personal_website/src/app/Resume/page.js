"use client";
import React from 'react';

export default function Resume() {
  return (
    <div className="min-h-screen bg-[#f5f5dc] flex flex-col items-center py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Here is my resume!</h1>
      <div className="w-full max-w-4xl border border-gray-300 rounded-lg overflow-hidden shadow-lg">
        <img
          src="/Resume.PNG"  
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}
