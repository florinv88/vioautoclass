import React, { useState, useEffect } from 'react';
import { Menu, X, Car, Phone } from 'lucide-react';
import { NAV_ITEMS, COMPANY_NAME, CONTACT_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="bg-red-600 p-2 rounded-full text-white">
              <Car size={24} />
            </div>
            <span className={`font-bold text-xl tracking-tight ${scrolled ? 'text-slate-900' : 'text-slate-900 lg:text-white'}`}>
              {COMPANY_NAME}
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-semibold hover:text-red-500 transition-colors ${scrolled ? 'text-slate-700' : 'text-slate-200 hover:text-white'}`}
              >
                {item.label}
              </a>
            ))}
            <a 
              href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 transition-transform transform hover:scale-105"
            >
              <Phone size={16} />
              {CONTACT_INFO.phone}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-slate-900' : 'text-slate-900 lg:text-white'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-xl border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-red-600 hover:bg-red-50"
              >
                {item.label}
              </a>
            ))}
             <a 
              href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
              className="block w-full text-center mt-4 bg-red-600 text-white px-3 py-3 rounded-md font-bold"
            >
              Sună Acum
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;