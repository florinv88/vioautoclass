import React from 'react';
import { COMPANY_NAME, NAV_ITEMS } from '../constants';
import { Car, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 text-white mb-4">
               <div className="bg-red-600 p-2 rounded-full text-white">
                <Car size={20} />
              </div>
              <span className="font-bold text-xl">{COMPANY_NAME}</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-6">
              Investește în siguranța ta. Alege calitatea și profesionalismul pentru a deveni un șofer responsabil.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-red-500 transition-colors"><Facebook size={24} /></a>
              <a href="#" className="hover:text-red-500 transition-colors"><Instagram size={24} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Meniu Rapid</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-red-500 transition-colors text-sm">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-red-500">Termeni și Condiții</a></li>
              <li><a href="#" className="hover:text-red-500">Politica de Confidențialitate</a></li>
              <li><a href="#" className="hover:text-red-500">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-red-500">ANPC</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;