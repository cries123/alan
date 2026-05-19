import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function ProjectGallery({ images, title }: { images: string[], title: string }) {
  const [index, setIndex] = useState(0);

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-full group">
      <AnimatePresence mode="wait">
        <motion.img 
          key={index}
          src={images[index]} 
          alt={`${title} - Image ${index + 1}`} 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full object-cover"
        />
      </AnimatePresence>
      
      <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <button 
          onClick={prev}
          className="p-2 bg-white/90 backdrop-blur-sm text-brand-ink hover:bg-brand-accent hover:text-white transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={next}
          className="p-2 bg-white/90 backdrop-blur-sm text-brand-ink hover:bg-brand-accent hover:text-white transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="absolute bottom-6 right-6 flex gap-2">
        {images.map((_, idx) => (
          <button 
            key={idx}
            onClick={(e) => { e.stopPropagation(); setIndex(idx); }}
            className={`w-2 h-2 rounded-full transition-all ${idx === index ? 'bg-brand-accent w-4' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Portfolio() {
  const projects = [
    {
      title: "St. John Neumann Church",
      category: "Religious / Community Excellence",
      images: [
        "/church1.jpg",
        "/church2.jpg",
        "/church3.jpg",
        "/church4.jpg",
        "/church5.jpg",
        "/church6.jpg",
      ],
      description: "A monumental 24-hour around-the-clock construction effort to meet Easter service deadlines."
    },
    {
      title: "Marian Regional Medical Center Administration Office",
      category: "Healthcare / OSHPD Specialized",
      images: ["/mh.jpg", "/mh1.jpg", "/mh3.jpg"],
      description: "Advanced medical facility design-build projects with strict regulatory compliance."
    },
    {
      title: "French Hospital Medical Center Healing Garden",
      category: "Healthcare Infrastructure",
      images: [
        "/f1.jpg",
        "/f2.jpg",
        "/f3.jpg",
        "/f4.jpg",
        "/f5.jpg"
      ],
      description: "A tranquil healing environment designed to support patient recovery and provide a peaceful sanctuary for families and staff."
    },
    {
      title: "Roinestad Residence",
      category: "Residential Excellence",
      images: [
        "/rr.jpg",
        "/rr1.jpg",
        "/rr2.jpg",
        "/rr3.jpg",
        "/rr4.jpg",
        "/rr5.jpg",
        "/rr6.jpg"
      ],
      description: "Custom luxury home featuring meticulous craftsmanship and high-end finishes, demonstrating residential construction excellence."
    }
  ];

  return (
    <div className="bg-brand-paper pt-24">
      <section className="py-24 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div>
              <motion.h1 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-5xl md:text-9xl font-light italic font-serif tracking-tighter text-brand-ink"
              >
                Portfolio
              </motion.h1>
              <div className="h-1 w-32 bg-brand-accent mt-4" />
            </div>
            <p className="max-w-md text-brand-ink/50 text-sm font-sans font-light leading-relaxed">
              Discover a legacy of high-performance construction and strategic management across the Central Coast's most complex projects.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-32">
            {projects.map((project, i) => (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group grid lg:grid-cols-12 gap-12 items-center"
              >
                <div className={`lg:col-span-8 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative overflow-hidden aspect-[16/10] bg-zinc-100 border border-zinc-200 p-2">
                    <ProjectGallery images={project.images} title={project.title} />
                  </div>
                </div>
                
                <div className={`lg:col-span-4 ${i % 2 === 1 ? 'lg:order-1 lg:text-right' : ''}`}>
                  <span className="text-brand-accent text-[10px] uppercase tracking-[0.3em] font-bold block mb-4 italic">{project.category}</span>
                  <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">{project.title}</h2>
                  <p className="text-brand-ink/60 font-sans font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Banner */}
      <section className="py-24 px-6 md:px-24 bg-brand-ink text-brand-paper mt-24">
         <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-4xl font-serif italic mb-8">"Built for stability. Designed for success."</h3>
            <p className="text-brand-accent uppercase tracking-widest text-[10px] font-bold">Alan Roinestad Construction & Managment Inc.</p>
         </div>
      </section>
    </div>
  );
}
