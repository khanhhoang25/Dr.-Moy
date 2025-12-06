import React from 'react';
import { Lightbulb, Calendar, Activity, Clock, Award, Heart, UserCheck } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <>
      {/* Parallax Section */}
      <section className="relative py-20 parallax bg-fixed bg-cover bg-center" style={{ backgroundImage: 'url(https://picsum.photos/1920/800?grayscale)' }}>
        <div className="absolute inset-0 bg-slate-900/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <Lightbulb size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Innovative Techniques</h3>
              <p className="text-gray-200">
                More patients come to Dr. Moy for bunion removal surgery mainly for his innovative and highly refined surgical techniques.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <Calendar size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Request Consultation</h3>
              <p className="text-gray-200">
                Check our available schedule to book your group consultation with Dr. Moy for a complete overview.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
             <h2 className="text-3xl font-bold mb-4">BUNION SURGERY INFORMATION</h2>
             <p className="max-w-3xl mx-auto text-sky-100">
               Board Certified by American Board of Podiatric Surgery. Recognized leader of virtually pain-free foot surgery.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Left List */}
            <div className="space-y-8">
               <div className="flex flex-col items-center md:items-end text-center md:text-right">
                  <Heart className="w-10 h-10 mb-2 opacity-80" />
                  <h4 className="text-xl font-bold mb-1">97% Pain Free</h4>
                  <p className="text-sm text-sky-100">Patients report surgery was virtually pain free.</p>
               </div>
               <div className="flex flex-col items-center md:items-end text-center md:text-right">
                  <Clock className="w-10 h-10 mb-2 opacity-80" />
                  <h4 className="text-xl font-bold mb-1">35 Minutes</h4>
                  <p className="text-sm text-sky-100">Average surgical time is extremely efficient.</p>
               </div>
               <div className="flex flex-col items-center md:items-end text-center md:text-right">
                  <Award className="w-10 h-10 mb-2 opacity-80" />
                  <h4 className="text-xl font-bold mb-1">High Volume</h4>
                  <p className="text-sm text-sky-100">Performs more surgeries than any other surgeon.</p>
               </div>
            </div>

            {/* Center Image */}
            <div className="flex justify-center">
               <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center border-4 border-white/20">
                 <img src="https://picsum.photos/200/200?random=4" alt="Foot Diagram" className="w-48 h-48 rounded-full object-cover opacity-80 mix-blend-overlay" />
               </div>
            </div>

            {/* Right List */}
            <div className="space-y-8">
               <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <UserCheck className="w-10 h-10 mb-2 opacity-80" />
                  <h4 className="text-xl font-bold mb-1">Unrivaled Success</h4>
                  <p className="text-sm text-sky-100">Dr. Moy's success rate is unmatched globally.</p>
               </div>
               <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <Activity className="w-10 h-10 mb-2 opacity-80" />
                  <h4 className="text-xl font-bold mb-1">Walk Immediately</h4>
                  <p className="text-sm text-sky-100">Patients are able to walk immediately after surgery.</p>
               </div>
               <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <Calendar className="w-10 h-10 mb-2 opacity-80" />
                  <h4 className="text-xl font-bold mb-1">Fast Follow-up</h4>
                  <p className="text-sm text-sky-100">Follow-up visit typically 3-4 days after surgery.</p>
               </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Features;