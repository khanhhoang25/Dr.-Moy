
import React, { useState } from 'react';
import { Search, User, Tag, MessageCircle, Calendar, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  slug: string; // In a real app, this would route to a detail page
  excerpt: string;
  image?: string;
  date: { day: string; month: string; year: string };
  author: string;
  tags: string[];
  commentCount: number;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How to Find the Right Treatment for Foot Pain and Bunions",
    slug: "#",
    excerpt: "If you've ever had to deal with bunions, then you know how painful and difficult it can be. Then you have the additional challenge of trying to find the right treatment to make your condition less severe. While treatment...",
    image: "https://drmoy.com/wp-content/uploads/2019/08/foot-805x503.jpg",
    date: { day: "24", month: "Aug", year: "2019" },
    author: "SEO Writer",
    tags: [],
    commentCount: 0
  },
  {
    id: 2,
    title: "What To Expect After Bunion Surgery",
    slug: "#",
    excerpt: "If you have been scheduled for bunion surgery Orange County CA, you likely have a lot of questions about recovery time after bunion surgery. Your recovery time can be affected by several variables, but you can expect to be fully healed in a couple of months. If you are suffering from bunions, no one needs to tell you how painful bunions can be. You are not alone. It is estimated...",
    image: "https://drmoy.com/wp-content/uploads/2019/07/recovery-time-after-bunion-surgery-805x503.jpg",
    date: { day: "18", month: "Jul", year: "2019" },
    author: "SEO Writer",
    tags: [],
    commentCount: 0
  },
  {
    id: 3,
    title: "Bunion Causes, Treatment, And Prevention",
    slug: "#",
    excerpt: "The enlargement of the joint of the big toe causes bunions. The protrusion typically protrudes from the side of the big toe. When a bunion forms, it pushes the big toes against the other toes, which cause pain and...",
    image: "https://drmoy.com/wp-content/uploads/2019/06/bun624.jpg",
    date: { day: "24", month: "Jun", year: "2019" },
    author: "SEO Writer",
    tags: [],
    commentCount: 0
  },
  {
    id: 4,
    title: "Three Easy Steps for Healthy Feet",
    slug: "#",
    excerpt: "From hiking a mountain trail, to walking a mini golf course, to shopping in a mall at Christmas and playing soccer with your kid, your feet carry you through life. Most of us walk every day. School. Work. Play. Before the age of fifty, the average person living in America will have walked up to 75,000 miles. With this much wear and tear, it's no surprise that there are many...",
    date: { day: "24", month: "May", year: "2019" }, // Inferred date for sorting
    author: "SEO Writer",
    tags: [],
    commentCount: 0
  },
  {
    id: 5,
    title: "How to Avoid Bunions with Proper Shoe Fit",
    slug: "#",
    excerpt: "A bunion is what’s often lovingly referred to as a “bump” protruding from the side of one’s foot, at the base of the big toe. It’s what happens when the bone or tissue at the MTP -- or metatarsophalangeal...",
    image: "https://drmoy.com/wp-content/uploads/2019/05/bunion-805x503.jpg",
    date: { day: "11", month: "May", year: "2019" },
    author: "Dr. Moy",
    tags: [],
    commentCount: 0
  },
  {
    id: 6,
    title: "Non-Surgical Ways to Treat Bunions",
    slug: "#",
    excerpt: "A bunion, or hallux valgus, is a slowly developing bump on a person's big toe joint. It creates pressure on the big toe, which forces the toe to move and changes the bone structure of the affected foot over time. Untreated, bunions can become quite large, causing the first three toes to grow out of alignment and creating calluses from constant friction. Many people opt for surgery to remove these...",
    image: "https://drmoy.com/wp-content/uploads/2019/03/foot-health-805x503.jpg",
    date: { day: "31", month: "Mar", year: "2019" },
    author: "Dr. Moy",
    tags: [],
    commentCount: 0
  },
  {
    id: 7,
    title: "Bone Spurs: Causes, Symptoms, and Treatment",
    slug: "#",
    excerpt: "A bone spur is a smooth, hard growth that develops on a bone. They typically form at a joint, where two bones meet. They are most commonly found on the feet, knees, hips, spine, and shoulders. Bone spurs themselves...",
    image: "https://drmoy.com/wp-content/uploads/2019/02/foot-health-805x503.jpg",
    date: { day: "27", month: "Feb", year: "2019" },
    author: "Dr. Moy",
    tags: [],
    commentCount: 0
  },
  {
    id: 8,
    title: "Foot Pain: Dealing With and Preventing Bunions",
    slug: "#",
    excerpt: "Foot problems like bunions can be as annoying as they are painful. No one wants to deal with foot discomfort throughout the day and bunions can cause intense pain, which is why it's important to not only understand what they are, but how to prevent them from forming. Bunions occur when the tissue at the base of the big toe becomes swollen, forming a large bump on the side of...",
    date: { day: "15", month: "Jan", year: "2019" }, // Inferred
    author: "SEO Writer",
    tags: [],
    commentCount: 0
  },
  {
    id: 9,
    title: "3 Signs That Your Foot Pain Could Be Even Worse",
    slug: "#",
    excerpt: "Approximately 75% of Americans will experience foot health problems of varying degrees of severity at one time or another in their lives. Though foot pain might not be as severe as back or neck pain, it can still cause...",
    image: "https://drmoy.com/wp-content/uploads/2019/01/foot-pain-805x503.jpg",
    date: { day: "02", month: "Jan", year: "2019" },
    author: "Dr. Moy",
    tags: [],
    commentCount: 0
  },
  {
    id: 10,
    title: "Dez Bryant Suffers Season-Ending Injury After Second Practice",
    slug: "#",
    excerpt: "The average adult takes around 4,000 to 6,000 steps a day and 19% of the adult population has an average of 1.4 foot health problems each year. Professional NFL football players, however, take much more steps and push themselves to perform to the best of their ability. Unfortunately, since these players go 100% every play, every practice, and every step, their likelihood of getting injured -- especially when it comes...",
    image: "https://drmoy.com/wp-content/uploads/2018/11/health-805x490.jpg",
    date: { day: "28", month: "Nov", year: "2018" },
    author: "Dr. Moy",
    tags: [],
    commentCount: 0
  },
  {
    id: 11,
    title: "5 Treatments For Bunions That Will Help Alleviate Pain",
    slug: "#",
    excerpt: "Approximately 75% of Americans will experience foot health problems of varying degrees of severity at one point or another throughout their lifetime. Bunions are one of the most common and most painful foot-related issues. You should never ignore serious...",
    image: "https://drmoy.com/wp-content/uploads/2018/10/treatment-for-bunions-805x503.jpg",
    date: { day: "23", month: "Oct", year: "2018" },
    author: "Dr. Moy",
    tags: [],
    commentCount: 0
  },
  {
    id: 12,
    title: "Protecting Your Feet: Shoes and Mistakes You Should Avoid",
    slug: "#",
    excerpt: "Approximately 19% of the U.S. population has an average of 1.4 foot problems each year. Foot pain is no joke and can cause all sorts of lifelong problems. Sports injuries and physical activity can cause intense foot pain, but even wearing the wrong kind of shoes can have an adverse effect. Here are some common shoe-related mistakes that can lead to serious foot pain down the road: Not measuring your...",
    image: "https://drmoy.com/wp-content/uploads/2018/10/feet-805x400.jpg",
    date: { day: "02", month: "Oct", year: "2018" },
    author: "Dr. Moy",
    tags: [],
    commentCount: 0
  },
  {
    id: 13,
    title: "NFL Players Struggling With Foot Pain Right Before NFL Season",
    slug: "#",
    excerpt: "As the NFL season is about to officially kick off, there are already plenty of players who are battling injuries. The 17-week season is long and excruciating, and having an injury during the preseason is alarming for players, coaches...",
    image: "https://drmoy.com/wp-content/uploads/2018/08/foot-pain-805x503.jpg",
    date: { day: "27", month: "Aug", year: "2018" },
    author: "Dr. Moy",
    tags: [],
    commentCount: 0
  },
  {
    id: 14,
    title: "Avoid Serious Pain: Protecting Your Hands and Feet",
    slug: "#",
    excerpt: "Injuries can strike anyone at any time and cause a tremendous amount of pain. It's important to not only be aware of what body parts are most at-risk for specific injuries, but also how to prevent those injuries from happening and avoid severe pain. Here are two parts of the body that most people don't associate with injuries and pain, but can actually give you plenty of uncomfortable problems: Feet...",
    date: { day: "15", month: "Aug", year: "2018" },
    author: "SEO Writer",
    tags: [],
    commentCount: 0
  },
  {
    id: 15,
    title: "4 Great Ways to Keep Your Feet Healthy and Pain Free",
    slug: "#",
    excerpt: "The average adult takes approximately 4,000 to 6,000 steps a day. For an athlete or a much more active adult, that number could as much as triple. Since Americans do so much walking, running, and hiking, it's essential to...",
    image: "https://drmoy.com/wp-content/uploads/2017/11/115650155_Subscription_S1-805x503.jpg",
    date: { day: "02", month: "Jul", year: "2018" },
    author: "SEO Writer",
    tags: [],
    commentCount: 0
  },
  {
    id: 16,
    title: "3 Common Causes of Severe Foot Pain",
    slug: "#",
    excerpt: "Approximately 19% of the U.S. population has an average of 1.4 foot problems annually. From minor stubbed toes to serious bunion deformities, these foot issues can lead to severe health issues down the line and potentially excruciating foot pain. \"No pain is normal, but it's not surprising how many people experience it considered the types of shoes we wear,\" said Hillary Brenner, D.P.M...",
    image: "https://drmoy.com/wp-content/uploads/2018/06/foot.jpg",
    date: { day: "05", month: "Jun", year: "2018" },
    author: "SEO Writer",
    tags: [],
    commentCount: 0
  },
  {
    id: 17,
    title: "Soccer Superstar Neymar Expected Back Within a Month Following Foot Surgery",
    slug: "#",
    excerpt: "Foot health is a concern for every individual on the planet. Whether you're a kid running around the playground at school or a retired individual just walking through the park, foot pain can lead to some serious livelihood issues...",
    image: "https://drmoy.com/wp-content/uploads/2018/05/foot1-805x503.jpg",
    date: { day: "02", month: "May", year: "2018" },
    author: "SEO Writer",
    tags: [],
    commentCount: 0
  },
  {
    id: 18,
    title: "Foot Healthcare: Beware of These 4 Foot Issues",
    slug: "#",
    excerpt: "Approximately 19% of the entire U.S. population has an average of 1.4 foot problems each year. These issues range from minor annoyances to severe foot pain and should be addressed as soon as possible. Here are some of the most common types of foot pain: Athlete's Foot -- Athlete's foot is caused by a fungus that thrives in warm, dark, and moist environments like the spaces in between a person's...",
    image: "https://drmoy.com/wp-content/uploads/2018/04/bunion-805x503.jpg",
    date: { day: "13", month: "Apr", year: "2018" },
    author: "SEO Writer",
    tags: [],
    commentCount: 0
  },
  {
    id: 19,
    title: "Dealing With Intense Foot Pain: How to Manage Your Bunion Issues",
    slug: "#",
    excerpt: "Foot pain might not be the most excruciating type of discomfort known to man, but it can cause some serious issues down the line. As some of the only bi-pedal creatures on earth, we depend on our feet as...",
    date: { day: "15", month: "Mar", year: "2018" },
    author: "SEO Writer",
    tags: [],
    commentCount: 0
  },
  {
    id: 20,
    title: "3 Common Types of Severe Pain and Treatment Options",
    slug: "#",
    excerpt: "Chronic pain can lead to so much problems in life. No matter what kind of severe pain you're experiencing, if it's constant, you need to have it addressed right away. Additionally, it's important to be aware of what are the most common types of chronic pain. From bunion pain to osteoarthritis, there are, unfortunately, so many types of chronic pain. Here are some of the most common types of chronic...",
    image: "https://drmoy.com/wp-content/uploads/2018/02/bunionpain-805x503.jpg",
    date: { day: "27", month: "Feb", year: "2018" },
    author: "SEO Writer",
    tags: [],
    commentCount: 0
  },
  {
    id: 21,
    title: "9 Interesting Facts About Bunions and Foot Pain",
    slug: "#",
    excerpt: "Bunion pain can be so severe it can actually impact every second of your day. If you need treatment for bunions, foot surgery, or just want to consult with a medical professional about your foot pain, it's best to...",
    image: "https://drmoy.com/wp-content/uploads/2018/01/treatmentforbunions-805x503.jpg",
    date: { day: "10", month: "Jan", year: "2018" },
    author: "SEO Writer",
    tags: [],
    commentCount: 0
  },
  {
    id: 22,
    title: "Helpful Guide For Dealing With Bunion Pain",
    slug: "#",
    excerpt: "No one enjoys dealing with any kind of pain, but foot pain is particularly irritating. Between one-quarter and one-third of American adults currently have bunion deformities, which can result in major pain. Here are a few approaches you can take for treatment for bunions that will hopefully, at least temporarily, alleviate some of your foot pain: Maintain a healthy weight If you're nearing levels of obesity, you are running the...",
    image: "https://drmoy.com/wp-content/uploads/2017/12/footpain-805x503.jpg",
    date: { day: "20", month: "Dec", year: "2017" },
    author: "SEO Writer",
    tags: [],
    commentCount: 0
  },
  {
    id: 23,
    title: "4 Tips for Preventing and Alleviating Foot Pain",
    slug: "#",
    excerpt: "Foot pain can range from minor irritation to so intense you can't even walk. Considering that, it makes sense for most people to avoid or alleviate that kind of pain at all costs. If you're one of those people,...",
    image: "https://drmoy.com/wp-content/uploads/2017/11/115650155_Subscription_S1-805x503.jpg",
    date: { day: "10", month: "Nov", year: "2017" },
    author: "SEO Writer",
    tags: [],
    commentCount: 0
  },
  {
    id: 24,
    title: "Bunion Pain: Symptoms, Alleviation, Surgery, and Aftercare",
    slug: "#",
    excerpt: "Between one-quarter to one-third of American adults have bunion deformities. Unfortunately, it can be difficult to determine whether or not you actually have bunion issues or if you're just suffering from foot pain. Hopefully, this information will help you identify a bunion and assist you on your path back to recovery. Identifying your bunion Knowing how to identify the early symptoms of bunions is extremely important. Keep an eye out...",
    image: "https://drmoy.com/wp-content/uploads/2017/10/bunionpain-805x503.jpg",
    date: { day: "03", month: "Oct", year: "2017" },
    author: "SEO Writer",
    tags: [],
    commentCount: 0
  },
  {
    id: 25,
    title: "Are There Common Risks of Developing Bunions?",
    slug: "#",
    excerpt: "Bunions are painful, unwanted and embarrassing to look at. While women are more likely to develop bunions more than their male counterparts everyone deserves to know a few things to help prevent their risk of developing bunions. Every now...",
    image: "https://drmoy.com/wp-content/uploads/2016/02/looking-at-feet-805x503.jpg",
    date: { day: "12", month: "Jul", year: "2016" },
    author: "Dr. Moy",
    tags: [],
    commentCount: 0
  },
  {
    id: 26,
    title: "Common Questions About Bunion Surgery Pain",
    slug: "#",
    excerpt: "Many consider non surgical treatments to relieve their bunion pain, but when these treatments no longer help, it is time to consider bunion surgery.  Here are some common concerns and questions concerning bunion surgery. Does insurance cover the cost? Most insurance providers do cover bunion surgery. Contact your insurance provider for more information on your coverage. Do I need to have surgery? It is not necessary to have surgery right away,...",
    image: "https://drmoy.com/wp-content/uploads/2016/07/0018-compressed-compressed-805x503.jpg",
    date: { day: "12", month: "Jul", year: "2016" },
    author: "Dr. Moy",
    tags: [],
    commentCount: 0
  },
  {
    id: 27,
    title: "Will I Need to Wear New Orthotics After Bunion Surgery?",
    slug: "#",
    excerpt: "We have all heard at one point in our lifetime that bunions affect the majority of women because of the increased risk of foot deformity after wearing some of the world’s latest shoe fashion trend. However, that is not...",
    image: "https://drmoy.com/wp-content/uploads/2016/07/Sport_Track_Web.112151208-805x503.jpg",
    date: { day: "12", month: "Jul", year: "2016" },
    author: "Dr. Moy",
    tags: [],
    commentCount: 0
  },
  {
    id: 28,
    title: "Bunion Surgery to Get Holiday Ready",
    slug: "#",
    excerpt: "As the holidays approach, many people will be pushed to go out to holiday parties and events with family, friends, and co-workers. People with bunions often avoid social events because of the pain associated with their bunions. Bunions can limit the style of shoes people are able to wear. Women who have not had bunion surgery can’t even think of wearing heels. Life does not have to be that way....",
    image: "https://drmoy.com/wp-content/uploads/2015/07/Woman-wearing-red-dress-and-heels.jpg",
    date: { day: "21", month: "Jul", year: "2015" },
    author: "Dr. Moy",
    tags: ["bunion surgery", "holiday"],
    commentCount: 0
  },
  {
    id: 29,
    title: "Summer Shoe Advice for Bunions and Growing Feet",
    slug: "#",
    excerpt: "Wearing the right shoes is something every person must fall in line with not just for the summer, but all year round. Summer may be the best time to kick off your shoes and relax by the pool but...",
    image: "https://drmoy.com/wp-content/uploads/2016/07/iStock_000017561033Small-Summer-feet-805x503.jpg",
    date: { day: "21", month: "Jun", year: "2015" },
    author: "Dr. Moy",
    tags: ["bunion surgery", "bunions", "foot pain", "shoes"],
    commentCount: 0
  }
];

const categories = ["Foot Advice", "Health", "News"];
const tags = ["bunions", "bunion surgery", "Doctors", "foot pain", "holiday", "shoes"];

const Blog: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="bg-white pb-20">
      {/* Banner */}
      <div className="bg-secondary relative overflow-hidden text-center py-24 px-4">
        <div className="absolute inset-0 bg-primary/10"></div>
        <div 
            className="absolute inset-0 opacity-40 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://drmoy.com/wp-content/uploads/2016/02/beach_feet.jpg)' }}
        ></div>
        <div className="relative z-10">
           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">FootCare News</h1>
           <p className="text-xl text-sky-200">Recieve all of your Foot Care News Here</p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="space-y-12">
              {currentPosts.map((post) => (
                <article key={post.id} className="flex flex-col border-b border-gray-100 pb-12 last:border-0">
                  {post.image && (
                    <div className="relative mb-6 group overflow-hidden rounded-lg">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 text-center rounded shadow-lg overflow-hidden min-w-[60px]">
                         <div className="bg-primary text-white text-lg font-bold py-1 px-2">{post.date.day}</div>
                         <div className="text-xs text-gray-500 font-semibold py-1 px-2 uppercase">{post.date.month}, {post.date.year}</div>
                      </div>
                    </div>
                  )}
                  
                  {!post.image && (
                     <div className="mb-4 text-sm text-gray-400 flex items-center gap-2">
                        <Calendar size={14} />
                        {post.date.month} {post.date.day}, {post.date.year}
                     </div>
                  )}

                  <h2 className="text-2xl font-bold text-secondary mb-3 hover:text-primary transition-colors cursor-pointer">
                    <a href={post.slug}>{post.title}</a>
                  </h2>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 mb-4 border-b border-gray-100 pb-4">
                     <span className="flex items-center gap-1">
                        <User size={12} /> By: <span className="text-primary">{post.author}</span>
                     </span>
                     <span className="flex items-center gap-1">
                        <Tag size={12} /> Tags: {post.tags.length > 0 ? post.tags.join(', ') : 'None'}
                     </span>
                     <span className="flex items-center gap-1">
                        <MessageCircle size={12} /> Comments: {post.commentCount}
                     </span>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div>
                     <a href={post.slug} className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all">
                       READ MORE <ArrowRight size={16} />
                     </a>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center gap-2">
              <button 
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft size={20} />
              </button>
              
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => paginate(idx + 1)}
                  className={`w-10 h-10 flex items-center justify-center rounded-full border transition-colors ${
                    currentPage === idx + 1 
                      ? 'bg-primary text-white border-primary shadow-md' 
                      : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {idx + 1}
                </button>
              ))}

              <button 
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-12">
            
            {/* Search Widget */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <form className="relative" onSubmit={(e) => e.preventDefault()}>
                   <input 
                      type="text" 
                      placeholder="Search here..." 
                      className="w-full pl-4 pr-12 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                   />
                   <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-primary transition-colors">
                     <Search size={20} />
                   </button>
                </form>
            </div>

            {/* Categories Widget */}
            <div>
               <h3 className="text-xl font-bold text-secondary mb-6 border-l-4 border-primary pl-4">Categories</h3>
               <ul className="space-y-2">
                 {categories.map((cat, idx) => (
                    <li key={idx} className="border-b border-gray-100 last:border-0 pb-2">
                       <a href="#" className="flex items-center justify-between text-gray-600 hover:text-primary transition-colors group">
                          {cat}
                          <span className="w-2 h-2 rounded-full bg-gray-200 group-hover:bg-primary transition-colors"></span>
                       </a>
                    </li>
                 ))}
               </ul>
            </div>

            {/* Recent Posts Widget */}
            <div>
               <h3 className="text-xl font-bold text-secondary mb-6 border-l-4 border-primary pl-4">Recent Posts</h3>
               <div className="space-y-6">
                 {blogPosts.slice(0, 3).map((post) => (
                    <div key={post.id} className="flex gap-4 group">
                       <div className="w-20 h-20 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                          {post.image ? (
                              <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                          ) : (
                              <div className="w-full h-full flex items-center justify-center text-gray-300">
                                <Calendar size={24} />
                              </div>
                          )}
                       </div>
                       <div>
                          <h4 className="font-bold text-sm text-secondary leading-snug mb-1 group-hover:text-primary transition-colors">
                            <a href="#">{post.title}</a>
                          </h4>
                          <span className="text-xs text-gray-500">Posted {post.date.year}</span>
                       </div>
                    </div>
                 ))}
               </div>
            </div>

            {/* Tags Widget */}
            <div>
               <h3 className="text-xl font-bold text-secondary mb-6 border-l-4 border-primary pl-4">Tags</h3>
               <div className="flex flex-wrap gap-2">
                 {tags.map((tag, idx) => (
                    <a 
                      key={idx} 
                      href="#" 
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded hover:bg-primary hover:text-white transition-colors"
                    >
                      {tag}
                    </a>
                 ))}
               </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Blog;
