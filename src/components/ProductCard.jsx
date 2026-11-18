import React, { useState } from 'react';
import { Eye, Plus, Check } from 'lucide-react';

export default function ProductCard({ product, onQuickView, onAddToCart }) {
  const [selectedFinishIndex, setSelectedFinishIndex] = useState(0);
  const [isAdded, setIsAdded] = useState(false);

  const activeFinish = product.finishes[selectedFinishIndex] || product.finishes[0];
  const displayImage = activeFinish?.image || product.finishes[0]?.image;

  const handleAdd = (e) => {
    e.stopPropagation();
    setIsAdded(true);
    onAddToCart({
      ...product,
      selectedFinish: activeFinish.name,
      selectedImage: displayImage,
      selectedPrice: product.price
    });
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <div className="group relative flex flex-col justify-between bg-white rounded-2xl sm:rounded-3xl p-3 border border-stone-200/70 transition-all duration-300 hover:shadow-lifted hover:-translate-y-1">
      
      {/* Image Viewport */}
      <div 
        className="relative aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden bg-[#F7F5F0] mb-3 cursor-pointer"
        onClick={() => onQuickView(product)}
      >
        <img
          src={displayImage}
          alt={`${product.title} - ${activeFinish.name}`}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 flex flex-col gap-1.5 z-10">
          {product.tag && (
            <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] sm:text-[11px] font-semibold text-stone-800 shadow-sm border border-black/5">
              {product.tag}
            </span>
          )}
        </div>

        {/* Mobile Quick Add Button (Always visible on mobile, hidden on desktop hover overlay) */}
        <button
          type="button"
          onClick={handleAdd}
          className={`sm:hidden absolute top-2.5 right-2.5 p-2 rounded-full shadow-md z-10 transition-transform active:scale-90 ${
            isAdded
              ? 'bg-emerald-600 text-white'
              : 'bg-white/95 text-stone-800 backdrop-blur-md'
          }`}
          aria-label="Add to bag"
        >
          {isAdded ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </button>

        {/* Desktop Hover Action Overlay */}
        <div className="hidden sm:flex absolute inset-x-3 bottom-3 items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-10">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="flex-1 py-2 px-3 rounded-full bg-white/90 hover:bg-white text-stone-800 text-xs font-semibold backdrop-blur-md shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1.5 border border-black/5"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick view</span>
          </button>

          <button
            type="button"
            onClick={handleAdd}
            className={`p-2 rounded-full transition-all duration-200 shadow-md ${
              isAdded 
                ? 'bg-emerald-600 text-white' 
                : 'bg-[#1E3A2F] hover:bg-[#162A22] text-white hover:scale-105'
            }`}
            title="Add to bag"
          >
            {isAdded ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="px-1 sm:px-2 pb-1 sm:pb-2">
        
        {/* Title & Price */}
        <div className="flex items-start justify-between gap-1.5 mb-1">
          <h3 
            onClick={() => onQuickView(product)}
            className="text-sm sm:text-base font-medium text-stone-900 group-hover:text-forest transition-colors cursor-pointer line-clamp-1"
          >
            {product.title}
          </h3>
          <div className="text-right whitespace-nowrap">
            <span className="text-xs sm:text-sm font-semibold text-stone-900 font-mono">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="hidden sm:inline text-xs text-stone-400 line-through ml-1.5 font-mono">
                ${product.originalPrice}
              </span>
            )}
          </div>
        </div>

        {/* Selected Finish Label */}
        <div className="text-[11px] sm:text-xs text-stone-500 mb-2 sm:mb-3 flex items-center justify-between">
          <span className="truncate">{activeFinish.name}</span>
          <span className="text-[10px] sm:text-[11px] text-stone-400 capitalize shrink-0 ml-1">{product.category}</span>
        </div>

        {/* Color Swatches (Touch Friendly on Mobile) */}
        <div className="flex items-center gap-2 pt-2 border-t border-stone-100">
          {product.finishes.map((finish, idx) => (
            <button
              key={finish.name}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedFinishIndex(idx);
              }}
              className={`w-6 h-6 sm:w-5 sm:h-5 rounded-full transition-all duration-200 active:scale-95 ${
                idx === selectedFinishIndex
                  ? 'ring-2 ring-offset-2 ring-stone-800 scale-110'
                  : 'ring-1 ring-black/10 hover:scale-105'
              }`}
              style={{ backgroundColor: finish.hex }}
              title={finish.name}
            />
          ))}
        </div>

      </div>

    </div>
  );
}
