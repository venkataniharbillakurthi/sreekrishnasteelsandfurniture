import React, { useState } from 'react';
import { ArrowUpRight, Palette, Sparkles } from 'lucide-react';
import { MOOD_PALETTES } from '../data/furnitureData';

export default function MoodPaletteSwitcher({ onExploreMood }) {
  const [selectedMoodId, setSelectedMoodId] = useState(MOOD_PALETTES[0].id);

  const currentMood = MOOD_PALETTES.find(m => m.id === selectedMoodId) || MOOD_PALETTES[0];

  return (
    <section id="palette-finder" className="py-12 sm:py-16 md:py-24 bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-10 text-center max-w-xl mx-auto">
          <div className="text-[11px] sm:text-xs uppercase tracking-widest text-[#1E3A2F]/70 font-semibold mb-1 sm:mb-2 flex items-center justify-center gap-1.5">
            <Palette className="w-3.5 h-3.5 text-[#C88A42]" />
            <span>A FEELING TO COME HOME TO</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-stone-900 font-display">
            Find your palette.
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm md:text-base mt-1 sm:mt-2">
            Start with a colour. Build a feeling. Three ways to make a room quietly your own.
          </p>
        </div>

        {/* Dynamic Visual Stage */}
        <div className="relative rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] overflow-hidden min-h-[500px] sm:min-h-[560px] md:min-h-[600px] shadow-lifted border border-stone-200/80 flex items-end p-4 sm:p-8 md:p-10">
          
          {/* Background Room Photo with Crossfade */}
          {MOOD_PALETTES.map((mood) => (
            <div
              key={mood.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                mood.id === selectedMoodId ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
              } transform transition-transform duration-1000`}
            >
              <img
                src={mood.bgImage}
                alt={mood.name}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>
          ))}

          {/* Floating Mood Selector Card */}
          <div className="relative z-10 w-full max-w-md bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-2xl border border-white/60">
            
            {/* Mood Segmented Tabs */}
            <div className="flex items-center gap-1 p-1 rounded-full bg-stone-100 mb-4 sm:mb-6">
              {MOOD_PALETTES.map(mood => (
                <button
                  key={mood.id}
                  onClick={() => setSelectedMoodId(mood.id)}
                  className={`flex-1 py-1.5 sm:py-2 px-2 sm:px-3 rounded-full text-[11px] sm:text-xs font-semibold transition-all active:scale-95 ${
                    mood.id === selectedMoodId
                      ? 'bg-[#1E3A2F] text-white shadow-sm'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {mood.name}
                </button>
              ))}
            </div>

            {/* Mood Info */}
            <div className="animate-fade-in">
              <div className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest text-[#B85D3B] mb-1">
                {currentMood.pillLabel}
              </div>
              <h3 className="text-xl sm:text-2xl font-medium text-stone-900 mb-2 font-display">
                {currentMood.headline}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4 sm:mb-6 line-clamp-2 sm:line-clamp-none">
                {currentMood.description}
              </p>

              {/* Swatch Chips */}
              <div className="space-y-1.5 sm:space-y-2 mb-5 sm:mb-6">
                <div className="text-[11px] uppercase font-medium text-stone-400">
                  Tonal Harmony
                </div>
                <div className="flex items-center gap-2.5 sm:gap-3">
                  {currentMood.chips.map(chip => (
                    <div key={chip.name} className="flex items-center gap-1.5 sm:gap-2">
                      <div
                        className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-black/10 shadow-sm"
                        style={{ backgroundColor: chip.hex }}
                        title={chip.name}
                      />
                      <span className="text-[11px] sm:text-xs text-stone-700 font-medium">
                        {chip.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={onExploreMood}
                className="w-full py-2.5 sm:py-3 px-4 sm:px-5 rounded-full bg-[#1E3A2F] hover:bg-[#162A22] text-white text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm active:scale-98"
              >
                <span>Explore {currentMood.name}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
