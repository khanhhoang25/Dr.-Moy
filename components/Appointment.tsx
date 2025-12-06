import React from 'react';
import { Calendar, AlertCircle } from 'lucide-react';

const Appointment: React.FC = () => {
  return (
    <div className="bg-white pb-20">
      {/* Banner */}
      <div className="bg-secondary relative overflow-hidden text-center py-20 px-4">
        <div className="absolute inset-0 bg-primary/10"></div>
        <div className="relative z-10">
           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Set Up an Appointment</h1>
           <p className="text-xl text-sky-200">Fill Out the Form Below</p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12">
        
        {/* Schedule Info */}
        <div className="max-w-4xl mx-auto mb-16 space-y-8 text-center">
          <div className="bg-sky-50 border border-sky-100 p-6 rounded-xl">
            <h5 className="text-gray-800 font-semibold mb-2">
              This schedule reflects a general schedule of any given week.
            </h5>
            <p className="text-gray-600 text-sm">
              Also, please note that PPO insurance is accepted as an out of network provider. 
              Please call your insurance company to find out your benefits.
            </p>
          </div>

          {/* Calendar Placeholder */}
          <div className="border-2 border-dashed border-gray-200 rounded-xl bg-gray-50 h-64 flex flex-col items-center justify-center text-gray-400">
            <Calendar size={48} className="mb-4 text-primary opacity-50" />
            <p className="font-medium text-lg">[Calendar View Component]</p>
            <p className="text-sm">Interactive availability calendar would appear here</p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <h5 className="font-bold text-secondary mb-3 text-lg">Questions?</h5>
            <p className="text-gray-600">
              Call <a href="tel:9498373338" className="text-primary font-bold hover:underline">949-837-3338</a> if you have any questions. 
              <br />
              If you need a different time or date that accommodate you, you MUST call the office to find out if there are other availabilities.
            </p>
            <p className="text-sm text-primary font-semibold mt-2">
              (Consultations are only done on Tuesdays and Wednesdays)
            </p>
          </div>
        </div>

        {/* Group Consultation Info */}
        <div className="max-w-4xl mx-auto mb-16 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
           <div className="border-l-4 border-primary pl-6 mb-8">
              <h2 className="text-3xl font-bold text-secondary">RESERVE YOUR SEAT.</h2>
              <h3 className="text-xl text-primary font-bold mt-1">GROUP CONSULTATION</h3>
           </div>
           
           <div className="prose max-w-none text-gray-600">
              <p className="text-lg mb-4">
                Save yourself time and save your spot online! Choose a group consultation slot from the schedule and submit your request.
              </p>
              <p className="font-semibold text-secondary mb-4">This group consultation with Dr. Moy includes:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0">
                {['A complete overview', 'X-rays', 'Individual evaluation', 'Insurance verification'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
           </div>
        </div>

        {/* Appointment Form */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gray-50 px-8 py-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-secondary">Setup an Appointment Request</h2>
            </div>

            <form className="p-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="First Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Last Name" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address <span className="text-red-500">*</span></label>
                  <input type="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="email@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone # <span className="text-red-500">*</span></label>
                  <input type="tel" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="(555) 555-5555" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">How did you hear about us? <span className="text-red-500">*</span></label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white text-gray-600">
                  <option value="">Select One...</option>
                  <option value="Search Engine">Search Engine (Google, Yahoo, etc.)</option>
                  <option value="Referral">Referral</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Instagram">Instagram</option>
                  <option value="YouTube">YouTube</option>
                  <option value="TikTok">TikTok</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Gender</label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <div className="relative flex items-center">
                          <input type="radio" name="gender" value="male" className="peer sr-only" />
                          <div className="w-5 h-5 border-2 border-gray-300 rounded-full peer-checked:border-primary peer-checked:bg-primary transition-all"></div>
                        </div>
                        <span className="text-gray-600 group-hover:text-primary transition-colors">Male</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <div className="relative flex items-center">
                          <input type="radio" name="gender" value="female" className="peer sr-only" />
                          <div className="w-5 h-5 border-2 border-gray-300 rounded-full peer-checked:border-primary peer-checked:bg-primary transition-all"></div>
                        </div>
                        <span className="text-gray-600 group-hover:text-primary transition-colors">Female</span>
                      </label>
                    </div>
                 </div>
                 
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2">When are you available?</label>
                   <input type="date" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-600" />
                   <p className="text-xs text-gray-500 mt-1">Tuesday or Wednesday Only</p>
                 </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Please provide any additional details..."></textarea>
              </div>

              <div className="bg-gray-50 p-4 rounded border border-gray-200 flex items-center justify-between">
                <span className="text-sm text-gray-500">This site is protected by reCAPTCHA</span>
                <div className="w-10 h-10 bg-white border rounded shadow-sm flex items-center justify-center">
                   <div className="w-4 h-4 bg-primary rounded-sm"></div>
                </div>
              </div>

              <button type="submit" className="w-full bg-primary hover:bg-sky-600 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                SUBMIT REQUEST
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Appointment;