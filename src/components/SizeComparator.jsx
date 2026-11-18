import React, { useState } from 'react';
import { Ruler, Sparkles, ArrowRightLeft, Check, Layers } from 'lucide-react';

export default function SizeComparator({ products }) {
  const [productAId, setProductAId] = useState('ledge-sofa');
  const [productBId, setProductBId] = useState('fold-daybed');
  const [unit, setUnit] = useState('cm'); // 'cm' | 'in'
  const [viewMode, setViewMode] = useState('sideBySide'); // 'sideBySide' | 'overlay'

  const productA = products.find(p => p.id === productAId) || products[1];
  const productB = products.find(p => p.id === productBId) || products[3];

  const dimA = productA.dimensions;
  const dimB = productB.dimensions;

  const widthA = unit === 'cm' ? dimA.widthCm : dimA.widthIn;
  const depthA = unit === 'cm' ? dimA.depthCm : dimA.depthIn;
  const heightA = unit === 'cm' ? dimA.heightCm : dimA.heightIn;

  const widthB = unit === 'cm' ? dimB.widthCm : dimB.widthIn;
  const depthB = unit === 'cm' ? dimB.depthCm : dimB.depthIn;
  const heightB = unit === 'cm' ? dimB.heightCm : dimB.heightIn;

  const widthDiff = Math.abs(widthA - widthB);
  const depthDiff = Math.abs(depthA - depthB);
  const widerProduct = widthA >= widthB ? productA.title : productB.title;

  // Normalized scale for SVG visualization
  const maxRef = unit === 'cm' ? 240 : 95;
  const scale = 220 / maxRef;

  const rectAWidth = widthA * scale;
  const rectADepth = depthA * scale;

  const rectBWidth = widthB * scale;
  const rectBDepth = depthB * scale;

  return (
    <section id="size-comparator" className="py-12 sm:py-16 md:py-24 bg-[#EBF0E9]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Pale-Sage Container */}
        <div className="bg-[#EBF0E9] rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] p-5 sm:p-10 md:p-16 border border-[#D5DFD3] shadow-soft">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4 sm:gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 text-[#1E3A2F] text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-2 sm:mb-3 border border-white/50">
                <Ruler className="w-3.5 h-3.5" />
                <span>SIZE & SPACE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-stone-900 font-display">
                A clearer view. A better fit.
              </h2>
              <p className="text-stone-600 text-xs sm:text-sm md:text-base mt-1 max-w-xl">
                Compare two pieces at exact 2D architectural scale, or check their footprint against your measured floor plan.
              </p>
            </div>

            {/* Controls: Unit & View Switcher */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {/* Unit Toggle */}
              <div className="inline-flex p-1 rounded-full bg-white/80 border border-black/5 shadow-sm">
                <button
                  type="button"
                  onClick={() => setUnit('cm')}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition active:scale-95 ${
                    unit === 'cm' ? 'bg-[#1E3A2F] text-white' : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  Metric (cm)
                </button>
                <button
                  type="button"
                  onClick={() => setUnit('in')}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition active:scale-95 ${
                    unit === 'in' ? 'bg-[#1E3A2F] text-white' : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  Imperial (in)
                </button>
              </div>

              {/* Overlay / Side-by-side Toggle */}
              <div className="inline-flex p-1 rounded-full bg-white/80 border border-black/5 shadow-sm">
                <button
                  type="button"
                  onClick={() => setViewMode('sideBySide')}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition active:scale-95 ${
                    viewMode === 'sideBySide' ? 'bg-[#1E3A2F] text-white' : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  Side by Side
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('overlay')}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition active:scale-95 ${
                    viewMode === 'overlay' ? 'bg-[#1E3A2F] text-white' : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  Overlay
                </button>
              </div>
            </div>
          </div>

          {/* Product Selectors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
            
            {/* Product A Picker */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-3.5 sm:p-4 border border-stone-200/80 shadow-sm flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="w-6 h-6 rounded-full bg-[#1E3A2F] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  A
                </span>
                <select
                  value={productAId}
                  onChange={(e) => setProductAId(e.target.value)}
                  className="bg-transparent text-xs sm:text-sm font-semibold text-stone-900 focus:outline-none cursor-pointer truncate"
                >
                  {products.map(p => (
                    <option key={p.id} value={p.id}>
                      {p.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="text-right text-[11px] sm:text-xs text-stone-500 whitespace-nowrap font-mono shrink-0">
                {widthA}×{depthA} {unit}
              </div>
            </div>

            {/* Product B Picker */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-3.5 sm:p-4 border border-stone-200/80 shadow-sm flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="w-6 h-6 rounded-full bg-[#B85D3B] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  B
                </span>
                <select
                  value={productBId}
                  onChange={(e) => setProductBId(e.target.value)}
                  className="bg-transparent text-xs sm:text-sm font-semibold text-stone-900 focus:outline-none cursor-pointer truncate"
                >
                  {products.map(p => (
                    <option key={p.id} value={p.id}>
                      {p.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="text-right text-[11px] sm:text-xs text-stone-500 whitespace-nowrap font-mono shrink-0">
                {widthB}×{depthB} {unit}
              </div>
            </div>

          </div>

          {/* Interactive 2D Blueprint Canvas */}
          <div className="relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 border border-stone-200 shadow-lifted overflow-hidden min-h-[340px] sm:min-h-[380px] flex flex-col justify-between">
            
            {/* Architectural Grid Background */}
            <div 
              className="absolute inset-0 opacity-[0.07] pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(#1E3A2F 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}
            />

            {/* Dynamic Footprint Diagram */}
            <div className="relative z-10 flex-1 flex items-center justify-center min-h-[220px] py-4 sm:py-6 overflow-x-auto hide-scrollbar">
              
              {viewMode === 'sideBySide' ? (
                <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-16 w-full py-4">
                  
                  {/* Footprint A */}
                  <div className="flex flex-col items-center">
                    <div className="text-xs font-semibold text-[#1E3A2F] mb-3 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#1E3A2F]" />
                      <span>{productA.title}</span>
                    </div>

                    <div 
                      className="relative rounded-xl border-2 border-[#1E3A2F] bg-[#1E3A2F]/10 flex items-center justify-center transition-all duration-500 shadow-sm"
                      style={{
                        width: `${Math.max(rectAWidth * 0.9, 65)}px`,
                        height: `${Math.max(rectADepth * 0.9, 55)}px`
                      }}
                    >
                      {/* Top dimension line */}
                      <span className="absolute -top-5 text-[10px] font-mono font-medium text-stone-600 whitespace-nowrap">
                        {widthA} {unit}
                      </span>
                      {/* Side dimension line */}
                      <span className="absolute -right-12 text-[10px] font-mono font-medium text-stone-600 whitespace-nowrap">
                        {depthA} {unit}
                      </span>
                      <span className="text-[9px] uppercase font-mono font-bold text-[#1E3A2F]/70">
                        Top View
                      </span>
                    </div>

                    <div className="text-[10px] text-stone-400 mt-3 font-mono">
                      Height: {heightA} {unit}
                    </div>
                  </div>

                  {/* Footprint B */}
                  <div className="flex flex-col items-center">
                    <div className="text-xs font-semibold text-[#B85D3B] mb-3 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#B85D3B]" />
                      <span>{productB.title}</span>
                    </div>

                    <div 
                      className="relative rounded-xl border-2 border-[#B85D3B] bg-[#B85D3B]/10 flex items-center justify-center transition-all duration-500 shadow-sm"
                      style={{
                        width: `${Math.max(rectBWidth * 0.9, 65)}px`,
                        height: `${Math.max(rectBDepth * 0.9, 55)}px`
                      }}
                    >
                      {/* Top dimension line */}
                      <span className="absolute -top-5 text-[10px] font-mono font-medium text-stone-600 whitespace-nowrap">
                        {widthB} {unit}
                      </span>
                      {/* Side dimension line */}
                      <span className="absolute -right-12 text-[10px] font-mono font-medium text-stone-600 whitespace-nowrap">
                        {depthB} {unit}
                      </span>
                      <span className="text-[9px] uppercase font-mono font-bold text-[#B85D3B]/70">
                        Top View
                      </span>
                    </div>

                    <div className="text-[10px] text-stone-400 mt-3 font-mono">
                      Height: {heightB} {unit}
                    </div>
                  </div>

                </div>
              ) : (
                /* Overlay Mode */
                <div className="relative flex items-center justify-center p-6">
                  {/* Footprint A */}
                  <div 
                    className="absolute rounded-xl border-2 border-[#1E3A2F] bg-[#1E3A2F]/15 transition-all duration-500 flex items-start justify-start p-2"
                    style={{
                      width: `${Math.max(rectAWidth * 0.9, 70)}px`,
                      height: `${Math.max(rectADepth * 0.9, 60)}px`
                    }}
                  >
                    <span className="text-[9px] font-mono font-bold text-[#1E3A2F]">A</span>
                  </div>

                  {/* Footprint B */}
                  <div 
                    className="relative rounded-xl border-2 border-dashed border-[#B85D3B] bg-[#B85D3B]/20 transition-all duration-500 flex items-end justify-end p-2"
                    style={{
                      width: `${Math.max(rectBWidth * 0.9, 70)}px`,
                      height: `${Math.max(rectBDepth * 0.9, 60)}px`
                    }}
                  >
                    <span className="text-[9px] font-mono font-bold text-[#B85D3B]">B</span>
                  </div>
                </div>
              )}

            </div>

            {/* Calculated Insight Banner */}
            <div className="relative z-10 pt-3 sm:pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] sm:text-xs text-stone-600">
              <div className="flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-forest shrink-0" />
                <span>
                  <strong className="text-stone-900">{widerProduct}</strong> is wider by <strong className="text-forest font-mono">{widthDiff} {unit}</strong>.
                  Depth diff: <strong className="text-forest font-mono">{depthDiff} {unit}</strong>.
                </span>
              </div>
              <div className="text-stone-400 text-[10px] sm:text-[11px]">
                Architectural 2D scale normalized to room clearance.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
