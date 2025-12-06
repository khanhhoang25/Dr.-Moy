
import React from 'react';
import { Calendar, Stethoscope, Briefcase, GraduationCap, Clock } from 'lucide-react';

interface StaffMember {
  name: string;
  role: string;
  image: string;
  details: { label: string; value: string }[];
  section?: string;
}

const staffMembers: StaffMember[] = [
  {
    name: 'Dr. Richard Moy',
    role: 'Foot & Ankle Surgeon',
    image: 'https://drmoy.com/wp-content/uploads/2016/02/385666_350123681691962_754861011_n2.jpg',
    section: 'Office Staff',
    details: [
      { label: 'Speciality', value: 'Podiatry' },
      { label: 'Degrees', value: 'D.P.M. Doctor of Podiatric Medicine' },
      { label: 'Experience', value: '24 years of Experience' },
      { label: 'Training', value: 'Medical School: California College of Podiatric Medicine, USC' },
      { label: 'Work days', value: 'Monday - Friday' },
    ]
  },
  {
    name: 'Penny',
    role: 'Office Manager',
    image: 'https://drmoy.com/wp-content/uploads/2016/02/woman-silhouette-1381346418vdW.jpg',
    section: 'Office Staff',
    details: [
      { label: 'Speciality', value: 'Billing' },
      { label: 'Work days', value: 'Monday - Friday' },
    ]
  },
  {
    name: 'Aimee',
    role: 'Accountant / Chief Financial Officer',
    image: 'https://drmoy.com/wp-content/uploads/2016/02/woman-silhouette-1381346418vdW.jpg',
    section: 'Office Staff',
    details: [
      { label: 'Speciality', value: 'Accounting' },
      { label: 'Work days', value: 'Monday - Friday' },
    ]
  },
  {
    name: 'Lucia',
    role: 'Front Desk',
    image: 'https://drmoy.com/wp-content/uploads/2016/02/woman-silhouette-1381346418vdW.jpg',
    section: 'Office Staff',
    details: [
      { label: 'Speciality', value: 'Front Desk' },
      { label: 'Work days', value: 'Monday - Friday' },
    ]
  },
  {
    name: 'Monique',
    role: 'Medical Assistant',
    image: 'https://drmoy.com/wp-content/uploads/2016/02/woman-silhouette-1381346418vdW.jpg',
    section: 'Office Staff',
    details: [
      { label: 'Speciality', value: 'Medical Assistant' },
      { label: 'Work days', value: 'Monday - Friday' },
    ]
  },
  {
    name: 'Jacquie',
    role: 'Staff',
    image: 'https://drmoy.com/wp-content/uploads/2016/02/woman-silhouette-1381346418vdW.jpg',
    section: 'Foothill Surgical Institute Staff',
    details: [
      { label: 'Work days', value: 'Monday - Friday' },
    ]
  },
];

const MeetTheStaff: React.FC = () => {
  const officeStaff = staffMembers.filter(s => s.section === 'Office Staff');
  const surgicalStaff = staffMembers.filter(s => s.section === 'Foothill Surgical Institute Staff');

  return (
    <div className="bg-white pb-20">
      {/* Banner */}
      <div className="bg-secondary relative overflow-hidden text-center py-20 px-4">
        <div className="absolute inset-0 bg-primary/10"></div>
        {/* Background Image */}
        <div 
            className="absolute inset-0 opacity-40 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://drmoy.com/wp-content/uploads/2016/02/office-room-banner.jpg)' }}
        ></div>
        <div className="relative z-10">
           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Meet the Staff</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16">
        
        {/* Office Staff Section */}
        <div className="mb-20">
            <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-4">
                <div className="w-12 h-12 bg-sky-50 rounded-full flex items-center justify-center text-primary">
                    <Calendar size={24} />
                </div>
                <h2 className="text-3xl font-bold text-secondary">Office Staff</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                {officeStaff.map((member, index) => (
                    <div key={index} className="flex flex-col sm:flex-row gap-6 items-start bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="w-full sm:w-40 shrink-0">
                            <img 
                                src={member.image} 
                                alt={member.name} 
                                className="w-full h-40 object-cover rounded-lg shadow-sm"
                            />
                        </div>
                        <div className="flex-1 w-full">
                            <h3 className="text-xl font-bold text-secondary uppercase border-b-2 border-primary inline-block mb-1">
                                {member.name}
                            </h3>
                            <p className="text-gray-500 font-semibold mb-4 text-sm uppercase tracking-wide">{member.role}</p>
                            
                            <div className="space-y-2 text-sm">
                                {member.details.map((detail, idx) => (
                                    <div key={idx} className={`grid grid-cols-3 gap-2 py-1 ${idx !== member.details.length - 1 ? 'border-b border-gray-50' : ''}`}>
                                        <span className="font-bold text-gray-700 col-span-1">{detail.label}</span>
                                        <span className="text-gray-600 col-span-2">{detail.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Surgical Staff Section */}
        <div>
            <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-4">
                <div className="w-12 h-12 bg-sky-50 rounded-full flex items-center justify-center text-primary">
                    <Stethoscope size={24} />
                </div>
                <h2 className="text-3xl font-bold text-secondary">Foothill Surgical Institute Staff</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                {surgicalStaff.map((member, index) => (
                    <div key={index} className="flex flex-col sm:flex-row gap-6 items-start bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="w-full sm:w-40 shrink-0">
                            <img 
                                src={member.image} 
                                alt={member.name} 
                                className="w-full h-40 object-cover rounded-lg shadow-sm"
                            />
                        </div>
                        <div className="flex-1 w-full">
                            <h3 className="text-xl font-bold text-secondary uppercase border-b-2 border-primary inline-block mb-1">
                                {member.name}
                            </h3>
                            <p className="text-gray-500 font-semibold mb-4 text-sm uppercase tracking-wide">{member.role}</p>
                            
                            <div className="space-y-2 text-sm">
                                {member.details.map((detail, idx) => (
                                    <div key={idx} className={`grid grid-cols-3 gap-2 py-1 ${idx !== member.details.length - 1 ? 'border-b border-gray-50' : ''}`}>
                                        <span className="font-bold text-gray-700 col-span-1">{detail.label}</span>
                                        <span className="text-gray-600 col-span-2">{detail.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
};

export default MeetTheStaff;
