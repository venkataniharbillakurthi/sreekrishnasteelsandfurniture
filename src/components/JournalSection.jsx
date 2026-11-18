import React, { useState } from 'react';
import { ArrowUpRight, BookOpen, Clock, X } from 'lucide-react';
import { JOURNAL_POSTS } from '../data/furnitureData';

export default function JournalSection() {
  const [activeArticle, setActiveArticle] = useState(null);

  return (
    <section id="journal" className="py-16 md:py-24 bg-[#FAF8F5] border-t border-stone-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#1E3A2F]/70 font-semibold mb-2 flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5 text-forest" />
              <span>FROM THE JOURNAL</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900 font-display">
              Ideas for everyday living.
            </h2>
          </div>

          <button
            type="button"
            onClick={() => setActiveArticle(JOURNAL_POSTS[0])}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-forest hover:text-forest-dark group self-start"
          >
            <span>Explore the journal</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {JOURNAL_POSTS.map(post => (
            <article
              key={post.id}
              onClick={() => setActiveArticle(post)}
              className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-stone-200/70 p-5 transition-all duration-300 hover:shadow-lifted hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-stone-100 mb-5">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-semibold text-stone-800">
                  {post.category}
                </span>
              </div>

              <div className="px-2 pb-2">
                <div className="flex items-center gap-3 text-xs text-stone-400 mb-2 font-medium">
                  <span>{post.date}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-medium text-stone-900 group-hover:text-forest transition-colors mb-3 font-display">
                  {post.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-forest group-hover:text-forest-dark">
                  <span>Read article</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Article Modal Reader */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setActiveArticle(null)}
          />
          <div className="relative bg-[#FAF8F5] max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-10 shadow-2xl z-10">
            <div className="flex items-center justify-between pb-4 border-b border-stone-200 mb-6">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#1E3A2F]">
                {activeArticle.category} • {activeArticle.readTime}
              </span>
              <button 
                onClick={() => setActiveArticle(null)}
                className="p-2 rounded-full hover:bg-stone-200/60"
              >
                <X className="w-5 h-5 text-stone-700" />
              </button>
            </div>

            <img
              src={activeArticle.image}
              alt={activeArticle.title}
              className="w-full aspect-[16/9] object-cover rounded-2xl mb-6 shadow-md"
            />

            <h2 className="text-2xl sm:text-3xl font-medium text-stone-900 mb-4 font-display">
              {activeArticle.title}
            </h2>

            <div className="prose text-stone-700 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                When creating a peaceful sanctuary, what we leave empty is as foundational as the furniture we select. Often in contemporary homes, every corner is asked to carry utility, filling visual sightlines with objects that demand attention.
              </p>
              <p>
                By positioning a sculpted lounge chair with 30 inches of breathing room against light-washed walls, the eye rests. Materials like heavy oat bouclé and solid natural oak bring organic acoustic softening, gently dampening ambient chatter and street resonance.
              </p>
              <p>
                Pair your seating with low-temperature 2700K diffused lighting placed at eye level rather than harsh overhead luminaires. A home built on these quiet rituals becomes a refuge to come home to each evening.
              </p>
            </div>

            <div className="pt-8 mt-8 border-t border-stone-200 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="px-6 py-2.5 rounded-full bg-[#1E3A2F] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#162A22]"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
