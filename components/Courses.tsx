import React from 'react';
import { COURSES } from '../constants';
import { Check, Clock } from 'lucide-react';

const Courses: React.FC = () => {
  return (
    <section id="courses" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Cursurile Noastre
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Pregătire completă pentru categoriile B
          </p>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
  {COURSES.map((course) => (
    <div key={course.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col">
      
      {/* Image — înălțime fixă, nu crește cu textul */}
      <div className="w-full h-48 sm:h-56 relative overflow-hidden flex-shrink-0">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-red-600 text-white font-bold py-1 px-3 rounded shadow-md text-xs md:text-sm">
          {course.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">{course.title}</h3>
          <p className="text-slate-600 mb-4 text-sm line-clamp-3">{course.description}</p>
          
          <div className="flex items-center gap-2 text-slate-500 mb-4 text-sm">
            <Clock size={16} />
            <span>{course.duration}</span>
          </div>

          <ul className="space-y-2 mb-6">
            {course.features.map((feat, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                <Check size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between gap-4 pt-4 border-t border-slate-100">
          <span className="text-xl md:text-2xl font-bold text-red-600">{course.price}</span>
          <a href="#contact" className="px-5 py-2 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors text-sm">
            Înscrie-te
          </a>
        </div>
      </div>

    </div>
  ))}
</div>
      </div>
    </section>
  );
};

export default Courses;