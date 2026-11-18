import React from 'react';
import ProductCard from './ProductCard';
import { Sparkles } from 'lucide-react';

export default function FinishingTouchesGrid({ products, onQuickView, onAddToCart }) {
  // Select 4 accent pieces: Arc Pendant, Bedside Table, Arc Ottoman, Disc Side Table
  const finishingTouches = products.filter(p => 
    ['arc-pendant', 'bedside-table', 'arc-ottoman', 'disc-side-table'].includes(p.id)
  );

  return (
    <section className="py-16 md:py-24 bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#1E3A2F]/70 font-semibold mb-2 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C88A42]" />
              <span>THE FINISHING TOUCHES</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900 font-display">
              Small things, well chosen.
            </h2>
            <p className="text-stone-600 text-sm md:text-base mt-1">
              Accent pieces and lighting designed to complete the balance of your space.
            </p>
          </div>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {finishingTouches.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
