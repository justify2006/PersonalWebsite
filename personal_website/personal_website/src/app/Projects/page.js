"use client";
import React from 'react';

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#f5f5dc]">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
          <div className="md:w-1/2">
            <img
              src="/MovieBot.jpg"  
              alt="Movie Recommender Bot"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 md:w-1/2 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">
              Movie Recommender Bot - Python
            </h2>
            <p className="text-gray-700">
              Developed a neural network–driven movie recommendation system in Python, leveraging the PyTorch framework and sophisticated BERT encoding techniques to process user review embeddings. This project taps into a vast IMDb dataset of over 8 million reviews to intelligently predict film preferences. Additionally, I architected a multi-layer model that integrates batch normalization and dropout, ensuring enhanced training stability and achieving an approximate 80% accuracy on the validation set.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
