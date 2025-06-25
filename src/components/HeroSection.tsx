import { Mail, MapPin, Phone } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <img
              src="/mugshot.jpeg"
              alt="Maaz Khokhar"
              className="w-48 h-48 rounded-full shadow-lg border-4 border-white"
            />
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Maaz Khokhar
              </h1>
              <p className="text-xl text-slate-300 mb-6">
                Full-Stack Developer
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  khokharmaaz@gmail.com
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  (214) 732-2569
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Dallas, TX
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
};

export default HeroSection;