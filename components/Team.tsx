import React, { useState } from 'react';
import { INSTRUCTORS } from '../constants';

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((star) => (
      <span key={star} className={star <= rating ? 'text-amber-400' : 'text-slate-200'}>
        ★
      </span>
    ))}
  </div>
);

const Team: React.FC = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Echipa Noastră</h2>
          <p className="mt-4 text-lg text-slate-600">
            Cunoaște instructorii care te vor ghida spre succes.
          </p>
        </div>

        {/* grid: 1 col pe mobil, 2 pe sm, 3 pe lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {INSTRUCTORS.map((instructor) => (
            <div key={instructor.id} className="group flex flex-col">

              {/* Poza — înălțime fixă, uniform pe toate cardurile */}
              <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-slate-200 flex-shrink-0">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="absolute inset-0 h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity duration-300"
                />
              </div>

              {/* Info instructor */}
              <div className="mt-4 flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{instructor.name}</h3>
                  <p className="mt-1 text-sm text-slate-500">{instructor.role}</p>
                </div>
                <p className="text-sm font-medium text-red-600 ml-2 shrink-0">Experienta {instructor.experience}</p>
              </div>

              {/* Reviews */}
              {instructor.reviews && instructor.reviews.length > 0 && (
                <div className="mt-3">
                  <button
                    onClick={() =>
                      setExpanded(expanded === instructor.id ? null : instructor.id)
                    }
                    className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-700 transition-colors"
                  >
                    <StarRating
                      rating={Math.round(
                        instructor.reviews.reduce((sum, r) => sum + r.rating, 0) /
                          instructor.reviews.length
                      )}
                    />
                    <span className="text-xs text-slate-400">
                      ({instructor.reviews.length}{' '}
                      {instructor.reviews.length === 1 ? 'recenzie' : 'recenzii'})
                    </span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        expanded === instructor.id ? 'rotate-180' : ''
                      }`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {expanded === instructor.id && (
                    <div className="mt-3 space-y-3 border-t border-slate-100 pt-3">
                      {instructor.reviews.map((review) => (
                        <div key={review.id} className="text-sm">
                          <div className="flex justify-between items-center mb-0.5">
                            <span className="font-medium text-slate-700">{review.username}</span>
                            <StarRating rating={review.rating} />
                          </div>
                          <p className="text-slate-500 leading-relaxed">{review.text}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;