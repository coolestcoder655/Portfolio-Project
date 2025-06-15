import { Trophy, Award, Star } from "lucide-react";

interface AcademicSectionProps {
  isDarkMode: boolean;
  scrollToSection: (sectionId: string) => void;
  textClasses: string;
  cardClasses: string;
}

const AcademicSection = ({
  isDarkMode,
  scrollToSection,
  textClasses,
  cardClasses,
}: AcademicSectionProps) => {
  return (
    <section
      id="academic"
      className={`py-20 transition-all duration-1000 ${
        isDarkMode
          ? "bg-gradient-to-r from-blue-900/20 to-purple-900/20"
          : "bg-gradient-to-r from-blue-100/60 to-purple-100/60"
      }`}
    >
      <div className="max-w-6xl px-6 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text">
            🏆 Academic & STEM Highlights
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-yellow-400 to-orange-400"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div
            className={`${cardClasses} rounded-xl p-6 border hover:border-yellow-400/50 transition-all duration-500 transform hover:scale-105 hover:rotate-1 animate-slide-in-left`}
          >
            <div className="flex items-center mb-4">
              <Trophy
                className="mr-3 text-yellow-400 animate-bounce"
                size={30}
              />
              <h3 className="text-xl font-bold text-yellow-400">
                UIL Science 1st Place
              </h3>
            </div>
            <p className={textClasses}>
              Showcased analytical rigor and creative problem-solving in a
              highly competitive academic environment.
            </p>
          </div>

          <div
            className={`${cardClasses} rounded-xl p-6 border hover:border-green-400/50 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 animate-slide-in-right`}
          >
            <div className="flex items-center mb-4">
              <Award className="mr-3 text-green-400 animate-pulse" size={30} />
              <h3 className="text-xl font-bold text-green-400">
                Science Olympiad
              </h3>
            </div>
            <p className={textClasses}>
              Regular participant developing strong teamwork, precise
              experimentation, and rapid on-your-feet thinking.
            </p>
          </div>

          <div
            className={`${cardClasses} rounded-xl p-6 border hover:border-purple-400/50 transition-all duration-500 transform hover:scale-105 hover:rotate-1 animate-slide-in-left`}
          >
            <div className="flex items-center mb-4">
              <Star
                className="mr-3 text-purple-400 animate-spin-slow"
                size={30}
              />
              <h3 className="text-xl font-bold text-purple-400">
                Gifted and Talented Program
              </h3>
            </div>
            <p className={textClasses}>
              Advanced coursework that cultivated deeper critical thinking and
              an enriched love for learning.
            </p>
          </div>

          <div
            className={`${cardClasses} rounded-xl p-6 border hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 animate-slide-in-right`}
          >
            <div className="flex items-center mb-4">
              <Award className="mr-3 text-cyan-400 animate-bounce" size={30} />
              <h3 className="text-xl font-bold text-cyan-400">Honor Roll</h3>
            </div>
            <p className={textClasses}>
              Full schedule of honors classes, consistently challenging myself
              to excel in every subject.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicSection;
