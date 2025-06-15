import { Code, Trophy } from "lucide-react";

interface TechSectionProps {
  isDarkMode: boolean;
  scrollToSection: (sectionId: string) => void;
  textClasses: string;
  cardClasses: string;
}

const TechSection = ({
  isDarkMode,
  scrollToSection,
  textClasses,
  cardClasses,
}: TechSectionProps) => {
  return (
    <section id="tech" className="py-20">
      <div className="max-w-6xl px-6 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text">
            ⚙️ Tech, Innovation & Projects
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-cyan-400 to-green-400"></div>
        </div>

        <div className="space-y-8">
          {" "}
          <div
            className={`${
              isDarkMode
                ? "bg-gradient-to-r from-cyan-900/20 to-blue-900/20"
                : "bg-gradient-to-r from-cyan-100/40 to-blue-100/40"
            } backdrop-blur-lg rounded-xl p-8 border ${
              isDarkMode ? "border-cyan-400/30" : "border-cyan-300/50"
            } transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:border-cyan-400/70`}
          >
            <div className="flex items-center mb-4">
              <Code className="mr-3 text-cyan-400" size={30} />
              <h3 className="text-2xl font-bold text-cyan-400">
                Sunday School Attendance App
              </h3>
              <span className="px-3 py-1 ml-3 text-sm text-green-400 rounded-full bg-green-500/20">
                In Production
              </span>
            </div>
            <p className={`${textClasses} mb-4`}>
              Architecting and building a fully functional, community-oriented
              app, designed for a local community center. Handling everything
              from UI/UX design to back-end integration.
            </p>
            <div className="flex flex-wrap gap-2">
              {["React Native", "UI/UX Design", "Backend Integration"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-cyan-400/20 text-cyan-400"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>{" "}
          <div
            className={`${
              isDarkMode
                ? "bg-gradient-to-r from-purple-900/20 to-pink-900/20"
                : "bg-gradient-to-r from-purple-100/40 to-pink-100/40"
            } backdrop-blur-lg rounded-xl p-8 border ${
              isDarkMode ? "border-purple-400/30" : "border-purple-300/50"
            } transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:border-purple-400/70`}
          >
            <div className="flex items-center mb-4">
              <Trophy className="mr-3 text-purple-400" size={30} />
              <h3 className="text-2xl font-bold text-purple-400">
                Competitive Robotics
              </h3>
              <span className="px-3 py-1 ml-3 text-sm text-yellow-400 rounded-full bg-yellow-500/20">
                Award Winner
              </span>
            </div>
            <p className={`${textClasses} mb-4`}>
              Core contributor on an RC Robotics Team, earned the "Plethora of
              Features" award by integrating remarkable range of
              capabilities—demonstrating versatility and innovation.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {" "}
            <div
              className={`${cardClasses} rounded-xl p-6 border border-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:border-green-400/70`}
            >
              <h4 className="mb-3 text-lg font-bold text-green-400">
                Programming Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "React",
                  "React Native",
                  "Tailwind CSS",
                  "Javascript",
                  "APIs",
                  "AI Integration",
                  "UI/UX Design",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm text-green-400 rounded-full bg-green-400/20 transition-all duration-300 hover:bg-green-400/40 hover:scale-105 inline-block"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>{" "}
            <div
              className={`${cardClasses} rounded-xl p-6 border border-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:border-orange-400/70`}
            >
              <h4 className="mb-3 text-lg font-bold text-orange-400">
                Striker Competition
              </h4>
              <p className={`${textClasses}`}>
                Engineered a realistic operating room prototype showcased at the
                Stryker Competition, demonstrating advanced surgical workflow
                design and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
