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
              <Zap className="w-8 h-8 text-indigo-600" />
              <h2 className="text-3xl font-bold text-slate-800">
                Entrepreneurial Ventures
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  Founded Startups
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <h4 className="font-semibold text-slate-700">
                      EcoTech Solutions
                    </h4>
                    <p className="text-sm text-slate-600 mb-2">
                      Co-Founder & CTO • 2023-Present
                    </p>
                    <p className="text-slate-600">
                      $2M in funding raised, 50+ employees, revolutionizing
                      renewable energy storage
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-slate-700">StudySync</h4>
                    <p className="text-sm text-slate-600 mb-2">
                      Founder • 2022-2023
                    </p>
                    <p className="text-slate-600">
                      EdTech platform with 10K+ users, acquired by major
                      educational publisher
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-slate-700">
                      DevTools Pro
                    </h4>
                    <p className="text-sm text-slate-600 mb-2">
                      Co-Founder • 2021-2022
                    </p>
                    <p className="text-slate-600">
                      Developer productivity suite, $500K ARR before successful
                      exit
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  Investment & Advisory
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-700">
                      Angel Investor
                    </h4>
                    <p className="text-slate-600">
                      15+ early-stage investments in AI and sustainability
                      startups
                    </p>
                    <p className="text-sm text-slate-600">
                      3 successful exits, 2 unicorns in portfolio
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700">
                      Startup Accelerator Mentor
                    </h4>
                    <p className="text-slate-600">
                      Y Combinator, Techstars, 500 Startups
                    </p>
                    <p className="text-sm text-slate-600">
                      Mentored 50+ startups, $100M+ in follow-on funding
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700">
                      Innovation Consultant
                    </h4>
                    <p className="text-slate-600">
                      Fortune 500 digital transformation advisor
                    </p>
                    <p className="text-sm text-slate-600">
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