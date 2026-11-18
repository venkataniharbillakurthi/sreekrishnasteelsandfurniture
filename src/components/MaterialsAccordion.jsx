import React, { useState } from 'react';
import { ChevronDown, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { MATERIALS_DATA } from '../data/furnitureData';

export default function MaterialsAccordion({ onExploreCatalog }) {
  const [activeItem, setActiveItem] = useState(MATERIALS_DATA[0].id);

  const selectedData = MATERIALS_DATA.find(m => m.id === activeItem) || MATERIALS_DATA[0];

  return (
    <section id="materials" className="py-16 md:py-24 bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs uppercase tracking-widest text-[#1E3A2F]/70 font-semibold mb-2">
            MATERIALS & DETAILS
          </div>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900 font-display">
            A closer look.
          </h2>
          <p className="text-stone-600 text-sm md:text-base mt-2 max-w-xl">
            Every fiber, joint, and surface is considered for quiet longevity and tactile warmth.
          </p>
        </div>

        {/* 2-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Dynamic High-Res Macro Image */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-stone-100 shadow-lifted border border-stone-200/80">
              <img
                src={selectedData.macroImage}
                alt={selectedData.title}
                className="w-full h-full object-cover object-center transition-all duration-700 ease-out"
              />
              {/* Macro Tag Badge */}
              <div className="absolute bottom-4 left-4 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-xs font-semibold text-stone-800 shadow-sm border border-white/60">
                {selectedData.tag}
              </div>
            </div>
          </div>

          {/* Right Column: Numbered Interactive Accordion */}
          <div className="lg:col-span-6 space-y-4">
            {MATERIALS_DATA.map(item => {
              const isOpen = item.id === activeItem;

              return (
                <div
                  key={item.id}
                  className={`rounded-2xl md:rounded-3xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'bg-white border-[#1E3A2F]/20 shadow-soft' 
                      : 'bg-stone-50/60 border-stone-200/60 hover:bg-white'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setActiveItem(item.id)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-sm font-semibold text-[#1E3A2F]/60">
                        {item.number}
                      </span>
                      <h3 className="text-lg md:text-xl font-medium text-stone-900">
                        {item.title}
                      </h3>
                    </div>
                    <div className={`p-1.5 rounded-full transition-transform duration-300 ${isOpen ? 'rotate-180 bg-stone-100 text-forest' : 'text-stone-400'}`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-stone-600 border-t border-stone-100 animate-fade-in">
                      <p className="font-medium text-stone-800 mb-2">
                        {item.summary}
                      </p>
                      <p className="leading-relaxed mb-4 text-stone-600">
                        {item.description}
                      </p>

                      <div className="space-y-2 mb-6">
                        {item.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-stone-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-forest shrink-0" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={onExploreCatalog}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1E3A2F] text-white hover:bg-[#162A22] text-xs font-semibold tracking-wide transition shadow-sm"
                      >
                        <span>Explore the collection</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
