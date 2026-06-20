import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import usuliya from "../../assets/usuliya.png"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const contactPhone = "+998 93 571 42 30";
  const contactPhoneHref = "tel:+998935714230";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Siz uchun", href: "#who-is-for" },
    { name: "Metodika", href: "#curriculum" },
    { name: "Natijalar", href: "#results" },
    { name: "Narxlar", href: "#pricing" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "py-4 bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-100"
        : "py-6 bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <img
          src={usuliya}
          alt=""
          className="w-36 h-12 sm:w-40 sm:h-14 md:w-[200px] md:h-[70px] 
             object-contain transition-all"
        />

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </motion.a>
          ))}
        </nav>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:block"
        >
          <div className="flex items-center gap-3 bg-white/70 backdrop-blur px-3 py-2 rounded-2xl border border-gray-100 shadow-sm">
            <a
              href={contactPhoneHref}
              className="flex items-center gap-2 text-dark-navy font-bold px-2 py-1 rounded-xl hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span>{contactPhone}</span>
            </a>
            <a
              href="#pricing"
              className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-2xl font-bold transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              Bog‘lanish
            </a>
          </div>
        </motion.div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-dark-navy"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-bold text-dark-navy hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#pricing"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-3 bg-primary text-white py-4 rounded-2xl font-bold shadow-lg"
              >
                Bog‘lanish <Phone className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
