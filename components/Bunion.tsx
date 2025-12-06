
import React from 'react';
import ConditionsMenu from './ConditionsMenu';

const Bunion: React.FC = () => {
  return (
    <div className="bg-white pb-20">
      {/* Banner */}
      <div className="bg-secondary relative overflow-hidden text-center py-20 px-4">
        <div className="absolute inset-0 bg-primary/10"></div>
        {/* Background Image */}
        <div 
            className="absolute inset-0 opacity-30 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://drmoy.com/wp-content/uploads/2016/05/DSC01072banner.png)' }}
        ></div>
        <div className="relative z-10">
           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Bunion</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <ConditionsMenu />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            
            {/* Intro Section */}
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6 border-l-4 border-primary pl-4">What is a Bunion?</h2>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <img 
                  src="https://drmoy.com/wordpress/wp-content/uploads/2016/05/ds00309_ds00033_im02092_mcdc7_bunionthu_jpg.png-278x300.jpg" 
                  alt="Bunion Diagram" 
                  className="rounded-lg shadow-sm border border-gray-100 max-w-xs mx-auto md:mx-0"
                  referrerPolicy="no-referrer"
                />
                <p className="text-gray-700 leading-relaxed text-lg">
                  Bunions are painful bone protrusions, commonly caused by wearing shoes that are too tight. They typically form on the inside edge of the big toe at the first metatarsal joint. If left untreated, bunions can cause major foot problems. The movement of the big toe can cause the second toe to shift as well, deforming the foot in the process. Red, calloused skin may also be present at the site of the bunion. Fortunately, there are a number of conventional and surgical options available to alleviate the symptoms or completely remove bunions.
                </p>
              </div>
            </div>

            {/* Severity Levels */}
            <div className="bg-sky-50 rounded-xl p-8 border border-sky-100">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="space-y-3">
                  <h3 className="font-bold text-secondary text-lg">Mild</h3>
                  <img src="https://drmoy.com/wordpress/wp-content/uploads/2016/05/Mild-257x300.png" alt="Mild Bunion" className="mx-auto rounded mix-blend-multiply" referrerPolicy="no-referrer" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-bold text-secondary text-lg">Moderate</h3>
                  <img src="https://drmoy.com/wordpress/wp-content/uploads/2016/05/Moderate-256x300.jpg" alt="Moderate Bunion" className="mx-auto rounded mix-blend-multiply" referrerPolicy="no-referrer" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-bold text-secondary text-lg">Large</h3>
                  <img src="https://drmoy.com/wordpress/wp-content/uploads/2016/05/Large-256x300.jpg" alt="Large Bunion" className="mx-auto rounded mix-blend-multiply" referrerPolicy="no-referrer" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-bold text-secondary text-lg">Severe</h3>
                  <img src="https://drmoy.com/wordpress/wp-content/uploads/2016/05/Severe-256x300.jpg" alt="Severe Bunion" className="mx-auto rounded mix-blend-multiply" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>

            {/* Conventional Treatment */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-secondary mb-6 border-l-4 border-primary pl-4">Conventional Bunion Treatment</h3>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    One of the easiest ways to treat bunions is to wear more comfortable shoes. Bunions develop when the deep toe box is too narrow, effectively pinching the toes. If you have a bunion, you should switch to shoes with roomier deep toe boxes, low or flat heels, and adequate arch support. Custom orthotics, such as bunion pads or insoles, can be worn inside the shoes to relieve the pressure on the big toe by distributing your weight better. A trained podiatrist like Dr. Moy can recommend the best orthotic for you.
                  </p>
                  <p>
                    Mole skin or felt patches can be worn over the bunion to prevent it from rubbing on the inside of your shoes. The pain can also be managed using over-the-counter pain relievers and anti-inflammatory medicines like ibuprofen or aspirin. Dr. Moy can let you know which pain reliever is best suited for you. Ice packs can also be used to help reduce swelling. Ice should be kept in a cloth or towel and applied for 10 to 20 minutes at a time. Your foot should be elevated during application.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center space-y-2">
                  <h4 className="font-bold text-secondary">X-Ray Barefoot</h4>
                  <img src="https://drmoy.com/wordpress/wp-content/uploads/2016/05/xray-barefoot-171x300.jpg" alt="X-Ray Barefoot" className="mx-auto rounded shadow-sm" referrerPolicy="no-referrer" />
                </div>
                <div className="text-center space-y-2">
                  <h4 className="font-bold text-secondary">X-Ray In Heels</h4>
                  <img src="https://drmoy.com/wordpress/wp-content/uploads/2016/05/xray-heels-178x300.jpg" alt="X-Ray In Heels" className="mx-auto rounded shadow-sm" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>

            {/* Video Section */}
            <div className="bg-gray-50 rounded-xl p-2 border border-gray-100">
               <div className="aspect-video w-full rounded-lg overflow-hidden bg-black">
                 <iframe 
                   width="100%" 
                   height="100%" 
                   src="https://www.youtube.com/embed/DunheiwJbWk" 
                   title="Virtually Pain Free Bunion Surgery By Expert Dr. Moy" 
                   frameBorder="0" 
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                   allowFullScreen
                 ></iframe>
               </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Bunion;
