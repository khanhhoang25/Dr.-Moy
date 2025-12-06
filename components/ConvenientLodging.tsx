import React from 'react';
import { MapPin, Phone, Globe, Building } from 'lucide-react';

const hotels = [
  {
    name: "Courtyard by Marriott",
    address: "27492 Portola Parkway, Foothill Ranch, CA 92610",
    phone: "(949) 951-5700",
    website: "http://www.marriott.com/hotels/travel/snafr-courtyard-foothill-ranch-orange-county/",
    websiteDisplay: "marriott.com",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.5201497959347!2d-117.6519993!3d33.669593299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dce9fa5ecd6c79%3A0x9adf97f1d579e25c!2s27492+Portola+Pkwy%2C+Foothill+Ranch%2C+CA+92610%2C+USA!5e0!3m2!1sen!2sbd!4v1434652955246"
  },
  {
    name: "Hampton Inn",
    address: "27102 Towne Centre Drive, Foothill Ranch, CA 92610",
    phone: "(949) 597-8700",
    website: "http://hamptoninn.hilton.com/en/hp/hotels/index.jhtml;jsessionid=4XUJJ0HGH3LIECSGBIWM22QKIYFC5UUC?ctyhocn=LAXFHHX",
    websiteDisplay: "hamptoninn.hilton.com",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.4295153287594!2d-117.65834799999999!3d33.67194090000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dce9e381088193%3A0x745f6bb62e157936!2s27082+Towne+Centre+Dr%2C+Foothill+Ranch%2C+CA+92610%2C+USA!5e0!3m2!1sen!2sbd!4v1434653421386"
  },
  {
    name: "Ayres Suites",
    address: "28941 Los Alisos Blvd., Mission Viejo, CA 92692",
    phone: "(949) 305-7200",
    tollFree: "(800) 454-0209",
    website: "http://ayreshotels.com",
    websiteDisplay: "ayreshotels.com",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.104186755867!2d-117.62773270000001!3d33.654462200000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcea3a6b9d0a11%3A0x8c23d58c380c399d!2s28941+Los+Alisos+Blvd%2C+Mission+Viejo%2C+CA+92692%2C+USA!5e0!3m2!1sen!2sbd!4v1434653704618"
  }
];

const ConvenientLodging: React.FC = () => {
  return (
    <div className="bg-white pb-20">
      {/* Banner */}
      <div className="bg-secondary relative overflow-hidden text-center py-20 px-4">
        <div className="absolute inset-0 bg-primary/10"></div>
        {/* Background Image Style Placeholder */}
        <div 
            className="absolute inset-0 opacity-30 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://drmoy.com/wp-content/uploads/2016/02/20160328_160516mmm.jpg)' }}
        ></div>
        <div className="relative z-10">
           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Convenient Lodging</h1>
           <p className="text-xl text-sky-200">Enjoy a Restful Stay at Comfortable Hotels by Our Office</p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16">
        
        <div className="max-w-5xl mx-auto space-y-12">
          {hotels.map((hotel, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                
                {/* Map Section */}
                <div className="h-64 lg:h-auto w-full bg-gray-100 relative">
                  <iframe 
                    src={hotel.mapSrc} 
                    width="100%" 
                    height="100%" 
                    className="absolute inset-0 border-0" 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map for ${hotel.name}`}
                  ></iframe>
                </div>

                {/* Details Section */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                      <Building size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-secondary">{hotel.name}</h2>
                  </div>

                  <div className="space-y-4 text-gray-600">
                    <div className="flex items-start gap-3">
                      <MapPin className="text-primary mt-1 shrink-0" size={20} />
                      <span>{hotel.address}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="text-primary shrink-0" size={20} />
                      <div>
                        <span className="font-semibold">Phone: </span>
                        <a href={`tel:${hotel.phone.replace(/\D/g,'')}`} className="hover:text-primary hover:underline">{hotel.phone}</a>
                        {hotel.tollFree && (
                          <span className="ml-2">
                             / <strong>Toll Free:</strong> <a href={`tel:${hotel.tollFree.replace(/\D/g,'')}`} className="hover:text-primary hover:underline">{hotel.tollFree}</a>
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Globe className="text-primary shrink-0" size={20} />
                      <div>
                        <span className="font-semibold">Website: </span>
                        <a href={hotel.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                          {hotel.websiteDisplay}
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <a 
                      href={hotel.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary transition-colors shadow-md"
                    >
                      Book a Room
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ConvenientLodging;