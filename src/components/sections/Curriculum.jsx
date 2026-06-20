import { cloneElement } from "react";
import { motion } from "framer-motion";
import { BookOpen, Globe, Award, Zap, CheckCircle2 } from "lucide-react";

const Curriculum = () => {
  const steps = [
    {
      color: "border-primary text-primary",
      icon: <BookOpen className="w-12 h-12" />,
      stage: "BOSQICH 1",
      title: "O‘qish va yozish",
      lessons: "10 dars",
      desc: "Arab alifbosini noldan mukammal o‘rganish. Har bitta harfning talaffuzi va yozilishini professional darajada o'zlashtirasiz."
    },
    {
      color: "border-emerald-600 text-emerald-600",
      icon: <Globe className="w-12 h-12" />,
      stage: "BOSQICH 2",
      title: "B2 darajasi",
      lessons: "60 dars",
      desc: "Zamonaviy suhbat tili. Siz kundalik muloqotda kerak bo'ladigan barcha iboralarni va grammatikani o'rganasiz."
    },
    {
      color: "border-amber-600 text-amber-600",
      icon: <Award className="w-12 h-12" />,
      stage: "BOSQICH 3",
      title: "Sarf va Nahv",
      lessons: "144 dars",
      desc: "Klassik arab grammatikasi. Matnlarni tahlil qilish va murakkab gaplarni tuzish qobiliyatini rivojlantirasiz."
    },
    {
      color: "border-purple-600 text-purple-600",
      icon: <BookOpen className="w-12 h-12" />,
      stage: "BOSQICH 4",
      title: "Qur’on tafsiri",
      lessons: "279 dars",
      desc: "Qur’onni to‘g‘ri o‘qish va chuqur tushunish. Tafsir orqali ma'nolarni chaqib olasiz."
    },
  ];

  return (
    <section id="curriculum" className="py-20 md:py-32 px-6 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-20">
          <div className="lg:w-1/2">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-primary font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-4 block"
            >
              Ta'lim tizimi
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black mb-8 text-dark-navy tracking-tight"
            >
              Darslar qanday <br /> o'tiladi?
            </motion.h2>
            <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed mb-8">
              Bizning "USULIYA" metodikamiz orqali siz quruq yodlashdan voz kechasiz. Har bir dars interaktiv va natijaga yo'naltirilgan.
            </p>
            
            <ul className="space-y-4">
              {[
                "Video darslar va interaktiv vazifalar",
                "Har bir darsdan so'ng nazorat testi",
                "Ustoz bilan doimiy aloqa va savol-javoblar",
                "Amaliy muloqot darslari (Speaking club)"
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 text-dark-navy font-bold text-lg"
                >
                  <CheckCircle2 className="text-primary w-6 h-6" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div className="lg:w-1/2 bg-white p-8 md:p-12 rounded-[40px] shadow-2xl shadow-primary/5 border border-primary/10 relative">
            <div className="absolute -top-10 -right-10 bg-primary text-white p-6 rounded-3xl rotate-12 shadow-xl hidden md:block">
              <Zap className="w-10 h-10 fill-current" />
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-dark-navy mb-6">Metodika siri</h3>
            <p className="text-gray-600 text-lg leading-relaxed font-semibold">
              Biz "0 dan 10 darsda" tizimi orqali til o'rganishdagi eng katta to'siqni - harflarni tanimaslikni tezda yengamiz. Bu sizga kursning ilk kunlaridanoq natijani his qilish imkonini beradi.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className={`bg-white border-t-8 ${item.color.split(' ')[0]} rounded-3xl p-8 md:p-10 shadow-xl shadow-gray-200/50 transition-all flex flex-col`}
            >
              <div className={`${item.color.split(' ')[1]} mb-8`}>
                {cloneElement(item.icon, { className: "w-10 h-10 md:w-12 md:h-12" })}
              </div>
              <div className="text-[10px] md:text-xs font-black tracking-[0.2em] uppercase opacity-60 mb-2">{item.stage}</div>
              <div className="text-xl md:text-2xl font-black mb-4 text-dark-navy leading-tight">{item.title}</div>
              <div className="text-4xl md:text-5xl font-black text-dark-navy mb-6">{item.lessons}</div>
              <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed flex-1">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;

