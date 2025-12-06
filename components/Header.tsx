
import React, { useState } from 'react';
import { Menu, X, Phone, ChevronDown, ChevronRight, ChevronUp } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavItem {
  name: string;
  href?: string;
  submenu?: NavItem[];
}

const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  {
    name: 'New Patient',
    href: '#',
    submenu: [
      { name: 'Set Up an Appointment', href: '/appointment' },
      { name: 'Insurance Verification', href: '/insurance-verification' },
      { name: 'New Patient Forms', href: '/patient-forms' },
      { name: 'Surgical Patient Forms', href: '/pre-op-orders' },
      {
        name: 'Out of State Patient',
        href: '#',
        submenu: [
          { name: 'Out of State Patient', href: '/out-of-state-patient' },
          { name: 'Visit Dr. Moy', href: '/visit-dr-moy' },
          { name: 'Convenient Lodging', href: '/convenient-lodging' },
          { name: 'Accessible Travel', href: '/accessible-travel' },
        ]
      }
    ]
  },
  {
    name: 'Conditions',
    href: '#',
    submenu: [
      {
        name: 'FOOT & ANKLE',
        href: '#',
        submenu: [
          { name: 'Bunion', href: '/conditions/bunion' },
          { name: 'Tailor’s Bunion', href: 'https://drmoy.com/conditions/tailors-bunion/' },
          { name: 'Morton’s Neuroma', href: 'https://drmoy.com/conditions/mortons-neuroma/' },
          { name: 'Hammertoe', href: 'https://drmoy.com/conditions/hammertoe-surgery-correction/' },
          { name: 'Haglund’s Deformities', href: 'https://drmoy.com/conditions/haglunds-deformities/' },
          { name: 'Metallic Implant Removal', href: 'https://drmoy.com/conditions/metallic-implant-removal/' },
        ]
      },
      {
        name: '', // Empty for middle column layout
        href: '#',
        submenu: [
          { name: 'Flat Feet', href: 'https://drmoy.com/conditions/flat-feet/' },
          { name: 'Toenail Problems', href: 'https://drmoy.com/conditions/toenail-problems/' },
          { name: 'Heel Pain', href: 'https://drmoy.com/conditions/heel-pain/' },
          { name: 'Bone Spurs', href: 'https://drmoy.com/conditions/bone-spurs/' },
          { name: 'Ankle Disorders', href: 'https://drmoy.com/conditions/ankle-disorders/' },
          { name: 'Reconstruction', href: 'https://drmoy.com/conditions/reconstruction/' },
        ]
      },
      {
        name: 'GENERAL',
        href: '#',
        submenu: [
          { name: 'Warts and Verrucaes', href: 'https://drmoy.com/conditions/warts-and-verrucaes/' },
          { name: 'Bone Tumors and Cysts', href: 'https://drmoy.com/conditions/bone-tumors-and-cysts/' },
          { name: 'Foreign Bodies', href: 'https://drmoy.com/conditions/foreign-bodies/' },
          { name: 'Skin Lesions', href: 'https://drmoy.com/conditions/skin-lesions/' },
          { name: 'Soft Tissue Issues', href: 'https://drmoy.com/conditions/soft-tissue-issues/' },
        ]
      }
    ]
  },
  {
    name: 'Bunion Surgery',
    href: '/bunion-surgery',
    submenu: [
      {
        name: 'INFO',
        href: '#',
        submenu: [
          { name: 'What is Painless Bunion Surgery?', href: '/bunion-surgery#painless' },
          { name: 'Listen to what Dr. Moy Has to Say!', href: '/bunion-surgery#hear-moy' },
          { name: 'Bunion', href: '/conditions/bunion' },
          { name: 'Choosing a Surgeon', href: 'https://drmoy.com/choosing-a-surgeon/' },
          { name: 'Moy’s Procedures V.S. Others', href: 'https://drmoy.com/dr-moy-vs-others/' },
          { name: 'Dr. Moy Q&A', href: 'https://drmoy.com/dr-moy-qa/' },
          { name: 'Bunion Fears', href: 'https://drmoy.com/conditions/bunion-removal/' },
          { name: 'Bunion Recurrence', href: 'https://drmoy.com/bunion-recurrence/' },
          { name: 'Listen to Why Patients Travel to See Dr. Moy', href: '/bunion-surgery#travel' },
        ]
      },
      {
        name: 'SURGERY',
        href: '#',
        submenu: [
          { name: 'Cost of Surgery', href: '/bunion-surgery#cost' },
          { name: 'Day of Surgery', href: 'https://drmoy.com/day-of-surgery/' },
          { name: 'Surgery Complications', href: 'https://drmoy.com/surgery-complications/' },
          { name: 'Post Surgery Instruction', href: '/bunion-surgery#recovery' },
          { name: 'Recovery Process', href: '/bunion-surgery#recovery' },
        ]
      }
    ]
  },
  {
    name: 'Before & After Photos',
    href: '#',
    submenu: [
      { name: 'Before & After Photos', href: '/before-after-photos' },
      { name: 'Patient Surveys', href: '/patient-surveys' },
    ]
  },
  {
    name: 'Videos',
    href: '#',
    submenu: [
      { name: 'Live Surgeries with Patient Comments', href: '/live-surgeries-with-patient-comments' },
      { name: 'Several Patient Post-Op Results', href: 'https://drmoy.com/several-patient-post-op-results/' },
      { name: '10 Bunion Operations in One Week', href: 'https://drmoy.com/10-bunion-operations-in-one-week/' },
      { name: 'Bunion Surgery Animation', href: '/bunion-surgery#reinvented' },
      { name: 'Kimber’s Entire Surgical Process', href: 'https://drmoy.com/kimbers-surgery-2/' },
      { name: 'Post Surgery Instruction', href: '/bunion-surgery#recovery' },
      { name: 'Patient Testimonies', href: 'https://drmoy.com/patient-testimonies/' },
      { name: '100+ Patients Talk', href: 'https://drmoy.com/life-beyond-bunions/' },
      { name: 'Watch Real Surgeries', href: 'https://drmoy.com/watch-real-surgeries/' },
      { name: 'Medical Experts Speak Out', href: 'https://drmoy.com/medical-experts-speak-out/' },
    ]
  },
  {
    name: 'Contact Us',
    href: '#',
    submenu: [
      {
        name: 'About Us',
        href: '#',
        submenu: [
          { name: 'Meet the Staff', href: '/about-us/meet-dr-moy' },
          { name: 'Facility Tour', href: '/about-us/facility-tour' },
          { name: 'Blog', href: '/blog' },
          { name: 'History Timeline', href: '/about-us/history-timeline' },
        ]
      },
      { name: 'Contact Us', href: '/contact-us' },
      { name: 'Share Your Story', href: '/share-your-story' },
    ]
  },
  { name: 'For Doctors Only', href: '/for-drs-only' },
];

