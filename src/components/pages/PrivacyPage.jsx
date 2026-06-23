import usuliyaLogo from "../../assets/usuliya.png";

const LAST_UPDATED = {
  uz: "2026-yil 23-iyun",
  en: "June 23, 2026",
};

const CONTACTS = {
  email: "info@arabiya.uz",
  phone: "+998 93 571 42 30",
  phoneHref: "tel:+998935714230",
  addressUz: "Toshkent shahri, O‘zbekiston",
  addressEn: "Tashkent, Uzbekistan",
};

const CONTENT = {
  uz: {
    docLang: "uz",
    homeLabel: "← Bosh sahifa",
    switchHref: "/eng-privacy",
    switchLabel: "English",
    title: "Maxfiylik siyosati",
    updatedLabel: "Oxirgi yangilanish",
    intro:
      "Ushbu Maxfiylik siyosati “Arabic And ACCA” (keyingi o‘rinlarda — “Biz”, “Ijrochi”) tomonidan boshqariladigan USULIYA ta’lim platformasi va mobil ilovasidan foydalanuvchilarning shaxsiy ma’lumotlari qanday yig‘ilishi, ishlatilishi, saqlanishi va himoyalanishini tushuntiradi. Platformadan foydalanish, ro‘yxatdan o‘tish yoki to‘lovni amalga oshirish orqali foydalanuvchi ushbu siyosatga rozilik bildiradi.",
    sections: [
      {
        heading: "1. Biz yig‘adigan ma’lumotlar",
        body: [
          "Xizmatni taqdim etish uchun quyidagi ma’lumotlarni yig‘ishimiz mumkin:",
        ],
        list: [
          "Hisob ma’lumotlari: ism, telefon raqami, elektron pochta manzili va parol (shifrlangan holda saqlanadi).",
          "To‘lov ma’lumotlari: to‘lovlar tashqi to‘lov tizimlari orqali amalga oshiriladi. Biz to‘liq bank kartasi raqamlarini saqlamaymiz.",
          "Foydalanish ma’lumotlari: ko‘rilgan darslar, test natijalari, kurslar bo‘yicha jarayon va platformadagi faollik.",
          "Texnik ma’lumotlar: qurilma turi, operatsion tizim versiyasi, IP-manzil va ilova ishidagi xatoliklar (loglar).",
        ],
      },
      {
        heading: "2. Ma’lumotlardan foydalanish maqsadlari",
        body: ["Yig‘ilgan ma’lumotlardan faqat quyidagi maqsadlarda foydalanamiz:"],
        list: [
          "Xizmatni taqdim etish va akkauntni boshqarish.",
          "To‘lovlarni qayta ishlash va sotib olingan kurslarni faollashtirish.",
          "O‘quv jarayonini shaxsiylashtirish va xizmat sifatini yaxshilash.",
          "Texnik qo‘llab-quvvatlash ko‘rsatish va muhim xabarnomalarni yuborish.",
          "Qonun hujjatlari talablarini bajarish.",
        ],
      },
      {
        heading: "3. Ma’lumotlarni uchinchi tomonlar bilan ulashish",
        body: [
          "Biz foydalanuvchilarning shaxsiy ma’lumotlarini sotmaymiz va ijaraga bermaymiz. Ma’lumotlar faqat quyidagi hollarda ulashilishi mumkin:",
        ],
        list: [
          "Xizmat ko‘rsatish uchun zarur bo‘lgan ishonchli provayderlar bilan: to‘lov tizimlari, hosting/server provayderlari va analitika xizmatlari.",
          "O‘zbekiston Respublikasi qonunchiligi talab qilgan hollarda vakolatli davlat organlariga.",
        ],
      },
      {
        heading: "4. Ma’lumotlarni saqlash va xavfsizlik",
        body: [
          "Shaxsiy ma’lumotlaringizni himoya qilish uchun zamonaviy texnik va tashkiliy choralarni qo‘llaymiz (shifrlash, kirishni cheklash, server xavfsizligi). Ma’lumotlar xizmat ko‘rsatish uchun zarur bo‘lgan muddat davomida yoki qonun talab qilgan muddatgacha saqlanadi.",
        ],
      },
      {
        heading: "5. Foydalanuvchining huquqlari va ma’lumotlarni o‘chirish",
        body: [
          "Siz o‘z shaxsiy ma’lumotlaringizga kirish, ularni tuzatish yoki o‘chirishni so‘rash huquqiga egasiz. Akkauntingizni va u bilan bog‘liq ma’lumotlarni o‘chirish uchun " +
            CONTACTS.email +
            " manziliga murojaat qiling — so‘rov qonuniy muddatlarda ko‘rib chiqiladi.",
        ],
      },
      {
        heading: "6. Bolalar maxfiyligi",
        body: [
          "Platforma kamida 13 yoshdagi foydalanuvchilar uchun mo‘ljallangan. Biz 13 yoshga to‘lmagan bolalardan ota-onaning roziligisiz ataylab shaxsiy ma’lumot yig‘maymiz. Agar bunday ma’lumot bizga yetib kelgani aniqlansa, uni o‘chirib tashlaymiz.",
        ],
      },
      {
        heading: "7. Cookie va shunga o‘xshash texnologiyalar",
        body: [
          "Veb-saytda sessiyani saqlash va xizmat ishini ta’minlash uchun cookie fayllaridan va shunga o‘xshash texnologiyalardan foydalanishimiz mumkin. Brauzer sozlamalari orqali cookie’larni boshqarishingiz mumkin.",
        ],
      },
      {
        heading: "8. Siyosatga o‘zgartirish kiritish",
        body: [
          "Biz ushbu Maxfiylik siyosatini istalgan vaqtda yangilash huquqiga egamiz. Yangilangan versiya ushbu sahifada e’lon qilingan paytdan boshlab kuchga kiradi. Yuqoridagi “Oxirgi yangilanish” sanasini muntazam tekshirib turishni tavsiya qilamiz.",
        ],
      },
      {
        heading: "9. Biz bilan bog‘lanish",
        body: [
          "Maxfiylik siyosati yoki ma’lumotlaringiz yuzasidan savollaringiz bo‘lsa, biz bilan bog‘laning:",
        ],
        contact: true,
      },
    ],
  },
  en: {
    docLang: "en",
    homeLabel: "← Home",
    switchHref: "/privacy",
    switchLabel: "O‘zbekcha",
    title: "Privacy Policy",
    updatedLabel: "Last updated",
    intro:
      "This Privacy Policy explains how the USULIYA educational platform and mobile application, operated by “Arabic And ACCA” (hereinafter “We”, “the Provider”), collects, uses, stores and protects users’ personal data. By using the platform, registering, or making a payment, the user agrees to this Policy.",
    sections: [
      {
        heading: "1. Information we collect",
        body: ["To provide our service, we may collect the following information:"],
        list: [
          "Account data: name, phone number, email address and password (stored in encrypted form).",
          "Payment data: payments are processed through external payment systems. We do not store full bank card numbers.",
          "Usage data: lessons viewed, test results, course progress and activity on the platform.",
          "Technical data: device type, operating system version, IP address and application error reports (logs).",
        ],
      },
      {
        heading: "2. How we use your information",
        body: ["We use the collected information only for the following purposes:"],
        list: [
          "To provide the service and manage your account.",
          "To process payments and activate purchased courses.",
          "To personalize the learning experience and improve service quality.",
          "To provide technical support and send important notifications.",
          "To comply with legal requirements.",
        ],
      },
      {
        heading: "3. Sharing information with third parties",
        body: [
          "We do not sell or rent users’ personal data. Information may be shared only in the following cases:",
        ],
        list: [
          "With trusted providers necessary to deliver the service: payment systems, hosting/server providers and analytics services.",
          "With authorized government bodies where required by the legislation of the Republic of Uzbekistan.",
        ],
      },
      {
        heading: "4. Data storage and security",
        body: [
          "We apply modern technical and organizational measures to protect your personal data (encryption, access control, server security). Data is retained for as long as necessary to provide the service or as required by law.",
        ],
      },
      {
        heading: "5. Your rights and data deletion",
        body: [
          "You have the right to access, correct, or request deletion of your personal data. To delete your account and the data associated with it, please contact us at " +
            CONTACTS.email +
            " — your request will be processed within the legally required timeframe.",
        ],
      },
      {
        heading: "6. Children’s privacy",
        body: [
          "The platform is intended for users aged 13 and above. We do not knowingly collect personal data from children under 13 without parental consent. If we become aware that such data has reached us, we will delete it.",
        ],
      },
      {
        heading: "7. Cookies and similar technologies",
        body: [
          "On the website we may use cookies and similar technologies to maintain your session and ensure the service works correctly. You can manage cookies through your browser settings.",
        ],
      },
      {
        heading: "8. Changes to this Policy",
        body: [
          "We reserve the right to update this Privacy Policy at any time. The updated version takes effect once published on this page. We recommend checking the “Last updated” date above periodically.",
        ],
      },
      {
        heading: "9. Contact us",
        body: [
          "If you have any questions about this Privacy Policy or your data, please contact us:",
        ],
        contact: true,
      },
    ],
  },
};

