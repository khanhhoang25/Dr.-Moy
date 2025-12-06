
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const conditions = [
  { name: 'Bunion', path: '/conditions/bunion' },
  { name: 'Tailor’s Bunion', path: 'https://drmoy.com/conditions/tailors-bunion/' },
  { name: 'Morton’s Neuroma', path: 'https://drmoy.com/conditions/mortons-neuroma/' },
  { name: 'Hammertoe', path: 'https://drmoy.com/conditions/hammertoe-surgery-correction/' },
  { name: 'Haglund’s Deformities', path: 'https://drmoy.com/conditions/haglunds-deformities/' },
  { name: 'Metallic Implant Removal', path: 'https://drmoy.com/conditions/metallic-implant-removal/' },
  { name: 'Flat Feet', path: 'https://drmoy.com/conditions/flat-feet/' },
  { name: 'Toenail Problems', path: 'https://drmoy.com/conditions/toenail-problems/' },
  { name: 'Heel Pain', path: 'https://drmoy.com/conditions/heel-pain/' },
  { name: 'Bone Spurs', path: 'https://drmoy.com/conditions/bone-spurs/' },
  { name: 'Ankle Disorders', path: 'https://drmoy.com/conditions/ankle-disorders/' },
  { name: 'Reconstruction', path: 'https://drmoy.com/conditions/reconstruction/' },
  { name: 'Warts and Verrucaes', path: 'https://drmoy.com/conditions/warts-and-verrucaes/' },
  { name: 'Bone Tumors and Cysts', path: 'https://drmoy.com/conditions/bone-tumors-and-cysts/' },
  { name: 'Foreign Bodies', path: 'https://drmoy.com/conditions/foreign-bodies/' },
  { name: 'Skin Lesions', path: 'https://drmoy.com/conditions/skin-lesions/' },
  { name: 'Soft Tissue Issues', path: 'https://drmoy.com/conditions/soft-tissue-issues/' },
];

const ConditionsMenu: React.FC = () => {
  const location = useLocation();

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
        <h3 className="text-xl font-bold text-secondary">Conditions</h3>
      </div>
      <ul className="divide-y divide-gray-100">
        {conditions.map((condition) => {
          const isActive = location.pathname === condition.path;
          const isInternal = condition.path.startsWith('/');

          return (
            <li key={condition.name}>
              {isInternal ? (
                <Link
                  to={condition.path}
                  className={`flex items-center justify-between px-6 py-3 text-sm transition-colors hover:bg-sky-50 hover:text-primary ${
                    isActive ? 'bg-sky-50 text-primary font-semibold border-l-4 border-primary pl-5' : 'text-gray-600'
                  }`}
                >
                  {condition.name}
                  {isActive && <ChevronRight size={16} />}
                </Link>
              ) : (
                <a
                  href={condition.path}
                  className="flex items-center justify-between px-6 py-3 text-sm text-gray-600 transition-colors hover:bg-sky-50 hover:text-primary"
                >
                  {condition.name}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ConditionsMenu;
