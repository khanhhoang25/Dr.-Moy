import React from 'react';
import { Youtube } from 'lucide-react';

const Content: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="surgery">
      <div className="container mx-auto px-4 max-w-4xl">
        
        <div className="text-center mb-16">
           <h2 className="text-4xl font-bold text-secondary mb-8 relative inline-block">
             BUNION SURGERY
             <span className="absolute bottom-0 left-0 w-full h-1 bg-primary transform translate-y-2"></span>
           </h2>
           <p className="text-lg text-gray-600 leading-relaxed text-left md:text-center">
             Bunion surgeon Dr. Richard Moy performs more surgeries than any other doctor in the world. 
             His extensive training and unparalleled experience make him the best choice for performing your bunion surgery. 
             He has an impressive track record when performing bunionectomies, with several thousands of evaluations from former patients available for review. 
             There are over 100 documented ways to remove a bunion, and Dr. Moy has developed a method that is virtually pain free and prevents it from recurring.
           </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img src="https://picsum.photos/600/600?random=5" alt="Doctor" className="rounded-lg shadow-xl" />
          </div>
          <div>
             <h3 className="text-2xl font-bold text-secondary mb-4">WHY CHOOSE DR. MOY</h3>
             <p className="text-gray-600 mb-4">
               When it comes to skill in any profession, it is something that is either innate to one’s abilities or is learned through training. However, skill beyond a certain degree is truly a gift.
             </p>
             <p className="text-gray-600">
               When looking at results, we find that Dr. Moy’s results are truly remarkable. We believe there is no other surgeon in the world that can produce such consistent results with such a high volume of cases.
             </p>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
          <h3 className="text-2xl font-bold text-secondary mb-4">DR. MOY'S PAINLESS BUNION SURGERY</h3>
          <p className="text-gray-600 mb-6">
            In 1992, Dr. Moy developed a painless bunion-correction procedure. His procedure is designed to be painless, allowing patients to walk immediately, drive as soon as the next day, and begin running after approximately six weeks of healing.
          </p>
          
          <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
             <div className="flex items-center gap-4">
               <Youtube className="text-red-600 w-12 h-12" />
               <div>
                 <h4 className="text-xl font-bold text-secondary">Before & After Videos</h4>
                 <p className="text-sm text-gray-500">Watch real patient transformations</p>
               </div>
             </div>
             <a href="#" className="px-6 py-3 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition-colors">
               VISIT CHANNEL
             </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Content;