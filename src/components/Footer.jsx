import React, { useState } from 'react';
import { ArrowUp, ArrowRight, Check, Sparkles, Globe } from 'lucide-react';
import { BRAND_NAME, BRAND_FULL_NAME, BRAND_TAGLINE } from '../data/furnitureData';

export default function Footer({ onSelectCategory }) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setIsSubscribed(false);
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#1A1A18] text-white pt-14 sm:pt-20 pb-24 sm:pb-12 overflow-hidden">
      
      {/* Background Lifestyle Ambient Texture */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=80"
          alt="Interior background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A18] via-[#1A1A18]/90 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Frosted Container Card */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] p-6 sm:p-10 md:p-16 mb-12 sm:mb-16 shadow-2xl">
          
          {/* Top Brand Watermark & Tagline */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 sm:pb-12 border-b border-white/15 gap-4 sm:gap-6">
            <div>
              <span className="font-display font-medium text-3xl sm:text-5xl md:text-6xl text-white tracking-tight">
                {BRAND_NAME}<span className="text-[#B85D3B]">.</span>
              </span>
              <p className="text-stone-300 text-xs sm:text-base mt-1.5 sm:mt-2 font-light">
                {BRAND_TAGLINE}
              </p>
            </div>

            {/* Back To Top Pill */}
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/10 hover:bg-white text-stone-200 hover:text-stone-900 text-[11px] sm:text-xs font-semibold uppercase tracking-wider transition-all self-start sm:self-auto border border-white/20 active:scale-95"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>

          {/* Middle Row: Navigation Links & Newsletter */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pt-8 sm:pt-12">
            
            {/* Shop Links */}
            <div className="lg:col-span-3">
              <h4 className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-stone-300 mb-3 sm:mb-4">
                Shop Furniture
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-stone-300">
                <li>
                  <button 
                    onClick={() => {
                      onSelectCategory('all');
                      document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-white transition"
                  >
                    All Furniture
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      onSelectCategory('seating');
                      document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-white transition"
                  >
                    Seating & Sofas
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      onSelectCategory('tables');
                      document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-white transition"
                  >
                    Dining & Coffee
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      onSelectCategory('storage');
                      document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-white transition"
                  >
                    Shelves & Storage
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      onSelectCategory('lighting');
                      document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-white transition"
                  >
                    Lamps & Pendants
                  </button>
                </li>
              </ul>
            </div>

            {/* Explore Links */}
            <div className="lg:col-span-3">
              <h4 className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-stone-300 mb-3 sm:mb-4">
                Explore & Craft
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-stone-300">
                <li>
                  <a href="#materials" className="hover:text-white transition">
                    Materials & Finishes
                  </a>
                </li>
                <li>
                  <a href="#palette-finder" className="hover:text-white transition">
                    Find Your Palette
                  </a>
                </li>
                <li>
                  <a href="#journal" className="hover:text-white transition">
                    From The Journal
                  </a>
                </li>
              </ul>
            </div>

            {/* Help / Services */}
            <div className="col-span-2 lg:col-span-2">
              <h4 className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-stone-300 mb-3 sm:mb-4">
                Care & Support
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-stone-300">
                <li><span className="hover:text-white transition cursor-pointer">White Glove Delivery</span></li>
                <li><span className="hover:text-white transition cursor-pointer">Timber & Linen Care</span></li>
                <li><span className="hover:text-white transition cursor-pointer">10-Year Warranty</span></li>
                <li><span className="hover:text-white transition cursor-pointer">Studio Inquiries</span></li>
              </ul>
            </div>

            {/* Newsletter Column */}
            <div className="col-span-2 lg:col-span-4">
              <div className="bg-black/30 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-white/10">
                <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-stone-300 mb-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C88A42]" />
                  <span>The SKL Letter</span>
                </div>
                <h4 className="text-base sm:text-lg font-medium text-white mb-1.5 font-display">
                  Inspiration, delivered occasionally.
                </h4>
                <p className="text-[11px] sm:text-xs text-stone-300 leading-relaxed mb-4">
                  New collections, interior essays, and invitations to studio events.
                </p>

                {isSubscribed ? (
                  <div className="p-2.5 rounded-full bg-emerald-600/30 border border-emerald-500/50 text-emerald-200 text-xs font-medium flex items-center justify-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Thank you for subscribing.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex items-center gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="flex-1 bg-white/10 text-white placeholder-stone-400 text-xs rounded-full px-3.5 py-2.5 border border-white/20 focus:outline-none focus:border-white transition"
                    />
                    <button
                      type="submit"
                      className="px-3.5 py-2.5 rounded-full bg-white text-stone-900 hover:bg-stone-200 text-xs font-semibold tracking-wide transition shrink-0 flex items-center gap-1 active:scale-95"
                    >
                      <span>Join</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>

        </div>

        {/* Sub-Footer Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-stone-400 gap-3 sm:gap-4 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} {BRAND_FULL_NAME} ({BRAND_NAME}). All rights reserved.
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <span className="hover:text-white cursor-pointer">Privacy</span>
            <span className="hover:text-white cursor-pointer">Terms</span>
            <div className="flex items-center gap-1 text-stone-300">
              <Globe className="w-3.5 h-3.5" />
              <span>USD ($)</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
