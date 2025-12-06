import React, { useState } from 'react';

const InsuranceVerification: React.FC = () => {
  const [source, setSource] = useState('');

  return (
    <div className="bg-white pb-20">
      {/* Banner */}
      <div className="bg-secondary relative overflow-hidden text-center py-20 px-4">
        <div className="absolute inset-0 bg-primary/10"></div>
        {/* Background Image Style Placeholder */}
        <div 
            className="absolute inset-0 opacity-20 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://picsum.photos/1920/600?grayscale&blur=2)' }}
        ></div>
        <div className="relative z-10">
           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Insurance Verification</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12">
        
        {/* Intro Text */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
            <h1 className="text-3xl font-bold text-secondary mb-4 uppercase">Let's Get Started.</h1>
            <p className="text-xl text-gray-600">
                Fill out this form after you have scheduled your consultation with our office so we can verify your benefits before you come in for your appointment:
            </p>
        </div>

        {/* Verification Form */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gray-50 px-8 py-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-secondary">Insurance Verification Request</h2>
            </div>

            <form className="p-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
              {/* Name */}
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

              {/* Contact */}
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

              {/* Source */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">How did you hear about us? <span className="text-red-500">*</span></label>
                <select 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white text-gray-600"
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                >
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

              {source === 'Other' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Other (How did you hear about us?) <span className="text-red-500">*</span></label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Please tell us how you found us today?" />
                  </div>
              )}

              {/* Gender & Birthdate */}
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
                   <label className="block text-sm font-medium text-gray-700 mb-2">Birthdate</label>
                   <input type="date" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-600" />
                 </div>
              </div>

              {/* Availability */}
              <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2">When are you available?</label>
                   <input type="date" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-600" />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Message"></textarea>
              </div>

              {/* Captcha Placeholder */}
              <div className="bg-gray-50 p-4 rounded border border-gray-200 flex items-center justify-between">
                <span className="text-sm text-gray-500">This site is protected by reCAPTCHA</span>
                <div className="w-10 h-10 bg-white border rounded shadow-sm flex items-center justify-center">
                   <div className="w-4 h-4 bg-primary rounded-sm"></div>
                </div>
              </div>

              <button type="submit" className="w-full bg-primary hover:bg-sky-600 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                SUBMIT
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default InsuranceVerification;