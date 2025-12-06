
import React from 'react';
import { MapPin, Award } from 'lucide-react';

const officeImages = [
  {
    src: "https://drmoy.com/wp-content/uploads/2016/02/Office-Lobby-300x166.png",
    full: "https://drmoy.com/wp-content/uploads/2016/02/Office-Lobby-1024x566.png",
    title: "Office Lobby",
    description: "Our patient waiting room engulfs the \"living room\" type ambiance to make our patients feel comfortable."
  },
  {
    src: "https://drmoy.com/wp-content/uploads/2016/02/Patient-Room-2-300x169.png",
    full: "https://drmoy.com/wp-content/uploads/2016/02/Patient-Room-2-1024x576.png",
    title: "Patient Room 1",
    description: "There are four private patient rooms at this facility where patients receive check ups, treatment, and instruction."
  },
  {
    src: "https://drmoy.com/wp-content/uploads/2016/02/Patient-Room-22-300x169.png",
    full: "https://drmoy.com/wp-content/uploads/2016/02/Patient-Room-22-1024x576.png",
    title: "Patient Room 2",
    description: "Each room has seats available for spouses and friends to help our patients to feel comfortable."
  },
  {
    src: "https://drmoy.com/wp-content/uploads/2016/02/Checkout-Moy3-300x169-1.jpg",
    full: "https://drmoy.com/wp-content/uploads/2016/02/Checkout-Moy3-1024x576-1.jpg",
    title: "Billing Window",
    description: "Our facility billing department works closely with patients."
  }
];

const surgeryCenterImages = [
  {
    src: "https://drmoy.com/wp-content/uploads/2016/02/Waiting-Room-Sx-Ctr-300x201.jpg",
    full: "https://drmoy.com/wp-content/uploads/2016/02/Waiting-Room-Sx-Ctr-1024x685.jpg",
    title: "Waiting Room",
    description: "Our patient waiting room engulfs the \"living room\" type ambiance to make our patients feel comfortable."
  },
  {
    src: "https://drmoy.com/wp-content/uploads/2016/02/Pre-op112-300x201.jpg",
    full: "https://drmoy.com/wp-content/uploads/2016/02/Pre-op112-1024x685.jpg",
    title: "Pre-Op Room",
    description: "There are two private pre-op rooms at this facility where patient information is reviewed and the patient is prepped for surgery."
  },
  {
    src: "https://drmoy.com/wp-content/uploads/2016/02/OR11-300x201-1.jpg",
    full: "https://drmoy.com/wp-content/uploads/2016/02/OR11-1024x685-1.jpg",
    title: "Operating Room",
    description: "There are two spacious operating rooms at this facility."
  },
  {
    src: "https://drmoy.com/wp-content/uploads/2016/02/Checkout-Moy2-300x201.jpg",
    full: "https://drmoy.com/wp-content/uploads/2016/02/Checkout-Moy2-1024x685.jpg",
    title: "Billing Window",
    description: "Our facility billing department works closely with patients."
  }
];

