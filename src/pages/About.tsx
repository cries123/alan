import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="bg-brand-paper">
      {/* Header */}
      <section className="py-24 px-6 md:px-24 bg-brand-ink text-brand-paper">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-light italic serif tracking-tight mb-8"
          >
            About Us
          </motion.h1>
          <div className="h-1 w-24 bg-brand-accent mb-12" />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-32 px-6 md:px-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] overflow-hidden transition-all duration-1000 border border-brand-ink/5 p-2">
              <img 
                src="/about-us.jpg" 
                alt="About Us - Alan Roinestad Construction" 
                className="w-full h-full object-cover transition-transform duration-1000 scale-105 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 border border-brand-accent/20 hidden md:block -z-10" />
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 p-12 bg-zinc-50 border border-zinc-100 relative group"
            >
               <div className="absolute top-0 left-0 w-1 h-full bg-brand-accent scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500" />
               <h3 className="text-brand-accent text-[10px] uppercase tracking-[0.3em] font-bold mb-8">Our Philosophy</h3>
               <p className="text-2xl font-serif italic italic leading-relaxed text-brand-ink">
                 "Don't focus on money, emphasize quality work and relationships, and you won't have to worry about success."
               </p>
            </motion.div>
          </motion.div>

          <div className="space-y-8 mt-12 md:mt-0">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 bg-white border border-brand-ink/5 shadow-sm relative overflow-hidden group"
            >
              <div className="absolute left-0 top-0 w-1 h-full bg-brand-accent transition-all duration-500 group-hover:w-2" />
              <p className="text-brand-ink font-normal text-xl leading-relaxed">
                Located on the Central Coast in Santa Maria, California, our firm specializes in general building construction. We also offer construction management to those clients who wish to be more involved in their building process.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-10 bg-zinc-50 border border-brand-ink/5 shadow-sm relative overflow-hidden group"
            >
              <div className="absolute left-0 top-0 w-1 h-full bg-brand-accent transition-all duration-500 group-hover:w-2" />
              <p className="text-brand-ink/80 font-sans font-light leading-relaxed">
                Alan Roinestad Construction and Management, Inc. has completed many design/build projects, including numerous medical offices and special requirement OSHPD work at Marian Regional Medical Center in Santa Maria and the French Hospital Medical Center Healing Garden in San Luis Obispo.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-10 bg-brand-ink text-brand-paper shadow-xl relative overflow-hidden group"
            >
              <div className="absolute left-0 top-0 w-1 h-full bg-brand-accent transition-all duration-500 group-hover:w-2" />
              <p className="font-sans font-light leading-relaxed opacity-80">
                Other successful building projects include schools, restaurants, automobile dealerships, hotels, office buildings, banks, veterinary clinics, retail shopping centers, churches and custom residences.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pt-12"
            >
              <h3 className="text-2xl font-serif italic text-brand-ink mb-6">Notable Achievements</h3>
              <p className="text-brand-ink/60 font-sans font-light leading-relaxed mb-8 border-l-2 border-brand-accent pl-6">
                One of our most notable projects was the St. John Neumann Church in Santa Maria. Built on a tight timeline, we worked 24-hours a day so it would be completed in time for Good Friday and Easter services. This was an extra special achievement for us.
              </p>
            </motion.div>

            <div className="bg-brand-accent p-12 text-white relative overflow-hidden shadow-lg">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 -translate-y-1/2 translate-x-1/2 rounded-full" />
               <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-6 text-white/60">Mission Statement</h4>
               <p className="text-3xl font-serif leading-tight italic">
                 "Meet people's needs with openness and integrity, and treat our clients with the same level of service and respect that we ourselves would expect."
               </p>
            </div>

            <p className="text-xs text-brand-ink/40 font-light italic pt-12 font-sans">
              Alan Roinestad started his own construction business over twenty years ago, following the advice of successful business-minded colleagues to prioritize relationships over profit.
            </p>
          </div>
          </div>
        </section>
      </div>
    );
  }
