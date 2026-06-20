import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const faqData = [
    {
      question: "QANDAY FOYDALANISH MUMKIN?",
      answer: "Ariza qoldiring va menejerlarimiz sizga qo‘ng‘iroq qilishadi. Tizimimizga kirish uchun maxsus login va parol beriladi.",
    },
    {
      question: "TO‘LOV QANDAY AMALGA OSHIRILADI?",
      answer: "To‘lovni Uzcard, Humo, Mastercard yoki Visa kartalari orqali xavfsiz tarzda amalga oshirish mumkin.",
    },
    {
      question: "O‘ZLASHTIRISH TARTIBI?",
      answer: "Birinchi navbatda dasturlash asoslarini o‘rganasiz. 1 oy vaqt beriladi, lekin 1 haftada ham tugatish mumkin. Hammasi sizning harakatingizga bog‘liq.",
    },
    {
      question: "MENI SOHAMGA TO‘G‘RI KELADIMI?",
      answer: "Kim bo‘lishingizdan qat’iy nazar, arab tilini o‘rganish kelajagingizga katta ta’sir qiladi. Ayniqsa sun’iy intellekt rivojlanayotgan davrda.",
    },
    {
      question: "USTOZ BO‘LADIMI?",
      answer: "Tizim sizning darajangizga mos savollar, testlar va loyihalar beradi. Qo‘shimcha ravishda Telegram guruhida 100+ kursdosh va tajribali ustozlar yordam berishadi.",
    },
    {
      question: "NIMALAR KERAK BO‘LADI?",
      answer: "Faqat internet va noutbuk (yoki kompyuter) yetarli. Mobil qurilmalar orqali ham darslarni kuzatish imkoniyati bor.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-16 md:py-24 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black mb-6 text-dark-navy"
          >
            Ko‘p beriladigan savollar
          </motion.h2>
          <p className="text-lg md:text-xl text-gray-400 font-medium font-medium">Sizda savollar bormi? Bizda javoblar bor.</p>
        </div>

        <div className="space-y-3 md:space-y-4">
          {faqData.map((item, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-2xl md:rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 md:px-8 md:py-7 flex justify-between items-center text-left transition"
              >
                <span className="font-bold text-base md:text-xl text-dark-navy pr-4 md:pr-6">{item.question}</span>
                <div className={`shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? "bg-primary text-white" : "bg-gray-100 text-gray-500"}`}>
                  {openIndex === index ? <ChevronUp className="w-5 h-5 md:w-6 md:h-6" /> : <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 md:px-8 md:pb-8 text-gray-500 text-base md:text-lg leading-relaxed font-medium">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
