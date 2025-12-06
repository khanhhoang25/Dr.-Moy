
import React, { useState, useEffect, useCallback } from 'react';
import { BookOpen, Search, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface SurveyData {
  year: string;
  cover: string;
  pages: string[];
}

// Data extracted from the provided HTML source where available
const surveys: SurveyData[] = [
  {
    year: '2021',
    cover: 'https://drmoy.com/wp-content/uploads/2021/03/survey-cover-2021-1.jpg',
    pages: [
        'https://drmoy.com/wp-content/uploads/2021/03/survey-cover-2021-1.jpg',
        'https://drmoy.com/wp-content/uploads/2016/02/S011821JG-scaled.jpg',
    ]
  },
  {
    year: '2020',
    cover: 'https://drmoy.com/wp-content/uploads/2020/02/survey-cover-2020-3.png',
    pages: [
        'https://drmoy.com/wp-content/uploads/2020/02/survey-cover-2020-3.png',
        'https://drmoy.com/wp-content/uploads/2016/02/S010920LS-scaled.jpg',
        'https://drmoy.com/wp-content/uploads/2016/02/S010920RG-scaled.jpg',
        'https://drmoy.com/wp-content/uploads/2016/02/S011620AJ.jpg',
        'https://drmoy.com/wp-content/uploads/2016/02/S011620BP.jpg'
    ]
  },
  {
    year: '2019',
    cover: 'https://drmoy.com/wp-content/uploads/2019/05/survey-cover-2019.jpg',
    pages: [
        'https://drmoy.com/wp-content/uploads/2019/05/survey-cover-2019.jpg',
        'https://drmoy.com/wp-content/uploads/2016/02/030719PT.jpg',
        'https://drmoy.com/wp-content/uploads/2016/02/031419ASP-1.jpg',
        'https://drmoy.com/wp-content/uploads/2016/02/031919GW-1.jpg',
        'https://drmoy.com/wp-content/uploads/2016/02/041819TC.jpg'
    ]
  },
  {
    year: '2018',
    cover: 'https://drmoy.com/wp-content/uploads/2018/08/survey-cover-2018-1.jpg',
    pages: [
        'https://drmoy.com/wp-content/uploads/2018/08/survey-cover-2018-1.jpg',
        'https://drmoy.com/wp-content/uploads/2016/02/SCover2018-1.jpg',
        'https://drmoy.com/wp-content/uploads/2016/02/SCover2018-10.jpg',
        'https://drmoy.com/wp-content/uploads/2016/02/SCover2018-11.jpg'
    ]
  },
  {
    year: '2017',
    cover: 'https://drmoy.com/wp-content/uploads/2018/08/survey-cover-2017.jpg',
    pages: [
        'https://drmoy.com/wp-content/uploads/2018/08/survey-cover-2017.jpg',
        'https://drmoy.com/wp-content/uploads/2018/08/091417SJ.jpg',
        'https://drmoy.com/wp-content/uploads/2018/08/S011217CS.jpg',
        'https://drmoy.com/wp-content/uploads/2018/08/S012617DL.jpg'
    ]
  },
  {
    year: '2016',
    cover: 'https://drmoy.com/wp-content/uploads/2016/02/SCover2016-1.jpg',
    pages: [
        'https://drmoy.com/wp-content/uploads/2016/02/SCover2016-1.jpg',
        'https://drmoy.com/wp-content/uploads/2016/02/SCover2016-10.jpg',
        'https://drmoy.com/wp-content/uploads/2016/02/SCover2016-100.jpg'
    ]
  },
  {
    year: '2015',
    cover: 'https://drmoy.com/wp-content/uploads/2018/08/survey-cover-2015-modified-2.jpg',
    pages: [
        'https://drmoy.com/wp-content/uploads/2018/08/survey-cover-2015-modified-2.jpg',
        'https://drmoy.com/wp-content/uploads/2016/02/SCover2015-1.jpg',
        'https://drmoy.com/wp-content/uploads/2016/02/SCover2015-10.jpg'
    ]
  },
  {
    year: '2014',
    cover: 'https://drmoy.com/wp-content/uploads/2016/02/survey-cover-2014-min.jpg',
    pages: ['https://drmoy.com/wp-content/uploads/2016/02/survey-cover-2014-min.jpg']
  },
  {
    year: '2013',
    cover: 'https://drmoy.com/wp-content/uploads/2016/02/survey-cover-2013.jpg',
    pages: ['https://drmoy.com/wp-content/uploads/2016/02/survey-cover-2013.jpg']
  },
  {
    year: '2012',
    cover: 'https://drmoy.com/wp-content/uploads/2016/02/survey-cover-2012.jpg',
    pages: ['https://drmoy.com/wp-content/uploads/2016/02/survey-cover-2012.jpg']
  },
  {
    year: '2011',
    cover: 'https://drmoy.com/wp-content/uploads/2016/02/survey-cover-2011.jpg',
    pages: ['https://drmoy.com/wp-content/uploads/2016/02/survey-cover-2011.jpg']
  },
  {
    year: '2010',
    cover: 'https://drmoy.com/wp-content/uploads/2016/02/survey-cover-2010-min.jpg',
    pages: ['https://drmoy.com/wp-content/uploads/2016/02/survey-cover-2010-min.jpg']
  },
];

const PatientSurveys: React.FC = () => {
  const [selectedSurvey, setSelectedSurvey] = useState<SurveyData | null>(null);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const openSurvey = (survey: SurveyData) => {
    setSelectedSurvey(survey);
    setCurrentPageIndex(0);
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  };

  const closeSurvey = () => {
    setSelectedSurvey(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  const nextPage = useCallback(() => {
    if (selectedSurvey && currentPageIndex < selectedSurvey.pages.length - 1) {
      setCurrentPageIndex(prev => prev + 1);
    }
  }, [selectedSurvey, currentPageIndex]);

  const prevPage = useCallback(() => {
    if (selectedSurvey && currentPageIndex > 0) {
      setCurrentPageIndex(prev => prev - 1);
    }
  }, [selectedSurvey, currentPageIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedSurvey) return;
      
      if (e.key === 'ArrowRight') nextPage();
      if (e.key === 'ArrowLeft') prevPage();
      if (e.key === 'Escape') closeSurvey();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedSurvey, nextPage, prevPage]);

  return (
    <div className="bg-white pb-20">
      {/* Banner */}
      <div className="bg-secondary relative overflow-hidden text-center py-20 px-4">
        <div className="absolute inset-0 bg-primary/10"></div>
        {/* Background Image */}
        <div 
            className="absolute inset-0 opacity-40 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://drmoy.com/wp-content/uploads/2016/02/post-op.jpg)' }}
        ></div>
        <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply"></div>
        <div className="relative z-10">
           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Patient Surveys</h1>
           <p className="text-xl text-sky-100">Click on a link to view Real Patient Surveys</p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16">
        
        {/* Intro */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
                <BookOpen className="text-primary w-10 h-10" />
            </div>
            <h2 className="text-3xl font-bold text-secondary mb-6">Unedited Patient Feedback</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
                We believe in total transparency. Below you will find archives of our patient surveys from over a decade. 
                These documents contain unedited feedback from real patients about their experience and results with Dr. Moy.
            </p>
        </div>

        {/* Survey Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
            {surveys.map((survey) => (
                <div key={survey.year} className="group flex flex-col items-center">
                    {/* 3D Book Effect Container */}
                    <button 
                        onClick={() => openSurvey(survey)}
                        className="relative w-48 h-64 mb-6 perspective-1000 group-hover:-translate-y-2 transition-transform duration-300 focus:outline-none"
                        aria-label={`View ${survey.year} Surveys`}
                    >
                        <div className="relative w-full h-full shadow-2xl rounded-r-md transition-transform transform style-preserve-3d group-hover:rotate-y-[-10deg]">
                            {/* Book Cover */}
                            <img 
                                src={survey.cover} 
                                alt={`Patient Surveys ${survey.year}`} 
                                className="w-full h-full object-cover rounded-r-md border-l-4 border-gray-300 bg-white"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x400?text=Survey+' + survey.year;
                                }}
                            />
                            {/* Book Spine Effect */}
                            <div className="absolute top-0 left-0 w-4 h-full bg-gradient-to-r from-gray-300 to-gray-100 -translate-x-full rounded-l-sm origin-right transform style-preserve-3d rotate-y-90"></div>
                            
                            {/* Overlay on Hover */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-r-md flex items-center justify-center">
                                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white p-3 rounded-full shadow-lg text-primary">
                                    <ZoomIn size={24} />
                                </div>
                            </div>
                        </div>
                        {/* Shadow underneath */}
                        <div className="absolute -bottom-4 left-4 right-4 h-4 bg-black/20 blur-md rounded-[100%] transform scale-y-50 group-hover:scale-y-75 group-hover:bg-black/30 transition-all"></div>
                    </button>

                    <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                        {survey.year} Surveys
                    </h3>
                    <button 
                        onClick={() => openSurvey(survey)}
                        className="text-sm font-semibold text-gray-500 uppercase tracking-wide group-hover:text-primary transition-colors"
                    >
                        View Collection
                    </button>
                </div>
            ))}
        </div>

        <div className="mt-20 text-center bg-gray-50 p-8 rounded-xl border border-gray-100">
            <p className="text-gray-600 italic">
                * Note: Surveys are presented in their original scanned format. 
                Individual surveys can also be viewed in our <a href="/before-after-photos" className="text-primary hover:underline font-bold">Before & After Photos</a> section.
            </p>
        </div>

      </div>

      {/* Full Screen Survey Viewer Modal */}
      {selectedSurvey && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm animate-fadeIn">
            {/* Close Button */}
            <button 
                onClick={closeSurvey}
                className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors z-50"
            >
                <X size={32} />
            </button>

            {/* Main Content Area */}
            <div className="relative w-full h-full flex flex-col items-center justify-center p-4 md:p-8">
                
                {/* Header info */}
                <div className="absolute top-4 left-4 md:left-8 text-white z-40">
                    <h2 className="text-2xl font-bold">{selectedSurvey.year} Patient Surveys</h2>
                    <p className="text-white/60 text-sm">
                        Page {currentPageIndex + 1} of {selectedSurvey.pages.length}
                    </p>
                </div>

                {/* Navigation Left */}
                <button 
                    onClick={prevPage}
                    disabled={currentPageIndex === 0}
                    className={`absolute left-4 md:left-8 p-3 rounded-full text-white transition-all transform hover:scale-110 z-40 ${
                        currentPageIndex === 0 
                        ? 'opacity-30 cursor-not-allowed' 
                        : 'bg-white/10 hover:bg-white/20'
                    }`}
                >
                    <ChevronLeft size={32} />
                </button>

                {/* Image Container */}
                <div className="w-full h-full flex items-center justify-center overflow-hidden relative">
                    <img 
                        src={selectedSurvey.pages[currentPageIndex]} 
                        alt={`${selectedSurvey.year} Survey Page ${currentPageIndex + 1}`}
                        className="max-h-full max-w-full object-contain shadow-2xl rounded-md transition-opacity duration-300"
                    />
                </div>

                {/* Navigation Right */}
                <button 
                    onClick={nextPage}
                    disabled={currentPageIndex === selectedSurvey.pages.length - 1}
                    className={`absolute right-4 md:right-8 p-3 rounded-full text-white transition-all transform hover:scale-110 z-40 ${
                        currentPageIndex === selectedSurvey.pages.length - 1
                        ? 'opacity-30 cursor-not-allowed' 
                        : 'bg-white/10 hover:bg-white/20'
                    }`}
                >
                    <ChevronRight size={32} />
                </button>

                {/* Thumbnails / Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-[80vw] p-2 hide-scrollbar">
                    {selectedSurvey.pages.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentPageIndex(idx)}
                            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors shrink-0 ${
                                currentPageIndex === idx ? 'bg-primary scale-125' : 'bg-white/30 hover:bg-white/50'
                            }`}
                            aria-label={`Go to page ${idx + 1}`}
                        />
                    ))}
                </div>

            </div>
        </div>
      )}

    </div>
  );
};

export default PatientSurveys;
