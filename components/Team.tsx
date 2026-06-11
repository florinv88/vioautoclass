import React from 'react';
import { INSTRUCTORS } from '../constants';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Echipa Noastră</h2>
          <p className="mt-4 text-lg text-slate-600">
            Cunoaște instructorii care te vor ghida spre succes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {INSTRUCTORS.map((instructor) => (
            <div key={instructor.id} className="group relative">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-2xl bg-slate-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity duration-300"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{instructor.name}</h3>
                  <p className="mt-1 text-sm text-slate-500">{instructor.role}</p>
                </div>
                <p className="text-sm font-medium text-red-600">{instructor.experience}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;