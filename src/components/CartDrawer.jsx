import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Check, ShieldCheck, Truck } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoMessage, setPromoMessage] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  if (!isOpen) return null;

  const rawSubtotal = cartItems.reduce((acc, item) => acc + (item.selectedPrice * item.quantity), 0);
  const discountAmount = (rawSubtotal * discountPercent) / 100;
  const subtotal = Math.max(0, rawSubtotal - discountAmount);

  const freeShippingThreshold = 500;
  const progressPercent = Math.min(100, (rawSubtotal / freeShippingThreshold) * 100);
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - rawSubtotal);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'FORMREST10' || promoCode.trim().toUpperCase() === 'WELCOME') {
      setDiscountPercent(10);
      setPromoMessage('10% VIP Welcome discount applied!');
    } else {
      setPromoMessage('Code not recognized. Try "FORMREST10"');
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutComplete(true);
      onClearCart();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Surface: Full width on mobile, max-w-md on desktop */}
      <div className="relative w-full sm:max-w-md bg-[#FAF8F5] h-full shadow-2xl flex flex-col justify-between z-10 animate-fade-in pb-safe">
        
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-stone-200/80 bg-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-forest" />
              <h3 className="text-base sm:text-lg font-medium text-stone-900 font-display">
                Your Bag ({cartItems.reduce((acc, i) => acc + i.quantity, 0)})
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-stone-100 text-stone-500 hover:text-stone-800 transition active:scale-95"
              aria-label="Close bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="mt-3 sm:mt-4 pt-3 border-t border-stone-100">
            <div className="flex items-center justify-between text-xs mb-1.5 font-medium">
              <div className="flex items-center gap-1.5 text-stone-700 text-[11px] sm:text-xs">
                <Truck className="w-3.5 h-3.5 text-forest shrink-0" />
                {remainingForFreeShipping > 0 ? (
                  <span>Add <strong className="text-forest font-semibold">${remainingForFreeShipping.toFixed(0)}</strong> for free delivery</span>
                ) : (
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    Unlocked free white-glove delivery!
                  </span>
                )}
              </div>
              <span className="text-stone-400 font-mono text-[10px] sm:text-[11px]">{progressPercent.toFixed(0)}%</span>
            </div>
            <div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-forest transition-all duration-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3 sm:space-y-4">
          {checkoutComplete ? (
            <div className="py-12 sm:py-16 text-center">
              <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                <Check className="w-7 sm:w-8 h-7 sm:h-8" />
              </div>
              <h4 className="text-xl font-medium text-stone-900 mb-2 font-display">
                Thank you for your order!
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 mb-6 max-w-xs mx-auto">
                We're handcrafting your order with care. An order confirmation has been dispatched.
              </p>
              <button
                onClick={() => {
                  setCheckoutComplete(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-full bg-forest text-white text-xs font-semibold uppercase tracking-wider hover:bg-forest-dark active:scale-95"
              >
                Continue Exploring
              </button>
            </div>
          ) : cartItems.length === 0 ? (
            <div className="py-12 sm:py-16 text-center">
              <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-6 sm:w-7 h-6 sm:h-7" />
              </div>
              <h4 className="text-base sm:text-lg font-medium text-stone-900 mb-1">
                Your bag is empty
              </h4>
              <p className="text-xs text-stone-500 mb-6">
                Discover tactile seating, solid oak tables, and ambient lamps.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-forest text-white text-xs font-semibold uppercase tracking-wider hover:bg-forest-dark shadow-sm active:scale-95"
              >
                Explore Collection
              </button>
            </div>
          ) : (
            cartItems.map(item => (
              <div 
                key={`${item.id}-${item.selectedFinish}`}
                className="bg-white rounded-xl sm:rounded-2xl p-3 border border-stone-200/80 flex items-center gap-3 sm:gap-4 shadow-sm"
              >
                <img
                  src={item.selectedImage}
                  alt={item.title}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover border border-stone-200 shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <h4 className="text-xs sm:text-sm font-semibold text-stone-900 truncate">
                    {item.title}
                  </h4>
                  <div className="text-[11px] sm:text-xs text-stone-500 truncate">
                    Finish: {item.selectedFinish}
                  </div>
                  <div className="text-[11px] sm:text-xs font-semibold text-stone-900 mt-0.5">
                    ${item.selectedPrice} each
                  </div>

                  {/* Quantity Incrementer */}
                  <div className="flex items-center gap-2 sm:gap-3 mt-1.5">
                    <div className="flex items-center border border-stone-200 rounded-full bg-stone-50 p-0.5">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.selectedFinish, item.quantity - 1)}
                        className="p-1 rounded-full hover:bg-white text-stone-600 transition active:scale-90"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 text-xs font-semibold font-mono text-stone-800">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.selectedFinish, item.quantity + 1)}
                        className="p-1 rounded-full hover:bg-white text-stone-600 transition active:scale-90"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.id, item.selectedFinish)}
                      className="text-stone-400 hover:text-rose-600 p-1 transition"
                      title="Remove piece"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="text-right text-xs font-bold text-stone-900 whitespace-nowrap self-end pb-1 font-mono">
                  ${item.selectedPrice * item.quantity}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Subtotal & Checkout */}
        {cartItems.length > 0 && !checkoutComplete && (
          <div className="p-4 sm:p-6 bg-white border-t border-stone-200/80 space-y-3 sm:space-y-4">
            
            {/* Promo Code Form */}
            <form onSubmit={handleApplyPromo} className="flex gap-2">
              <input
                type="text"
                placeholder="Promo Code (FORMREST10)"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="flex-1 text-xs bg-stone-50 border border-stone-200 rounded-full px-3.5 sm:px-4 py-2 focus:outline-none focus:border-forest"
              />
              <button
                type="submit"
                className="px-3.5 sm:px-4 py-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold active:scale-95"
              >
                Apply
              </button>
            </form>
            {promoMessage && (
              <div className={`text-[11px] font-medium ${discountPercent > 0 ? 'text-emerald-600' : 'text-stone-500'}`}>
                {promoMessage}
              </div>
            )}

            {/* Calculations */}
            <div className="space-y-1.5 text-xs text-stone-600 pt-1 border-t border-stone-100">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-mono text-stone-900 font-semibold">${rawSubtotal.toFixed(2)}</span>
              </div>
              {discountPercent > 0 && (
                <div className="flex justify-between text-emerald-600">
                  <span>10% VIP Discount</span>
                  <span className="font-mono">-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>White Glove Delivery</span>
                <span className="font-mono text-stone-900">
                  {remainingForFreeShipping === 0 ? 'FREE' : '$49.00'}
                </span>
              </div>
              <div className="flex justify-between text-xs sm:text-sm font-semibold text-stone-900 pt-1.5 border-t border-stone-100">
                <span>Estimated Total</span>
                <span className="font-mono text-sm sm:text-base text-forest">
                  ${(subtotal + (remainingForFreeShipping === 0 ? 0 : 49)).toFixed(2)}
                </span>
              </div>
            </div>

            {/* Checkout Action Button */}
            <button
              type="button"
              onClick={handleCheckout}
              disabled={isCheckingOut}
              className="w-full py-3 sm:py-3.5 rounded-full bg-forest hover:bg-forest-dark text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 active:scale-98 disabled:opacity-50"
            >
              {isCheckingOut ? (
                <span>Securing Order...</span>
              ) : (
                <>
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[10px] sm:text-[11px] text-stone-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>100% Encrypted & Insured Delivery</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
