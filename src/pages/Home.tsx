import { motion } from 'motion/react';
import { ChevronRight, Shield, Clock, Award, Hammer, HardHat, Building2, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const sectors = [
    { title: "Healthcare", description: "Specialized OSHPD medical offices and clinical spaces.", icon: Shield },
    { title: "Commercial", description: "Banks, offices, and retail centers built for performance.", icon: Building2 },
    { title: "Hospitality", description: "Hotels and restaurants designed with inviting aesthetics.", icon: Clock },
    { title: "Residential", description: "Custom luxury homes with meticulous craftsmanship.", icon: Award },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-brand-ink overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/website-cover.jpg" 
            className="w-full h-full object-cover opacity-25"
            alt="ARCM Featured Project"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-ink/80 via-transparent to-brand-ink" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase tracking-[0.5em] mb-8 block font-bold text-brand-accent drop-shadow-sm"
          >
            Alan Roinestad Construction & Management Inc.
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-7xl font-normal text-white leading-tight mb-12 tracking-tighter drop-shadow-2xl"
          >
            Where <span className="italic font-serif text-brand-accent">quality construction</span> is only superseded by our <span className="italic font-serif">customer service</span> and <span className="italic font-serif">integrity</span>.
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <Link to="/portfolio" className="px-8 py-4 bg-brand-accent text-white uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-brand-ink transition-all">
              View Portfolio
            </Link>
            <Link to="/about" className="px-8 py-4 border border-white/20 text-white uppercase tracking-widest text-xs font-bold hover:bg-white/10 transition-all">
              Our Story
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Expertise Sectors */}
      <section className="py-32 px-6 md:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-light mb-4 tracking-tighter italic font-serif">Core Expertise</h2>
              <p className="text-brand-ink/40 uppercase tracking-[0.2em] text-xs font-bold">Specialized Construction Solutions</p>
            </div>
            <p className="max-w-md text-brand-ink/60 leading-relaxed font-sans font-light">
              From high-stakes medical facilities to bespoke luxury residences, we bring twenty years of excellence to every project site.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-px bg-zinc-100 border border-zinc-100">
            {sectors.map((sector, i) => (
              <motion.div 
                key={sector.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-12 hover:bg-brand-accent group transition-all duration-500 cursor-default"
              >
                <sector.icon className="w-10 h-10 mb-8 text-brand-accent group-hover:text-white transition-colors" />
                <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors uppercase tracking-tight">{sector.title}</h3>
                <p className="text-brand-ink/50 leading-relaxed group-hover:text-white/80 transition-colors font-sans text-sm font-light">
                  {sector.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Quote Section */}
      <section className="py-40 bg-zinc-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-accent/5 -skew-x-12 translate-x-1/2" />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-serif italic leading-snug text-brand-ink mb-12">
              "Don't focus on money, emphasize quality work and relationships, and you won't have to worry about success."
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-brand-accent" />
              <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-brand-ink/60">Alan Roinestad, President</span>
              <div className="h-px w-12 bg-brand-accent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-32 px-6 md:px-24 bg-brand-ink text-brand-paper">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-light tracking-tight mb-12">Design, Build, <span className="italic serif">Manage</span>.</h2>
            <p className="text-xl font-light leading-relaxed text-brand-paper/70 mb-12 font-sans">
              We offer comprehensive construction management for clients who want to be more involved, and turnkey design/build solutions for institutional excellence.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-brand-accent font-bold uppercase tracking-widest text-[10px]">Quality First</h4>
                <p className="text-sm font-light text-brand-paper/50 font-sans leading-relaxed">Meticulous attention to every structural detail and material choice.</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-brand-accent font-bold uppercase tracking-widest text-[10px]">Integrity Always</h4>
                <p className="text-sm font-light text-brand-paper/50 font-sans leading-relaxed">Built on a foundation of honest relationships and transparent processes.</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-white/5 p-8 border border-white/10">
              <div className="w-full h-full border border-brand-accent/30 p-2">
                <img 
                  src="/rr.jpg" 
                  alt="Roinestad Residence" 
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            </div>
            <div className="absolute -bottom-10 -left-10 bg-brand-accent p-12 hidden lg:block">
              <h3 className="text-4xl font-serif italic text-white leading-none">20+</h3>
              <p className="text-[8px] uppercase tracking-[0.2em] font-bold text-white/60 mt-2">Years Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl md:text-6xl font-light mb-12 tracking-tight">Ready to build your <span className="italic serif underline decoration-brand-accent/30">vision</span>?</h2>
        <Link to="/portfolio" className="group flex items-center gap-4 text-brand-ink hover:text-brand-accent transition-colors">
          <span className="text-sm uppercase tracking-[0.4em] font-bold">Start Your Journey</span>
          <div className="w-12 h-12 border border-brand-ink group-hover:border-brand-accent flex items-center justify-center transition-colors">
            <ChevronRight className="w-5 h-5" />
          </div>
        </Link>
      </section>
    </div>
  );
}
