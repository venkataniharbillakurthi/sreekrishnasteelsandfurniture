import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Search, User, ShoppingBag, MoreHorizontal, ChevronDown, Menu } from 'lucide-react';
import { HERO_SLIDES, CATEGORIES, BRAND_NAME } from '../data/furnitureData';

export default function HeroSlider({ 
  onSelectProductById, 
  onOpenCart, 
  onOpenSearch, 
  onSelectCategory,
  cartCount,
  onOpenMobileMenu 
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Touch gesture support
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7500);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const slide = HERO_SLIDES[currentSlide];

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const onTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) handleNext();
    else if (distance < -50) handlePrev();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section 
      id="hero"
      className="relative w-full overflow-hidden bg-[#FAF8F5] p-2 sm:p-4 md:p-6"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="max-w-[1440px] mx-auto">
        
        {/* Main Hero Container with Curved Organic Corners */}
        <div className="relative rounded-3xl sm:rounded-[2.5rem] md:rounded-[3rem] overflow-hidden min-h-[580px] sm:min-h-[660px] md:min-h-[760px] flex flex-col justify-between shadow-lifted">
          
          {/* Background Images with Smooth Crossfade */}
          {HERO_SLIDES.map((s, index) => (
            <div
              key={s.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
              } transform transition-transform duration-1000`}
            >
              <picture>
                <source media="(max-width: 640px)" srcSet={s.bgImageMobile || s.bgImage} />
                <img
                  src={s.bgImage}
                  alt={s.headingLines.join(' ')}
                  className="w-full h-full object-cover object-center"
                />
              </picture>
              {/* Subtle film vignette so white text remains readable across all devices */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-black/25 md:bg-gradient-to-r md:from-black/45 md:via-black/10 md:to-transparent" />
            </div>
          ))}

          {/* ============================================================ */}
          {/* FLOATING FROSTED PILL HEADER (EXACT REPLICA OF FORREST STORE) */}
          {/* ============================================================ */}
          <div className="relative z-30 pt-4 sm:pt-6 px-3 sm:px-8 flex justify-center">
            <header className="w-full max-w-6xl rounded-full bg-white/20 hover:bg-white/25 backdrop-blur-xl border border-white/25 text-white px-4 sm:px-7 py-2.5 sm:py-3 shadow-lg flex items-center justify-between transition-all">
              
              {/* Left: Brand Wordmark */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={onOpenMobileMenu}
                  className="lg:hidden p-1.5 rounded-full hover:bg-white/20 text-white transition"
                  aria-label="Open mobile menu"
                >
                  <Menu className="w-5 h-5" />
                </button>
                <a href="#hero" className="font-display font-medium text-2xl sm:text-3xl tracking-tight text-white drop-shadow-sm">
                  {BRAND_NAME}
                </a>
              </div>

              {/* Center: Desktop Nav Pills */}
              <nav className="hidden lg:flex items-center gap-3 text-sm font-medium text-white/90">
                {/* Active Home Pill */}
                <a 
                  href="#hero" 
                  className="px-4 py-1.5 rounded-full bg-white/20 text-white shadow-sm flex items-center gap-1.5 hover:bg-white/25 transition"
                >
                  <span>Home</span>
                  <ChevronDown className="w-3.5 h-3.5 text-white/70" />
                </a>

                {/* Catalog Dropdown */}
                <div 
                  className="relative"
                  onMouseEnter={() => setIsCatalogOpen(true)}
                  onMouseLeave={() => setIsCatalogOpen(false)}
                >
                  <button 
                    type="button"
                    onClick={() => setIsCatalogOpen(!isCatalogOpen)}
                    className="px-3.5 py-1.5 rounded-full hover:bg-white/15 text-white/90 hover:text-white transition flex items-center gap-1"
                  >
                    <span>Catalog</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isCatalogOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown Menu */}
                  {isCatalogOpen && (
                    <div className="absolute top-full left-0 mt-2 w-72 bg-white text-stone-900 rounded-2xl shadow-lifted border border-stone-200/80 p-2 z-50 animate-fade-in">
                      <button
                        onClick={() => {
                          onSelectCategory('all');
                          setIsCatalogOpen(false);
                          document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="w-full text-left px-3 py-2 text-xs font-semibold rounded-xl hover:bg-stone-100 flex items-center justify-between"
                      >
                        <span>Explore All Furniture</span>
                        <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
                      </button>
                      {CATEGORIES.map(cat => (
                        <button
                          key={cat.id}
                          onClick={() => {
                            onSelectCategory(cat.id);
                            setIsCatalogOpen(false);
                            document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="w-full text-left px-3 py-2 text-xs rounded-xl hover:bg-stone-100 flex items-center justify-between"
                        >
                          <span className="font-medium text-stone-800">{cat.name}</span>
                          <span className="text-[10px] text-stone-400 font-mono">{cat.itemCount}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <a href="#materials" className="px-3.5 py-1.5 rounded-full hover:bg-white/15 text-white/90 hover:text-white transition">
                  About us
                </a>

                <a href="#journal" className="px-3.5 py-1.5 rounded-full hover:bg-white/15 text-white/90 hover:text-white transition">
                  Journal
                </a>

                <a href="#contact" className="px-3.5 py-1.5 rounded-full hover:bg-white/15 text-white/90 hover:text-white transition">
                  Contact
                </a>
              </nav>

              {/* Right: Circular Action Icons */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                <button
                  type="button"
                  onClick={onOpenSearch}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/15 hover:bg-white/25 active:scale-95 text-white flex items-center justify-center transition shadow-sm"
                  aria-label="Search"
                >
                  <Search className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => alert("Formrest Account Portal: Signed in as Guest.")}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/15 hover:bg-white/25 active:scale-95 text-white hidden sm:flex items-center justify-center transition shadow-sm"
                  aria-label="User Account"
                >
                  <User className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={onOpenCart}
                  className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/15 hover:bg-white/25 active:scale-95 text-white flex items-center justify-center transition shadow-sm"
                  aria-label="Cart Bag"
                >
                  <ShoppingBag className="w-4 h-4" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-[#1E3A2F] text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center border border-white">
                      {cartCount}
                    </span>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => alert("Currency: USD ($) • Free White Glove Delivery over $500")}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/15 hover:bg-white/25 active:scale-95 text-white hidden sm:flex items-center justify-center transition shadow-sm"
                  aria-label="More Options"
                >
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>

            </header>
          </div>

          {/* ============================================================ */}
          {/* HERO CONTENT: EDITORIAL HEADLINE & PINE GREEN CTA */}
          {/* ============================================================ */}
          <div className="relative z-20 px-6 sm:px-12 md:px-16 pt-16 sm:pt-24 pb-8 max-w-xl text-white">
            
            {/* Eyebrow */}
            <div className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-white/90 mb-3 drop-shadow-sm">
              {slide.eyebrow}
            </div>

            {/* Headline with Sentences & Periods */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-medium tracking-tight leading-[1.08] text-white drop-shadow-md font-display mb-4 text-balance">
              {slide.headingLines.map((line, idx) => (
                <span key={idx} className="block">{line}</span>
              ))}
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-white/90 font-light leading-relaxed mb-7 max-w-sm drop-shadow-sm">
              {slide.subtext}
            </p>

            {/* Dark Pine Green CTA Button */}
            <a
              href="#catalog"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#1E3A2F] text-white hover:bg-[#14261F] transition-all text-sm font-medium shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:scale-95"
            >
              <span>{slide.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* ============================================================ */}
          {/* HERO BOTTOM BAR: SHOPPABLE PILL + CAROUSEL CONTROLS */}
          {/* ============================================================ */}
          <div className="relative z-20 px-4 sm:px-10 md:px-14 pb-6 sm:pb-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            
            {/* Bottom-Left: Shoppable Product Pill Card */}
            {slide.productPill && (
              <button
                type="button"
                onClick={() => onSelectProductById(slide.productPill.id)}
                className="group inline-flex items-center gap-3.5 p-2.5 pr-5 rounded-3xl bg-[#F4F3EE] hover:bg-white text-stone-900 shadow-xl border border-black/5 transition-all active:scale-98"
              >
                <img
                  src={slide.productPill.image}
                  alt={slide.productPill.title}
                  className="w-12 h-12 rounded-2xl object-cover bg-white border border-stone-200/80 shrink-0"
                />
                <div className="text-left">
                  <div className="text-sm font-semibold text-stone-900 group-hover:text-forest transition">
                    {slide.productPill.title}
                  </div>
                  <div className="text-xs text-stone-500">
                    {slide.productPill.finish}
                  </div>
                </div>
                <div className="ml-2 text-stone-600 group-hover:text-forest group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            )}

            {/* Bottom-Right: Slider Navigation Controls (<-  01 / 03  ->) */}
            <div className="flex items-center gap-3 bg-white/90 backdrop-blur-md rounded-full px-2 py-1.5 shadow-lg border border-white/50 self-end sm:self-auto">
              <button
                type="button"
                onClick={handlePrev}
                className="w-8 h-8 rounded-full bg-white hover:bg-stone-100 flex items-center justify-center text-stone-700 hover:text-stone-900 transition shadow-sm active:scale-90"
                aria-label="Previous slide"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              <span className="text-xs font-mono font-medium text-stone-700 tracking-wider px-1">
                0{currentSlide + 1} / 0{HERO_SLIDES.length}
              </span>

              <button
                type="button"
                onClick={handleNext}
                className="w-8 h-8 rounded-full bg-white hover:bg-stone-100 flex items-center justify-center text-stone-700 hover:text-stone-900 transition shadow-sm active:scale-90"
                aria-label="Next slide"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
