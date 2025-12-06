
import React from 'react';
import { Phone, AlertCircle } from 'lucide-react';

const OutOfStatePatient: React.FC = () => {
  return (
    <div className="bg-white pb-20">
      {/* Banner */}
      <div className="bg-secondary relative overflow-hidden text-center py-20 px-4">
        <div className="absolute inset-0 bg-primary/10"></div>
        {/* Background Image Style Placeholder */}
        <div 
            className="absolute inset-0 opacity-30 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://picsum.photos/1920/600?grayscale&blur=2)' }}
        ></div>
        <div className="relative z-10">
           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Out of State Patient</h1>
           <p className="text-xl text-sky-200">What to Plan For</p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16">
        
        {/* Top Section: Steps & Video */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Left Column: How To Get Started */}
          <div>
            <h2 className="text-3xl font-bold text-secondary mb-6 border-b-2 border-primary inline-block pb-2">How Do I Get Started?</h2>
            <ol className="space-y-4 text-gray-700 list-decimal pl-5">
              <li className="pl-2">
                Call your insurance company and verify your benefits, including your deductible amount and your co-portion. Also make sure they cover out of state.
              </li>
              <li className="pl-2">
                Call our office so we can give you an estimate of your out-of-pocket expense.
              </li>
              <li className="pl-2">
                Select three surgery dates that work best for you on Thursday.
              </li>
              <li className="pl-2">
                Verify theses dates and be sure to confirm them with the person who will accompany you to surgery. The surgery center charges $100.00 to reschedule or cancel your surgery.
              </li>
              <li className="pl-2">
                Come into our office the day before your surgery to have a consultation, consent and be given pre- and post-operative orders and prescriptions.
              </li>
              <li className="pl-2">
                Once your surgery is scheduled, download our list of required tests.
              </li>
              <li className="pl-2">
                Medical clearance from your doctor is required within 30 days of your scheduled surgery date. Blood work is required within 14 days of your scheduled surgery date. EKG is required within 6 months of your scheduled surgery date.
              </li>
              <li className="pl-2">
                Fax your lab work and medical clearance to <strong>(949) 716-2725.</strong>
              </li>
              <li className="pl-2">
                Call us at <strong>(949) 837-3338 x100</strong> or contact us online to confirm we have received all of the items. Your surgery cannot proceed without these items.
              </li>
            </ol>
          </div>

          {/* Right Column: Video */}
          <div>
             <div className="bg-black rounded-xl overflow-hidden shadow-xl aspect-video w-full">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/UTC4hBSILxs" 
                  title="Dr. Moy Video"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
             </div>
             <p className="text-sm text-gray-500 mt-4 text-center italic">
               Watch to learn more about the out of state patient experience.
             </p>
          </div>

        </div>

        {/* Additional Items Section */}
        <div className="bg-sky-50 rounded-xl p-8 border border-sky-100 mb-16">
           <h2 className="text-2xl font-bold text-secondary mb-6 flex items-center gap-3">
             <AlertCircle className="text-primary" />
             Additional items to keep in mind:
           </h2>
           <ol className="space-y-4 text-gray-700 list-decimal pl-5 mb-8">
             <li className="pl-2">
               Should you choose to travel alone, it is imperative that someone accompany you the day of surgery. You need someone to care for you the first twenty-four hours, post-operatively.
             </li>
             <li className="pl-2">
               We only do one foot at a time. You can have the other foot done six weeks later.
             </li>
             <li className="pl-2">
               We do not recommend doing the short-stay bunion procedure for anyone over 70 years of age.
             </li>
           </ol>
           
           <div className="bg-white p-6 rounded-lg border border-sky-200 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-gray-800 font-semibold">Still have a question?</p>
                <p className="text-gray-600">Contact us online or call at <strong>(949) 837-3338 x100.</strong></p>
              </div>
              <a href="https://drmoy.com/contact-us/" className="bg-primary hover:bg-sky-600 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center gap-2">
                 <Phone size={18} />
                 Contact Us
              </a>
           </div>
        </div>

        <div className="border-t border-gray-200 my-12"></div>

        {/* Timeline Section */}
        <div className="text-center">
           <h2 className="text-3xl font-bold text-secondary mb-2">What Will My Travel Timeline Be?</h2>
           <p className="text-xl text-gray-600 mb-8">Patients typically proceed with the following scenario.</p>
           
           <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 overflow-hidden inline-block w-full">
              <img 
                src="https://drmoy.com/wp-content/uploads/2021/11/moy-gant-chart-lg4-2024x544.jpg" 
                alt="Out of state surgery timeline" 
                className="w-full h-auto rounded"
              />
           </div>
        </div>

      </div>
    </div>
  );
};

export default OutOfStatePatient;
