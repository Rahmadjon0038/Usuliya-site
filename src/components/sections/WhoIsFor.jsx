import { motion } from "framer-motion";
import { Briefcase, BookOpen, Globe, Star } from "lucide-react";

const WhoIsFor = () => {
  const items = [
    {
      icon: <Briefcase className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Arab davlatlarida ishlash",
      desc: "Dubay, Saudiya Arabistoni, Qatar va BAA kabi davlatlarning yirik kompaniyalarida yuqori maoshli ish o‘rinlarida ishlash imkoniyati.",
      color: "from-blue-500/10 to-blue-600/5",
      accent: "text-blue-400",
    },
    {
      icon: <BookOpen className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Qur’oni Karimni o‘qish",
      desc: "Muqaddas Qur’onni asl arab tilida, tajvid qoidalari bilan to‘g‘ri va go‘zal o‘qishni chuqur o‘rganasiz.",
      color: "from-emerald-500/10 to-emerald-600/5",
      accent: "text-emerald-400",
    },
    {
      icon: <Globe className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Sayohat va erkin muloqot",
      desc: "Arab dunyosi bo‘ylab sayohat qilganda, Umra va Haj safarlarida mahalliy aholi bilan bemalol arab tilida suhbatlashish.",
      color: "from-amber-500/10 to-amber-600/5",
      accent: "text-amber-400",
    },
    {
      icon: <Star className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Ilmiy va diniy tadqiqotlar",
      desc: "Qadimgi manbalar, islomiy adabiyot va fiqhiy kitoblarni asl arab tilida to‘g‘ridan-to‘g‘ri o‘rganish imkoniyati.",
      color: "from-purple-500/10 to-purple-600/5",
      accent: "text-purple-400",
    },
  ];

  return (
    <section id="who-is-for" className="py-20 md:py-32 px-6 bg-dark-navy overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-4 block"
          >
            KIMLAR UCHUN
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight"
          >
            Bu kurs kimlar uchun?
          </motion.h2>

          <p className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl font-medium">
            Arab tilini mukammal o‘rganib, hayotingizni butunlay o‘zgartiradigan imkoniyatlarga ega bo‘ling
          </p>

          <div className="w-24 h-1 bg-primary/30 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`group relative p-8 md:p-12 rounded-[40px] 
                         bg-gradient-to-br ${item.color} 
                         border border-white/10 hover:border-primary/40 
                         transition-all duration-500 overflow-hidden h-full flex flex-col`}
            >
              {/* Icon */}
              <div className={`${item.accent} mb-8 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3`}>
                {item.icon}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-5 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-[17px] leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -right-12 -bottom-12 w-56 h-56 bg-white/5 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700" />
              <div className="absolute -left-8 -top-10 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsFor;