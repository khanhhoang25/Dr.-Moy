import React from 'react';
import { CheckCircle, PlayCircle, FileText, DollarSign } from 'lucide-react';

const Highlights: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50" id="info">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Dr Moy vs Others */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-secondary mb-6 text-center">
                Dr. Moy vs. Others
              </h2>
              <p className="text-gray-600 mb-6 text-center">
                The only foot surgeon who posts <strong>100%</strong> of patient evaluation surveys online!
                We believe in total transparency.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col items-center p-4 bg-sky-50 rounded-lg">
                  <FileText className="text-primary w-10 h-10 mb-3" />
                  <h3 className="font-bold text-secondary">Patient Surveys</h3>
                  <a href="#" className="text-primary text-sm hover:underline mt-1">View All Results</a>
                </div>
                <div className="flex flex-col items-center p-4 bg-emerald-50 rounded-lg">
                  <DollarSign className="text-emerald-500 w-10 h-10 mb-3" />
                  <h3 className="font-bold text-secondary">Financing Options</h3>
                  <a href="#" className="text-emerald-600 text-sm hover:underline mt-1">Learn More</a>
                </div>
              </div>
              
              <div className="mt-8">
                 <img src="https://picsum.photos/600/300?random=1" alt="Comparison Chart" className="w-full rounded-lg shadow-md" />
              </div>
            </div>
          </div>

          {/* Right Column: Videos */}
          <div className="space-y-6" id="videos">
             <div className="flex items-center justify-between mb-4">
               <h2 className="text-2xl font-bold text-secondary flex items-center gap-2">
                 <PlayCircle className="text-red-600" />
                 Hear From Dr. Moy
               </h2>
               <a href="#" className="text-sm text-gray-500 hover:text-red-600 transition-colors">Visit YouTube Channel &rarr;</a>
             </div>

             <div className="grid grid-cols-1 gap-6">
               {/* Video Placeholder 1 */}
               <div className="bg-black rounded-xl overflow-hidden shadow-lg aspect-video relative group cursor-pointer">
                  <img src="https://picsum.photos/800/450?random=2" alt="Video Thumbnail" className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <PlayCircle size={32} fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white font-medium">Why Patients Travel to See Dr. Moy</p>
                  </div>
               </div>

                {/* Video Placeholder 2 */}
                <div className="bg-black rounded-xl overflow-hidden shadow-lg aspect-video relative group cursor-pointer">
                  <img src="https://picsum.photos/800/450?random=3" alt="Video Thumbnail" className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <PlayCircle size={32} fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white font-medium">What is Painless Bunion Surgery?</p>
                  </div>
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Highlights;