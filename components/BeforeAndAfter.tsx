import React from 'react';
import { Info, Camera, FileText, Search } from 'lucide-react';

// Representative sample of patient data
const patientCases = [
  { id: '111422GP', surgery: 'Arthritis of the big toe joint', location: 'Newport Beach, CA' },
  { id: '102722BB', surgery: 'Bunionectomy', location: 'Big Bear, CA' },
  { id: '110322LH', surgery: 'Bunionectomy', location: 'Pacific Palisades, CA' },
  { id: '110322',   surgery: 'Bunionectomy', location: 'Pompano Beach, FL' },
  { id: '102722SD', surgery: 'Bunionectomy', location: 'Yorba Linda, CA' },
  { id: '09222022MC', surgery: 'Bunionectomy', location: 'Canada' },
  { id: '100622DS', surgery: 'Bunionectomy, Hammertoe', location: 'Beverly Hills, CA' },
  { id: '092222SN', surgery: 'Bunionectomy', location: 'Long Beach, CA' },
];

const BeforeAndAfter: React.FC = () => {
  return (
    <div className="bg-white pb-20">
      {/* Banner */}
      <div className="bg-secondary relative overflow-hidden text-center py-20 px-4">
        <div className="absolute inset-0 bg-primary/10"></div>
        <div
            className="absolute inset-0 opacity-20 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://picsum.photos/1920/600?grayscale&blur=2)' }}
        ></div>
        <div className="relative z-10">
           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Before & After Photos</h1>
           <p className="text-xl text-sky-200">Real Results from Real Patients</p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16">
        
        {/* Info Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            
            {/* Transparency Info */}
            <div className="bg-sky-50 rounded-xl p-8 border border-sky-100">
                <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                    <Info className="text-primary" />
                    Unmatched Transparency
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                    Dr. Moy is the only doctor who will:
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
                    <li>Post <strong>every</strong> patient’s bunion surgery before and after photo. Photos are listed in chronological order.</li>
                    <li>Show 100% of all photos and evaluations regardless of what they say.</li>
                </ul>
                <p className="mt-4 text-sm font-medium text-secondary">
                    No other foot and ankle surgeon in the world is willing to do the same.
                </p>
            </div>

            {/* Photo Protocol */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                    <Camera className="text-primary" />
                    Photo Protocol
                </h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
                    <li>Immediately prior to surgery</li>
                    <li>Immediately following the surgery (while still on the operating table)</li>
                    <li>Patient ID # is the date of surgery + initials</li>
                    <li>Patient surveys are given 3-4 days post-surgery</li>
                </ul>
            </div>

             {/* Statement of Truth */}
             <div className="bg-secondary text-white rounded-xl p-8 border border-gray-800">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <FileText className="text-primary" />
                    Statement of Truth
                </h3>
                <p className="text-sm text-gray-300 italic leading-relaxed">
                    "All testimonials reflect each individual’s personal experience. No one was paid to participate or instructed on how or what to say about their experience. Photos are taken immediately prior to surgery, and immediately following surgery."
                </p>
            </div>

        </div>

        <div className="border-t border-gray-100 my-12"></div>

        {/* Gallery Grid */}
        <h2 className="text-3xl font-bold text-center text-secondary mb-12">Patient Cases</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {patientCases.map((patient, index) => (
                <div key={index} className="group bg-white rounded-xl shadow-sm hover:shadow-xl border border-gray-200 overflow-hidden transition-all duration-300">
                    {/* Image Placeholder */}
                    <div className="relative h-64 bg-gray-100 overflow-hidden">
                        <img 
                            src={`https://picsum.photos/400/300?random=${index + 100}`} 
                            alt={`Patient ${patient.id}`}
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                             <Search className="text-white w-8 h-8" />
                        </div>
                    </div>
                    
                    <div className="p-5">
                        <h4 className="font-bold text-lg text-secondary mb-2">Patient: {patient.id}</h4>
                        <div className="text-sm text-gray-600 mb-4 space-y-1">
                            <p><span className="font-semibold">Surgery:</span> {patient.surgery}</p>
                            <p><span className="font-semibold">Location:</span> {patient.location}</p>
                        </div>
                        
                        <button className="w-full py-2 px-4 bg-sky-50 text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-colors text-sm flex items-center justify-center gap-2">
                            <FileText size={16} />
                            View Survey
                        </button>
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">Showing representative sample of thousands of successful cases.</p>
        </div>

      </div>
    </div>
  );
};

export default BeforeAndAfter;