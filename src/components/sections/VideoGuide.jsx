import { motion } from "framer-motion";
import { Play, FileVideo, Info } from "lucide-react";

const VideoGuide = () => {
  return (
    <section id="video-guide" className="py-20 md:py-32 px-6 bg-dark-navy text-white overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs md:text-sm font-bold tracking-widest uppercase mb-6"
          >
            <FileVideo className="w-4 h-4 text-accent" />
            Qo'llanma
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-8 tracking-tight"
          >
            Darslikdan qanday <span className="text-accent text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">foydalanish</span> kerak?
          </motion.h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Ushbu video qo'llanma orqali siz platformamiz imkoniyatlari va darsliklardan maksimal foyda olish sirlarini bilib olasiz.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto group"
        >
          {/* Decorative Frame */}
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-accent/30 rounded-[40px] blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
          
          <div className="relative aspect-video bg-black rounded-[32px] overflow-hidden shadow-2xl border border-white/10">
            {/* Thumbnail Placeholder */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-700"></div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-dark-navy/40 group-hover:bg-dark-navy/20 transition-colors duration-500 flex items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-20 h-20 md:w-28 md:h-28 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl relative"
              >
                <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-25"></div>
                <Play className="w-8 h-8 md:w-12 md:h-12 fill-current ml-1" />
              </motion.button>
            </div>

            {/* Video Controls Fake UI */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-1 bg-white/20 rounded-full overflow-hidden">
                    <div className="w-1/3 h-full bg-primary"></div>
                  </div>
                  <span className="text-xs font-bold font-mono">12:45 / 24:00</span>
               </div>
               <Info className="w-5 h-5 opacity-60" />
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-5xl mx-auto">
          {[
            { title: "Ro'yxatdan o'tish", desc: "Qadam-baqadam ko'rsatma" },
            { title: "Darslarni yuklash", desc: "Oflayn o'rganish imkoniyati" },
            { title: "Test topshirish", desc: "Bilimingizni sinab ko'ring" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-start gap-4"
            >
              <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary font-black">
                {i + 1}
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGuide;
