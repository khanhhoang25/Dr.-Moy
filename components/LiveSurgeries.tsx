import React, { useState } from 'react';
import { PlayCircle, List, Play } from 'lucide-react';

const videos = [
  {
    id: 'U0NfLWBB_PA',
    title: 'P1 - COMPLEX BUNION SURGERY (painless procedure)',
    thumb: 'https://drmoy.com/wp-content/uploads/2021/09/p1-live-surgeries-patient-comments.jpg'
  },
  {
    id: 'APkg9Nc3AV0',
    title: 'P2 - PAINLESS BUNION PROCEDURE (small/mild bunion)',
    thumb: 'https://drmoy.com/wp-content/uploads/2021/09/p4-live-surgeries-patient-comments-1.jpg'
  },
  {
    id: '_6vb6snkx-4',
    title: 'P3 - COMPLEX BUNION AND HAMMERTOE SURGERY!! (3 hour procedure)',
    thumb: 'https://drmoy.com/wp-content/uploads/2021/09/p3-live-surgeries-patient-comments.jpg'
  },
  {
    id: '64byLHoY0DY',
    title: 'P4 - VIRTUAL BUNION SURGERY!! (extreme bone growth)',
    thumb: 'https://drmoy.com/wp-content/uploads/2021/09/p2-live-surgeries-patient-comments.jpg'
  },
  {
    id: 'Z2h5gbzvIfI',
    title: 'P5 - EXTREME HAMMERTOE OPERATION (patient walks immediately after)',
    thumb: 'https://drmoy.com/wp-content/uploads/2021/09/p5-live-surgeries-patient-comments.jpg'
  },
  {
    id: 'c9uPbHNda28',
    title: 'P6 - MULTIPLE PROCEDURE SURGERY!! (three surgeries)',
    thumb: 'https://drmoy.com/wp-content/uploads/2021/09/p6-live-surgeries-patient-comments.jpg'
  },
  {
    id: '9uOpnozNkA4',
    title: 'P7 - BUNIONECTOMY PROCEDURE!! (patient was awake!)',
    thumb: 'https://drmoy.com/wp-content/uploads/2021/09/p7-live-surgeries-patient-comments.jpg'
  },
  {
    id: 'haoEYi1J6_E',
    title: 'P8 - HOW BUNION SURGERY IS PREFORMED!! (procedure demo)',
    thumb: 'https://drmoy.com/wp-content/uploads/2021/09/p8-live-surgeries-patient-comments.jpg'
  },
  {
    id: 'Xtt1qs6Y-EU',
    title: 'P9- VIRTUAL SURGERY #3: EXTREME BONE GROWTH! (walking 5 days later)',
    thumb: 'https://drmoy.com/wp-content/uploads/2021/09/p9-live-surgeries-patient-comments.jpg'
  },
  {
    id: 'LucEexAj2kg',
    title: 'P10 - VIRTUAL BUNION SURGERY!! (patient walking immediately)',
    thumb: 'https://drmoy.com/wp-content/uploads/2021/09/p10-live-surgeries-patient-comments.jpg'
  },
  {
    id: '1QqTdyjfLao',
    title: 'P11 - VIRTUAL BUNION PROCEDURE!! ( + patient\'s experience )',
    thumb: 'https://drmoy.com/wp-content/uploads/2021/09/p11-live-surgeries-patient-comments.jpg'
  }
];

const LiveSurgeries: React.FC = () => {
  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  return (
    <div className="bg-white pb-20">
      {/* Banner */}
      <div className="bg-secondary relative overflow-hidden text-center py-20 px-4">
        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
        <div 
            className="absolute inset-0 opacity-40 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://drmoy.com/wp-content/uploads/2016/02/filmbanner.jpg)' }}
        ></div>
        <div className="relative z-10">
           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Live Surgeries with Patient Comments</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16">
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Player */}
            <div className="lg:col-span-2">
               <div className="bg-black rounded-xl overflow-hidden shadow-2xl aspect-video w-full relative">
                  <iframe 
                    src={`https://www.youtube.com/embed/${currentVideo.id}?autoplay=0&rel=0`} 
                    title={currentVideo.title}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
               </div>
               <div className="bg-white p-6 border-b border-gray-100">
                   <h2 className="text-2xl font-bold text-secondary">{currentVideo.title}</h2>
                   <p className="text-gray-600 mt-2">
                       Watch Dr. Moy perform this procedure. These videos demonstrate why Dr. Moy is considered the best bunion surgeon by visitors from around the world.
                   </p>
               </div>
            </div>

            {/* Playlist */}
            <div className="lg:col-span-1">
               <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden sticky top-24">
                  <div className="bg-gray-50 p-4 border-b border-gray-100 flex items-center gap-2">
                     <List className="text-primary" size={20} />
                     <h3 className="font-bold text-secondary text-lg">Video Playlist</h3>
                  </div>
                  <div className="max-h-[600px] overflow-y-auto">
                     {videos.map((video, idx) => (
                        <button 
                           key={idx}
                           onClick={() => setCurrentVideo(video)}
                           className={`w-full text-left p-3 border-b border-gray-50 flex gap-3 transition-colors hover:bg-sky-50 group ${currentVideo.id === video.id ? 'bg-sky-50 border-l-4 border-l-primary' : 'border-l-4 border-l-transparent'}`}
                        >
                           <div className="w-28 h-20 bg-gray-200 rounded shrink-0 overflow-hidden relative">
                              <img src={video.thumb} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                 <PlayCircle className={`text-white w-8 h-8 opacity-80 ${currentVideo.id === video.id ? 'text-primary' : ''}`} />
                              </div>
                           </div>
                           <div className="flex flex-col justify-center">
                              <h4 className={`text-sm font-semibold line-clamp-2 leading-snug ${currentVideo.id === video.id ? 'text-primary' : 'text-gray-700'}`}>
                                 {video.title}
                              </h4>
                              <div className="flex items-center gap-1 mt-1 text-xs text-gray-400">
                                <Play size={10} fill="currentColor" />
                                <span>Play Now</span>
                              </div>
                           </div>
                        </button>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default LiveSurgeries;