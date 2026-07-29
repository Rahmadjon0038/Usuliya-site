import { useState } from "react";
import { motion } from "framer-motion";
import { Clock3, MapPin, Phone, Send, MessageSquare, ArrowUpRight } from "lucide-react";

const ContactUs = ({ content }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
  });

  const contactPhone = "+998 93 571 42 30";
  const contactPhoneHref = "tel:+998935714230";
  const telegramUrl = "https://t.me/usuliya";
  const mapsUrl = "https://maps.app.goo.gl/4V8w5hqQ6sCAdoLB9";
  const addressText = "Toshkent shahri";

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
      const response = await fetch("https://api.usuliya.uz/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(content.error);
      }

      setSubmitSuccess(content.success);
      setFormData({
        fullName: "",
        phone: "",
        address: "",
      });
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : content.error
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-us" className="relative overflow-hidden bg-life-white px-6 py-20 md:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[22rem] w-[22rem] rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[36px] bg-dark-navy p-8 text-white shadow-2xl md:p-12"
        >
          <span className="mb-5 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-white/70">
            {content.badge}
          </span>
          <h2 className="text-3xl font-black leading-tight md:text-5xl">
            {content.title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            {content.subtitle}
          </p>

          <div className="mt-10 space-y-4">
            <a
              href={contactPhoneHref}
              className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 px-5 py-4 transition hover:border-primary/40 hover:bg-white/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-white/55">{content.phone}</p>
                <p className="font-bold">{contactPhone}</p>
              </div>
            </a>

            <a
              href={telegramUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 px-5 py-4 transition hover:border-primary/40 hover:bg-white/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500 text-white">
                <Send className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-white/55">{content.telegram}</p>
                <p className="font-bold">@usuliya</p>
              </div>
            </a>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 px-5 py-4 transition hover:border-primary/40 hover:bg-white/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500 text-white">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-white/55">{content.address}</p>
                <p className="font-bold">{addressText}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 px-5 py-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500 text-white">
                <Clock3 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-white/55">{content.hours}</p>
                <p className="font-bold">{content.hoursValue}</p>
              </div>
            </div>
          </div>

          <a
            href="#results"
            className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-6 py-4 font-bold text-white transition hover:border-primary/40 hover:bg-white/10"
          >
            {content.primaryLink}
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-[36px] border border-primary/10 bg-white p-8 shadow-2xl shadow-primary/5 md:p-12"
        >
          <div className="mb-8">
            <span className="mb-4 inline-flex rounded-full bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-primary">
              {content.formBadge}
            </span>
            <h3 className="text-2xl font-black text-dark-navy md:text-4xl">
              {content.formTitle}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
              {content.formSubtitle}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-bold text-dark-navy">
                {content.fullName}
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder={content.placeholders.fullName}
                className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-dark-navy outline-none transition focus:border-primary focus:bg-white"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-dark-navy">
                {content.phoneField}
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={content.placeholders.phone}
                className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-dark-navy outline-none transition focus:border-primary focus:bg-white"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-dark-navy">
                {content.addressField}
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder={content.placeholders.address}
                rows="4"
                className="w-full resize-none rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-dark-navy outline-none transition focus:border-primary focus:bg-white"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 font-black text-white transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:bg-primary/60"
            >
              <MessageSquare className="h-5 w-5" />
              {isSubmitting ? content.sending : content.submit}
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
      </div>
    </section>
  );
};

export default ContactUs;
