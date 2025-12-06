
import React from 'react';
import { AlertTriangle, CheckCircle, GraduationCap, FileText, Activity } from 'lucide-react';

const caseImages = [
  "https://drmoy.com/wp-content/uploads/2021/06/010-1.jpg",
  "https://drmoy.com/wp-content/uploads/2021/06/007-1.jpg",
  "https://drmoy.com/wp-content/uploads/2021/06/003-1.jpg",
  "https://drmoy.com/wp-content/uploads/2021/06/009-1.jpg",
  "https://drmoy.com/wp-content/uploads/2021/06/006-1.jpg",
  "https://drmoy.com/wp-content/uploads/2021/06/002-1.jpg",
  "https://drmoy.com/wp-content/uploads/2021/06/008-1.jpg",
  "https://drmoy.com/wp-content/uploads/2021/06/005-1.jpg",
  "https://drmoy.com/wp-content/uploads/2021/06/001-1.jpg"
];

const ForDoctorsOnly: React.FC = () => {
  return (
    <div className="bg-white pb-20">
      {/* Banner */}
      <div className="bg-secondary relative overflow-hidden text-center py-20 px-4">
        <div className="absolute inset-0 bg-primary/10"></div>
        {/* Background Image Style Placeholder */}
        <div 
            className="absolute inset-0 opacity-30 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://drmoy.com/wp-content/uploads/2016/02/doctor-banner.jpg)' }} // Assuming a relevant banner or generic
        ></div>
        <div className="relative z-10">
           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">For Doctors Only</h1>
           <p className="text-xl text-sky-200">Advanced Techniques & Training</p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16">
        
        {/* Superiority Section */}
        <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-secondary mb-8 border-l-4 border-primary pl-4">
                Why are Dr. Moy’s Procedures SUPERIOR to others?
            </h2>
            
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-sm mb-12">
                <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center gap-2">
                    <AlertTriangle size={24} />
                    The Lapidus & Similar Procedures
                </h3>
                <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                        These procedures tend to be very painful and debilitating. They require plates and screws to fuse the first metatarsal cuneiform joint in the mid-arch.
                    </p>
                    <p>
                        The recovery process often involves a <strong>below the knee cast, crutches</strong>, and the patient will be <strong>non-weight bearing for 3 to 6 weeks</strong>.
                    </p>
                    <p>
                        The lapidus or similar procedures are typically reserved for severe bunions with a first intermetatarsal angle of 18 degrees or larger and frequently requires a secondary procedure to remove the bunion itself and a tertiary procedure to straighten out the toe. With that being said, there would be three separate incisions on the patient’s foot. Not to mention, patients are prescribed narcotic pain medication for an extended period of time.
                    </p>
                </div>
            </div>

            <div className="bg-sky-50 rounded-xl p-8 border border-sky-100 shadow-sm">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                    <CheckCircle size={24} />
                    Dr. Moy’s Procedure
                </h3>
                <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                        Dr. Moy’s procedure addresses severe bunion deformities and allows the patient to <strong>walk immediately</strong>, without the necessity of a below the knee cast or crutches.
                    </p>
                    <p>
                        His procedures allow the patients to experience a <strong>painless recovery</strong> without the necessity of narcotic pain medication.
                    </p>
                </div>
            </div>
        </div>

        {/* Case Studies Gallery */}
        <div className="max-w-5xl mx-auto mb-20">
            <h3 className="text-2xl font-bold text-center text-secondary mb-8">
                Correcting Severe Deformities
            </h3>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
                To prove the efficacy of Dr. Moy's techniques, below are examples of severe bunions that Dr. Moy has corrected without traditional invasive methods.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {caseImages.map((img, index) => (
                    <div key={index} className="bg-white rounded-lg p-2 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                        <img 
                            src={img} 
                            alt={`Severe Bunion Case ${index + 1}`} 
                            className="w-full h-auto rounded object-cover"
                            loading="lazy"
                        />
                        <p className="text-center text-xs text-gray-500 mt-2 font-mono">Case {String(index + 1).padStart(3, '0')}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Comparison Section */}
        <div className="max-w-4xl mx-auto mb-16 space-y-8">
            <h2 className="text-3xl font-bold text-secondary mb-6 border-b-2 border-gray-100 pb-2">
                Procedure Comparisons
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border border-gray-200 rounded-xl p-6 hover:bg-gray-50 transition-colors">
                    <h4 className="font-bold text-lg text-secondary mb-3">MIS (Minimally Invasive Surgery)</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        A Procedure to address the bump but will not correct the deforming forces that created the problem in the first place. Furthermore, the procedure will not correct or address intra-articular deformities as seen in almost every bunion nor does it address the I.M. angle or H.A. angle.
                    </p>
                </div>

                <div className="border border-gray-200 rounded-xl p-6 hover:bg-gray-50 transition-colors">
                    <h4 className="font-bold text-lg text-secondary mb-3">SCARF Procedure</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Involving a tremendous amount of surgical dissection of the entire first metatarsal leading to significant pain and swelling. Post operative non-weight bearing to foot.
                    </p>
                </div>
            </div>
        </div>

        {/* Evaluation & Training */}
        <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-12">
                
                <div className="mb-12">
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Activity className="text-primary" />
                        Evaluate Your Results
                    </h3>
                    <p className="text-gray-300 mb-4">
                        You should survey your patients to find out patient satisfaction. Feel free to copy our evaluation form and use it for your patients.
                    </p>
                    <p className="text-gray-300 mb-6">
                        See how you score with your patients when it comes to pain. How soon they can walk with no pain in a walking boot. When can they return to normal shoes? When can they start to run? How happy are they with the appearance? Is there a re-occurrence problem?
                    </p>
                    <a href="/patient-surveys" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold py-2 px-6 rounded hover:bg-primary hover:text-white transition-colors">
                        <FileText size={18} />
                        View/Copy Patient Evaluation
                    </a>
                </div>

                <div className="border-t border-gray-700 pt-12">
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <GraduationCap className="text-primary" />
                        Learn Dr. Moy’s “Painless Bunion Procedure”
                    </h3>
                    <p className="text-gray-300 mb-6">
                        I have found it beneficial to schedule post-operative patients at the same time as a new patient for bunion correction, consider doing the same to demonstrate results.
                    </p>
                    
                    <ul className="space-y-4">
                        <li className="flex items-start gap-4 bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors">
                            <span className="bg-primary text-white font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">1</span>
                            <span>Schedule a time where you can observe a procedure and to discuss in detail.</span>
                        </li>
                        <li className="flex items-start gap-4 bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors">
                            <span className="bg-primary text-white font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">2</span>
                            <span>Schedule a patient and perform the procedure with Dr. Moy at his surgery center.</span>
                        </li>
                        <li className="flex items-start gap-4 bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors">
                            <span className="bg-primary text-white font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">3</span>
                            <span>Request Dr. Moy to be present at your location.</span>
                        </li>
                    </ul>
                </div>

            </div>
        </div>

      </div>
    </div>
  );
};

export default ForDoctorsOnly;
