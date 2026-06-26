import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import arabOffice from "../../assets/results/arab_office.png";
import quranStudent from "../../assets/results/quran_student.png";
import successTeam from "../../assets/results/success_team.png";

const Results = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
  });

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

  const closeModal = () => {
    setIsModalOpen(false);
    setSubmitError("");
    setSubmitSuccess("");
  };

  useEffect(() => {
    if (!isModalOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitError("");
    setSubmitSuccess("");
    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:3333/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Lead yuborishda xatolik yuz berdi");
      }

      const createdLead = await response.json();
      console.log("Yuborilgan lead:", createdLead);
      setSubmitSuccess("Ma'lumotlaringiz yuborildi.");
      setFormData({
        fullName: "",
        phone: "",
        address: "",
      });

      window.setTimeout(() => {
        closeModal();
      }, 900);
    } catch (error) {
      console.error("Lead yuborilmadi:", error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Lead yuborishda xatolik yuz berdi"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

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
            onClick={() => setIsModalOpen(true)}
            className="relative z-10 bg-white text-primary px-10 py-5 rounded-2xl font-black text-lg md:text-xl shadow-2xl shadow-black/20"
          >
            KURSGA YOZILISH
          </motion.button>
          
          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-navy/70 backdrop-blur-md"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-xl rounded-[32px] bg-white p-6 md:p-8 shadow-2xl"
            >
              <button
                type="button"
                onClick={closeModal}
                className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-dark-navy transition-colors hover:bg-gray-200"
                aria-label="Modalni yopish"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="mb-6 pr-12">
                <p className="text-sm font-bold tracking-[0.2em] text-primary uppercase">
                  Kursga yozilish
                </p>
                <h3 className="mt-3 text-2xl md:text-3xl font-black text-dark-navy">
                  Ma'lumotlaringizni qoldiring
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-bold text-dark-navy">
                    Ism familiya
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Masalan: Ali Valiyev"
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-dark-navy outline-none transition focus:border-primary focus:bg-white"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-dark-navy">
                    Telefon raqam
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+998 90 123 45 67"
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-dark-navy outline-none transition focus:border-primary focus:bg-white"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-dark-navy">
                    Manzil
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Shahar, tuman, ko'cha"
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-dark-navy outline-none transition focus:border-primary focus:bg-white"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 inline-flex w-full items-center justify-center rounded-2xl bg-primary px-6 py-4 font-black text-white transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:bg-primary/60"
                >
                  {isSubmitting ? "Yuborilmoqda..." : "Ma'lumotlarni yozib yuborish"}
                </button>
                {submitError && (
                  <p className="text-sm font-medium text-red-600">{submitError}</p>
                )}
                {submitSuccess && (
                  <p className="text-sm font-medium text-emerald-600">
                    {submitSuccess}
                  </p>
                )}
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Results;
