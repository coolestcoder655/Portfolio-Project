import { Users } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface LeadershipSectionProps {
    isOutOfCollege?: boolean;
}

const LeadershipSection: React.FC<LeadershipSectionProps> = ({ isOutOfCollege = false }) => {
    const { theme } = useTheme();
    
    return (
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Users className={`w-8 h-8 transition-colors duration-300 ${
              theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'
            }`} />
            <h2 className={`text-3xl font-bold transition-colors duration-300 ${
              theme === 'dark' ? 'text-white' : 'text-slate-800'
            }`}>
              Leadership & Service
            </h2>
          </div>
          <div className={`rounded-2xl shadow-lg p-8 transition-all duration-300 ${
            theme === 'dark' ? 'bg-slate-800' : 'bg-white'
          }`}>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className={`text-xl font-semibold mb-6 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-800'
                }`}>
                  Leadership Roles
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold transition-colors duration-300 text-slate-700 dark:text-slate-200">
                      NJHS Inductee
                    </h4>
                    <p className="transition-colors duration-300 text-slate-600 dark:text-slate-300">
                      National Junior Honor Society Inductee • 2024
                    </p>
                    <p className="text-sm transition-colors duration-300 text-slate-600 dark:text-slate-400">
                      Recognized for academic excellence, leadership, and
                      community service in middle school
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold transition-colors duration-300 text-slate-700 dark:text-slate-200">
                      "Fabulous Falcon" Award
                    </h4>
                    <p className="transition-colors duration-300 text-slate-600 dark:text-slate-300">
                      Forestwood Middle School • 2024
                    </p>
                    <p className="text-sm transition-colors duration-300 text-slate-600 dark:text-slate-400">
                      Awarded for outstanding contributions to school community
                      and leadership in student activities
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold transition-colors duration-300 text-slate-700 dark:text-slate-200">
                      Peer Learning Mentor
                    </h4>
                    <p className="transition-colors duration-300 text-slate-600 dark:text-slate-300">
                      Forestwood Middle School • 2023-2024
                    </p>
                    <p className="text-sm transition-colors duration-300 text-slate-600 dark:text-slate-400">
                      Mentored 50+ students in computer science fundamentals,
                      fostering a collaborative learning environment
                    </p>
                  </div>
                </div>
              </div>
              {isOutOfCollege && (
                <div>
                  <h3 className="mb-6 text-xl font-semibold transition-colors duration-300 text-slate-800 dark:text-white">
                    Community Service
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold transition-colors duration-300 text-slate-700 dark:text-slate-200">
                        Code for Good Volunteer
                      </h4>
                      <p className="transition-colors duration-300 text-slate-600 dark:text-slate-300">
                        2020-Present • 500+ hours
                      </p>
                      <p className="text-sm transition-colors duration-300 text-slate-600 dark:text-slate-400">
                        Built digital solutions for 10+ nonprofits, impacting
                        10,000+ lives
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
    );
};

export default LeadershipSection;