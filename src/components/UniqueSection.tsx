import { Award, Zap, Users, Briefcase } from 'lucide-react';

const UniqueSection: React.FC = () => {
    return (
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Zap className="w-8 h-8 text-indigo-600" />
            <h2 className="text-3xl font-bold text-slate-800">
              What Makes Me Unique
            </h2>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-indigo-500">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              I bridge the gap between cutting-edge technology and real-world
              impact. With a unique combination of technical expertise,
              entrepreneurial mindset, and leadership experience, I transform
              complex problems into elegant solutions that drive meaningful
              change.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-800">
                  Innovation Driver
                </h3>
                <p className="text-sm text-slate-600">
                  Transforming ideas into scalable solutions
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-slate-800">Team Catalyst</h3>
                <p className="text-sm text-slate-600">
                  Inspiring collaboration and excellence
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Briefcase className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-slate-800">
                  Results Focused
                </h3>
                <p className="text-sm text-slate-600">
                  Delivering measurable impact consistently
                </p>
              </div>
            </div>
          </div>
        </section>
    );
};

export default UniqueSection;