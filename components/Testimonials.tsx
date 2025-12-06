import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <Quote size={48} className="mx-auto text-primary mb-6 opacity-50" />
          <h2 className="text-3xl font-bold mb-8">Real Patients</h2>
          
          <blockquote className="text-xl md:text-2xl font-light italic mb-8 leading-relaxed">
            "It was completely worthwhile for me to travel across the country to seek your care, and I experienced no complications or need for further medical care after returning home. You have given me nothing less than a new, healthy pair of feet, and I will always be grateful for your expert overhaul!"
          </blockquote>
          
          <div className="flex flex-col items-center justify-center">
             <img src="https://picsum.photos/100/100?random=6" alt="Patient" className="w-16 h-16 rounded-full border-2 border-primary mb-4" />
             <cite className="not-italic font-bold text-lg">JESSICA ALBERT</cite>
             <span className="text-primary text-sm">Out of State Patient</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;