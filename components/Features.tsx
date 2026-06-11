import React from 'react';
import { ShieldCheck, Clock, Award, Users } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck size={40} className="text-red-600" />,
    title: "Siguranța pe Primul Loc",
    description: "Punem un accent major pe conducerea preventivă și siguranța rutieră."
  },
  {
    icon: <Clock size={40} className="text-red-600" />,
    title: "Program Flexibil",
    description: "Te poți programa la orele de conducere în funcție de timpul tău liber, inclusiv în weekend."
  },
  {
    icon: <Award size={40} className="text-red-600" />,
    title: "Rată Mare de Promovare",
    description: "Statisticile noastre arată că majoritatea cursanților iau permisul din prima încercare."
  },
  {
    icon: <Users size={40} className="text-red-600" />,
    title: "Instructori Profesioniști",
    description: "O echipă cu ani de experiență, răbdare și calmitate pedagogică."
  }
];

const Features: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-red-600 tracking-wide uppercase">De ce noi?</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Avantajele Vio Auto Class
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            Nu te învățăm doar să conduci, te învățăm să fii un șofer responsabil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300 border border-slate-100 group">
              <div className="mb-4 bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;