const FacilityTour: React.FC = () => {
  return (
    <div className="bg-white pb-20">
      {/* Banner */}
      <div className="bg-secondary relative overflow-hidden text-center py-20 px-4">
        <div className="absolute inset-0 bg-primary/10"></div>
        {/* Background Image */}
        <div 
            className="absolute inset-0 opacity-40 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://drmoy.com/wp-content/uploads/2016/02/buildingbanner2.jpg)' }}
        ></div>
        <div className="relative z-10">
           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Facility Tour</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16">
        
        {/* Title */}
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary inline-block border-b-4 border-primary pb-2">Tour Our Facility</h2>
        </div>

        {/* Video & Accreditation Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            {/* Video */}
            <div className="lg:col-span-2">
                <div className="bg-black rounded-xl overflow-hidden shadow-2xl aspect-video w-full">
                    <iframe 
                        width="100%" 
                        height="100%" 
                        src="https://www.youtube.com/embed/AmMWrJPqK5I" 
                        title="Richard R Moy, DPM Facility Tour" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            {/* Accreditation */}
            <div className="lg:col-span-1 bg-gray-50 rounded-xl p-8 border border-gray-100 flex flex-col items-center justify-center text-center">
                <div className="flex items-center gap-2 mb-4">
                    <Award className="text-yellow-500 w-8 h-8" />
                    <h4 className="text-xl font-bold text-secondary">Accredited Facility</h4>
                </div>
                <div className="bg-white p-4 rounded-full shadow-sm mb-6 border border-gray-100">
                    <img 
                        src="https://drmoy.com/wp-content/uploads/2016/02/07_goldseal-300x300-250x250.png" 
                        alt="The Joint Commission Gold Seal" 
                        className="w-48 h-48 object-contain"
                    />
                </div>
                <p className="text-gray-700 italic font-medium">
                    We are proud to announce that Foothill Surgical Institute is credited by The Joint Commission.
                </p>
            </div>
        </div>

        <div className="border-t border-gray-100 my-16"></div>

        {/* Office Tour Section */}
        <div className="mb-20">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-secondary mb-4">Richard R Moy, DPM Office</h2>
                <div className="max-w-3xl mx-auto bg-sky-50 p-6 rounded-lg border border-sky-100">
                    <p className="text-gray-700">
                        This office is located at <strong>29300 Portola Parkway Ste B, Lake Forest, CA 92630</strong>. 
                        Patients can conveniently park in our private parking lot adjacent to the building.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {officeImages.map((img, idx) => (
                    <div key={idx} className="group">
                        <div className="bg-gray-100 rounded-lg overflow-hidden border border-gray-200 mb-4 shadow-sm hover:shadow-lg transition-shadow">
                            <img src={img.src} alt={img.title} className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <h5 className="font-bold text-secondary text-lg mb-2 text-center">{img.title}</h5>
                        <p className="text-sm text-gray-600 text-center leading-relaxed">{img.description}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className="border-t border-gray-100 my-16"></div>

        {/* Surgical Institute Tour Section */}
        <div className="mb-20">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-secondary mb-4">Foothill Surgical Institute</h2>
                <div className="max-w-3xl mx-auto">
                    <p className="text-gray-700 mb-4">
                        Dr. Richard Moy performs all of his surgeries at the Foothill Surgery Center, conveniently located next door to his practice.
                    </p>
                    <blockquote className="italic text-gray-600 border-l-4 border-primary pl-4 text-left md:text-center md:border-l-0 md:border-t-4 md:pt-4 bg-gray-50 p-4 rounded">
                        "Foothill Surgical Institute is a state-of-the-art outpatient surgery center. Our dedicated staff of board certified physicians and highly skilled and experienced registered nurses is committed to providing you with a safe and comfortable surgical experience."
                    </blockquote>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {surgeryCenterImages.map((img, idx) => (
                    <div key={idx} className="group">
                        <div className="bg-gray-100 rounded-lg overflow-hidden border border-gray-200 mb-4 shadow-sm hover:shadow-lg transition-shadow">
                            <img src={img.src} alt={img.title} className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <h5 className="font-bold text-secondary text-lg mb-2 text-center">{img.title}</h5>
                        <p className="text-sm text-gray-600 text-center leading-relaxed">{img.description}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Location Map */}
        <div>
            <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <MapPin className="text-primary w-8 h-8" />
                    <h2 className="text-3xl font-bold text-secondary">Location</h2>
                </div>
                <p className="text-gray-600">Click "More Options" on the map for directions.</p>
            </div>
            
            <div className="w-full h-96 bg-gray-100 rounded-xl overflow-hidden shadow-md border border-gray-200">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d26566.62966095334!2d-117.651085!3d33.6616!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x80dce9f2439250b7%3A0xf19cadaa136549c1!2s29300+Portola+Pkwy%2C+Lake+Forest%2C+CA+92630!3m2!1d33.6609063!2d-117.6534571!5e0!3m2!1sen!2sus!4v1463515888727" 
                    width="100%" 
                    height="100%" 
                    className="border-0" 
                    allowFullScreen 
                    loading="lazy" 
                    title="Dr. Moy Location Map"
                ></iframe>
            </div>
        </div>

      </div>
    </div>
  );
};

export default FacilityTour;
