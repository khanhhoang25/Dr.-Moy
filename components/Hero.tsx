import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[600px] flex items-center bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/1920/1080?grayscale&blur=2"
          alt="Surgery Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-primary">PAINLESS</span> <br />
            BUNION SURGERY
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
            Visitors from around the world agree that Dr. Moy is considered the 
            <strong className="text-white font-semibold ml-1">best</strong> bunion surgeon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#consultation" className="px-8 py-4 bg-primary hover:bg-sky-600 text-white font-bold rounded shadow-lg transition-transform transform hover:-translate-y-1 flex items-center justify-center gap-2">
              REQUEST CONSULTATION
              <ArrowRight size={20} />
            </a>
            <a href="#videos" className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-secondary text-white font-bold rounded transition-colors flex items-center justify-center">
              WATCH REAL SURGERIES
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;