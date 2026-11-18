import React, { useState } from 'react';
import { X, Check, ShoppingBag, Ruler, Sparkles, ShieldCheck } from 'lucide-react';

export default function QuickViewModal({ product, isOpen, onClose, onAddToCart }) {
  if (!isOpen || !product) return null;

  const [selectedFinishIndex, setSelectedFinishIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const activeFinish = product.finishes[selectedFinishIndex] || product.finishes[0];
  const displayImage = activeFinish?.image || product.finishes[0]?.image;

  const handleAdd = () => {
    setIsAdded(true);
    onAddToCart({
      ...product,
      selectedFinish: activeFinish.name,
      selectedImage: displayImage,
      selectedPrice: product.price,
      quantity: quantity
    });
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Surface (Bottom sheet on mobile, rounded card on desktop) */}
      <div className="relative bg-[#FAF8F5] max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl md:rounded-[2.5rem] shadow-2xl z-10 p-5 sm:p-8 md:p-10 border border-stone-200/80 animate-fade-in">
        
        {/* Mobile Pull Indicator */}
        <div className="sm:hidden w-12 h-1.5 bg-stone-300 rounded-full mx-auto mb-4" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 sm:top-6 right-4 sm:right-6 p-2 rounded-full bg-white/80 hover:bg-stone-200 text-stone-700 transition shadow-sm z-20 active:scale-95"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Image Canvas */}
          <div>
            <div className="relative aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden bg-stone-100 shadow-lifted border border-stone-200/80">
              <img
                src={displayImage}
                alt={`${product.title} - ${activeFinish.name}`}
                className="w-full h-full object-cover object-center transition-all duration-500"
              />

              {product.tag && (
                <span className="absolute top-3 left-3 sm:top-4 sm:left-4 px-2.5 sm:px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] sm:text-xs font-semibold text-stone-800 shadow-sm border border-black/5">
                  {product.tag}
                </span>
              )}
            </div>
          </div>

          {/* Right Column: Information & Configuration */}
          <div>
            <div className="text-[10px] sm:text-xs uppercase tracking-widest text-[#1E3A2F]/70 font-semibold mb-1">
              {product.category}
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-stone-900 mb-2 font-display">
              {product.title}
            </h2>

            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <span className="text-lg sm:text-xl font-semibold text-stone-900 font-mono">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xs sm:text-sm text-stone-400 line-through font-mono">
                  ${product.originalPrice}
                </span>
              )}
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] sm:text-[11px] font-semibold">
                In Stock & Ready
              </span>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4 sm:mb-6">
              {product.description}
            </p>

            {/* Finish Selector */}
            <div className="mb-4 sm:mb-6">
              <div className="flex items-center justify-between text-xs font-medium text-stone-700 mb-2">
                <span>Selected Finish:</span>
                <span className="font-semibold text-stone-900">{activeFinish.name}</span>
              </div>
              <div className="flex items-center gap-2.5">
                {product.finishes.map((f, idx) => (
                  <button
                    key={f.name}
                    type="button"
                    onClick={() => setSelectedFinishIndex(idx)}
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full transition-all active:scale-95 ${
                      idx === selectedFinishIndex
                        ? 'ring-2 ring-offset-2 ring-forest scale-110'
                        : 'ring-1 ring-black/10 hover:scale-105'
                    }`}
                    style={{ backgroundColor: f.hex }}
                    title={f.name}
                  />
                ))}
              </div>
            </div>

            {/* Dimensions Overview */}
            {product.dimensions && (
              <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-stone-200/80 mb-5 sm:mb-6 text-xs text-stone-600">
                <div className="flex items-center gap-1.5 font-semibold text-stone-800 mb-1.5">
                  <Ruler className="w-3.5 h-3.5 text-forest" />
                  <span>Exact Dimensions</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-stone-600 font-mono text-[11px] sm:text-xs">
                  <div>W: {product.dimensions.widthCm} cm</div>
                  <div>D: {product.dimensions.depthCm} cm</div>
                  <div>H: {product.dimensions.heightCm} cm</div>
                </div>
              </div>
            )}

            {/* Quantity & Add to Cart */}
            <div className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-6">
              <div className="flex items-center border border-stone-300 rounded-full bg-white p-1 shrink-0">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-2.5 sm:px-3 py-1 text-stone-600 hover:text-stone-900 font-bold active:scale-90"
                >
                  -
                </button>
                <span className="px-2 sm:px-3 text-xs sm:text-sm font-semibold font-mono text-stone-800">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-2.5 sm:px-3 py-1 text-stone-600 hover:text-stone-900 font-bold active:scale-90"
                >
                  +
                </button>
              </div>

              <button
                type="button"
                onClick={handleAdd}
                className={`flex-1 py-3 sm:py-3.5 px-4 sm:px-6 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 active:scale-98 ${
                  isAdded
                    ? 'bg-emerald-600 text-white'
                    : 'bg-forest hover:bg-forest-dark text-white'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Bag</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add — ${(product.price * quantity).toFixed(2)}</span>
                  </>
                )}
              </button>
            </div>

            {/* Value Guarantees */}
            <div className="pt-3 sm:pt-4 border-t border-stone-200 text-[10px] sm:text-[11px] text-stone-500 flex items-center justify-between">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-forest" />
                10-Year Frame Warranty
              </span>
              <span>30-Day In-Home Trial</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
