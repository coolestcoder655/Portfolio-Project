import { Zap } from 'lucide-react';

interface AthleticSectionProps {
    isOutOfCollege?: boolean;
}

const EntrepreuneurshipSection: React.FC<AthleticSectionProps> = ({ isOutOfCollege = false }) => {
    return (
        <>
            {isOutOfCollege && (
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Zap className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              <h2 className="text-3xl font-bold transition-colors duration-300 text-slate-800 dark:text-white">
                Entrepreneurial Ventures
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="p-6 transition-colors duration-300 bg-white shadow-lg dark:bg-slate-800 rounded-2xl">
                <h3 className="mb-4 text-xl font-semibold transition-colors duration-300 text-slate-800 dark:text-white">
                  Founded Startups
                </h3>
                <div className="space-y-4">
                  <div className="pl-4 border-l-4 border-emerald-500 dark:border-emerald-400">
                    <h4 className="font-semibold transition-colors duration-300 text-slate-700 dark:text-slate-200">
                      EcoTech Solutions
                    </h4>
                    <p className="mb-2 text-sm transition-colors duration-300 text-slate-600 dark:text-slate-400">
                      Co-Founder & CTO • 2023-Present
                    </p>
                    <p className="transition-colors duration-300 text-slate-600 dark:text-slate-300">
                      $2M in funding raised, 50+ employees, revolutionizing
                      renewable energy storage
                    </p>
                  </div>
                  <div className="pl-4 border-l-4 border-blue-500 dark:border-blue-400">
                    <h4 className="font-semibold transition-colors duration-300 text-slate-700 dark:text-slate-200">StudySync</h4>
                    <p className="mb-2 text-sm transition-colors duration-300 text-slate-600 dark:text-slate-400">
                      Founder • 2022-2023
                    </p>
                    <p className="transition-colors duration-300 text-slate-600 dark:text-slate-300">
                      EdTech platform with 10K+ users, acquired by major
                      educational publisher
                    </p>
                  </div>
                  <div className="pl-4 border-l-4 border-purple-500 dark:border-purple-400">
                    <h4 className="font-semibold transition-colors duration-300 text-slate-700 dark:text-slate-200">
                      DevTools Pro
                    </h4>
                    <p className="mb-2 text-sm transition-colors duration-300 text-slate-600 dark:text-slate-400">
                      Co-Founder • 2021-2022
                    </p>
                    <p className="transition-colors duration-300 text-slate-600 dark:text-slate-300">
                      Developer productivity suite, $500K ARR before successful
                      exit
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 transition-colors duration-300 bg-white shadow-lg dark:bg-slate-800 rounded-2xl">
                <h3 className="mb-4 text-xl font-semibold transition-colors duration-300 text-slate-800 dark:text-white">
                  Investment & Advisory
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold transition-colors duration-300 text-slate-700 dark:text-slate-200">
                      Angel Investor
                    </h4>
                    <p className="transition-colors duration-300 text-slate-600 dark:text-slate-300">
                      15+ early-stage investments in AI and sustainability
                      startups
                    </p>
                    <p className="text-sm transition-colors duration-300 text-slate-600 dark:text-slate-400">
                      3 successful exits, 2 unicorns in portfolio
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold transition-colors duration-300 text-slate-700 dark:text-slate-200">
                      Startup Accelerator Mentor
                    </h4>
                    <p className="transition-colors duration-300 text-slate-600 dark:text-slate-300">
                      Y Combinator, Techstars, 500 Startups
                    </p>
                    <p className="text-sm transition-colors duration-300 text-slate-600 dark:text-slate-400">
                      Mentored 50+ startups, $100M+ in follow-on funding
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold transition-colors duration-300 text-slate-700 dark:text-slate-200">
                      Innovation Consultant
                    </h4>
                    <p className="transition-colors duration-300 text-slate-600 dark:text-slate-300">
                      Fortune 500 digital transformation advisor
                    </p>
                    <p className="text-sm transition-colors duration-300 text-slate-600 dark:text-slate-400">
                      Led innovation workshops for 20+ enterprises
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        </>
    );
};

export default EntrepreuneurshipSection;