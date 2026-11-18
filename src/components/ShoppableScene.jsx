import React, { useState } from 'react';
import { ShoppingBag, ArrowUpRight, Sparkles } from 'lucide-react';
import { SHOPPABLE_ROOM } from '../data/furnitureData';

export default function ShoppableScene({ products, onQuickView, onAddToCart }) {
  const [activeHotspotId, setActiveHotspotId] = useState(SHOPPABLE_ROOM.hotspots[0].id);

  const activeHotspot = SHOPPABLE_ROOM.hotspots.find(h => h.id === activeHotspotId) || SHOPPABLE_ROOM.hotspots[0];
  const targetProduct = products.find(p => p.id === activeHotspot.productId);

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-[#FAF8F5] border-t border-b border-stone-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
          <div>
            <div className="text-[11px] sm:text-xs uppercase tracking-widest text-[#1E3A2F]/70 font-semibold mb-1 sm:mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#B85D3B]" />
              <span>{SHOPPABLE_ROOM.subtitle}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-stone-900 font-display">
              {SHOPPABLE_ROOM.title}
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm md:text-base mt-1">
              Curated living spaces where every piece complements the next.
            </p>
          </div>

          <div className="text-xs text-stone-500 font-medium">
            Room: <span className="font-semibold text-stone-800">{SHOPPABLE_ROOM.roomName}</span>
          </div>
        </div>

        {/* Interactive Living Scene Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          
          {/* Main Hotspot Lifestyle Canvas */}
          <div className="lg:col-span-8 relative aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lifted border border-stone-200/80">
            <img
              src={SHOPPABLE_ROOM.sceneImage}
              alt={SHOPPABLE_ROOM.roomName}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/10" />

            {/* Pulsing Hotspot Pins with Touch Support */}
            {SHOPPABLE_ROOM.hotspots.map(hotspot => {
              const isSelected = hotspot.id === activeHotspotId;

              return (
                <div
                  key={hotspot.id}
                  style={{ top: hotspot.top, left: hotspot.left }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group"
                >
                  <button
                    type="button"
                    onClick={() => setActiveHotspotId(hotspot.id)}
                    className={`relative w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 shadow-lg active:scale-90 ${
                      isSelected
                        ? 'bg-[#1E3A2F] text-white scale-110 ring-4 ring-white/80'
                        : 'bg-white/95 text-stone-900 hover:bg-[#1E3A2F] hover:text-white'
                    }`}
                    aria-label={`Inspect ${hotspot.title}`}
                  >
                    {hotspot.number}
                    {/* Pulsing Radar Ring */}
                    <span className="absolute -inset-1.5 rounded-full border border-white/60 animate-ping pointer-events-none" />
                  </button>

                  {/* Tooltip on hover / active */}
                  <div className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-2 whitespace-nowrap px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-stone-900/90 text-white text-[11px] sm:text-xs font-medium backdrop-blur-md shadow-md transition-all pointer-events-none ${
                    isSelected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0'
                  }`}>
                    {hotspot.title} — {hotspot.price}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Companion Products Cards List */}
          <div className="lg:col-span-4 space-y-3 sm:space-y-4">
            <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-stone-400 mb-1">
              Featured In This Space
            </div>

            {SHOPPABLE_ROOM.hotspots.map(hotspot => {
              const isSelected = hotspot.id === activeHotspotId;
              const prod = products.find(p => p.id === hotspot.productId);

              return (
                <div
                  key={hotspot.id}
                  onClick={() => setActiveHotspotId(hotspot.id)}
                  className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border transition-all duration-300 cursor-pointer flex items-center gap-3 sm:gap-4 active:scale-98 ${
                    isSelected
                      ? 'bg-white border-[#1E3A2F] shadow-lifted scale-101 ring-1 ring-[#1E3A2F]'
                      : 'bg-white/70 border-stone-200/80 hover:bg-white hover:border-stone-300'
                  }`}
                >
                  <div className="font-mono text-xs font-bold px-2 py-1 rounded bg-[#EBF0E9] text-forest">
                    {hotspot.number}
                  </div>

                  {prod && (
                    <img
                      src={prod.finishes[0].image}
                      alt={prod.title}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-cover border border-stone-200 shrink-0"
                    />
                  )}

                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs sm:text-sm font-semibold text-stone-900 truncate">
                      {hotspot.title}
                    </h4>
                    <div className="text-[11px] sm:text-xs text-stone-500 truncate">
                      {hotspot.finish}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-stone-900 mt-0.5 font-mono">
                      {hotspot.price}
                    </div>
                  </div>

                  {prod && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onQuickView(prod);
                      }}
                      className="p-2 rounded-full bg-stone-100 hover:bg-[#1E3A2F] hover:text-white transition active:scale-90 shrink-0"
                      title="Inspect piece"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              );
            })}

            {/* Quick Add Active Room Piece */}
            {targetProduct && (
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    onAddToCart({
                      ...targetProduct,
                      selectedFinish: targetProduct.finishes[0].name,
                      selectedImage: targetProduct.finishes[0].image,
                      selectedPrice: targetProduct.price
                    });
                  }}
                  className="w-full py-3 sm:py-3.5 px-4 rounded-full bg-[#1E3A2F] hover:bg-[#162A22] text-white text-xs font-semibold uppercase tracking-wider transition shadow-sm flex items-center justify-center gap-2 active:scale-98"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add {activeHotspot.title} to Bag</span>
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
