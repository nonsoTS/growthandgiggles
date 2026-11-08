import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Growth & Giggles completely transformed our organic acquisition. We saw a 340% increase in high-intent traffic within just 6 months. Highly recommended for any Nigerian SaaS.",
      name: "Adeola Johnson",
      role: "CMO, FinTech Solutions Lagos",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    },
    {
      id: 2,
      quote: "Their content strategy gave us the clarity we lacked. Our sales team now uses their whitepapers daily to close enterprise deals faster than ever before.",
      name: "Chukwudi Okafor",
      role: "VP of Sales, EnterpriseTech NG",
      avatar: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f"
    },
    {
      id: 3,
      quote: "The quality of their SEO content is unmatched in the local market. They truly understand our B2B audience and consistently deliver pieces that establish our authority.",
      name: "Aisha Bello",
      role: "Founder, GrowthStart Africa",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
    },
    {
      id: 4,
      quote: "Finally, an agency that doesn't just promise results but delivers them with transparent reporting. Our ROI from their content marketing services has been incredible.",
      name: "Emeka Nwosu",
      role: "Marketing Director, RetailScale",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    }
  ];

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">What Our Clients Say</h2>
          <p className="text-xl text-gray-400">
            Don't just take our word for it. Hear from the Nigerian businesses that have scaled using our content engines.
          </p>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-6 pb-8 -mx-4 px-4 md:mx-0 md:px-0">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="snap-center shrink-0 w-[85vw] md:w-[400px] bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-lg hover:-translate-y-2 transition-transform duration-300 flex flex-col"
            >
              <div className="flex text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5" fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 italic flex-grow">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={testimonial.avatar} 
                  alt={`${testimonial.name}'s profile`}
                  className="w-14 h-14 rounded-full object-cover border-2 border-gray-700"
                  loading="lazy"
                />
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;