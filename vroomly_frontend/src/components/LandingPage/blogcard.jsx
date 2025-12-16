  

import React from 'react';

const defaultPosts = [
  
  {
    id: 1,
    title: 'Karva Chauth 2025 Travel Ideas - Celebrate Love & Rituals on a Road Trip',
    excerpt:
      'Plan a romantic Karva Chauth 2025 holiday with unique road trip ideas. Celebrate love, traditions, and unforgettable moments on the open road.',
    image:'https://imagesvs.oneindia.com/webp/ph-big/2023/11/in-pics-karwa-chauth-2023-festival-celebration-in-india_169889973250.jpg',
  },
  {
    id: 2,
    title: 'Ahmedabad Navratri 2025 Guide - Garba, Food & Travel Tips',
    excerpt:
      'Celebrate Navratri 2025 in Ahmedabad! Explore the best Garba nights, authentic food trails, and travel tips for an amazing experience.',
    image: 'https://th.bing.com/th/id/OIP.0oqBoxNyOmOVuBFWKpjwQAHaF7?w=270&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.5&pid=1.7&rm=3&ucfimg=1', // Unique Ahmedabad Navratri image
  },
  {
    id: 3,
    title: 'Bangalore Navratri 2025 Dandiya & Travel Tip',
    excerpt: 'Celebrate Navratri 2025 & Dandiya nights. Explore local venues, safety tips, and travel routes.',
    image:'https://th.bing.com/th/id/OIP.0oqBoxNyOmOVuBFWKpjwQAHaF7?w=270&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.5&pid=1.7&rm=3&ucfimg=1',
  },
];

export default function BlogCarousel({ posts = defaultPosts }) {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-center mb-8">Recent Blog Posts</h2>

      {/* Carousel container: uses horizontal scroll + snap for simplicity */}
      <div className="relative">
        <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory flex gap-6 px-2 py-4">
          {posts.map((post) => (
            <article
              key={post.id}
              className="snap-start flex-shrink-0 w-[320px] sm:w-[360px] md:w-[420px] bg-white rounded-2xl shadow-md p-4"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-52 object-cover rounded-xl"
                />
                <div className="absolute -bottom-6 right-4 bg-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>

              <h3 className="mt-8 text-lg font-semibold text-gray-900 line-clamp-2">{post.title}</h3>
              <p className="mt-3 text-sm text-gray-500 line-clamp-3">{post.excerpt}</p>
            </article>
          ))}
        </div>

        {/* Optional navigation dots */}
        <div className="mt-6 flex items-center justify-center space-x-3">
          {posts.map((p, i) => (
            <button
              key={p.id}
              className="w-3 h-3 rounded-full bg-emerald-200"
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Small responsive tweaks */}
      <style>{`
        /* line-clamp utilities require plugin or simple fallback here for demo */
        .line-clamp-2 { display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden; }
        .line-clamp-3 { display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; overflow: hidden; }

        /* hide scrollbar but still scrollable */
        .overflow-x-auto::-webkit-scrollbar { height: 8px; }
        .overflow-x-auto::-webkit-scrollbar-thumb { background-color: rgba(0,0,0,0.12); border-radius: 10px; }
      `}</style>
    </section>
  );
}
