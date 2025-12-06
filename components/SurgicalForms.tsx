import React from 'react';
import { FileText, Download, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const SurgicalForms: React.FC = () => {
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
           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Pre-Op Doctor Forms</h1>
           <p className="text-xl text-sky-200">Surgical Patient Forms</p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16">
        
        {/* Instructions */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold text-secondary mb-6 uppercase border-b-2 border-primary inline-block pb-2">
                After You Have Booked Surgery
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
                Once you have booked surgery with the office, please print and fill out these forms to bring to your 
                <strong> PCP (Primary Care Physician)</strong> and have them return them to the office as soon as possible 
                so that our office can move forward with your paperwork.
            </p>
        </div>

        {/* Forms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

            {/* Form 1 */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
                    <FileText className="text-primary w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">Pre-Admission Orders for Outpatient Surgery</h3>
                <p className="text-sm text-gray-500 mb-8">Required for all surgical patients.</p>
                <a 
                    href="https://drmoy.com/wp-content/uploads/2020/04/2019-PRE-ADMISSION-ORDERS-FOR-SURGERY-1.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-2 bg-secondary hover:bg-primary text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                    <Download size={18} />
                    Download PDF
                </a>
            </div>

            {/* Form 2 */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
                    <FileText className="text-primary w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">Pre-Operative History & Physical</h3>
                <p className="text-sm text-gray-500 mb-8">Medical clearance form to be completed by your physician.</p>
                <a 
                    href="https://drmoy.com/wp-content/uploads/2020/04/2019-PRE-OP-HISTORY-PHYSICAL-MEDICAL-CLEARANCE-FORM-1.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-2 bg-secondary hover:bg-primary text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                    <Download size={18} />
                    Download PDF
                </a>
            </div>

        </div>

        {/* Contact / Help */}
        <div className="max-w-3xl mx-auto mt-16 bg-sky-50 rounded-lg p-6 border border-sky-100 flex items-center justify-center gap-4">
            <AlertCircle className="text-primary w-6 h-6 shrink-0" />
            <p className="text-gray-700">
                Need assistance? <Link to="/contact-us" className="text-primary font-bold hover:underline">Contact us</Link> if you need any help completing these forms.
            </p>
        </div>

      </div>
    </div>
  );
};

export default SurgicalForms;