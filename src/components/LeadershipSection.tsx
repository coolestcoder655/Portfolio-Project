import { Users } from 'lucide-react';

interface LeadershipSectionProps {
    isOutOfCollege?: boolean;
}

const LeadershipSection: React.FC<LeadershipSectionProps> = ({ isOutOfCollege = false }) => {
    return (
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-8 h-8 text-indigo-600" />
            <h2 className="text-3xl font-bold text-slate-800">
              Leadership & Service
            </h2>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-6">
                  Leadership Roles
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-700">
                      NJHS Inductee
                    </h4>
                    <p className="text-slate-600">
                      National Junior Honor Society Inductee • 2024
                    </p>
                    <p className="text-sm text-slate-600">
                      Recognized for academic excellence, leadership, and
                      community service in middle school
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700">
                      "Fabulous Falcon" Award
                    </h4>
                    <p className="text-slate-600">
                      Forestwood Middle School • 2024
                    </p>
                    <p className="text-sm text-slate-600">
                      Awarded for outstanding contributions to school community
                      and leadership in student activities
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700">
                      Peer Learning Mentor
                    </h4>
                    <p className="text-slate-600">
                      Forestwood Middle School • 2023-2024
                    </p>
                    <p className="text-sm text-slate-600">
                      Mentored 50+ students in computer science fundamentals,
                      fostering a collaborative learning environment
                    </p>
                  </div>
                </div>
              </div>
              {isOutOfCollege && (
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-6">
                    Community Service
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-700">
                        Code for Good Volunteer
                      </h4>
                      <p className="text-slate-600">
                        2020-Present • 500+ hours
                      </p>
                      <p className="text-sm text-slate-600">
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