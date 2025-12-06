import React from 'react';

const Gallery: React.FC = () => {
  const images = Array.from({ length: 8 }).map((_, i) => `https://picsum.photos/400/300?random=${10 + i}`);

  return (
    <section className="py-20 bg-gray-50" id="gallery">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-secondary mb-12">BEFORE & AFTER PHOTOS</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
           {images.map((src, idx) => (
             <div key={idx} className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer">
               <img src={src} alt={`Before and after ${idx}`} className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300" />
               <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <span className="text-white font-bold border-2 border-white px-4 py-2 rounded">VIEW</span>
               </div>
             </div>
           ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto text-center">
           <p className="text-gray-600 italic">
             All of Dr. Moy’s patients’ feet are photographed before and after surgery. Patients marvel at how their foot looks and feels following surgery.
           </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;