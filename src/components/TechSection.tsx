import { Briefcase } from "lucide-react";
import { useTheme } from '../contexts/ThemeContext';

interface TechSectionProps {
    isOutOfCollege?: boolean;
}

const TechSection: React.FC<TechSectionProps> = ({ isOutOfCollege = false }) => {
    const { theme } = useTheme();
    
    return (
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className={`w-8 h-8 transition-colors duration-300 ${
              theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'
            }`} />
            <h2 className={`text-3xl font-bold transition-colors duration-300 ${
              theme === 'dark' ? 'text-white' : 'text-slate-800'
            }`}>
              Technology & Innovation
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className={`rounded-2xl shadow-lg p-6 transition-all duration-300 ${
              theme === 'dark' ? 'bg-slate-800' : 'bg-white'
            }`}>
              <h3 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
                theme === 'dark' ? 'text-white' : 'text-slate-800'
              }`}>
                Featured Projects
              </h3>
              <div className="space-y-4">
                <div className={`border-l-4 pl-4 transition-colors duration-300 ${
                  theme === 'dark' ? 'border-blue-400' : 'border-blue-500'
                }`}>
                  <a
                    href="https://ialfm-attendance.netlify.app"
                    className={`font-semibold transition-colors duration-300 ${
                      theme === 'dark' 
                        ? 'text-slate-200 hover:text-blue-400' 
                        : 'text-slate-700 hover:text-blue-600'
                    }`}
                  >
                    Local School Attendance App
                  </a>
                  <p className={`text-sm mb-2 transition-colors duration-300 ${
                    theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    Lead Developer | 2025
                  </p>
                  <p className={`transition-colors duration-300 ${
                    theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    Developed and deployed a comprehensive attendance management
                    system for a local educational institution, streamlining
                    their administrative processes and improving data accuracy.
                    The application continues to serve the organization daily,
                    demonstrating successful long-term solution delivery.
                  </p>
                </div>
                {isOutOfCollege && (
                  <div className={`border-l-4 pl-4 transition-colors duration-300 ${
                    theme === 'dark' ? 'border-green-400' : 'border-green-500'
                  }`}>
                    <h4 className={`font-semibold transition-colors duration-300 ${
                      theme === 'dark' ? 'text-slate-200' : 'text-slate-700'
                    }`}>Sun-Scope</h4>
                    <p className={`text-sm mb-2 transition-colors duration-300 ${
                      theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      Full-Stack Engineer | 2025
                    </p>
                    <p className={`transition-colors duration-300 ${
                      theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      Built IoT solution reducing energy consumption by 35%
                      across 200+ commercial buildings
                    </p>
                  </div>
                )}
                <div className={`border-l-4 pl-4 transition-colors duration-300 ${
                  theme === 'dark' ? 'border-purple-400' : 'border-purple-500'
                }`}>
                  <a
                    href="https://i-dazzle.netlify.app"
                    className={`font-semibold transition-colors duration-300 ${
                      theme === 'dark' 
                        ? 'text-slate-200 hover:text-purple-400' 
                        : 'text-slate-700 hover:text-purple-600'
                    }`}
                  >
                    I-Dazzle E-Commerce Platform
                  </a>
                  <p className={`text-sm mb-2 transition-colors duration-300 ${
                    theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    Technical Lead | 2025
                  </p>
                  <p className={`transition-colors duration-300 ${
                    theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    Architected and developed a custom e-commerce platform for a
                    luxury bag retailer, enabling direct-to-consumer sales and
                    reducing third-party marketplace dependency. Implemented
                    responsive design, secure payment processing, and inventory
                    management features to support business growth and brand
                    independence.
                  </p>
                </div>
              </div>
            </div>
            <div className={`rounded-2xl shadow-lg p-6 transition-all duration-300 ${
              theme === 'dark' ? 'bg-slate-800' : 'bg-white'
            }`}>
              <h3 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
                theme === 'dark' ? 'text-white' : 'text-slate-800'
              }`}>
                Technical Skills
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className={`font-semibold mb-2 transition-colors duration-300 ${
                    theme === 'dark' ? 'text-slate-200' : 'text-slate-700'
                  }`}>
                    Programming Languages
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "JavaScript", "TypeScript"].map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${
                          theme === 'dark' 
                            ? 'bg-blue-900/30 text-blue-300' 
                            : 'bg-blue-100 text-blue-800'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className={`font-semibold mb-2 transition-colors duration-300 ${
                    theme === 'dark' ? 'text-slate-200' : 'text-slate-700'
                  }`}>
                    Frameworks & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React",
                      "React Native",
                      "Docker",
                      "React Native",
                      "TailwindCSS",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${
                          theme === 'dark' 
                            ? 'bg-green-900/30 text-green-300' 
                            : 'bg-green-100 text-green-800'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                {isOutOfCollege && (
                  <div>
                    <h4 className={`font-semibold mb-2 transition-colors duration-300 ${
                      theme === 'dark' ? 'text-slate-200' : 'text-slate-700'
                    }`}>
                      Specializations
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["UI/UX Design", ""].map((skill) => (
                        <span
                          key={skill}
                          className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${
                            theme === 'dark' 
                              ? 'bg-purple-900/30 text-purple-300' 
                              : 'bg-purple-100 text-purple-800'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
    );
};

export default TechSection;