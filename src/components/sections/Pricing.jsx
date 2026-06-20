import { motion } from "framer-motion";
import { Clock, Calendar, Star, Phone, Check } from "lucide-react";

const Pricing = () => {
  const contactPhoneHref = "tel:+998935714230";
  const plans = [
    {
      months: "1 OY",
      price: "899 000",
      period: "so‘m",
      icon: <Clock className="w-10 h-10" />,
      highlight: false,
    },
    {
      months: "3 OY",
      price: "1 489 000",
      period: "so‘m",
      icon: <Calendar className="w-10 h-10" />,
      highlight: true,
      badge: "ENG MASHHUR",
    },
    {
      months: "6 OY",
      price: "2 679 000",
      period: "so‘m",
      icon: <Clock className="w-10 h-10" />,
      highlight: false,
    },
    {
      months: "1 YIL",
      price: "4 749 000",
      period: "so‘m",
      icon: <Calendar className="w-10 h-10" />,
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 px-7  bg-dark-navy text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 text-white"
          >
            To‘lov paketlari
          </motion.h2>
          <p className="text-lg md:text-xl text-gray-400 font-medium px-4">
            O‘zingizga qulay muddatni tanlang
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-3xl md:rounded-[40px] p-6 md:p-10 flex flex-col transition-all duration-300 ${plan.highlight
                ? "bg-gradient-to-br from-primary to-emerald-900 text-white shadow-2xl shadow-primary/30 scale-105 md:scale-105 z-10"
                : "bg-gray-50 border border-gray-100 text-dark-navy hover:shadow-xl hover:-translate-y-2"
                }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-primary text-xs font-black px-5 py-1.5 rounded-full border border-primary/10 shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                  <Star className="w-4 h-4 fill-current" /> {plan.badge}
                </div>
              )}

              <div className={`${plan.highlight ? "text-white/80" : "text-primary"} mb-6 md:mb-8`}>
                {plan.icon}
              </div>

              <p
                className={`font-black tracking-widest mb-3 md:mb-4 text-base md:text-lg ${plan.highlight ? "text-white/80" : "text-primary opacity-60"
                  }`}
              >
                {plan.months}
              </p>

              <div className="mb-6 md:mb-8">
                <span className="text-4xl md:text-5xl font-black tracking-tight">
                  {plan.price}
                </span>
                <p
                  className={`mt-1 text-sm md:text-base font-medium ${plan.highlight ? "text-white/70" : "text-gray-500"
                    }`}
                >
                  {plan.period}
                </p>
              </div>

              <div className="mb-8 md:mb-12 space-y-3 md:space-y-4 flex-1">
                {[1, 2, 3].map((_, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check
                      className={`w-5 h-5 flex-shrink-0 ${plan.highlight ? "text-white" : "text-primary"
                        }`}
                    />
                    <span
                      className={`text-sm font-semibold ${plan.highlight ? "text-white/80" : "text-gray-600"
                        }`}
                    >
                      Premium darsliklar
                    </span>
                  </div>
                ))}
              </div>

              <a
                href={contactPhoneHref}
                className={`mt-auto w-full py-4 md:py-5 rounded-2xl font-black text-base md:text-lg transition-all flex items-center justify-center gap-2.5 ${plan.highlight
                  ? "bg-white text-primary hover:bg-gray-100 shadow-xl"
                  : "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20"
                  }`}
              >
                Bog‘lanish <Phone className="w-5 h-5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
