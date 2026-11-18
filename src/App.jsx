import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import CategoryGrid from './components/CategoryGrid';
import ProductCarousel from './components/ProductCarousel';
import ObjectEdit from './components/ObjectEdit';
import GuidanceColumns from './components/GuidanceColumns';
import MaterialsAccordion from './components/MaterialsAccordion';
import ShoppableScene from './components/ShoppableScene';
import FinishingTouchesGrid from './components/FinishingTouchesGrid';
import MoodPaletteSwitcher from './components/MoodPaletteSwitcher';
import EditorialStories from './components/EditorialStories';
import JournalSection from './components/JournalSection';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import QuickViewModal from './components/QuickViewModal';
import SearchModal from './components/SearchModal';
import ContactModal from './components/ContactModal';

import { PRODUCTS } from './data/furnitureData';
import { Check } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState([
    {
      id: "ledge-sofa",
      title: "Ledge 2-Seat Sofa",
      selectedFinish: "Oat linen",
      selectedImage: "https://formrest-furniture.myshopify.com/cdn/shop/files/formrest-20261011-ledge-oat.png",
      selectedPrice: 1480,
      quantity: 1
    }
  ]);

  const [activeCategory, setActiveCategory] = useState('all');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3200);
  };

  const handleAddToCart = (item) => {
    setCartItems(prev => {
      const existingIndex = prev.findIndex(
        i => i.id === item.id && i.selectedFinish === item.selectedFinish
      );

      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex].quantity += (item.quantity || 1);
        return next;
      } else {
        return [...prev, { ...item, quantity: item.quantity || 1 }];
      }
    });

    showToast(`Added ${item.title} (${item.selectedFinish}) to your bag`);
  };

  const handleUpdateQuantity = (id, finish, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id, finish);
      return;
    }
    setCartItems(prev => prev.map(item => {
      if (item.id === id && item.selectedFinish === finish) {
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const handleRemoveItem = (id, finish) => {
    setCartItems(prev => prev.filter(i => !(i.id === id && i.selectedFinish === finish)));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleSelectProductById = (id) => {
    const prod = PRODUCTS.find(p => p.id === id);
    if (prod) {
      setQuickViewProduct(prod);
    }
  };

  const totalCartCount = cartItems.reduce((acc, i) => acc + i.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-stone-900">
      
      {/* Toast Notification Pill */}
      {toastMessage && (
        <div className="fixed bottom-16 sm:bottom-6 right-4 sm:right-6 z-50 animate-fade-in flex items-center gap-3 bg-[#1E3A2F] text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-full shadow-2xl border border-white/20 text-xs font-medium">
          <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
            <Check className="w-3 h-3 text-white" />
          </div>
          <span>{toastMessage}</span>
          <button
            onClick={() => setIsCartOpen(true)}
            className="underline font-semibold ml-2 hover:text-stone-300"
          >
            View Bag
          </button>
        </div>
      )}

      {/* Navigation (Announcement bar + Sticky scrollbar + Mobile Bottom Dock) */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onSelectCategory={setActiveCategory}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Exact Formrest Hero Carousel with Integrated Floating Frosted Header */}
        <HeroSlider
          onSelectProductById={handleSelectProductById}
          onOpenCart={() => setIsCartOpen(true)}
          onOpenSearch={() => setIsSearchOpen(true)}
          onSelectCategory={setActiveCategory}
          cartCount={totalCartCount}
          onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        />

        {/* 2. Category Grid: "FIND YOUR STARTING POINT" */}
        <CategoryGrid
          onSelectCategory={(catId) => {
            setActiveCategory(catId);
          }}
        />

        {/* 3. Product Carousel: "THE CONSIDERED EDIT" */}
        <ProductCarousel
          products={PRODUCTS}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          onQuickView={setQuickViewProduct}
          onAddToCart={handleAddToCart}
        />

        {/* 4. The Object Edit (Dome Table Lamp) */}
        <ObjectEdit
          fullProduct={PRODUCTS.find(p => p.id === 'dome-table-lamp')}
          onAddToCart={handleAddToCart}
          onQuickView={setQuickViewProduct}
        />

        {/* 5. Guidance Columns: "HERE TO HELP" */}
        <GuidanceColumns
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* 6. Materials & Details: "MATERIALS & DETAILS" */}
        <MaterialsAccordion
          onExploreCatalog={() => {
            setActiveCategory('all');
            document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 7. Shoppable Living Room Scene: "IN GOOD COMPANY" */}
        <ShoppableScene
          products={PRODUCTS}
          onQuickView={setQuickViewProduct}
          onAddToCart={handleAddToCart}
        />

        {/* 8. Finishing Touches 4-Column Grid: "THE FINISHING TOUCHES" */}
        <FinishingTouchesGrid
          products={PRODUCTS}
          onQuickView={setQuickViewProduct}
          onAddToCart={handleAddToCart}
        />

        {/* 10. Mood & Palette Switcher: "A FEELING TO COME HOME TO" */}
        <MoodPaletteSwitcher
          onExploreMood={() => {
            setActiveCategory('all');
            document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 11. Editorial Story Vignettes: "AT HOME" */}
        <EditorialStories
          onSelectCategory={setActiveCategory}
        />

        {/* 12. From The Journal */}
        <JournalSection />
      </main>

      {/* 13. Luxury Frosted Footer */}
      <Footer
        onSelectCategory={setActiveCategory}
      />

      {/* Slide-out Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Live Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={PRODUCTS}
        onSelectProduct={(p) => setQuickViewProduct(p)}
      />

      {/* Studio Consultation Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

    </div>
  );
}
