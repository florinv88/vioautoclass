import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          
          {/* Info Side */}
          <div className="lg:col-span-1 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Unde ne găsiți?</h2>
            <p className="text-slate-600 mb-10">
              Suntem aici pentru a te ajuta să devii șofer. Contactează-ne pentru orice întrebare.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider">Adresă Sediu</p>
                  <p className="text-lg font-bold text-slate-900 leading-tight mt-1">
                    {CONTACT_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div className="space-y-1">
                  <div>
                    <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider">Secretariat</p>
                    <p className="text-lg font-bold text-slate-900">{CONTACT_INFO.phone}</p>
                  </div>
                  {CONTACT_INFO.secondaryPhones && (
                    <div className="pt-2">
                      <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider">Alte Numere</p>
                      <p className="text-lg font-bold text-slate-900">
                        {CONTACT_INFO.secondaryPhones.join(' / ')}
                      </p>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider">Email</p>
                  <p className="text-lg font-bold text-slate-900">{CONTACT_INFO.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Side */}
          <div className="lg:col-span-2 h-[450px] rounded-3xl overflow-hidden shadow-lg border border-slate-200">
            <iframe 
              src={CONTACT_INFO.mapEmbedUrl} 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;