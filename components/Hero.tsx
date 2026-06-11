import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/masini_sediu_result.avif" 
          alt="Vio Auto Class Fleet" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left w-full">
        <div className="md:w-2/3 lg:w-1/2 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 border border-red-500/30 backdrop-blur-sm text-red-100 text-sm font-medium animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            Înscrierile sunt deschise
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
            Obține permisul <br />
            <span className="text-red-500">Rapid și Sigur</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-lg mx-auto md:mx-0">
            Cea mai modernă școală de șoferi din București. Instructori răbdători, mașini noi și o rată de promovabilitate excelentă.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <a 
              href="#courses"
              className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-red-600/30"
            >
              Vezi Cursurile
              <ArrowRight size={20} />
            </a>
            <a 
              href="#contact"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white rounded-lg font-bold text-lg transition-all flex items-center justify-center"
            >
              Contactează-ne
            </a>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row gap-4 sm:gap-8 text-slate-400 text-sm font-medium justify-center md:justify-start">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" />
              Program Flexibil
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" />
              Plată în Rate
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" />
              Mașini Noi
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;