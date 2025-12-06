import React from 'react';
import { FileText, Download, Clock, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const PatientForms: React.FC = () => {
  return (
    <div className="bg-white pb-20">
      {/* Banner */}
      <div className="bg-secondary relative overflow-hidden text-center py-20 px-4">
        <div className="absolute inset-0 bg-primary/10"></div>
        {/* Background Image Style Placeholder */}
        <div
            className="absolute inset-0 opacity-20 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://picsum.photos/1920/600?grayscale&blur=2)' }}
        ></div>
        <div className="relative z-10">
           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Patient Forms</h1>
           <p className="text-xl text-sky-200">Print and Fill These Out Before Your Visit to Save Time</p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Left/Main Content - Forms */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Download Section */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 flex flex-col md:flex-row items-center gap-8 text-center md:text-left transition-transform hover:-translate-y-1 duration-300">
                <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center shrink-0">
                    <FileText className="text-red-600 w-10 h-10" />
                </div>
                <div className="flex-1">
                    <h3 className="text-2xl font-bold text-secondary mb-2">New Patient Forms (Combined)</h3>
                    <p className="text-gray-600 mb-6">Download the comprehensive packet of forms required for new patients.</p>
                    <a 
                        href="https://drmoy.com/wp-content/uploads/2016/02/New-Patient-Forms-combined2.pdf" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                    >
                        <Download size={20} />
                        Download PDF
                    </a>
                </div>
            </div>

            {/* Scheduling Surgery Section */}
            <div>
                <h3 className="text-2xl font-bold text-secondary mb-6 border-l-4 border-primary pl-4">Scheduling Surgery</h3>
                <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                    <ol className="list-decimal pl-5 space-y-4 text-gray-700">
                        <li className="pl-2">
                            Local patients call the office to schedule a bunion consultation. After the consultation, they will make a decision on when they would like to have surgery — either on a Tuesday or Thursday.
                        </li>
                        <li className="pl-2">
                            The patient must have medical clearance within 30 days of the scheduled surgery date. Within 10 days prior to the scheduled surgery date, the patient must have blood work completed. EKG’s are valid for 6 months.
                        </li>
                        <li className="pl-2">
                            Within seven days prior to surgery you need to return to the office to go over your surgical consent as well as to review your pre- and post-operative instructions.
                        </li>
                        <li className="pl-2">
                            On the day of surgery, you will check in at the facility an hour early, have your surgery, and can return home approximately 30 minutes after surgery.
                        </li>
                    </ol>
                </div>
            </div>

            <div className="text-center pt-8">
                <Link to="/contact-us" className="text-primary text-lg font-semibold hover:underline flex items-center justify-center gap-2">
                    <Phone size={20} />
                    Contact us if you need any assistance completing these forms.
                </Link>
            </div>

          </div>

          {/* Right Sidebar - Info Box */}
          <div className="lg:col-span-1">
             <div className="bg-sky-50 border-l-4 border-sky-400 p-6 rounded-r-lg shadow-sm sticky top-24">
                <div className="flex items-start gap-4">
                    <div className="bg-sky-100 p-3 rounded-full shrink-0">
                        <Clock className="text-primary w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-secondary text-lg mb-2">Save Time</h4>
                        <p className="text-gray-700">Please Print and Fill These Forms Out Before Your Visit to Save Time</p>
                    </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PatientForms;