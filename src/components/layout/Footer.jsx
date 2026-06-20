import { Send, Phone, Mail, MapPin } from "lucide-react";
import usuliyaWhite from "../../assets/usuliyaWhite.png"

const InstagramIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const YouTubeIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.7 12 3.7 12 3.7s-7.5 0-9.4.4A3 3 0 0 0 .5 6.2 31.7 31.7 0 0 0 0 12a31.7 31.7 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.4 9.4.4 9.4.4s7.5 0 9.4-.4a3 3 0 0 0 2.1-2.1A31.7 31.7 0 0 0 24 12a31.7 31.7 0 0 0-.5-5.8ZM9.6 15.2V8.8L15.8 12l-6.2 3.2Z" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const mapsUrl = "https://maps.app.goo.gl/4V8w5hqQ6sCAdoLB9";
  const addressText = "Toshkent shahri";
  const contactPhone = "+998 93 571 42 30";
  const contactPhoneHref = "tel:+998935714230";
  const telegramUrl = "https://t.me/usuliya";
  const instagramUrl = "https://www.instagram.com/usuliya.uz";
  const youtubeUrl = "https://youtube.com/@ibrohim_tizim_franshiza";

  return (
    <footer className="bg-dark-navy text-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 text-center md:text-left">
          <div className="lg:col-span-2">
            <div className="flex flex-col items-center md:items-start">
              <img src={usuliyaWhite} alt="usuliya" className="w-36 h-12 mb-2  sm:w-40 sm:h-14 md:w-[200px] md:h-[70px] object-contain" />
              <p className="text-gray-400 text-lg leading-relaxed max-w-md mb-10 mx-auto md:mx-0">
                Biz bilan arab tilini va zamonaviy bilimlarni noldan o‘rganing. Kelajagingizni bugundan quring.
              </p>
            </div>
            <div className="flex justify-center md:justify-start gap-6">
              <a href={telegramUrl} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-sky-500 transition-colors hover:-translate-y-2">
                <Send className="w-6 h-6" />
              </a>
              <a href={instagramUrl} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-pink-600 transition-colors hover:-translate-y-2">
                <InstagramIcon className="w-6 h-6" />
              </a>
              <a href={youtubeUrl} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-600 transition-colors hover:-translate-y-2">
                <YouTubeIcon className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-8">Aloqa</h3>
            <ul className="space-y-6 text-gray-400 text-lg">
              <li className="flex items-center justify-center md:justify-start gap-4">
                <Phone className="w-5 h-5 text-white/80" />
                <a href={contactPhoneHref} className="hover:text-white transition-colors">
                  {contactPhone}
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-4">
                <Mail className="w-5 h-5 text-white/80" />
                <span>info@arabiya.uz</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-4">
                <MapPin className="w-5 h-5 text-white/80" />
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors break-words whitespace-normal"
                >
                  {addressText}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-8">Tezkor havolalar</h3>
            <ul className="space-y-6 text-gray-400 text-lg">
              <li><a href="#who-is-for" className="hover:text-white transition-colors">Siz uchun</a></li>
              <li><a href="#curriculum" className="hover:text-white transition-colors">Dastur</a></li>
              <li><a href="#results" className="hover:text-white transition-colors">Natijalar</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Narxlar</a></li>
              <li>
                <a
                  href="/privacy.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Privacy policy
                </a>
              </li>
              <li>
                <a
                  href="/eng-privacy.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  English privacy policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-500 text-sm font-medium">
            © {currentYear} USULIYA. Barcha huquqlar himoyalangan.
          </p>
          <div className="text-xl font-black text-white/80">
            BIZ BILAN YANGI DUNYO YARATING
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
