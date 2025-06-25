import { Mail, MapPin, Phone } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const HeroSection: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <section className={`py-16 transition-all duration-300 ${
      theme === 'dark' 
        ? 'bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950' 
        : 'bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900'
    } text-white`}>
        <div className="max-w-6xl px-6 mx-auto">
          <div className="flex flex-col items-center gap-8 lg:flex-row">
            <img
              src="/mugshot.jpeg"
              alt="Maaz Khokhar"
              className={`w-48 h-48 rounded-full shadow-lg border-4 transition-colors duration-300 ${
                theme === 'dark' ? 'border-slate-300' : 'border-white'
              }`}
            />
            <div className="text-center lg:text-left">
              <h1 className={`text-5xl font-bold mb-4 bg-gradient-to-r bg-clip-text text-transparent transition-colors duration-300 ${
                theme === 'dark' 
                  ? 'from-blue-300 to-indigo-300' 
                  : 'from-blue-400 to-indigo-400'
              }`}>
                Maaz Khokhar
              </h1>
              <p className={`text-xl mb-6 transition-colors duration-300 ${
                theme === 'dark' ? 'text-slate-200' : 'text-slate-300'
              }`}>
                Full-Stack Developer
              </p>
              <div className={`flex flex-wrap justify-center lg:justify-start gap-4 text-sm transition-colors duration-300 ${
                theme === 'dark' ? 'text-slate-200' : 'text-slate-300'
              }`}>
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