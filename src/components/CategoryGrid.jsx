import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CATEGORIES } from '../data/furnitureData';

export default function CategoryGrid({ onSelectCategory }) {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
          <div>
            <div className="text-[11px] sm:text-xs uppercase tracking-widest text-[#1E3A2F]/70 font-semibold mb-1 sm:mb-2">
              FIND YOUR STARTING POINT
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-stone-900 font-display">
              Room for what matters.
            </h2>
          </div>
          
          <button
            type="button"
            onClick={() => {
              onSelectCategory('all');
              document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="self-start sm:self-auto inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-stone-300 hover:border-forest text-stone-800 hover:text-forest text-xs sm:text-sm font-medium transition-all group active:scale-95"
          >
            <span>Explore all furniture</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* 4 Staggered Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => {
                onSelectCategory(cat.id);
                document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group cursor-pointer relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-stone-200/70 p-3 sm:p-4 transition-all duration-500 hover:shadow-lifted hover:-translate-y-1 flex flex-col justify-between active:scale-98"
            >
              {/* Image Container with Zoom */}
              <div className="relative aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden bg-stone-100 mb-3 sm:mb-4">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Badge Tag */}
                <span className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/90 backdrop-blur-md text-stone-800 text-[10px] sm:text-[11px] font-semibold border border-white/40">
                  {cat.badge}
                </span>

                {/* Floating Circular Arrow */}
                <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/85 group-hover:bg-[#1E3A2F] text-stone-700 group-hover:text-white backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-sm">
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:rotate-45 transition-transform" />
                </div>
              </div>

              {/* Text Meta */}
              <div className="px-1.5 pb-1 sm:px-2 sm:pb-2">
                <p className="text-[11px] sm:text-xs text-stone-500 italic mb-1">
                  "{cat.subtitle}"
                </p>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg sm:text-xl font-medium text-stone-900 group-hover:text-forest transition-colors">
                    {cat.name}
                  </h3>
                  <span className="text-[11px] sm:text-xs text-stone-400 font-medium">
                    {cat.itemCount} pieces
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-stone-500 mt-1 line-clamp-1 sm:line-clamp-none">
                  {cat.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
