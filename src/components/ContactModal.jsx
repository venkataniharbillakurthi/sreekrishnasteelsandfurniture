import React, { useState } from 'react';
import { X, Check, Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    piece: 'General Inquiry',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative bg-[#FAF8F5] max-w-lg w-full rounded-3xl shadow-2xl z-10 border border-stone-200 p-6 sm:p-8 animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-stone-200 text-stone-600 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-xs uppercase tracking-widest text-[#1E3A2F] font-semibold mb-1">
          STUDIO CONSULTATION
        </div>
        <h3 className="text-2xl font-medium text-stone-900 mb-2 font-display">
          Let's talk about your space.
        </h3>
        <p className="text-xs text-stone-600 mb-6 leading-relaxed">
          Need custom swatches, dimension planning, or trade pricing? Send us a note and an interior specialist will reply within 24 hours.
        </p>

        {submitted ? (
          <div className="py-12 text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-3">
              <Check className="w-7 h-7" />
            </div>
            <h4 className="text-lg font-medium text-stone-900 mb-1">
              Message Received
            </h4>
            <p className="text-xs text-stone-600">
              Our studio team will be in touch shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">Your Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Eleanor Vance"
                className="w-full text-xs bg-white border border-stone-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-forest"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">Email Address</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="eleanor@example.com"
                className="w-full text-xs bg-white border border-stone-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-forest"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">Piece of Interest</label>
              <select
                value={formData.piece}
                onChange={(e) => setFormData({ ...formData, piece: e.target.value })}
                className="w-full text-xs bg-white border border-stone-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-forest"
              >
                <option value="General Inquiry">General Question / Room Advice</option>
                <option value="Ledge Sofa">The Ledge 2-Seat Sofa</option>
                <option value="Cove Chair">The Cove Lounge Chair</option>
                <option value="Fold Daybed">The Fold Daybed</option>
                <option value="Gather Table">The Gather Dining Table</option>
                <option value="Custom Swatches">Order Fabric & Timber Swatches</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">Notes or Room Dimensions</label>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Tell us about the room or questions you have..."
                className="w-full text-xs bg-white border border-stone-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-forest"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-forest hover:bg-forest-dark text-white text-xs font-semibold uppercase tracking-wider transition shadow-sm flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send Message</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
