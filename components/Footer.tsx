import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 pt-16 pb-8" id="footer">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Contact Info */}
          <div>
             <h4 className="text-white font-bold text-lg mb-6 border-b border-gray-700 pb-2 inline-block">GET IN TOUCH</h4>
             <ul className="space-y-4">
               <li className="flex items-start gap-3">
                 <Phone className="text-primary mt-1" size={18} />
                 <div>
                   <p>P: (949) 837-FEET</p>
                   <p>F: (949) 716-2725</p>
                 </div>
               </li>
               <li className="flex items-start gap-3">
                 <Mail className="text-primary mt-1" size={18} />
                 <a href="mailto:info@drmoy.com" className="hover:text-primary transition-colors">info@drmoy.com</a>
               </li>
               <li className="flex items-start gap-3">
                 <MapPin className="text-primary mt-1" size={18} />
                 <div>
                   <p className="font-bold text-white">Richard R. Moy DPM, Inc.</p>
                   <p>27462 Portola Parkway Suite 100</p>
                   <p>Foothill Ranch, CA 92610</p>
                 </div>
               </li>
             </ul>
             <div className="mt-6 flex space-x-4">
               <a href="#" className="hover:text-primary"><Facebook size={20} /></a>
               <a href="#" className="hover:text-primary"><Twitter size={20} /></a>
               <a href="#" className="hover:text-primary"><Youtube size={20} /></a>
               <a href="#" className="hover:text-primary"><Linkedin size={20} /></a>
               <a href="#" className="hover:text-primary"><Instagram size={20} /></a>
             </div>
          </div>

          {/* Recent Posts */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 border-b border-gray-700 pb-2 inline-block">RECENT POSTS</h4>
            <div className="space-y-4">
               <div className="flex gap-3">
                  <img src="https://picsum.photos/60/60?random=7" alt="Post" className="rounded" />
                  <div>
                    <a href="#" className="text-sm font-semibold hover:text-primary line-clamp-2">How to Find the Right Treatment for Foot Pain</a>
                    <span className="text-xs text-gray-500">Posted 2023</span>
                  </div>
               </div>
               <div className="flex gap-3">
                  <img src="https://picsum.photos/60/60?random=8" alt="Post" className="rounded" />
                  <div>
                    <a href="#" className="text-sm font-semibold hover:text-primary line-clamp-2">What To Expect After Bunion Surgery</a>
                    <span className="text-xs text-gray-500">Posted 2023</span>
                  </div>
               </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
             <h4 className="text-white font-bold text-lg mb-6 border-b border-gray-700 pb-2 inline-block">QUICK EXPLORE</h4>
             <ul className="space-y-2 text-sm">
               <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
               <li><a href="#" className="hover:text-primary transition-colors">New Patient</a></li>
               <li><a href="#" className="hover:text-primary transition-colors">Conditions</a></li>
               <li><a href="#" className="hover:text-primary transition-colors">Bunion Surgery</a></li>
               <li><a href="#" className="hover:text-primary transition-colors">Before & After Photos</a></li>
               <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
             </ul>
          </div>

           {/* Financing */}
           <div>
             <h4 className="text-white font-bold text-lg mb-6 border-b border-gray-700 pb-2 inline-block">FINANCING</h4>
             <p className="text-sm mb-4">
               Need help paying your deductible? Need help covering expenses and travel costs?
             </p>
             <p className="font-bold text-white mb-4">Specialized Financing Options Are Available!</p>
             <button className="bg-white text-slate-900 px-4 py-2 rounded text-sm font-bold hover:bg-primary hover:text-white transition-colors">
               APPLY NOW
             </button>
           </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} DrMoy.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;