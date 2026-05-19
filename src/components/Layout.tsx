import { ReactNode, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Building2, Mail, MapPin, Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Team', path: '/team' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Work in Progress', path: '/work-in-progress' },
  ];

  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-white bg-brand-paper transition-colors duration-500">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 bg-white/80 backdrop-blur-md border-b border-brand-ink/5">
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src="/logo.jpg" 
            alt="ARCM Logo" 
            className="h-10 w-auto object-contain" 
          />
          <span className="text-xl font-serif tracking-tighter font-semibold">ARCM</span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-all hover:text-brand-accent relative py-2 ${
                location.pathname === link.path ? 'text-brand-accent' : 'text-brand-ink/60'
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div 
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-accent"
                />
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:block px-5 py-2 bg-brand-ink text-brand-paper text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-brand-accent transition-all duration-300">
            Contact Us
          </button>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-brand-ink"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 flex flex-col md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-lg uppercase tracking-[0.2em] font-bold transition-all ${
                    location.pathname === link.path ? 'text-brand-accent' : 'text-brand-ink/60'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-brand-ink/5 mt-auto pb-12">
                <button className="w-full py-4 bg-brand-ink text-brand-paper text-[10px] uppercase tracking-[0.2em] font-bold">
                  Contact Us
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-18">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-ink text-brand-paper pt-32 pb-12 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-20 mb-20">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-3 mb-8">
                <img src="/logo.jpg" alt="ARCM Logo" className="h-12 w-auto object-contain" />
                <span className="text-3xl font-serif tracking-tighter font-semibold text-white">ARCM</span>
              </div>
              <p className="text-brand-paper/50 leading-relaxed font-light">
                Alan Roinestad Construction & Management Inc. specializes in luxury residential and strategic commercial construction across the Central Coast.
              </p>
            </div>
            
            <div className="space-y-8">
              <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-accent">Contact</h5>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-brand-accent shrink-0" />
                  <span className="text-sm font-light leading-relaxed font-sans">
                    2646 Industrial Pkwy #100<br />
                    Santa Maria, CA 93455
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-brand-accent shrink-0" />
                  <span className="text-sm font-light font-sans">(805) 925-8779</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-brand-accent shrink-0" />
                  <span className="text-sm font-light font-sans">info@alanroinestad.com</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-end">
              <div className="p-8 border border-brand-paper/10 bg-brand-paper/5">
                <h6 className="text-xs uppercase tracking-widest font-bold mb-4">Start a Project</h6>
                <p className="text-sm font-light text-brand-paper/60 mb-6">Discuss your vision with our management team.</p>
                <button className="w-full py-4 border border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-brand-paper transition-all uppercase tracking-[0.2em] text-[10px] font-bold">
                  Get in Touch
                </button>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-brand-paper/10 flex flex-col md:flex-row justify-between gap-6">
            <p className="text-[10px] uppercase tracking-widest text-brand-paper/30">
              © 2009-2026 Alan Roinestad Construction & Management Inc.
            </p>
            <div className="flex gap-8">
              <span className="text-[10px] uppercase tracking-widest text-brand-paper/30">Privacy Policy</span>
              <span className="text-[10px] uppercase tracking-widest text-brand-paper/30">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
