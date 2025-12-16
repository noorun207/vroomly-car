import React from "react";

const cards = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80",
    title: "Discover Local Attractions",
    desc:
      "Drive to popular attractions, heritage sites, and vibrant city hotspots across India with Zoomcar self-drive. Enjoy the freedom to explore at your own pace.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    title: "Get Cars for Business Travel and Work Meetings",
    desc:
      "Navigate seamlessly between meetings or conferences with a self-drive car that works around your needs.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80",
    title: "Seamlessly Access Airport Transfers",
    desc:
      "Skip the cab queues and get a comfortable car to or from the airport with Zoomcar.",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80",
    title: "Perfect for Weekend Getaways",
    desc:
      "Plan short trips or long drives with complete flexibility and comfort using self-drive cars.",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80",
    title: "Freedom to Drive Anytime",
    desc:
      "Choose your schedule, route, and destination without worrying about cab availability.",
  },
];

export default function ZoomcarCards() {
  return (
    
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gray-50 rounded-2xl p-8">

          {/* ✅ scroll + snap */}
          <div className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4">
            {cards.map((c) => (
              <article
                key={c.id}
                aria-labelledby={`card-${c.id}-title`}
                className="flex-shrink-0 w-[300px] md:w-[340px] bg-white rounded-xl overflow-hidden shadow-sm snap-start"
              >
                <div className="w-full h-56 md:h-64 overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <h3
                      id={`card-${c.id}-title`}
                      className="text-xl md:text-2xl font-semibold mb-3 leading-tight"
                    >
                      {c.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      {c.desc}
                    </p>
                  </div>

                  <div className="mt-6 flex justify-end">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white border border-gray-200 shadow-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          d="M5 12h14M12 5l7 7-7 7"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
    
  );
}