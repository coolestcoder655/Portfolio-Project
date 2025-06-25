import { Award, Zap, Users, Briefcase } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const UniqueSection: React.FC = () => {
    const { theme } = useTheme();
    
    return (
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Zap className={`w-8 h-8 transition-colors duration-300 ${
              theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'
            }`} />
            <h2 className={`text-3xl font-bold transition-colors duration-300 ${
              theme === 'dark' ? 'text-white' : 'text-slate-800'
            }`}>
              What Makes Me Unique
            </h2>
          </div>
          <div className={`rounded-2xl shadow-lg p-8 border-l-4 transition-all duration-300 ${
            theme === 'dark' 
              ? 'bg-slate-800 border-indigo-400' 
              : 'bg-white border-indigo-500'
          }`}>
            <p className={`text-lg leading-relaxed mb-6 transition-colors duration-300 ${
              theme === 'dark' ? 'text-slate-200' : 'text-slate-700'
            }`}>
              I bridge the gap between cutting-edge technology and real-world
              impact. With a unique combination of technical expertise,
              entrepreneurial mindset, and leadership experience, I transform
              complex problems into elegant solutions that drive meaningful
              change.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 transition-colors duration-300 ${
                  theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100'
                }`}>
                  <Award className={`w-8 h-8 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
                </div>
                <h3 className={`font-semibold transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-800'
                }`}>
                  Innovation Driver
                </h3>
                <p className={`text-sm transition-colors duration-300 ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  Transforming ideas into scalable solutions
                </p>
              </div>
              <div className="text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 transition-colors duration-300 ${
                  theme === 'dark' ? 'bg-green-900/30' : 'bg-green-100'
                }`}>
                  <Users className={`w-8 h-8 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} />
                </div>
                <h3 className={`font-semibold transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-800'
                }`}>Team Catalyst</h3>
                <p className={`text-sm transition-colors duration-300 ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  Inspiring collaboration and excellence
                </p>
              </div>
              <div className="text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 transition-colors duration-300 ${
                  theme === 'dark' ? 'bg-purple-900/30' : 'bg-purple-100'
                }`}>
                  <Briefcase className={`w-8 h-8 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`} />
                </div>
                <h3 className={`font-semibold transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-800'
                }`}>
                  Results Focused
                </h3>
                <p className={`text-sm transition-colors duration-300 ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  Delivering measurable impact consistently
                </p>
              </div>
            </div>
          </div>
        </section>
    );
};

export default UniqueSection;