const isInternalLink = (href?: string) => href && href.startsWith('/');

interface DesktopMenuItemProps {
  item: NavItem;
}

const DesktopMenuItem: React.FC<DesktopMenuItemProps> = ({ item }) => {
  const isMegaMenu = item.name === 'Conditions' || item.name === 'Bunion Surgery';
  const widthClass = item.name === 'Conditions' ? 'w-[800px]' : 'w-[600px]';
  const gridClass = item.name === 'Conditions' ? 'grid-cols-3' : 'grid-cols-2';

  return (
    <div className="group relative h-full flex items-center">
      {isInternalLink(item.href) ? (
        <Link 
          to={item.href || '#'} 
          className="flex items-center gap-1 text-gray-600 hover:text-primary font-medium text-sm transition-colors py-2 h-full"
        >
          {item.name}
          {item.submenu && <ChevronDown size={14} />}
        </Link>
      ) : (
        <a 
          href={item.href || '#'} 
          className="flex items-center gap-1 text-gray-600 hover:text-primary font-medium text-sm transition-colors py-2 h-full"
        >
          {item.name}
          {item.submenu && <ChevronDown size={14} />}
        </a>
      )}
      
      {item.submenu && (
        <div className={`absolute top-full pt-2 hidden group-hover:block z-50 ${isMegaMenu ? `${widthClass} left-1/2 -translate-x-1/2` : 'w-56 left-0'}`}>
          <div className={`bg-white shadow-xl rounded-lg border border-gray-100 overflow-visible ${isMegaMenu ? `p-8 grid ${gridClass} gap-8` : 'py-1'}`}>
            {item.submenu.map((subItem, index) => (
              <div key={index} className={isMegaMenu ? '' : 'group/nested relative'}>
                {isMegaMenu ? (
                  /* Mega Menu Layout */
                  <div>
                    {subItem.name && (
                      <h4 className="font-bold text-gray-500 uppercase tracking-wider text-sm mb-4 border-b border-gray-100 pb-2">
                        {subItem.name}
                      </h4>
                    )}
                    <ul className="space-y-3">
                      {subItem.submenu?.map(child => (
                        <li key={child.name}>
                          {isInternalLink(child.href) ? (
                            <Link to={child.href || '#'} className="text-[15px] text-gray-600 hover:text-primary hover:translate-x-1 transition-all block">
                              {child.name}
                            </Link>
                          ) : (
                            <a href={child.href || '#'} className="text-[15px] text-gray-600 hover:text-primary hover:translate-x-1 transition-all block">
                              {child.name}
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  /* Standard Dropdown Layout */
                  <>
                    {isInternalLink(subItem.href) ? (
                      <Link
                        to={subItem.href || '#'} 
                        className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-sky-50 hover:text-primary"
                      >
                        {subItem.name}
                        {subItem.submenu && <ChevronRight size={14} />}
                      </Link>
                    ) : (
                      <a 
                        href={subItem.href || '#'} 
                        className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-sky-50 hover:text-primary"
                      >
                        {subItem.name}
                        {subItem.submenu && <ChevronRight size={14} />}
                      </a>
                    )}

                    {/* Nested Level */}
                    {subItem.submenu && (
                      <div className="absolute left-full top-0 pl-1 hidden group-hover/nested:block w-56">
                        <div className="bg-white shadow-lg rounded-lg border border-gray-100 overflow-hidden py-1">
                          {subItem.submenu.map((nestedItem) => (
                            isInternalLink(nestedItem.href) ? (
                              <Link
                                key={nestedItem.name}
                                to={nestedItem.href || '#'} 
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-50 hover:text-primary"
                              >
                                {nestedItem.name}
                              </Link>
                            ) : (
                              <a 
                                key={nestedItem.name}
                                href={nestedItem.href || '#'} 
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-50 hover:text-primary"
                              >
                                {nestedItem.name}
                              </a>
                            )
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

interface MobileMenuItemProps {
  item: NavItem;
  level?: number;
}

const MobileMenuItem: React.FC<MobileMenuItemProps> = ({ item, level = 0 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasSubmenu = item.submenu && item.submenu.length > 0;

  return (
    <div className="w-full">
      <div 
        className="flex items-center justify-between py-2 pr-4"
        style={{ paddingLeft: `${level * 16 + 12}px` }}
      >
        {isInternalLink(item.href) ? (
          <Link 
            to={item.href || '#'} 
            className="text-base font-medium text-gray-700 hover:text-primary flex-1"
            onClick={(e) => hasSubmenu && e.preventDefault()}
          >
            {item.name || (level === 1 ? 'Other Conditions' : '')} 
          </Link>
        ) : (
           <a 
            href={item.href || '#'} 
            className="text-base font-medium text-gray-700 hover:text-primary flex-1"
            onClick={(e) => hasSubmenu && e.preventDefault()}
          >
            {item.name || (level === 1 ? 'Other Conditions' : '')}
          </a>
        )}
       
        {hasSubmenu && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 text-gray-500"
          >
            {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
        )}
      </div>
      
      {hasSubmenu && isExpanded && (
        <div className="border-l-2 border-gray-100 ml-4">
          {item.submenu!.map((subItem, index) => (
            <MobileMenuItem key={subItem.name || index} item={subItem} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2">
               <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">M</div>
               <div>
                 <h1 className="text-xl font-bold text-secondary leading-none">DR. MOY</h1>
                 <p className="text-xs text-gray-500 uppercase tracking-wider">Painless Bunion Surgery</p>
               </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-6 items-center h-full">
            {navItems.map((item) => (
              <DesktopMenuItem key={item.name} item={item} />
            ))}
            <a href="tel:9498373338" className="bg-primary text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-bold hover:bg-sky-600 transition-colors">
              <Phone size={16} />
              (949) 837-FEET
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t max-h-[80vh] overflow-y-auto">
          <div className="py-2 space-y-1">
            {navItems.map((item) => (
              <MobileMenuItem key={item.name} item={item} />
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
