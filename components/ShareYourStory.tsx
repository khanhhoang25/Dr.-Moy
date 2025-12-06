
import React from 'react';
import { Quote } from 'lucide-react';

const socialLinks = [
  {
    name: 'Yelp',
    img: 'https://drmoy.com/wp-content/uploads/2016/02/yelp.png',
    link: 'https://www.yelp.com/writeareview/biz/928DK77DaN3meRD4iX4J7Q?return_url=%2Fbiz%2F928DK77DaN3meRD4iX4J7Q',
    text: 'CLICK HERE to leave a review!',
  },
  {
    name: 'Facebook',
    img: 'https://drmoy.com/wp-content/uploads/2016/02/facebook.png',
    link: 'https://www.facebook.com/BunionKing/reviews/',
    text: 'CLICK HERE TO LEAVE A REVIEW!',
  },
  {
    name: 'Instagram',
    img: 'https://drmoy.com/wp-content/uploads/2016/02/instagram.gif',
    link: 'https://www.instagram.com/doctor_moy/',
    text: 'CLICK HERE TO FOLLOW!',
  },
  {
    name: 'YouTube',
    img: 'https://drmoy.com/wp-content/uploads/2016/02/youtube.jpg',
    link: 'https://www.youtube.com/channel/UC3RqLBYeHIfFvnIfybzdz8w',
    text: 'SUBSCRIBE OR COMMENT ON A VIDEO!',
  },
  {
    name: 'Healthgrades',
    img: 'https://drmoy.com/wp-content/uploads/2016/02/healthgrades.jpeg',
    link: 'http://www.healthgrades.com/provider/richard-moy-2t75q#tab=rate-doctor&scrollTo=QualitySurvey_anchor',
    text: 'CLICK HERE TO LEAVE A REVIEW!',
  },
  {
    name: 'Zocdoc',
    img: 'https://drmoy.com/wp-content/uploads/2016/02/zocdoc.jpg',
    link: 'https://www.zocdoc.com/doctor/richard-moy-dpm',
    text: 'CLICK HERE TO WRITE A REVIEW!',
  },
  {
    name: 'LinkedIn',
    img: 'https://drmoy.com/wp-content/uploads/2016/02/linkedin.jpg',
    link: 'https://www.linkedin.com/in/drmoy',
    text: 'CLICK HERE TO CONNECT!',
  },
  {
    name: 'Pinterest',
    img: 'https://drmoy.com/wp-content/uploads/2016/02/Pinterest.jpg',
    link: 'https://www.pinterest.com/drrichardmoy/',
    text: 'CLICK HERE TO FOLLOW US!',
  },
  {
    name: 'Google Plus',
    img: 'https://drmoy.com/wp-content/uploads/2016/02/googleplus.jpg',
    link: 'https://plus.google.com/114008483572920626658',
    text: 'CLICK HERE TO FOLLOW!',
  },
  {
    name: 'Twitter',
    img: 'https://drmoy.com/wp-content/uploads/2016/02/twitter.jpg',
    link: 'https://twitter.com/bunionking',
    text: 'CLICK HERE TO FOLLOW! OR TWEET @BUNIONKING',
  },
];

const ShareYourStory: React.FC = () => {
  return (
    <div className="bg-white pb-20">
      {/* Banner */}
      <div className="bg-secondary relative overflow-hidden text-center py-20 px-4">
        <div className="absolute inset-0 bg-primary/10"></div>
        {/* Background Image */}
        <div 
            className="absolute inset-0 opacity-40 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://drmoy.com/wp-content/uploads/2016/02/social-media-banner.jpg)' }}
        ></div>
        <div className="relative z-10">
           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Share Your Story</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16">
        
        {/* Form Section */}
        <div className="max-w-4xl mx-auto mb-20">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-secondary inline-block border-b-4 border-primary pb-2">Send Us Your Story!</h2>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
                        <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
                    </div>
                    <input type="text" placeholder="Subject" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
                    <textarea rows={6} placeholder="Your Story..." className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"></textarea>
                    
                    <button type="submit" className="w-full bg-primary hover:bg-sky-600 text-white font-bold py-4 rounded-lg shadow-md hover:shadow-xl transition-all">
                        SUBMIT STORY
                    </button>
                </form>
            </div>
        </div>

        {/* Social Grid */}
        <div className="mb-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {socialLinks.map((item, index) => (
                    <div key={index} className="flex justify-center">
                        <a 
                            href={item.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group relative w-64 h-64 rounded-full overflow-hidden shadow-xl border-4 border-white transition-transform hover:scale-105"
                        >
                            {/* Background Image */}
                            <img 
                                src={item.img} 
                                alt={item.name} 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-primary/90 flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h3 className="text-white font-bold text-lg uppercase tracking-wide leading-relaxed">
                                    {item.text}
                                </h3>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>

        {/* Testimonial Section */}
        <div className="bg-gray-50 py-16 px-4 rounded-3xl border border-gray-100">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-secondary mb-2">Shared Stories!</h2>
                <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
                
                <div className="flex flex-col items-center">
                    <Quote size={48} className="text-primary mb-6 opacity-30" />
                    
                    <p className="text-xl md:text-2xl text-gray-700 italic font-light mb-8 leading-relaxed">
                        "It was completely worthwhile for me to travel across the country to seek your care, and I experienced no complications or need for further medical care after returning home. You have given me nothing less than a new, healthy pair of feet, and I will always be grateful for your expert overhaul!"
                    </p>
                    
                    <div className="flex flex-col items-center gap-4">
                        <img 
                            src="https://drmoy.com/wp-content/uploads/2016/02/main-qimg-498de3782ec00063441d03e10b7548c4.jpg" 
                            alt="Jessica Albert" 
                            className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover"
                        />
                        <div>
                            <h4 className="font-bold text-secondary text-lg">JESSICA ALBERT</h4>
                            <p className="text-primary font-medium">Out of State Patient</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ShareYourStory;
