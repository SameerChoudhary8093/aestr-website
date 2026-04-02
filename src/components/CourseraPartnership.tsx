'use client';

import React from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';

const CourseraPartnership = () => {
  return (
    <div className="bg-[#1e0a3c] py-20 px-4 md:px-10 flex flex-col items-center">
      {/* Heading */}
      <h1 className="text-white text-4xl font-bold mb-4 font-orbitron">Join Suresh Gyan Vihar University</h1>
      <p className="text-gray-300 text-lg mb-16 font-orbitron">Get Free Access to Premium Learning Platforms</p>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        
        {/* Card 1: Coursera */}
        <div className="bg-[#2a1a4e] rounded-[32px] p-8 pt-16 shadow-2xl relative flex flex-col h-full">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white px-8 py-3 rounded-xl shadow-lg border border-gray-100">
            <Image src="/Other/Coursera_logo.png" alt="Coursera" width={200} height={50} className="w-auto h-10 object-contain" />
          </div>
          
          {/* Top Section */}
          <div className="text-center mb-8">
            <h2 className="text-5xl font-extrabold text-[#0056d2] font-orbitron">3,800+</h2>
            <p className="text-lg text-gray-200 font-semibold font-orbitron">Courses</p>
          </div>
          
          {/* Middle Section */}
          <div className="space-y-4 mb-10">
            <h3 className="font-bold text-white font-orbitron">Key Benefits</h3>
            {["Full access to thousands of courses", "Skills-based short courses", "Top tech companies content", "Blended learning model"].map((text, i) => (
              <div key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                <Check className="w-5 h-5 text-[#0056d2] flex-shrink-0" />
                <span className="font-orbitron">{text}</span>
              </div>
            ))}
          </div>
          
          {/* Bottom Section */}
          <div className="mt-auto pt-4 border-t-2 border-gray-500">
            <p className="font-bold text-white mb-4 font-orbitron text-center">Offerings from</p>
            <div className="flex flex-col items-center gap-2">
              <div className="flex gap-2">
                <div className="border border-gray-500 px-4 py-2 rounded text-sm font-bold text-gray-300 font-orbitron whitespace-nowrap min-w-[80px] text-center">Google</div>
                <div className="border border-gray-500 px-4 py-2 rounded text-sm font-bold text-gray-300 font-orbitron whitespace-nowrap min-w-[80px] text-center">IBM</div>
              </div>
              <div className="border border-gray-500 px-4 py-2 rounded text-sm font-bold text-gray-300 font-orbitron whitespace-nowrap min-w-[80px] text-center">aws</div>
            </div>
          </div>
        </div>

        {/* Card 2: Infosys */}
        <div className="bg-[#2a1a4e] rounded-[32px] p-8 pt-16 shadow-2xl relative flex flex-col h-full">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white px-8 py-3 rounded-xl shadow-lg border border-gray-100">
            <Image src="/Other/springboard-logo.avif" alt="Infosys Springboard" width={200} height={50} className="w-auto h-10 object-contain" />
          </div>
          
          {/* Top Section */}
          <div className="text-center mb-8">
            <h2 className="text-5xl font-extrabold text-[#00a7c4] font-orbitron">5,000+</h2>
            <p className="text-lg text-gray-200 font-semibold font-orbitron">Digital Courses</p>
          </div>
          
          {/* Middle Section */}
          <div className="space-y-4 mb-10">
            <h3 className="font-bold text-white font-orbitron">Key Benefits</h3>
            {["Free access to 5000+ courses", "Learn from industry experts", "Digital learning programs", "Career opportunities"].map((text, i) => (
              <div key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                <Check className="w-5 h-5 text-[#00a7c4] flex-shrink-0" />
                <span className="font-orbitron">{text}</span>
              </div>
            ))}
          </div>
          
          {/* Bottom Section */}
          <div className="mt-auto pt-4 border-t-2 border-gray-500">
            <p className="font-bold text-white mb-4 font-orbitron text-center">Learning Paths</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {['AI/Data Science', 'Cloud Dev', 'Career Skills'].map(item => (
                <div key={item} className="border border-gray-500 px-4 py-2 rounded text-sm font-bold text-gray-300 font-orbitron whitespace-nowrap min-w-[80px] text-center">{item}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Card 3: FutureSkills */}
        <div className="bg-[#2a1a4e] rounded-[32px] p-8 pt-16 shadow-2xl relative flex flex-col h-full">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white px-8 py-3 rounded-xl shadow-lg border border-gray-100">
            <Image src="/Other/futureskills_logo.png" alt="FutureSkills Prime" width={200} height={50} className="w-auto h-10 object-contain" />
          </div>
          
          {/* Top Section */}
          <div className="text-center mb-8">
            <h2 className="text-5xl font-extrabold text-[#9ec100] font-orbitron">12+</h2>
            <p className="text-lg text-gray-200 font-semibold font-orbitron">Future Technologies</p>
          </div>
          
          {/* Middle Section */}
          <div className="space-y-4 mb-10">
            <h3 className="font-bold text-white font-orbitron">Key Benefits</h3>
            {["Master next-decade technologies", "Industry-relevant skills", "Expert-led training", "Future-proof career"].map((text, i) => (
              <div key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                <Check className="w-5 h-5 text-[#9ec100] flex-shrink-0" />
                <span className="font-orbitron">{text}</span>
              </div>
            ))}
          </div>
          
          {/* Bottom Section */}
          <div className="mt-auto pt-4 border-t-2 border-gray-500">
            <p className="font-bold text-white mb-4 font-orbitron text-center">Technologies</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {['Blockchain', 'Cyber Systems', 'Automation'].map(item => (
                <div key={item} className="border border-gray-500 px-4 py-2 rounded text-sm font-bold text-gray-300 font-orbitron whitespace-nowrap min-w-[80px] text-center">{item}</div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CourseraPartnership;
