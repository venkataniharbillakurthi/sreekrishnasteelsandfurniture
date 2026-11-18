import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import ProductCard from './ProductCard';
import { CATEGORIES } from '../data/furnitureData';

export default function ProductCarousel({ 
  products, 
  activeCategory, 
  onSelectCategory, 
  onQuickView, 
  onAddToCart 
}) {
  const scrollContainerRef = useRef(null);

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section id="catalog" className="py-12 sm:py-16 md:py-24 bg-[#FAF8F5] border-t border-b border-stone-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-end justify-between mb-6 sm:mb-8 gap-4">
          <div>
            <div className="text-[11px] sm:text-xs uppercase tracking-widest text-[#1E3A2F]/70 font-semibold mb-1 sm:mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#C88A42]" />
              <span>THE CONSIDERED EDIT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-stone-900 font-display">
              Good company.
            </h2>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={scrollLeft}
              className="p-2 sm:p-2.5 rounded-full border border-stone-300 hover:border-forest text-stone-700 hover:text-forest hover:bg-white transition shadow-sm active:scale-95"
              aria-label="Previous pieces"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={scrollRight}
              className="p-2 sm:p-2.5 rounded-full border border-stone-300 hover:border-forest text-stone-700 hover:text-forest hover:bg-white transition shadow-sm active:scale-95"
              aria-label="Next pieces"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 sm:pb-4 hide-scrollbar mb-6 sm:mb-8 -mx-4 px-4 sm:mx-0 sm:px-0">
          <button
            onClick={() => onSelectCategory('all')}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all active:scale-95 ${
              activeCategory === 'all'
                ? 'bg-[#1E3A2F] text-white shadow-sm'
                : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            All Pieces ({products.length})
          </button>
          
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all active:scale-95 ${
                activeCategory === cat.id
                  ? 'bg-[#1E3A2F] text-white shadow-sm'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {cat.name} ({products.filter(p => p.category === cat.id).length})
            </button>
          ))}
        </div>

        {/* Products Scroll Container with Snap Scrolling */}
        <div 
          ref={scrollContainerRef}
          className="grid grid-flow-col auto-cols-[78%] sm:auto-cols-[45%] md:auto-cols-[32%] lg:auto-cols-[24%] gap-4 sm:gap-6 overflow-x-auto pb-6 hide-scrollbar snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {filteredProducts.map(product => (
            <div key={product.id} className="snap-start">
              <ProductCard
                product={product}
                onQuickView={onQuickView}
                onAddToCart={onAddToCart}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
