import { cloneElement } from "react";
import { motion } from "framer-motion";
import { BookOpen, Globe, Award, Star } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: "10 darsda",
      desc: "Arab alifbosini mukammal o‘qish va yozish",
      color: "bg-primary/10",
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "60 darsda",
      desc: "Zamonaviy arab tilini B2 darajasigacha + mock imtihonlar",
      color: "bg-accent/10",
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "144 darsda",
      desc: "Sarf va Nahvni to‘liq o‘zlashtirish",
      color: "bg-emerald-100/20",
    },
    {
      icon: <Star className="w-10 h-10" />,
      title: "279 darsda",
      desc: "Qur’on tafsirini chuqur anglash",
      color: "bg-secondary/10",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 px-6 bg-dark-navy text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="aspect-video relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 mb-12 md:mb-20 group"
        >
          <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="Arabiya Academy tanishtiruvi"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </motion.div>

        <div className="text-center mb-12 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-black mb-6"
          >
            Siz nimalarga erishasiz?
          </motion.h2>
          <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto font-medium">
            Bizning tizim orqali siz qisqa muddatda sezilarli natijalarga erishasiz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/10 border border-white/60 p-6 md:p-10 rounded-2xl md:rounded-[40px] hover:bg-white/10 transition-all group"
            >
              <div className={`w-14 h-14 md:w-20 md:h-20 rounded-xl md:rounded-2xl flex items-center justify-center bg-white/60 mb-6 md:mb-8 group-hover:scale-110 transition-transform ${benefit.color} text-primary`}>
                {cloneElement(benefit.icon, { className: "w-7 h-7 md:w-10 md:h-10" })}
              </div>
              <h3 className="text-xl md:text-4xl font-black mb-4 text-white group-hover:text-accent transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-400 text-sm md:text-lg leading-relaxed font-medium">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
