import React from 'react';
import { CAR_FLEET_PRICING, EXTRA_FEES } from '../constants';
import { CheckCircle, CreditCard } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Extra Fees & Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Extra Services */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <CheckCircle className="text-red-600" size={20} />
              Servicii Suplimentare
            </h3>
            <ul className="space-y-3">
              {EXTRA_FEES.map((fee, idx) => (
                <li key={idx} className="flex justify-between items-center text-sm border-b border-slate-50 last:border-0 pb-2 last:pb-0">
                  <span className="text-slate-600">{fee.service}</span>
                  <span className="font-bold text-slate-900">{fee.price}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Payment Options */}
          <div className="bg-slate-900 p-6 rounded-2xl shadow-sm text-white flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                <CreditCard size={20} />
              </div>
              <h3 className="text-xl font-bold">Modalități de Plată</h3>
            </div>
            <p className="text-slate-300 mb-6">
              Vio Auto Class înțelege nevoile cursanților. Acceptăm plata cash sau prin transfer bancar.
            </p>
            <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
              <p className="text-lg font-semibold text-center text-white">
                Plată flexibilă în <span className="text-red-400">2 sau 3 rate</span>
              </p>
              <p className="text-xs text-slate-400 text-center mt-2">
                Pentru tarifele standard.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Pricing;