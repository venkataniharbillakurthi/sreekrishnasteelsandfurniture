import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X, ChevronDown, Sparkles, ArrowRight, Home, Grid, Ruler } from 'lucide-react';
import { CATEGORIES, BRAND_NAME } from '../data/furnitureData';

export default function Navbar({ 
  cartCount, 
  onOpenCart, 
  onOpenSearch, 
  onSelectCategory,
  isMobileMenuOpen,
  setIsMobileMenuOpen
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger sticky header only when scrolled past the hero viewport
      if (window.scrollY > 400) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#1E3A2F] text-[#FAF8F5] text-[11px] sm:text-xs py-2 px-3 sm:px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-stone-300 animate-pulse shrink-0" />
        <span className="truncate">Complimentary white glove inside delivery over $500</span>
        <span className="hidden md:inline text-stone-400">• FSC-Certified Solid Oak</span>
      </div>

      {/* Sticky Header: Smoothly slides down when scrolled past the hero */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'translate-y-0 opacity-100 bg-white/95 backdrop-blur-md border-b border-black/5 shadow-sm py-2.5 sm:py-3'
            : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Left: Mobile Menu Trigger + Desktop Nav */}
            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 -ml-2 text-stone-800 hover:text-stone-900 rounded-full hover:bg-black/5 transition active:scale-95"
                aria-label="Open navigation menu"
              >
                <Menu className="w-5 h-5" />
              </button>

              <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-700">
                <a href="#hero" className="hover:text-forest transition-colors">Home</a>

                {/* Catalog Dropdown */}
                <div 
                  className="relative"
                  onMouseEnter={() => setIsCatalogOpen(true)}
                  onMouseLeave={() => setIsCatalogOpen(false)}
                >
                  <button 
                    type="button"
                    className="flex items-center gap-1 hover:text-forest transition-colors py-2"
                    onClick={() => setIsCatalogOpen(!isCatalogOpen)}
                  >
                    <span>Catalog</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isCatalogOpen ? 'rotate-180 text-forest' : ''}`} />
                  </button>

                  {/* Mega Dropdown Panel */}
                  {isCatalogOpen && (
                    <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-lifted border border-stone-200/70 p-3 z-50 animate-fade-in">
                      <div className="text-[11px] font-semibold uppercase tracking-widest text-stone-400 px-3 py-1.5">
                        Categories
                      </div>
                      <div className="space-y-1">
                        <button
                          onClick={() => {
                            onSelectCategory('all');
                            setIsCatalogOpen(false);
                            document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="w-full text-left px-3 py-2 text-sm rounded-xl hover:bg-stone-100 font-medium text-stone-800 flex items-center justify-between group transition"
                        >
                          <span>Explore All Furniture</span>
                          <ArrowRight className="w-4 h-4 text-stone-400 group-hover:translate-x-1 group-hover:text-forest transition" />
                        </button>
                        {CATEGORIES.map((cat) => (
                          <button
                            key={cat.id}
                            onClick={() => {
                              onSelectCategory(cat.id);
                              setIsCatalogOpen(false);
                              document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="w-full text-left px-3 py-2 text-sm rounded-xl hover:bg-stone-100 flex items-center justify-between group transition"
                          >
                            <div>
                              <div className="font-medium text-stone-800">{cat.name}</div>
                              <div className="text-xs text-stone-500">{cat.description}</div>
                            </div>
                            <span className="text-xs px-2 py-0.5 rounded-full bg-stone-100 text-stone-600 font-medium group-hover:bg-forest group-hover:text-white transition">
                              {cat.itemCount}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <a href="#materials" className="hover:text-forest transition-colors">Materials</a>
                <a href="#palette-finder" className="hover:text-forest transition-colors">Mood & Palettes</a>
                <a href="#journal" className="hover:text-forest transition-colors">Journal</a>
              </nav>
            </div>

            {/* Center: Brand Logo Wordmark */}
            <div className="text-center">
              <a href="#hero" className="inline-block group">
                <span className="font-display font-medium text-2xl sm:text-3xl tracking-tight text-[#1E3A2F]">
                  {BRAND_NAME}
                </span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#B85D3B] ml-1 mb-1 transition-transform group-hover:scale-125"></span>
              </a>
            </div>

            {/* Right: Actions (Search & Cart Bag) */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={onOpenSearch}
                className="p-2 sm:p-2.5 rounded-full text-stone-700 hover:text-stone-900 hover:bg-stone-200/50 transition-colors flex items-center gap-2 text-xs font-medium active:scale-95"
                aria-label="Search furniture"
              >
                <Search className="w-4 h-4" />
                <span className="hidden sm:inline">Search</span>
              </button>

              <button
                type="button"
                onClick={onOpenCart}
                className="relative flex items-center gap-2 bg-[#1E3A2F] text-white hover:bg-[#152a22] transition-colors rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-semibold shadow-sm active:scale-95"
                aria-label="Shopping bag"
              >
                <ShoppingBag className="w-4 h-4" />
                <span className="hidden sm:inline">Bag</span>
                <span className="bg-white text-[#1E3A2F] px-1.5 py-0.2 rounded-full font-bold text-[11px] min-w-5 text-center">
                  {cartCount}
                </span>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Floating Mobile Bottom Dock */}
      <div className="lg:hidden fixed bottom-3 inset-x-4 z-40 pointer-events-none">
        <div className="max-w-md mx-auto pointer-events-auto bg-[#FAF8F5]/90 backdrop-blur-xl border border-stone-300/70 shadow-2xl rounded-full p-1.5 flex items-center justify-around text-stone-700">
          <a
            href="#hero"
            className="flex flex-col items-center py-1 px-3 text-[10px] font-semibold text-stone-600 hover:text-forest active:scale-95 transition"
          >
            <Home className="w-4 h-4 mb-0.5" />
            <span>Home</span>
          </a>

          <button
            onClick={() => {
              onSelectCategory('all');
              document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex flex-col items-center py-1 px-3 text-[10px] font-semibold text-stone-600 hover:text-forest active:scale-95 transition"
          >
            <Grid className="w-4 h-4 mb-0.5" />
            <span>Catalog</span>
          </button>

          <a
            href="#materials"
            className="flex flex-col items-center py-1 px-3 text-[10px] font-semibold text-stone-600 hover:text-forest active:scale-95 transition"
          >
            <Sparkles className="w-4 h-4 mb-0.5" />
            <span>Materials</span>
          </a>

          <button
            onClick={onOpenSearch}
            className="flex flex-col items-center py-1 px-3 text-[10px] font-semibold text-stone-600 hover:text-forest active:scale-95 transition"
          >
            <Search className="w-4 h-4 mb-0.5" />
            <span>Search</span>
          </button>

          <button
            onClick={onOpenCart}
            className="relative flex flex-col items-center py-1 px-3 text-[10px] font-semibold text-forest active:scale-95 transition"
          >
            <div className="relative">
              <ShoppingBag className="w-4 h-4 mb-0.5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-[#B85D3B] text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
            <span>Bag</span>
          </button>
        </div>
      </div>

      {/* Mobile Off-Canvas Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="relative w-full max-w-sm bg-[#FAF8F5] h-full shadow-2xl p-5 flex flex-col justify-between overflow-y-auto animate-fade-in">
            <div>
              {/* Drawer Top */}
              <div className="flex items-center justify-between pb-4 border-b border-stone-200">
                <span className="font-display font-semibold text-2xl text-forest">
                  {BRAND_NAME}<span className="text-[#B85D3B]">.</span>
                </span>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-stone-200/60"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 text-stone-700" />
                </button>
              </div>

              {/* Mobile Quick Search Bar */}
              <div className="py-4">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenSearch();
                  }}
                  className="w-full flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white border border-stone-200 text-xs text-stone-500 shadow-sm text-left"
                >
                  <Search className="w-4 h-4 text-stone-400" />
                  <span>Search seating, tables, lamps...</span>
                </button>
              </div>

              {/* Navigation Links */}
              <div className="space-y-4">
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-stone-400 font-semibold mb-2">
                    Furniture Collections
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {CATEGORIES.map(c => (
                      <button
                        key={c.id}
                        onClick={() => {
                          onSelectCategory(c.id);
                          setIsMobileMenuOpen(false);
                          document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="p-2.5 rounded-xl bg-white border border-stone-200 text-left hover:border-forest transition group"
                      >
                        <div className="text-xs font-semibold text-stone-800 group-hover:text-forest">
                          {c.name}
                        </div>
                        <div className="text-[10px] text-stone-500">
                          {c.itemCount} pieces
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-stone-200/80 space-y-2">
                  <a 
                    href="#materials" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between text-sm font-medium text-stone-800 hover:text-forest py-2"
                  >
                    <span>Materials & Craftsmanship</span>
                    <ArrowRight className="w-4 h-4 text-stone-400" />
                  </a>

                  <a 
                    href="#palette-finder" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between text-sm font-medium text-stone-800 hover:text-forest py-2"
                  >
                    <span>Mood & Palettes</span>
                    <ArrowRight className="w-4 h-4 text-stone-400" />
                  </a>

                  <a 
                    href="#journal" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between text-sm font-medium text-stone-800 hover:text-forest py-2"
                  >
                    <span>From The Journal</span>
                    <ArrowRight className="w-4 h-4 text-stone-400" />
                  </a>
                </div>

              </div>
            </div>

            {/* Mobile Drawer Bottom */}
            <div className="pt-6 border-t border-stone-200 text-xs text-stone-500">
              <div className="flex items-center justify-between mb-2">
                <span>Currency / Region</span>
                <span className="font-semibold text-stone-800">USD ($) / Global</span>
              </div>
              <p className="text-[11px] text-stone-400">
                © {new Date().getFullYear()} Sree Krishna Steels & Furniture (SKL).
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
