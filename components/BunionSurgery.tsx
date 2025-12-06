
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Play, FileText, Info, Camera, Activity, DollarSign, Music } from 'lucide-react';

const BunionSurgery: React.FC = () => {
  const [activeTab, setActiveTab] = useState('painless');
  const location = useLocation();

  const tabs = [
    { id: 'painless', label: 'What is Painless Bunion Surgery?', icon: Info },
    { id: 'what-is', label: 'What is a Bunion?', icon: FileText },
    { id: 'causes', label: 'Bunion Causes and Symptoms', icon: Activity },
    { id: 'treatment', label: 'Bunion Treatment', icon: FileText },
    { id: 'reinvented', label: 'Bunion Surgery ReInvented', icon: Play },
    { id: 'pictures', label: 'Bunion Surgery Pictures', icon: Camera },
    { id: 'videos', label: 'Bunion Surgery Videos', icon: Play },
    { id: 'cost', label: 'Bunion Surgery Cost', icon: DollarSign },
    { id: 'recovery', label: 'Bunion Surgery Recovery', icon: Activity },
    { id: 'hear-moy', label: 'Hear what Dr. Richard Moy has to say!', icon: Play },
    { id: 'travel', label: 'Listen to Why People Travel to See Dr. Moy', icon: Music },
  ];

  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.replace('#', '');
      if (tabs.find(t => t.id === hash)) {
        setActiveTab(hash);
        // Scroll to content area if on mobile or if needed
        const element = document.getElementById('tab-content');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  const renderContent = () => {
    switch (activeTab) {
      case 'painless':
        return (
          <div className="space-y-8 animate-fadeIn">
             <h2 className="text-3xl font-bold text-secondary mb-4 font-serif">What is Painless Bunion Surgery?</h2>
             <div className="flex flex-col xl:flex-row gap-8">
               <div className="flex-1 prose max-w-none text-gray-700 leading-relaxed space-y-4">
                 <p>Painless bunion surgery was created by Dr. Richard Moy in the early 1990s.</p>
                 <p>Since then Dr. Moy has performed more bunion surgery than any other surgeon in the world.</p>
                 
                 <p><strong>What sets Dr. Moy apart?</strong></p>
                 <p>Dr. Moy’s procedure addresses severe bunion deformities and allows the patient to walk immediately, without the necessity of a below the knee cast or crutches. His procedures allow the patients to experience a painless recovery without the necessity of narcotic pain medication. To prove this, ten severe bunions that Dr. Moy has corrected can be seen below.</p>

                 <p><strong>How do we know the results are that good, and where is the proof?</strong></p>
                 <p>Listen to all of the patients who have had the procedure. In over 97% of all cases, patients state their surgery was painless. Dr. Moy is the only surgeon in the world who will post all of the before and after photos on every single surgery he performs.</p>
                 <p>Dr. Moy is the only surgeon in the world who will display every patient’s evaluation’s and comments on how the on how painless the bunion surgery was, without exception!</p>

                 <p><strong>How do you know who the best is at anything in the world?</strong></p>
                 <p>Answer, To look at every performance and outcome.</p>
                 <p>For example: Just because someone has been playing golf for 30 years, or performing bunion surgery for 30 years, does not mean they are exceptional at what they do. In this case we fail to evaluate the scores of every tournament they played in or every surgical recovery process and outcome.</p>

                 <p><strong>How do we know that golfers like Jack Nicklaus and Tiger Woods were exceptional golfers in their time?</strong></p>
                 <p>Answer, by evaluating every tournament they played in, and the final scores.</p>
                 <p>Again, Dr. Moy is the <strong>only bunion surgeon</strong> in the world who <strong>will post every before and after photograph</strong> as well as every evaluation on every single patient.</p>

                 <p><strong>What does painless bunion surgery really mean? And, how is it different than the average foot surgeon results?</strong></p>
                 <p>Dr. Moy performs a local anesthetic block after the patient is asleep from intravenous sedation. This means the patient will not feel the numbing process of their foot. Once the bunion surgery is over, and the local anesthetic has worn off, there is no pain and therefore no need to take any pain medication what so ever!</p>
                 <p>The average bunion surgery results in a lot of pain. It’s so painful you have to constantly take narcotic pain medication for weeks or even months.</p>
                 <p>Most people stay in bed until the majority of the pain subsides. When they try to stand to go to the bathroom, the pain will increase, causing them to crawl to the toilet. Some men have carried their wives to the bathroom due to the pain. Because these patients cannot stand, most subject themselves to sponge bathing.</p>
                 <p>Dr. Moy’s patients do not experience pain and therefore can walk immediately after bunion surgery. As soon as the numbness wears off, they will also be able to stand to take a shower or sit in the bathtub.</p>
                 <p>Because there is no pain and no need for narcotic pain medication, Dr.Moy’s patients can drive their car the next day.</p>
                 <p>Many people don’t realize you can get a DUI if you have taken prescription narcotic pain medication and get behind the wheel.</p>
                 <p>The ability to walk immediately after bunion surgery without pain should not be underestimated!</p>
                 <p>Doctor Moy’s bunion surgery patients can get dressed, go to work, or go to the store, and get around to do the things that they need and want to do.</p>
                 <p>With the average foot surgeon, there are many people who are not happy with the recovery process they feel like it was torture.  They decide never get bunion surgery on the other foot.</p>
                 <p>Doctor Moy’s bunion procedure is designed with stability of the bones in mind. This allows moderate pressure to the surgical site without concern of displacing the bone.</p>
                 <p>There are many surgeons who will place their patient in a below-the-knee cast after having bunion surgery. Their procedure is not stable enough for the patient to bear any weight, and therefore the patient requires crutches. If crutches are involved, they are usually used for 6 to 8 weeks. The patient then gets fitted for a walking boot.</p>
                 <p>Dr. Moy’s bunion procedure has patients back into comfortable shoes at 4 weeks. At 6 weeks the patients can start to run and try on high heel shoes.</p>
                 <p>Dr. Moy’s bunion procedure requires a small screw. The screw is there to reposition the bone and help prevent the bunion from recurring. Once the bone has essentially welded itself back together, the screw no longer serves a purpose.</p>
                 <p>Screw removal is optional.</p>
                 <p>Dr. Moy created a screw removal procedure that will allow his patients to be back in regular shoes the next day with a Band-Aid over the 3mm incision site.</p>
               </div>
               
               <div className="xl:w-80 flex flex-col gap-6 shrink-0">
                 <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm text-center">
                   <h4 className="font-bold text-secondary mb-4">Virtual Bunion Consultation</h4>
                   <a href="https://www.youtube.com/watch?v=9KnlXe10ZVw" target="_blank" rel="noreferrer" className="block mb-4 hover:opacity-80 transition-opacity">
                     <span className="text-primary hover:underline font-semibold block mb-2">Virtual Bunion Consultation</span>
                   </a>
                    <a href="https://www.youtube.com/watch?v=SmNy0bjXI60" target="_blank" rel="noreferrer" className="block mb-4 hover:opacity-80 transition-opacity">
                     <span className="text-primary hover:underline font-semibold block">How to Choose Your Surgeon</span>
                   </a>
                 </div>

                 <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                   <img src="https://drmoy.com/wp-content/uploads/2016/02/BeforeAfter-Template-Margot-Doucette.png" alt="Before and After Margot Doucette" className="w-full rounded mb-2" />
                 </div>

                  <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm text-center">
                   <img src="https://drmoy.com/wp-content/uploads/2017/09/dr-moy.jpg" alt="Dr Moy" className="w-32 h-auto mx-auto rounded-full border-4 border-primary mb-4" />
                   <h4 className="font-bold text-secondary">Before and After Bunion Surgery</h4>
                   <a href="https://www.youtube.com/channel/UCSojimeIuZdQckY22wGXASA/videos" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 mt-2 rounded-lg font-bold text-sm transition-colors w-full justify-center">
                     <Play size={16} fill="currentColor" /> YouTube
                   </a>
                 </div>
               </div>
             </div>
          </div>
        );
      case 'what-is':
        return (
          <div className="space-y-8 animate-fadeIn">
            <h2 className="text-3xl font-bold text-secondary mb-4 font-serif">What is a Bunion?</h2>
            <div className="flex flex-col md:flex-row gap-8">
               <div className="flex-1 space-y-6">
                 <p className="text-gray-700">Bunions are painful bone protrusions, commonly caused by wearing shoes that are too tight. They typically form on the inside edge of the big toe at the first metatarsal joint.</p>
                 <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                   <p className="text-yellow-800 font-medium">If left untreated, bunions can cause major foot problems. The movement of the big toe can cause the second toe to shift as well, deforming the foot in the process.</p>
                 </div>
                 
                 <div className="mt-6">
                   <img src="https://drmoy.com/wp-content/uploads/2016/06/Bunion-Severity-1-300x116.png" alt="Bunion Severity" className="w-full rounded-lg shadow-sm" />
                 </div>

                 <p className="text-gray-700">Red, calloused skin may also be present at the site of the bunion. Fortunately, there are a number of conventional and surgical options available to alleviate the symptoms or completely remove bunions.</p>
               </div>
               <div className="md:w-1/3 text-center">
                 <img src="https://drmoy.com/wp-content/uploads/2016/05/ds00309_ds00033_im02092_mcdc7_bunionthu_jpg.png-278x300.jpg" alt="Foot Anatomy" className="mx-auto rounded-lg shadow-lg mb-2" />
                 <p className="text-xs text-gray-500">© 1998-2016 Mayo Foundation for Medical Education and Research. All rights reserved.</p>
               </div>
            </div>
          </div>
        );
      case 'causes':
        return (
          <div className="space-y-8 animate-fadeIn">
            <h2 className="text-3xl font-bold text-secondary mb-4 font-serif">Bunion Causes and Symptoms</h2>
            <p className="text-lg text-gray-700">There are TWO main causes for bunions</p>
            
            <div className="space-y-12">
              {/* Improper Shoes */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-32 shrink-0">
                      <img src="https://drmoy.com/wp-content/uploads/2016/02/1-300x300.png" alt="Icon 1" className="w-full h-auto" />
                  </div>
                  <div className="flex-1">
                      <h3 className="text-xl font-bold text-secondary mb-4 border-b border-gray-200 pb-2">Improper <strong>Shoes</strong></h3>
                      <div className="flex gap-4 mb-4">
                        <img src="https://drmoy.com/wp-content/uploads/2016/05/xray-barefoot.jpg" alt="Xray Barefoot" className="w-32 rounded shadow-sm" />
                        <img src="https://drmoy.com/wp-content/uploads/2016/05/xray-heels.jpg" alt="Xray Heels" className="w-32 rounded shadow-sm" />
                      </div>
                      <div className="bg-red-50 border-l-4 border-red-500 p-4 text-red-700">
                          <p>Bunions develop when the deep toe box is too narrow, effectively pinching the toes.</p>
                      </div>
                  </div>
              </div>

              {/* Genetic Factors */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-32 shrink-0">
                      <img src="https://drmoy.com/wp-content/uploads/2016/02/2-300x300.png" alt="Icon 2" className="w-full h-auto" />
                  </div>
                  <div className="flex-1">
                      <h3 className="text-xl font-bold text-secondary mb-4 border-b border-gray-200 pb-2"><strong>Genetic Factors</strong></h3>
                      <img src="https://drmoy.com/wp-content/uploads/2016/06/dna-1370603787lgy-300x169.jpg" alt="DNA" className="rounded shadow-sm" />
                  </div>
              </div>
            </div>
          </div>
        );
      case 'treatment':
        return (
          <div className="space-y-8 animate-fadeIn">
            <h2 className="text-3xl font-bold text-secondary mb-4 font-serif">Bunion Treatment</h2>
            <h3 className="text-xl font-bold text-secondary mb-4 border-b border-gray-200 pb-2">Conventional <strong>Bunion Treatment</strong></h3>
            <div className="bg-white p-6 rounded-xl border border-gray-100 prose max-w-none text-gray-700">
               <p>One of the easiest ways to treat bunions is to wear more comfortable shoes. Bunions develop when the deep toe box is too narrow, effectively pinching the toes. If you have a bunion, you should switch to shoes with roomier deep toe boxes, low or flat heels, and adequate arch support. Custom orthotics, such as bunion pads or insoles, can be worn inside the shoes to relieve the pressure on the big toe by distributing your weight better. A trained podiatrist like Dr. Moy can recommend the best orthotic for you.</p>
               <p>Mole skin or felt patches can be worn over the bunion to prevent it from rubbing on the inside of your shoes. The pain can also be managed using over-the-counter pain relievers and anti-inflammatory medicines like ibuprofen or aspirin. Dr. Moy can let you know which pain reliever is best suited for you. Ice packs can also be used to help reduce swelling. Ice should be kept in a cloth or towel and applied for 10 to 20 minutes at a time. Your foot should be elevated during application.</p>
            </div>
          </div>
        );
      case 'reinvented':
        return (
          <div className="space-y-8 animate-fadeIn">
             <h2 className="text-3xl font-bold text-secondary mb-4 font-serif">Bunion Surgery ReInvented</h2>
             <h5 className="font-bold text-gray-800">Bunion Surgery ReINVENTED</h5>
             <p className="text-gray-600 italic mb-6">Watch a clearer demonstration of Dr. Richard Moy's unique procedure with this animation.</p>
             <div className="aspect-video w-full md:w-2/3 bg-black rounded-xl overflow-hidden shadow-2xl">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/DunheiwJbWk" 
                  title="Virtually Pain Free Bunion Surgery By Expert Dr. Moy" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                ></iframe>
             </div>
          </div>
        );
      case 'pictures':
        return (
          <div className="space-y-8 animate-fadeIn">
            <h2 className="text-3xl font-bold text-secondary mb-4 font-serif">Bunion Surgery Pictures</h2>
            <h3 className="text-xl font-bold text-secondary mb-4 border-b border-gray-200 pb-2">Bunion Surgery <strong>Pictures</strong></h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               {Array.from({length: 8}).map((_, i) => (
                 <div key={i} className="aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-all border border-gray-200">
                    <img src={`https://picsum.photos/400/400?random=${i+30}`} alt="Patient Result" className="w-full h-full object-cover" />
                 </div>
               ))}
            </div>
            <div className="text-center mt-4">
                <p className="text-gray-500 italic">Images loading from gallery...</p>
                <button className="mt-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-2 px-6 rounded transition-colors">Load More</button>
            </div>
          </div>
        );
      case 'videos':
        return (
          <div className="space-y-8 animate-fadeIn">
            <h2 className="text-3xl font-bold text-secondary mb-4 font-serif">Bunion Surgery Videos</h2>
            <h3 className="text-xl font-bold text-secondary mb-6 border-b border-gray-200 pb-2">Bunion Surgery <strong>Videos</strong></h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h5 className="font-bold text-lg mb-2">Watch a Real Surgery!</h5>
                    <p className="text-sm text-gray-600 italic mb-4">Watch a real surgery of a Tailor's Bunion Removal by Expert Dr. Richard Moy using his unique procedure.</p>
                    <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/gGj81I45utw" title="Tailor's Bunion Surgery" allowFullScreen></iframe>
                    </div>
                </div>

                <div>
                    <h5 className="font-bold text-lg mb-2">Watch a Real Surgery with Caption Narrative!</h5>
                    <p className="text-sm text-gray-600 italic mb-4">Watch a real Bunion Removal surgery by Expert Dr. Richard Moy. Watch how simplistic he makes this complex procedure appear.</p>
                    <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/_s6aCcrMYS0" title="Bunion Surgery" allowFullScreen></iframe>
                    </div>
                </div>

                <div>
                    <h5 className="font-bold text-lg mb-2">Bunion Surgery ReINVENTED</h5>
                    <p className="text-sm text-gray-600 italic mb-4">Watch a clearer demonstration of Dr. Richard Moy's unique procedure with this animation.</p>
                    <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/DunheiwJbWk" title="Animation" allowFullScreen></iframe>
                    </div>
                </div>

                <div>
                    <h5 className="font-bold text-lg mb-2">Kimber's Entire Surgery Process</h5>
                    <p className="text-sm text-gray-600 italic mb-4">Kimber, an actual patient of Dr. Moy, takes you every step in the bunion surgery process.</p>
                    <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/T6wf_q0WYoY" title="Kimber's Surgery" allowFullScreen></iframe>
                    </div>
                </div>

                <div>
                    <h5 className="font-bold text-lg mb-2">Patient Testimonies</h5>
                    <p className="text-sm text-gray-600 italic mb-4">Here is a playlist of real patients a few days after surgery. Here from them first hand rate their pain level and satisfaction.</p>
                    <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/kvtIpRDYiAM" title="Vance's Story" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
          </div>
        );
      case 'cost':
        return (
          <div className="space-y-8 animate-fadeIn">
             <h2 className="text-3xl font-bold text-secondary mb-4 font-serif">Bunion Surgery Cost</h2>
             <h3 className="text-xl font-bold text-secondary mb-4 border-b border-gray-200 pb-2">How Much Does <strong>Bunion Surgery Cost?</strong></h3>
             <div className="prose max-w-none text-gray-700">
               <p>Most patients have insurance and as in any medical procedure, each insurance pays differently. First, call your insurance company and verify your benefits with our facility to find out your eligibility. Based on the benefits, we will be able to anticipate your out of pocket cost.</p>
               <p>Because many patients are confused with deductibles, the insurance deductible is a certain amount of money you have to pay first, before your insurance will start applying payment to the surgical charges.</p>
               <p>The best thing to do is <a href="https://drmoy.com/contact-us/index.html" className="text-primary hover:underline">contact the office</a> and talk with our office manager, Penny, about your particular situation, whether you are insured or not.</p>
               
               <h5 className="font-bold text-secondary mt-6 uppercase">KNOW YOUR INSURANCE</h5>
               <p>If you'd like to learn more about your insurance, click on link below.</p>
               <a href="#" className="inline-block bg-primary text-white text-xs font-bold px-4 py-2 rounded mt-2 hover:bg-sky-600 transition-colors">MORE INFORMATION</a>
             </div>
          </div>
        );
      case 'recovery':
        return (
          <div className="space-y-8 animate-fadeIn">
            <h2 className="text-3xl font-bold text-secondary mb-4 font-serif">Bunion Surgery Recovery</h2>
            
            <div className="flex flex-col md:flex-row gap-8">
               <div className="md:w-1/3 grid grid-cols-2 gap-2 content-start">
                   <img src="https://drmoy.com/wp-content/uploads/2016/03/surgical-boot-300x225.jpg" alt="Surgical Boot" className="w-full rounded shadow-sm" />
                   <img src="https://drmoy.com/wp-content/uploads/2016/03/walking-boot-1-276x300.jpg" alt="Walking Boot" className="w-full rounded shadow-sm" />
                   <img src="https://drmoy.com/wp-content/uploads/2016/03/walking-boot-black-e1464891694139-252x300.jpg" alt="Black Boot" className="w-full rounded shadow-sm col-span-2 mx-auto w-1/2" />
               </div>
               <div className="flex-1">
                   <h3 className="text-xl font-bold text-secondary mb-4 border-b border-gray-200 pb-2">How Is the Recovery from <strong>Bunion Surgery?</strong></h3>
                   <div className="text-gray-700 space-y-4">
                       <p>Immediately after surgery you will be able to walk with a post-op shoe. You can walk a maximum of 15 minutes per hour, primarily on your heel and or the outside of your foot.</p>
                       <ol className="list-decimal pl-5 space-y-2">
                           <li>You will have a follow-up visit 3-4 days after surgery and will be given a walking boot at that time. At this point you can walk as much as 20 minutes per hour.</li>
                           <li>Return one week after the first post-operative visit to have another dressing change and to remove the sutures. At this point, you can start walking up to 30 minutes per hour in the boot.</li>
                           <li>Increase your walking time by 10 minutes per hour per week.</li>
                           <li>Return approximately two weeks later to get an x-ray of the foot. By the end of the fourth week after surgery, you can resume walking in loose, comfortable fitting shoes.</li>
                       </ol>
                       <p>6 weeks after surgery you will return to have a final x-ray and then return to full physical activity starting slowly and working up to full capacity.</p>
                   </div>
                   
                   <div className="mt-8 text-center">
                       <h4 className="font-bold uppercase tracking-wide text-secondary mb-2">SCROLL DOWN FOR "HOW-TO" VIDEOS</h4>
                       <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto text-pink-500">
                           <i className="fa fa-arrow-circle-down"></i>
                       </div>
                   </div>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-gray-100">
                 <div>
                     <h5 className="font-bold text-lg mb-2">Post Surgery Instruction: Walking Boot</h5>
                     <p className="text-sm text-gray-600 italic mb-4">This walking boot, or pneumatic boot (also available in black), is given during the first follow-up visit. Unlike casts, walking boots can be removed for bathing and sleeping. It must be worn, however, when the person is up and weight bearing.</p>
                     <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/P2x2Jxi1QW0" title="Walking Boot" allowFullScreen></iframe>
                     </div>
                 </div>

                 <div>
                     <h5 className="font-bold text-lg mb-2">Post Surgery Instruction: Stitch Removal</h5>
                     <p className="text-sm text-gray-600 italic mb-4">This step is for patients who are out-of-state and need to go back home. Our office has created a step-by-step video for our patients convenience.</p>
                     <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/JsTh5j4-4ls" title="Stitch Removal" allowFullScreen></iframe>
                     </div>
                 </div>

                 <div>
                     <h5 className="font-bold text-lg mb-2">Post Surgery Instruction: Shower Boot</h5>
                     <p className="text-sm text-gray-600 italic mb-4">This shower boot is used for bathing to make everyday activities easier on our patients.</p>
                     <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/HSWp3Nn_wE8" title="Shower Boot" allowFullScreen></iframe>
                     </div>
                 </div>

                 <div>
                     <h5 className="font-bold text-lg mb-2">Post Surgery Instruction: Foot Exercises</h5>
                     <p className="text-sm text-gray-600 italic mb-4">This video is extremely important in the recovery process. Stretching during these stages ensures proper healing and range of motion. Please refer to this video if you need any assistance, or call us at the office.</p>
                     <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/4C3gSSBZF28" title="Foot Exercises" allowFullScreen></iframe>
                     </div>
                 </div>
            </div>

          </div>
        );
      case 'hear-moy':
        return (
          <div className="space-y-8 animate-fadeIn">
            <h2 className="text-3xl font-bold text-secondary mb-4 font-serif">Hear what Dr. Richard Moy has to say!</h2>
            <div className="aspect-video w-full md:w-3/4 bg-black rounded-xl overflow-hidden shadow-2xl">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/HqkKesnPEPU" 
                title="Hear Dr Moy"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        );
      case 'travel':
        return (
           <div className="space-y-8 animate-fadeIn">
            <h2 className="text-3xl font-bold text-secondary mb-4 font-serif">Listen to Why People Travel to See Dr. Moy</h2>
            
            <div className="flex flex-col md:flex-row gap-12">
               <div className="flex-1">
                   <h2 className="text-2xl font-bold text-secondary mb-8">Listen to Why People Travel to See Dr. Moy!</h2>
                   <hr className="mb-8" />
                   
                   <div className="bg-gray-100 p-8 rounded-xl flex flex-col items-center justify-center border border-gray-200 shadow-inner">
                       <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary shadow-sm mb-4">
                           <Music size={32} />
                       </div>
                       <audio controls className="w-full">
                           <source src="https://drmoy.com/wp-content/uploads/2016/02/tv_commercial_bunion.mp3" type="audio/mpeg" />
                           Your browser does not support the audio element.
                       </audio>
                       <p className="mt-4 text-sm text-gray-500 font-medium">TV Commercial Audio</p>
                   </div>
               </div>

               <div className="md:w-1/3">
                   <div className="border border-gray-200 rounded p-1 inline-block shadow-sm">
                       <img src="https://drmoy.com/wp-content/uploads/2017/11/115650155_Subscription_S1-150x150.jpg" alt="Foot Pain" />
                   </div>
               </div>
            </div>
            
            <div className="mt-12 bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-secondary mb-4">Do I Have an Ankle Disorder?</h3>
                {/* Placeholder for content implied by HTML structure but empty in source */}
                <p className="text-gray-600">If you are experiencing pain or discomfort in your ankle, please consult our Conditions page or schedule an appointment.</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white pb-20">
       {/* Banner */}
       <div className="bg-secondary relative overflow-hidden text-center py-20 px-4">
        <div className="absolute inset-0 bg-primary/10"></div>
        <div 
            className="absolute inset-0 opacity-20 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://drmoy.com/wp-content/uploads/2016/06/surgeon-banner.jpg)' }}
        ></div>
        <div className="relative z-10">
           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Bunion Surgery</h1>
        </div>
      </div>
       
       <div className="container mx-auto px-4 mt-16">
         <div className="flex flex-col lg:flex-row gap-8">
           {/* Sidebar Tabs */}
           <div className="lg:w-1/4 shrink-0">
             <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden sticky top-24">
                {tabs.map(tab => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full text-left px-6 py-4 border-b border-gray-100 last:border-0 transition-all flex items-center gap-3 ${
                        activeTab === tab.id 
                          ? 'bg-gray-50 text-secondary font-bold border-l-4 border-primary' 
                          : 'bg-white text-gray-600 hover:bg-sky-50 hover:text-primary'
                      }`}
                    >
                      <span className="text-sm">{tab.label}</span>
                    </button>
                  );
                })}
             </div>
           </div>

           {/* Content Area */}
           <div className="lg:w-3/4 min-h-[600px]" id="tab-content">
             <div className="bg-white rounded-2xl p-2 lg:p-0">
                {renderContent()}
             </div>
           </div>
         </div>
       </div>
    </div>
  );
}

export default BunionSurgery;
