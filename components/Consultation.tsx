import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Briefcase, GraduationCap, Stethoscope, FileCheck } from 'lucide-react';

const AccordionItem = ({ title, icon: Icon, children, isOpen, onClick }: any) => (
  <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden bg-white">
    <button
      className={`w-full flex items-center justify-between p-4 text-left transition-colors ${isOpen ? 'bg-primary text-white' : 'bg-white text-secondary hover:bg-gray-50'}`}
      onClick={onClick}
    >
      <div className="flex items-center gap-3 font-semibold">
        <Icon size={20} />
        {title}
      </div>
      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
    </button>
    {isOpen && (
      <div className="p-6 text-gray-600 bg-white border-t border-gray-100 animate-fadeIn">
        {children}
      </div>
    )}
  </div>
);

const Consultation: React.FC = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 bg-white" id="consultation">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Accordion */}
          <div>
            <h2 className="text-2xl font-bold text-secondary mb-6">Learn More About Dr. Moy</h2>
            
            <AccordionItem 
              title="ABOUT DR. MOY" 
              icon={Briefcase} 
              isOpen={openIndex === 0} 
              onClick={() => setOpenIndex(openIndex === 0 ? -1 : 0)}
            >
              Dr. Moy’s patients agree that he’s a highly skilled expert in his field. As evidence of his widely recognized work, his patients have traveled across the country, even from other parts of the world, just to see the doctor. He continues to differentiate himself from other podiatrists with his virtually pain free bunion surgery technique.
            </AccordionItem>
            
            <AccordionItem 
              title="EXPERIENCE" 
              icon={GraduationCap} 
              isOpen={openIndex === 1} 
              onClick={() => setOpenIndex(openIndex === 1 ? -1 : 1)}
            >
              People can go to any surgeon for their bunion removal but they travel across the country to see Dr. Moy because they see the results he produces. He has performed more surgeries than any other surgeon in his niche.
            </AccordionItem>
            
            <AccordionItem 
              title="VIRTUALLY PAIN FREE SURGERY" 
              icon={Stethoscope} 
              isOpen={openIndex === 2} 
              onClick={() => setOpenIndex(openIndex === 2 ? -1 : 2)}
            >
              In over 97% of cases, patients say their surgery was virtually pain free. The proprietary techniques used minimize tissue damage leading to faster recovery and less pain.
            </AccordionItem>

            <AccordionItem 
              title="CREDIBILITY" 
              icon={FileCheck} 
              isOpen={openIndex === 3} 
              onClick={() => setOpenIndex(openIndex === 3 ? -1 : 3)}
            >
              All patient post-op surveys are submitted online for viewing, despite what they say. We believe in evidence-based medicine and total transparency for our patients.
            </AccordionItem>
          </div>

          {/* Form */}
          <div className="bg-sky-50 p-8 rounded-2xl shadow-lg border border-sky-100">
            <h2 className="text-2xl font-bold text-secondary mb-2">Request A Consultation</h2>
            <p className="text-gray-600 mb-6 text-sm">Have a question? Fill out the form below and we will get back to you.</p>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
                <input type="text" placeholder="Last Name" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
              </div>

              <select className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-gray-600 bg-white">
                <option value="">How did you hear about us?</option>
                <option value="google">Search Engine</option>
                <option value="referral">Referral</option>
                <option value="social">Social Media</option>
              </select>
              
              <div className="flex gap-6 items-center">
                 <label className="text-gray-700 font-medium">Gender:</label>
                 <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
                   <input type="radio" name="gender" className="text-primary focus:ring-primary" /> Male
                 </label>
                 <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
                   <input type="radio" name="gender" className="text-primary focus:ring-primary" /> Female
                 </label>
              </div>

              <textarea placeholder="Message / Preferred Date" rows={4} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"></textarea>

              <button className="w-full bg-primary hover:bg-sky-600 text-white font-bold py-3 px-6 rounded-md shadow transition-colors">
                SUBMIT REQUEST
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Consultation;