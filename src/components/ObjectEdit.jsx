import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Check, Info } from 'lucide-react';
import { OBJECT_EDIT_FEATURE } from '../data/furnitureData';

export default function ObjectEdit({ onAddToCart, onQuickView, fullProduct }) {
  const [activeView, setActiveView] = useState('silhouette'); // 'silhouette' | 'inRoom'
  const [isAdded, setIsAdded] = useState(false);

  const viewData = OBJECT_EDIT_FEATURE.views[activeView];

  const handleAddDirect = () => {
    if (!fullProduct) return;
    setIsAdded(true);
    onAddToCart({
      ...fullProduct,
      selectedFinish: fullProduct.finishes[0].name,
      selectedImage: fullProduct.finishes[0].image,
      selectedPrice: fullProduct.price
    });
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Full-width Forest Green Feature Card */}
        <div className="relative bg-[#1E3A2F] text-white rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] overflow-hidden p-6 sm:p-10 md:p-16 shadow-lifted">
          
          {/* Subtle Ambient Pattern / Glow */}
          <div className="absolute top-0 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Left Column: Information & Controls */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              
              <div>
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-white/10 text-stone-200 text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-3 sm:mb-4 border border-white/15">
                  <Sparkles className="w-3.5 h-3.5 text-[#C88A42]" />
                  <span>{OBJECT_EDIT_FEATURE.tag}</span>
                </div>

                {/* Title & Price */}
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-2 sm:mb-3 font-display">
                  {OBJECT_EDIT_FEATURE.title}
                </h2>
                <div className="text-xl sm:text-2xl font-light text-stone-200 mb-4 sm:mb-6 font-mono">
                  {OBJECT_EDIT_FEATURE.price}
                </div>

                <p className="text-stone-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8">
                  {OBJECT_EDIT_FEATURE.description}
                </p>

                {/* Segmented Interactive View Switcher */}
                <div className="mb-6 sm:mb-8">
                  <div className="text-[11px] sm:text-xs font-medium uppercase tracking-wider text-stone-400 mb-2">
                    Perspective View
                  </div>
                  <div className="inline-flex w-full sm:w-auto p-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
                    <button
                      type="button"
                      onClick={() => setActiveView('silhouette')}
                      className={`flex-1 sm:flex-initial px-4 sm:px-5 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                        activeView === 'silhouette'
                          ? 'bg-white text-[#1E3A2F] shadow-sm font-semibold'
                          : 'text-stone-300 hover:text-white'
                      }`}
                    >
                      Silhouette
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveView('inRoom')}
                      className={`flex-1 sm:flex-initial px-4 sm:px-5 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                        activeView === 'inRoom'
                          ? 'bg-white text-[#1E3A2F] shadow-sm font-semibold'
                          : 'text-stone-300 hover:text-white'
                      }`}
                    >
                      In A Room
                    </button>
                  </div>
                </div>

                {/* Specs List */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 py-4 sm:py-6 border-t border-b border-white/15 text-xs text-stone-300 mb-6 sm:mb-8">
                  {OBJECT_EDIT_FEATURE.specs.map(spec => (
                    <div key={spec.label}>
                      <div className="text-stone-400 font-medium text-[11px]">{spec.label}</div>
                      <div className="text-white font-medium mt-0.5 text-xs sm:text-sm">{spec.value}</div>
                    </div>
                  ))}
                </div>

              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  onClick={handleAddDirect}
                  className={`w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs font-semibold tracking-wide uppercase transition-all shadow-md flex items-center justify-center gap-2 active:scale-98 ${
                    isAdded
                      ? 'bg-emerald-500 text-white'
                      : 'bg-white text-[#1E3A2F] hover:bg-stone-100'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Bag</span>
                    </>
                  ) : (
                    <>
                      <span>Acquire the Lamp — $280</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                {fullProduct && (
                  <button
                    type="button"
                    onClick={() => onQuickView(fullProduct)}
                    className="w-full sm:w-auto px-5 py-3 sm:py-3.5 rounded-full text-xs font-medium text-stone-300 hover:text-white border border-white/20 hover:border-white/40 transition text-center active:scale-98"
                  >
                    View Dimensions
                  </button>
                )}
              </div>

            </div>

            {/* Right Column: Visual Stage with Smooth Switch */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden aspect-[4/3] bg-black/20 border border-white/10 shadow-2xl">
                <img
                  src={viewData.image}
                  alt={viewData.title}
                  className="w-full h-full object-cover object-center transition-all duration-700 ease-out"
                />

                {/* View Caption Overlay */}
                <div className="absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 text-xs text-stone-200 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-[11px] sm:text-xs">
                    <Info className="w-4 h-4 text-stone-300 shrink-0" />
                    <span className="line-clamp-1 sm:line-clamp-none">{viewData.caption}</span>
                  </div>
                  <span className="font-semibold text-white uppercase text-[10px] tracking-widest hidden md:inline shrink-0">
                    {viewData.title}
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
