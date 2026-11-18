import React from 'react';
import { ArrowUpRight, Ruler, Sparkles, MessageCircle } from 'lucide-react';

export default function GuidanceColumns({ onOpenContact }) {
  return (
    <section className="py-16 md:py-20 bg-[#FAF8F5] border-t border-b border-stone-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-widest text-[#1E3A2F]/70 font-semibold mb-2">
            HERE TO HELP
          </div>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900 font-display">
            A little help along the way.
          </h2>
        </div>

        {/* 3 Minimal Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          
          {/* Column 1 */}
          <div className="bg-white rounded-3xl p-8 border border-stone-200/70 shadow-soft flex flex-col justify-between hover:-translate-y-1 transition-transform">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#EBF0E9] text-forest flex items-center justify-center mb-6">
                <Ruler className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium text-stone-900 mb-2">
                A little clarity.
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed mb-6">
                Explore piece proportions, room placement, and curated dimensions before you choose.
              </p>
            </div>
            
            <a
              href="#catalog"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-forest hover:text-forest-dark group self-start"
            >
              <span>Explore collection</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Column 2 */}
          <div className="bg-white rounded-3xl p-8 border border-stone-200/70 shadow-soft flex flex-col justify-between hover:-translate-y-1 transition-transform">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F4F0E8] text-[#C88A42] flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium text-stone-900 mb-2">
                Closer to the details.
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed mb-6">
                Explore tactile bouclé textures, natural hardwax wood finishes, and mortise and tenon joinery.
              </p>
            </div>

            <a
              href="#materials"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-forest hover:text-forest-dark group self-start"
            >
              <span>Explore materials</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Column 3 */}
          <div className="bg-white rounded-3xl p-8 border border-stone-200/70 shadow-soft flex flex-col justify-between hover:-translate-y-1 transition-transform">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F0EBE6] text-[#B85D3B] flex items-center justify-center mb-6">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium text-stone-900 mb-2">
                A question in mind?
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed mb-6">
                Tell us which piece has caught your eye. Our interior design team provides personalized room mockups.
              </p>
            </div>

            <button
              type="button"
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-forest hover:text-forest-dark group self-start"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
