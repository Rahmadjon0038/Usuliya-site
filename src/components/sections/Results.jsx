import { motion } from "framer-motion";
import arabOffice from "../../assets/results/arab_office.png";
import quranStudent from "../../assets/results/quran_student.png";
import successTeam from "../../assets/results/success_team.png";

const Results = () => {
  const results = [
    {
      image: arabOffice,
      title: "Xalqaro martaba",
      desc: "Bitiruvchilarimiz BAA va Saudiya Arabistonining nufuzli kompaniyalarida faoliyat yuritishmoqda.",
      count: "500+",
      label: "Muvaffaqiyatli ishchilar"
    },
    {
      image: quranStudent,
      title: "Ma'naviy yutuqlar",
      desc: "Minglab talabalarimiz Qur'oni Karimni mustaqil va xatosiz o'qish baxtiga muyassar bo'lishdi.",
      count: "10,000+",
      label: "Qur'on o'quvchilar"
    },
    {
      image: successTeam,
      title: "Jamoaviy natijalar",
      desc: "Bizning bitiruvchilarimiz Arab dunyosi bilan biznes va madaniy aloqalarni o'rnatishda yetakchi.",
      count: "50+",
      label: "Hamkor kompaniyalar"
    }
  ];

  return (
    <section id="results" className="py-20 md:py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-4 block"
          >
            Natijalarimiz
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-dark-navy mb-6 tracking-tight"
          >
            Talabalarimiz erishgan <span className="text-primary">yutuqlar</span>
          </motion.h2>
          <div className="w-24 h-2 bg-primary/20 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {results.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col group"
            >
              <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden mb-8 shadow-2xl">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/80 via-transparent to-transparent opacity-60"></div>
                
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="text-white">
                    <div className="text-4xl font-black mb-1">{item.count}</div>
                    <div className="text-sm font-bold opacity-80 uppercase tracking-widest">{item.label}</div>
                  </div>
                </div>
              </div>

              <div className="px-4">
                <h3 className="text-2xl md:text-3xl font-black text-dark-navy mb-4 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-24 p-8 md:p-16 bg-primary rounded-[40px] text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-black mb-4">Siz ham natijaga erishing!</h3>
            <p className="text-white/80 text-lg md:text-xl font-medium max-w-xl">
              Minglab hamyurtlarimiz kabi siz ham Arab tilini noldan o'rganib, o'z hayotingizni yangi bosqichga olib chiqing.
            </p>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative z-10 bg-white text-primary px-10 py-5 rounded-2xl font-black text-lg md:text-xl shadow-2xl shadow-black/20"
          >
            KURSGA YOZILISH
          </motion.button>
          
          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Results;
