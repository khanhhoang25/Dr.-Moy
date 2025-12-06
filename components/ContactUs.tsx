
import React from 'react';
import { MapPin, Phone, Mail, Clock, Globe, Facebook, Twitter, Youtube, Linkedin, Instagram, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactUs: React.FC = () => {
  return (
    <div className="bg-white pb-20">
      {/* Banner */}
      <div className="bg-secondary relative overflow-hidden text-center py-20 px-4">
        <div className="absolute inset-0 bg-primary/10"></div>
        {/* Background Image */}
        <div 
            className="absolute inset-0 opacity-40 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://drmoy.com/wp-content/uploads/2016/02/contact-us-banner.jpg)' }}
        ></div>
        <div className="relative z-10">
           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Map */}
          <div>
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-secondary inline-block border-b-4 border-primary pb-2">Find Our Location</h2>
            </div>
            <p className="text-gray-600 mb-6 text-sm font-medium">Click on "More Options" for Directions.</p>
            <div className="w-full h-[500px] bg-gray-100 rounded-xl overflow-hidden border border-gray-200 shadow-md">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.4778986745623!2d-117.65582239999999!3d33.6706877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dce9e4cf3ae48d%3A0x74936ec6049532ac!2s27462%20Portola%20Pkwy%20Ste%20100%2C%20Lake%20Forest%2C%20CA%2092610!5e0!3m2!1sen!2sus!4v1703047138920!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    className="border-0" 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Dr. Moy Location Map"
                ></iframe>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div>
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-secondary inline-block border-b-4 border-primary pb-2">Contact Form</h2>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" placeholder="First Name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
                        <input type="text" placeholder="Last Name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="email" placeholder="Email Address (Required)" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
                        <input type="tel" placeholder="Phone # (Required)" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
                    </div>

                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white text-gray-600">
                        <option value="">How did you hear about us? (Required)</option>
                        <option value="Search Engine">Search Engine (Google, Yahoo, etc.)</option>
                        <option value="Referral">Referral</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Instagram">Instagram</option>
                        <option value="YouTube">YouTube</option>
                        <option value="TikTok">TikTok</option>
                        <option value="Other">Other</option>
                    </select>

                    <input type="text" placeholder="Other (How did you hear about us?)" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all hidden" />

                    <textarea rows={6} placeholder="Message" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"></textarea>

                    <div className="bg-gray-50 p-4 rounded border border-gray-200 flex items-center justify-between">
                        <span className="text-sm text-gray-500">This site is protected by reCAPTCHA</span>
                        <div className="w-8 h-8 bg-white border rounded shadow-sm flex items-center justify-center">
                           <div className="w-3 h-3 bg-primary rounded-sm"></div>
                        </div>
                    </div>

                    <button type="submit" className="bg-primary hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                        Submit
                    </button>
                </form>
            </div>
          </div>

        </div>

        {/* Separator */}
        <div className="text-center my-16 relative">
            <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative inline-block bg-white px-6">
                <h2 className="text-4xl font-bold text-gray-300">OR</h2>
            </div>
        </div>

        {/* Bottom Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Contact Details */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-secondary mb-6">Richard Moy, DPM</h3>
                
                <div className="space-y-4 text-gray-600">
                    <div className="flex items-start gap-3">
                        <Phone className="text-primary shrink-0 mt-1" size={18} />
                        <div>
                            <p>P: (949) 837-3338</p>
                            <p>F: (949) 716-2725</p>
                            <p className="flex items-center gap-1"><Smartphone size={14} className="text-gray-400"/> SMS: (949) 659-9050</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                        <Mail className="text-primary shrink-0 mt-1" size={18} />
                        <a href="mailto:info@drmoy.com" className="hover:text-primary transition-colors">info@drmoy.com</a>
                    </div>

                    <div className="flex items-start gap-3">
                        <Globe className="text-primary shrink-0 mt-1" size={18} />
                        <a href="https://drmoy.com" className="hover:text-primary transition-colors">drmoy.com</a>
                    </div>

                    <div className="flex items-start gap-3">
                        <Clock className="text-primary shrink-0 mt-1" size={18} />
                        <div>
                            <p>Monday - Friday</p>
                            <p>9:00 AM - 5:00 PM</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <MapPin className="text-primary shrink-0 mt-1" size={18} />
                        <div>
                            <p>27462 Portola Parkway Suite 100</p>
                            <p>Foothill Ranch, CA 92610</p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex gap-3 text-gray-400">
                    <a href="https://www.facebook.com/BunionKing/" target="_blank" rel="noreferrer" className="w-8 h-8 rounded bg-white shadow-sm flex items-center justify-center hover:text-primary hover:shadow-md transition-all"><Facebook size={16} /></a>
                    <a href="https://twitter.com/bunionking" target="_blank" rel="noreferrer" className="w-8 h-8 rounded bg-white shadow-sm flex items-center justify-center hover:text-primary hover:shadow-md transition-all"><Twitter size={16} /></a>
                    <a href="https://www.youtube.com/channel/UC3RqLBYeHIfFvnIfybzdz8w" target="_blank" rel="noreferrer" className="w-8 h-8 rounded bg-white shadow-sm flex items-center justify-center hover:text-primary hover:shadow-md transition-all"><Youtube size={16} /></a>
                    <a href="https://www.linkedin.com/in/drmoy" target="_blank" rel="noreferrer" className="w-8 h-8 rounded bg-white shadow-sm flex items-center justify-center hover:text-primary hover:shadow-md transition-all"><Linkedin size={16} /></a>
                    <a href="https://www.pinterest.com/drrichardmoy/" target="_blank" rel="noreferrer" className="w-8 h-8 rounded bg-white shadow-sm flex items-center justify-center hover:text-primary hover:shadow-md transition-all"><div className="font-serif font-bold text-lg leading-none">P</div></a>
                </div>
            </div>

            {/* Verify Insurance Button */}
            <div className="flex items-center justify-center h-full">
                <Link 
                    to="/insurance-verification" 
                    className="w-full bg-[#f06292] hover:bg-[#e91e63] text-white font-bold text-lg py-6 px-8 rounded-full text-center shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                    Verify my Insurance
                </Link>
            </div>

            {/* Set Up Appointment Button */}
            <div className="flex items-center justify-center h-full">
                <Link 
                    to="/appointment" 
                    className="w-full bg-[#4db6ac] hover:bg-[#009688] text-white font-bold text-lg py-6 px-8 rounded-full text-center shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                    Set Up an Appointment
                </Link>
            </div>

        </div>

      </div>
    </div>
  );
};

export default ContactUs;
