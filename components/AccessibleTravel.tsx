
import React from 'react';
import { Plane, Car, ExternalLink } from 'lucide-react';

const airports = [
  {
    name: "Orange County/John Wayne",
    code: "SNA",
    url: "http://www.ocair.com/",
  },
  {
    name: "Los Angeles International",
    code: "LAX",
    url: "https://www.flylax.com/", // Updated to official site for better reliability
  },
  {
    name: "Ontario International",
    code: "ONT",
    url: "https://www.flyontario.com/", // Updated to official site
  },
  {
    name: "Long Beach",
    code: "LGB",
    url: "http://www.lgb.org/",
  },
  {
    name: "San Diego International",
    code: "SAN",
    url: "http://www.san.org/",
  }
];

const AccessibleTravel: React.FC = () => {
  return (
    <div className="bg-white pb-20">
      {/* Banner */}
      <div className="bg-secondary relative overflow-hidden text-center py-20 px-4">
        <div className="absolute inset-0 bg-primary/10"></div>
        {/* Background Image Style Placeholder */}
        <div 
            className="absolute inset-0 opacity-20 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://picsum.photos/1920/600?random=travel&grayscale&blur=2)' }}
        ></div>
        <div className="relative z-10">
           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Accessible Travel</h1>
           <p className="text-xl text-sky-200">Easy Access from Major Airports</p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16">
        
        <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Intro */}
            <div className="text-center">
                <p className="text-xl text-gray-700 leading-relaxed font-light">
                    Flights to Southern California are plentiful and often priced reasonably.
                </p>
            </div>

            {/* Airport List */}
            <div>
                <h2 className="text-2xl font-bold text-secondary mb-8 text-center flex items-center justify-center gap-3">
                    <Plane className="text-primary" />
                    We are within a brief drive of five major airports:
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {airports.map((airport, index) => (
                        <a 
                            key={index}
                            href={airport.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-center justify-between hover:shadow-md hover:border-primary/30 transition-all duration-300"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-sky-50 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Plane size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800">{airport.name}</h3>
                                    <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded mt-1 font-mono font-bold">
                                        {airport.code}
                                    </span>
                                </div>
                            </div>
                            <ExternalLink size={18} className="text-gray-400 group-hover:text-primary transition-colors" />
                        </a>
                    ))}
                </div>
            </div>

            {/* Rental Car / Transport Info */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center text-secondary shrink-0">
                    <Car size={32} />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-secondary mb-2">Ground Transportation</h3>
                    <p className="text-gray-600 text-lg">
                        Rental cars are available in abundance and our freeways are among the best in the world!
                    </p>
                </div>
            </div>

        </div>

      </div>
    </div>
  );
};

export default AccessibleTravel;
