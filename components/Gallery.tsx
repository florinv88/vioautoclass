import React from 'react';
import { GALLERY_ITEMS } from '../constants';
import { Camera } from 'lucide-react';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Camera className="text-red-600" size={24} />
            <h2 className="text-base font-semibold text-red-600 tracking-wide uppercase">Flota Noastră</h2>
          </div>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Galerie Auto
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            Descoperă mașinile moderne pe care vei învăța să conduci. Siguranță, confort și performanță.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GALLERY_ITEMS.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer">
              <div className="aspect-w-4 aspect-h-3 h-64 overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Overlay with just the title on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-lg font-bold">{item.alt}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;