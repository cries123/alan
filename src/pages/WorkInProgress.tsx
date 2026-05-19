import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HardHat, ChevronLeft, ChevronRight } from 'lucide-react';

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

      <div className="absolute bottom-4 right-4 flex gap-1">
        {images.map((_, idx) => (
          <button 
            key={idx}
            onClick={(e) => { e.stopPropagation(); setIndex(idx); }}
            className={`w-1.5 h-1.5 rounded-full transition-all ${idx === index ? 'bg-brand-accent w-3' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function WorkInProgress() {
  const activeSites = [
    {
      title: "Shepard Building in Santa Maria",
      stage: "Foundation / Framing",
      completion: "Fall 2026",
      images: [
        "/sb.jpg",
        "/sb2.jpg",
        "/sb3.jpg",
        "/sb4.jpg",
        "/sb5.jpg",
        "/sb6.jpg",
        "/sb7.jpg",
        "/sb8.jpg",
        "/sb9.jpg",
        "/sb10.jpg"
      ]
    },
    {
      title: "French Hospital Medical Center Chapel & Bell Tower",
      stage: "Interior Fit-out",
      completion: "Winter 2026",
      images: ["/fh.jpg", "/fh1.jpg", "/fh2.jpg"]
    }
  ];

  return (
    <div className="bg-brand-paper pt-24 min-h-screen">
      <section className="py-24 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div>
              <motion.h1 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-5xl md:text-8xl font-light italic font-serif tracking-tighter text-brand-ink"
              >
                In Progress
              </motion.h1>
              <div className="flex items-center gap-4 mt-6">
                 <div className="h-1 w-24 bg-brand-accent" />
                 <span className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-brand-ink/40">
                    <HardHat className="w-3 h-3" /> Under Active Management
                 </span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {activeSites.map((site, i) => (
              <motion.div 
                key={site.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="group bg-zinc-50 border border-zinc-100 p-4"
              >
                <div className="aspect-[16/9] overflow-hidden mb-8 border border-zinc-200 p-1 bg-white">
                  <ProjectGallery images={site.images} title={site.title} />
                </div>
                <div className="px-6 pb-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-brand-ink mb-1">{site.title}</h3>
                      <p className="text-brand-accent text-[10px] uppercase tracking-[0.2em] font-bold">Current Phase: {site.stage}</p>
                    </div>
                    <div className="text-right">
                       <span className="text-[9px] uppercase tracking-widest font-bold text-brand-ink/30 block">Est. Completion</span>
                       <span className="text-sm font-medium font-sans italic">{site.completion}</span>
                    </div>
                  </div>
                  <p className="text-sm font-sans font-light text-brand-ink/50 leading-relaxed mb-8">
                    Currently executing specialized construction management protocols to ensure structural integrity and timeline precision for the {site.title}.
                  </p>
                  <div className="w-full h-1 bg-zinc-200 rounded-full overflow-hidden">
                     <motion.div 
                       initial={{ width: 0 }}
                       whileInView={{ width: i === 0 ? "45%" : "75%" }}
                       viewport={{ once: true }}
                       transition={{ duration: 1.5, ease: "easeOut" }}
                       className="h-full bg-brand-accent"
                     />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>


          {/* Inquiry Banner */}
          <div className="mt-32 p-16 bg-brand-ink text-brand-paper relative overflow-hidden text-center md:text-left">
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 -translate-y-1/2 translate-x-1/2 rotate-45" />
             <div className="relative z-10 max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-serif italic mb-6">Partner on your next venture.</h2>
                <p className="text-brand-paper/50 font-sans font-light mb-10 leading-relaxed">
                   We are currently accepting new projects for the 2026-2027 fiscal year. Contact our administrator to discuss timelines and capacity.
                </p>
                <button className="px-10 py-4 bg-brand-accent text-white uppercase tracking-widest text-[10px] font-bold hover:bg-white hover:text-brand-ink transition-all">
                   Consultation Request
                </button>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
