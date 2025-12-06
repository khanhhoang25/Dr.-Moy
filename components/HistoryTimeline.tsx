
import React from 'react';
import { Award, Star, Briefcase, GraduationCap, MapPin } from 'lucide-react';

const timelineEvents = [
  {
    year: '1987',
    title: 'Medical Training',
    description: 'Dr. Moy graduated from the California College of Podiatric Medicine, laying the foundation for his future expertise in foot and ankle surgery.',
    icon: GraduationCap,
  },
  {
    year: '1992',
    title: 'Private Practice Begins',
    description: 'Dr. Moy opened his private practice. During this time, unsatisfied with the pain levels associated with traditional bunion surgeries, he began developing his proprietary techniques.',
    icon: Briefcase,
  },
  {
    year: '1990s',
    title: 'Development of Painless Procedure',
    description: 'Through rigorous refinement and dedication to patient comfort, Dr. Moy perfected his "Painless Bunion Surgery" technique, allowing patients to walk immediately after the procedure.',
    icon: Star,
  },
  {
    year: '2005',
    title: 'Board Certification',
    description: 'Achieved certification by the American Board of Podiatric Surgery, recognizing his knowledge, experience, and commitment to quality patient care.',
    icon: Award,
  },
  {
    year: '2010',
    title: 'Foothill Surgical Institute',
    description: 'Establishment of his state-of-the-art facility, the Foothill Surgical Institute, providing a comfortable and specialized environment for his patients.',
    icon: MapPin,
  },
  {
    year: 'Present',
    title: 'Global Recognition',
    description: 'Today, Dr. Moy performs more bunion surgeries than any other surgeon in the world, with patients traveling from across the globe to experience his unique, virtually pain-free results.',
    icon: Award,
  },
];

const HistoryTimeline: React.FC = () => {
  return (
    <div className="bg-white pb-20">
      {/* Banner */}
      <div className="bg-secondary relative overflow-hidden text-center py-20 px-4">
        <div className="absolute inset-0 bg-primary/10"></div>
        <div 
            className="absolute inset-0 opacity-40 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://drmoy.com/wp-content/uploads/2016/02/building-banner.png)' }}
        ></div>
        <div className="relative z-10">
           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">History Timeline</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16">
        
        {/* Intro */}
        <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary mb-6 border-b-4 border-primary inline-block pb-2">Years of Triumph</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
                Dr. Moy has been in practice since 1992, but his journey started long before that. 
                It wasn't an easy journey, but hard work sure pays off. Scroll down to see Dr. Moy's major triumphs.
            </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto relative px-4 sm:px-0">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gray-200 rounded-full"></div>

            <div className="space-y-12">
                {timelineEvents.map((event, index) => (
                    <div key={index} className={`flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                        
                        {/* Content Card */}
                        <div className="w-full md:w-5/12 ml-16 md:ml-0">
                            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 relative group">
                                {/* Arrow for Desktop */}
                                <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-b border-l border-gray-100 transform rotate-45 ${index % 2 !== 0 ? '-left-2 border-r-0 border-t-0' : '-right-2 border-l-0 border-b-0 border-r border-t'}`}></div>
                                
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="bg-primary/10 text-primary text-sm font-bold px-3 py-1 rounded-full border border-primary/20">{event.year}</span>
                                </div>
                                <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">{event.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
                            </div>
                        </div>

                        {/* Icon Node */}
                        <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center border-4 border-primary shadow-lg z-10 shrink-0">
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                                <event.icon size={24} />
                            </div>
                        </div>

                        {/* Spacer for alternate side to keep alignment */}
                        <div className="w-full md:w-5/12 hidden md:block"></div>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
};

export default HistoryTimeline;
