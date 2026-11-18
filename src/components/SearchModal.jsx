import React, { useState } from 'react';
import { Search, X, ArrowUpRight } from 'lucide-react';

export default function SearchModal({ isOpen, onClose, products, onSelectProduct }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filtered = query.trim() === ''
    ? products.slice(0, 4)
    : products.filter(p => 
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase()) ||
        p.finishes.some(f => f.name.toLowerCase().includes(query.toLowerCase()))
      );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Surface */}
      <div className="relative bg-[#FAF8F5] max-w-2xl w-full rounded-3xl shadow-2xl z-10 border border-stone-200 overflow-hidden animate-fade-in">
        
        {/* Search Bar Input */}
        <div className="p-4 sm:p-6 border-b border-stone-200 bg-white flex items-center gap-3">
          <Search className="w-5 h-5 text-stone-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search seating, oak tables, lamps, finishes..."
            className="w-full text-base sm:text-lg bg-transparent text-stone-900 placeholder-stone-400 focus:outline-none font-medium"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-stone-100 text-stone-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results */}
        <div className="p-4 sm:p-6 max-h-[60vh] overflow-y-auto space-y-3">
          <div className="text-[11px] font-semibold uppercase tracking-widest text-stone-400 mb-2">
            {query.trim() === '' ? 'Curated Suggestions' : `Found ${filtered.length} piece${filtered.length === 1 ? '' : 's'}`}
          </div>

          {filtered.length === 0 ? (
            <div className="py-12 text-center text-sm text-stone-500">
              No pieces found matching "{query}". Try searching "sofa", "oak", or "lamp".
            </div>
          ) : (
            filtered.map(product => (
              <div
                key={product.id}
                onClick={() => {
                  onSelectProduct(product);
                  onClose();
                }}
                className="group flex items-center justify-between p-3 rounded-2xl bg-white hover:bg-stone-100/80 border border-stone-200/70 cursor-pointer transition"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={product.finishes[0].image}
                    alt={product.title}
                    className="w-14 h-14 rounded-xl object-cover border border-stone-200 shrink-0"
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-stone-900 group-hover:text-forest transition">
                      {product.title}
                    </h4>
                    <div className="text-xs text-stone-500 capitalize">
                      {product.category} • {product.finishes.length} finishes
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-stone-900 font-mono">
                    ${product.price}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-stone-100 group-hover:bg-forest group-hover:text-white flex items-center justify-center transition">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}
