import { motion } from 'motion/react';
import { Phone, MapPin, Mail } from 'lucide-react';

export default function Team() {
  const members = [
    { label: "President", name: "Alan Roinestad", email: "ar@alanroinestad.com" },
    { label: "Vice President", name: "Justin Lassahn", email: "jl@alanroinestad.com" },
    { label: "Contract Administrator", name: "Crystal James", email: "cj@alanroinestad.com" },
    { label: "Accounts Receivable", name: "Alyssa Zandonatti", email: "az@alanroinestad.com" },
    { label: "Accounts Payable", name: "ARCM AP Dept.", email: "accountspayable@alanroinestad.com" },
  ];

  const profiles = [
    { name: "Alan Roinestad", role: "President", img: "/alan.jpg" },
    { name: "Justin Lassahn", role: "Vice President", img: "/justin.jpg" }
  ];

  return (
    <div className="bg-zinc-50 pt-24 min-h-screen">
      <section className="py-24 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-24 items-start">
            {/* Contact List */}
            <div className="lg:w-1/2 space-y-16">
              <div>
                <motion.h1 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-5xl md:text-8xl font-light tracking-tight italic font-serif text-brand-ink mb-6"
                >
                  Our Team
                </motion.h1>
                <div className="h-1 w-24 bg-brand-accent mb-12" />
                <p className="text-xl font-light text-brand-ink/60 leading-relaxed font-sans max-w-xl">
                  A dedicated collective of professionals committed to delivering superior construction management on the Central Coast.
                </p>
              </div>

              <div className="space-y-8">
                {members.map((member, i) => (
                  <motion.div 
                    key={member.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="group border-b border-brand-ink/10 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    <div>
                      <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-brand-accent block mb-1 opacity-70">{member.label}</span>
                      <h3 className="text-xl font-medium text-brand-ink transition-all group-hover:translate-x-2">{member.name}</h3>
                    </div>
                    <a 
                      href={`mailto:${member.email}`} 
                      className="text-xs font-light font-sans text-brand-ink/40 hover:text-brand-accent transition-colors underline decoration-brand-accent/20"
                    >
                      {member.email}
                    </a>
                  </motion.div>
                ))}
              </div>

              <div className="pt-12 bg-white p-12 border border-zinc-200">
                <h5 className="text-[10px] uppercase tracking-widest font-bold text-brand-ink mb-8">Head Office</h5>
                <div className="space-y-6 text-sm font-sans font-light text-brand-ink/70">
                  <p className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-brand-accent shrink-0" />
                    <span>2646 Industrial Pkwy #100, Santa Maria, CA 93455</span>
                  </p>
                  <p className="flex items-center gap-4">
                    <Phone className="w-5 h-5 text-brand-accent shrink-0" />
                    <span>(805) 925-8779  |  Fax: (805) 928-3198</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Visuals */}
            <div className="lg:w-1/2 space-y-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {profiles.map((profile, i) => (
                  <motion.div 
                    key={profile.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + (i * 0.2) }}
                    className="relative group overflow-hidden bg-white aspect-[3/4] border border-zinc-200"
                  >
                    <img 
                      src={profile.img} 
                      alt={profile.name} 
                      className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/80 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="text-brand-paper font-bold tracking-tighter text-2xl mb-1">{profile.name}</div>
                      <div className="text-[10px] uppercase font-bold tracking-[0.3em] text-brand-accent italic">{profile.role}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col gap-4">
                <div className="aspect-video relative border border-zinc-200 p-2 bg-white shadow-sm overflow-hidden">
                  <iframe 
                    title="ARCM Office Location"
                    className="w-full h-full grayscale-0 hover:grayscale-0 transition-all duration-700"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3265.485!2d-120.427845!3d34.908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ec6e6c70000001%3A0x7000000000000000!2s2646%20Industrial%20Pkwy%20%23100%2C%20Santa%20Maria%2C%20CA%2093455!5e0!3m2!1sen!2sus!4v1716147100000!5m2!1sen!2sus"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=2646+Industrial+Pkwy+%23100,+Santa+Maria,+CA+93455"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-brand-ink text-white py-4 px-8 text-[10px] uppercase tracking-widest font-bold hover:bg-brand-accent transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
