import React from 'react';
import { BookOpen, FileText, Check } from 'lucide-react';

const StudentInfo: React.FC = () => {
  return (
    <section id="info" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-red-600 tracking-wide uppercase">Informații Utile</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Tot ce trebuie să știi
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            Detalii despre pregătirea teoretică și actele necesare pentru înscriere.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Legislatie Rutiera */}
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-red-100 text-red-600 rounded-xl">
                <BookOpen size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Legislație Rutieră</h3>
            </div>
            
            <p className="text-slate-600 mb-6 font-medium">
              Totalul orelor de legislație este de <span className="text-slate-900 font-bold">24 ore</span> și sunt împărțite astfel:
            </p>
            
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start gap-3">
                <div className="bg-white p-1 rounded-full shadow-sm mt-0.5">
                  <Check size={16} className="text-green-500" />
                </div>
                <span className="text-slate-700">16 ore de legislație rutieră</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-white p-1 rounded-full shadow-sm mt-0.5">
                  <Check size={16} className="text-green-500" />
                </div>
                <span className="text-slate-700">4 ore de conducere preventivă</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-white p-1 rounded-full shadow-sm mt-0.5">
                  <Check size={16} className="text-green-500" />
                </div>
                <span className="text-slate-700">2 ore de mecanică</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-white p-1 rounded-full shadow-sm mt-0.5">
                  <Check size={16} className="text-green-500" />
                </div>
                <span className="text-slate-700">2 ore prim ajutor</span>
              </li>
            </ul>

            <div className="rounded-2xl overflow-hidden mb-4 shadow-md">
              <img src="/image_5_result.avif" alt="Sala de curs" className="w-full h-48 object-cover" />
            </div>

            <div className="bg-red-50 p-4 rounded-xl border border-red-100 text-red-800 text-sm font-semibold text-center">
              Sala de curs este primitoare și modernă!
            </div>
          </div>

          {/* Acte Necesare */}
          <div className="bg-slate-900 p-8 rounded-3xl shadow-lg text-white">
             <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-red-600 text-white rounded-xl">
                <FileText size={32} />
              </div>
              <h3 className="text-2xl font-bold">Acte Necesare</h3>
            </div>
            
            <p className="text-slate-300 mb-8">
              Pentru a începe cursurile și a te înscrie la examen, vei avea nevoie de următoarele documente:
            </p>

            <ul className="space-y-4">
               <li className="flex items-center gap-3 p-4 bg-slate-800 rounded-xl border border-slate-700">
                 <div className="w-2 h-2 rounded-full bg-red-500"></div>
                 <span className="font-semibold text-lg">Copie CI</span>
               </li>
               <li className="flex items-center gap-3 p-4 bg-slate-800 rounded-xl border border-slate-700">
                 <div className="w-2 h-2 rounded-full bg-red-500"></div>
                 <span className="font-semibold text-lg">Fișă Medicală</span>
               </li>
               <li className="flex items-center gap-3 p-4 bg-slate-800 rounded-xl border border-slate-700">
                 <div className="w-2 h-2 rounded-full bg-red-500"></div>
                 <span className="font-semibold text-lg">Test Psihologic</span>
               </li>
               <li className="flex items-center gap-3 p-4 bg-slate-800 rounded-xl border border-slate-700">
                 <div className="w-2 h-2 rounded-full bg-red-500"></div>
                 <span className="font-semibold text-lg">Cazier Judiciar</span>
                 <span className="text-xs text-slate-400 ml-auto">(pentru examen)</span>
               </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StudentInfo;