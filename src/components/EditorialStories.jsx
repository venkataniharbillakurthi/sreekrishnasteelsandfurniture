import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { EDITORIAL_STORIES } from '../data/furnitureData';

export default function EditorialStories({ onSelectCategory }) {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#FAF8F5] border-t border-b border-stone-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#1E3A2F]/70 font-semibold mb-2">
              AT HOME
            </div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900 font-display">
              Ideas for living.
            </h2>
            <p className="text-stone-600 text-sm md:text-base mt-1">
              Thoughtful vignettes and atmospheres for the spaces you return to each evening.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={scrollLeft}
              className="p-2.5 rounded-full border border-stone-300 hover:border-forest text-stone-700 hover:text-forest hover:bg-white transition shadow-sm"
              aria-label="Previous story"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={scrollRight}
              className="p-2.5 rounded-full border border-stone-300 hover:border-forest text-stone-700 hover:text-forest hover:bg-white transition shadow-sm"
              aria-label="Next story"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Track */}
        <div 
          ref={containerRef}
          className="grid grid-flow-col auto-cols-[80%] sm:auto-cols-[45%] lg:auto-cols-[30%] gap-6 overflow-x-auto pb-4 hide-scrollbar snap-x snap-mandatory"
        >
          {EDITORIAL_STORIES.map((story) => (
            <div
              key={story.id}
              className="snap-start group cursor-pointer bg-white rounded-3xl overflow-hidden border border-stone-200/70 p-4 transition-all duration-300 hover:shadow-lifted hover:-translate-y-1 flex flex-col justify-between"
              onClick={() => {
                document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100 mb-4">
                <img
                  src={story.image}
                  alt={story.room}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/85 backdrop-blur-md text-[11px] font-semibold text-stone-800">
                  {story.room}
                </span>
              </div>

              <div className="px-2 pb-2">
                <h3 className="text-xl font-medium text-stone-900 group-hover:text-forest transition-colors mb-2 font-display">
                  {story.tagline}
                </h3>
                <p className="text-xs text-stone-500 leading-relaxed mb-4">
                  {story.description}
                </p>
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-forest group-hover:text-forest-dark">
                  <span>Explore room</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
