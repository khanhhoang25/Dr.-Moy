import React from 'react';
import { Plane, AlertCircle, FileText, Phone } from 'lucide-react';

const VisitDrMoy: React.FC = () => {
  return (
    <div className="bg-white pb-20">
      {/* Banner */}
      <div className="bg-secondary relative overflow-hidden text-center py-20 px-4">
        <div className="absolute inset-0 bg-primary/10"></div>
        <div 
            className="absolute inset-0 opacity-30 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://picsum.photos/1920/600?grayscale&blur=2)' }}
        ></div>
        <div className="relative z-10">
           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Visit Dr. Moy</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16">
        
        {/* Testimonial */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
            <blockquote className="text-xl md:text-2xl font-light italic text-gray-700 leading-relaxed border-l-4 border-primary pl-6 py-4 bg-gray-50 rounded-r-lg shadow-sm">
                "It was completely worthwhile for me to travel across the country to seek your care, and I experienced no complications or need for further medical care after returning home. You have given me nothing less than a new, healthy pair of feet, and I will always be grateful for your expert overhaul!"
            </blockquote>
        </div>

        {/* Videos Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* US Story */}
            <div className="space-y-4">
                <h3 className="text-xl font-bold text-secondary text-center px-4">
                    U.S. Patient Story: "Worth the Trip"
                </h3>
                <div className="bg-black rounded-xl overflow-hidden shadow-xl aspect-video w-full">
                    <iframe 
                        width="100%" 
                        height="100%" 
                        src="https://www.youtube.com/embed/_VXIOTmTXmc" 
                        title="US Patient Story"
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            {/* International Story */}
            <div className="space-y-4">
                <h3 className="text-xl font-bold text-secondary text-center px-4">
                    International Patient Story (Egypt)
                </h3>
                <div className="bg-black rounded-xl overflow-hidden shadow-xl aspect-video w-full">
                    <iframe 
                        width="100%" 
                        height="100%" 
                        src="https://www.youtube.com/embed/0puyiAEu0Ec" 
                        title="International Patient Story"
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>

        <div className="border-t border-gray-100 my-16"></div>

        {/* Getting Started Section */}
        <div className="max-w-4xl mx-auto space-y-12">
            
            <div className="text-center">
                <h2 className="text-3xl font-bold text-secondary mb-6">
                    How Do I Get Started?
                </h2>
                <h3 className="text-xl text-primary font-semibold mb-6">
                    Heel Spur Treatment or Bunion Removal
                </h3>
                <div className="prose max-w-none text-gray-600 leading-relaxed text-left md:text-justify">
                    <p className="mb-4">
                        If you’ve been searching for a doctor who performs virtually pain-free surgery or have sought surgical opinions from other doctors, you already know that Dr. Moy’s services and skills are unique.
                    </p>
                    <p>
                        This is why patients travel from across the country and around the world to consult with Dr. Moy and experience his superior surgical techniques, especially his expert bunion treatment. Due to most patients’ rapid recovery, many out-of-state patients combine their foot surgery with a “mini-vacation” to Southern California and Orange County—"the O.C."—enjoying its wonderful weather and many tourist attractions. So, if you have been looking for bunion removal or heel spur treatment, turn your procedure into a mini-vacation and experience Dr. Moy’s virtually pain-free foot surgery in Southern California.
                    </p>
                </div>
            </div>

            {/* Travel Options */}
            <div className="bg-sky-50 rounded-2xl p-8 border border-sky-100">
                <h3 className="text-2xl font-bold text-center text-secondary mb-8">Travel Itinerary Options</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Option 1 */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                            <Plane size={24} />
                        </div>
                        <h4 className="font-bold text-lg mb-2">Option A</h4>
                        <ul className="text-sm text-gray-600 space-y-2">
                            <li><strong>Monday:</strong> Fly in to see Dr. Moy</li>
                            <li><strong>Tuesday:</strong> Surgery Day</li>
                            <li><strong>Friday:</strong> Post-op visit & Fly home</li>
                        </ul>
                    </div>

                    {/* Option 2 */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                            <Plane size={24} />
                        </div>
                        <h4 className="font-bold text-lg mb-2">Option B</h4>
                         <p className="text-xs text-gray-400 mb-2">(Includes Saturday night stay)</p>
                        <ul className="text-sm text-gray-600 space-y-2">
                            <li><strong>Wednesday:</strong> Fly in to see Dr. Moy</li>
                            <li><strong>Thursday:</strong> Surgery Day</li>
                            <li><strong>Monday:</strong> Post-op visit & Fly home</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Steps List */}
            <div className="space-y-8">
                <div>
                     <h3 className="text-2xl font-bold text-secondary mb-6 border-l-4 border-primary pl-4">The Process</h3>
                     <ol className="list-decimal pl-5 space-y-4 text-gray-700">
                        <li className="pl-2">
                            <strong>Insurance:</strong> Call your insurance company and verify your benefits including your deductible amount and your co-portion. Also make sure they cover out of state.
                        </li>
                        <li className="pl-2">
                            <strong>Estimate:</strong> Call our office so we can give you an estimate of your out of pocket expense.
                        </li>
                        <li className="pl-2">
                            <strong>Scheduling:</strong> Select 3 surgery dates that work best for you on a Tuesday or Thursday. Verify these dates with your companion. The surgery center charges $100.00 to reschedule or cancel.
                        </li>
                        <li className="pl-2">
                            <strong>Consultation:</strong> You will come into our office the day before your surgery to have a consultation, consent, and be given pre- and post-operative orders and prescriptions.
                        </li>
                     </ol>
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-secondary mb-6 border-l-4 border-primary pl-4">Requirements & Lab Work</h3>
                     <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                        <p className="mb-4 text-gray-700">
                            Once scheduled, you must obtain Medical Clearance, EKG (if over 40), and Lab work from your Doctor.
                        </p>
                        <ul className="space-y-3 mb-6">
                            <li className="flex items-start gap-2">
                                <AlertCircle className="text-primary w-5 h-5 shrink-0 mt-0.5" />
                                <span className="text-gray-700"><strong>Timeline:</strong> No more than 10 days before you fly out here.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <FileText className="text-primary w-5 h-5 shrink-0 mt-0.5" />
                                <span className="text-gray-700"><strong>EKGs:</strong> Valid for 6 months.</span>
                            </li>
                             <li className="flex items-start gap-2">
                                <FileText className="text-primary w-5 h-5 shrink-0 mt-0.5" />
                                <span className="text-gray-700"><strong>Labs:</strong> Valid for 10 days.</span>
                            </li>
                        </ul>
                        
                        <div className="flex flex-col md:flex-row gap-4">
                            <a href="https://drmoy.com/wp-content/uploads/2015/06/pre-operative_orders.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary transition-colors">
                                <FileText size={18} />
                                Watch Dr. Moy’s Introduction Video (PDF)
                            </a>
                        </div>
                     </div>
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-secondary mb-6 border-l-4 border-primary pl-4">Submission & Important Notes</h3>
                    <div className="space-y-4 text-gray-700">
                        <p>
                            Please make sure the Medical clearance, EKG, and Lab work are faxed to the office. 
                            <br />
                            <strong>Fax: (949) 716-2725</strong>
                        </p>
                        <p>
                            E-mail or call us to confirm we have received all of the items. Your surgery cannot proceed without these items.
                        </p>
                        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100 flex items-start gap-3">
                            <AlertCircle className="text-yellow-600 shrink-0 mt-1" />
                            <p className="text-sm text-yellow-800">
                                <strong>Companion Policy:</strong> Should you choose to travel alone, it is imperative that you have someone accompany you the day of surgery as you will need someone to care for you the first 24 hours post-operatively.
                            </p>
                        </div>
                        <ul className="list-disc pl-5">
                            <li>We only do one foot at a time. You can have the other foot done 6 weeks later.</li>
                            <li>We do not recommend doing the short stay bunion procedure for anyone over 60.</li>
                        </ul>
                    </div>
                </div>

                <div className="text-center pt-8">
                    <p className="text-gray-600 mb-4">Still have more questions?</p>
                    <a href="mailto:info@drmoy.com" className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:underline">
                        <Phone size={20} />
                        info@drmoy.com
                    </a>
                </div>

            </div>

        </div>
      </div>
    </div>
  );
};

export default VisitDrMoy;