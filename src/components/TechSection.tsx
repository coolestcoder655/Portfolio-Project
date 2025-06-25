import { Briefcase } from "lucide-react";

interface TechSectionProps {
    isOutOfCollege?: boolean;
}

const TechSection: React.FC<TechSectionProps> = ({ isOutOfCollege = false }) => {
    return (
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-8 h-8 text-indigo-600" />
            <h2 className="text-3xl font-bold text-slate-800">
              Technology & Innovation
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Featured Projects
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <a
                    href="https://ialfm-attendance.netlify.app"
                    className="font-semibold text-slate-700"
                  >
                    Local School Attendance App
                  </a>
                  <p className="text-sm text-slate-600 mb-2">
                    Lead Developer | 2025
                  </p>
                  <p className="text-slate-600">
                    Developed and deployed a comprehensive attendance management
                    system for a local educational institution, streamlining
                    their administrative processes and improving data accuracy.
                    The application continues to serve the organization daily,
                    demonstrating successful long-term solution delivery.
                  </p>
                </div>
                {isOutOfCollege && (
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-slate-700">Sun-Scope</h4>
                    <p className="text-sm text-slate-600 mb-2">
                      Full-Stack Engineer | 2025
                    </p>
                    <p className="text-slate-600">
                      Built IoT solution reducing energy consumption by 35%
                      across 200+ commercial buildings
                    </p>
                  </div>
                )}
                <div className="border-l-4 border-purple-500 pl-4">
                  <a
                    href="https://i-dazzle.netlify.app"
                    className="font-semibold text-slate-700"
                  >
                    I-Dazzle E-Commerce Platform
                  </a>
                  <p className="text-sm text-slate-600 mb-2">
                    Technical Lead | 2025
                  </p>
                  <p className="text-slate-600">
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
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Technical Skills
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">
                    Programming Languages
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "JavaScript", "TypeScript"].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">
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
                        className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                {isOutOfCollege && (
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-2">
                      Specializations
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["UI/UX Design", ""].map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium"
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