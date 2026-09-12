import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Download } from 'lucide-react';

const Hero = ({ content }) => {
  return (
    <section className="relative px-6 pt-24 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-life-white">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(#00674F_1px,transparent_1px)] bg-[length:32px_32px] opacity-[0.03]"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs md:text-sm font-bold tracking-wider mb-8 uppercase backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            {content.badge}
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-8 text-dark-navy tracking-tight">
            {content.titlePrefix} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
              {content.titleHighlight}
            </span> <br className="hidden md:block" />
            {content.titleSuffix}
          </h1>

          {/* Sub Content */}
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg md:text-2xl text-gray-600 leading-relaxed font-medium mb-4">
              {content.subtitle}
            </p>
            <p className="text-base md:text-lg text-primary/80 font-semibold italic bg-primary/5 py-4 px-6 rounded-2xl border border-primary/10 inline-block">
              {content.note}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 103 79 / 0.2)" }}
              whileTap={{ scale: 0.95 }}
              href="#results"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-primary text-white text-base md:text-lg px-10 py-5 rounded-2xl font-bold transition-all shadow-xl shadow-primary/20 group"
            >
              {content.primaryCta}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              whileHover={{ x: 5 }}
              href="#who-is-for"
              className="text-dark-navy font-bold hover:text-primary transition-colors flex items-center gap-2 py-2 text-base md:text-lg"
            >
              {content.secondaryCta}
              <ArrowRight className="w-4 h-4 opacity-50" />
            </motion.a>
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href="#results"
              className="inline-flex items-center gap-3 rounded-2xl border border-primary/30 bg-white px-6 py-4 text-sm md:text-base font-black text-primary shadow-lg shadow-primary/10 transition hover:bg-primary hover:text-white"
            >
              <Download className="w-5 h-5" />
              <span>{content.appInstall.title}</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">{content.appInstall.subtitle}</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Modern Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