const ContactBlock = ({ lang }) => (
  <ul className="mt-3 space-y-2 text-base text-dark-navy/80">
    <li>
      <span className="font-medium text-dark-navy">Email:</span>{" "}
      <a href={`mailto:${CONTACTS.email}`} className="text-primary hover:underline">
        {CONTACTS.email}
      </a>
    </li>
    <li>
      <span className="font-medium text-dark-navy">{lang === "uz" ? "Telefon" : "Phone"}:</span>{" "}
      <a href={CONTACTS.phoneHref} className="text-primary hover:underline">
        {CONTACTS.phone}
      </a>
    </li>
    <li>
      <span className="font-medium text-dark-navy">{lang === "uz" ? "Manzil" : "Address"}:</span>{" "}
      {lang === "uz" ? CONTACTS.addressUz : CONTACTS.addressEn}
    </li>
  </ul>
);

const PrivacyPage = ({ lang = "uz" }) => {
  const data = CONTENT[lang] ?? CONTENT.uz;

  return (
    <div className="min-h-screen bg-life-white font-roboto text-dark-navy">
      <header className="border-b border-dark-navy/10 bg-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-5">
          <a href="/" className="flex items-center gap-3">
            <img src={usuliyaLogo} alt="USULIYA" className="h-9 w-auto object-contain" />
          </a>
          <div className="flex items-center gap-5 text-sm font-medium">
            <a href="/" className="text-dark-navy/70 transition-colors hover:text-primary">
              {data.homeLabel}
            </a>
            <a
              href={data.switchHref}
              className="rounded-full border border-primary/30 px-4 py-1.5 text-primary transition-colors hover:bg-primary hover:text-white"
            >
              {data.switchLabel}
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <h1 className="text-3xl font-bold text-dark-navy md:text-4xl">{data.title}</h1>
        <p className="mt-3 text-sm text-dark-navy/50">
          {data.updatedLabel}: {LAST_UPDATED[lang] ?? LAST_UPDATED.uz}
        </p>

        <p className="mt-8 text-base leading-relaxed text-dark-navy/80">{data.intro}</p>

        <div className="mt-10 space-y-10">
          {data.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-bold text-dark-navy md:text-2xl">{section.heading}</h2>
              {section.body?.map((paragraph, idx) => (
                <p key={idx} className="mt-3 text-base leading-relaxed text-dark-navy/80">
                  {paragraph}
                </p>
              ))}
              {section.list && (
                <ul className="mt-4 space-y-3">
                  {section.list.map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-base leading-relaxed text-dark-navy/80">
                      <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {section.contact && <ContactBlock lang={lang} />}
            </section>
          ))}
        </div>

        <footer className="mt-16 border-t border-dark-navy/10 pt-6 text-sm text-dark-navy/50">
          © {new Date().getFullYear()} USULIYA · Arabic And ACCA.{" "}
          {lang === "uz" ? "Barcha huquqlar himoyalangan." : "All rights reserved."}
        </footer>
      </main>
    </div>
  );
};

export default PrivacyPage;
