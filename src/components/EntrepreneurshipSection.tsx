import { Rocket, Zap } from "lucide-react";

interface EntrepreneurshipSectionProps {
  isDarkMode: boolean;
  scrollToSection: (sectionId: string) => void;
  textClasses: string;
  cardClasses: string;
}

const EntrepreneurshipSection = ({
  isDarkMode,
  scrollToSection,
  textClasses,
  cardClasses,
}: EntrepreneurshipSectionProps) => {
  return (
    <section
      id="entrepreneurship"
      className={`py-20 ${
        isDarkMode
          ? "bg-gradient-to-r from-orange-900/20 to-red-900/20"
          : "bg-gradient-to-r from-orange-100/60 to-red-100/60"
      }`}
    >
      <div className="max-w-6xl px-6 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text">
            💡 Entrepreneurship & Drive
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-orange-400 to-red-400"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div
            className={`${cardClasses} rounded-xl p-8 border border-white/10 transition-all duration-300 transform hover:scale-105 hover:border-orange-400/70 hover:shadow-lg`}
          >
            <Rocket
              className="mb-4 text-orange-400 group-hover:animate-bounce"
              size={40}
            />
            <h3 className="mb-4 text-2xl font-bold text-orange-400">
              Entrepreneurial Spirit
            </h3>
            <p className={textClasses}>
              Always on the lookout for new opportunities—whether launching
              small ventures, leading peer projects, or exploring tech startups.
            </p>
          </div>

          <div
            className={`${cardClasses} rounded-xl p-8 border border-white/10 transition-all duration-300 transform hover:scale-105 hover:border-red-400/70 hover:shadow-lg`}
          >
            <Zap
              className="mb-4 text-red-400 group-hover:animate-pulse"
              size={40}
            />
            <h3 className="mb-4 text-2xl font-bold text-red-400">
              Growth Mindset
            </h3>
            <p className={textClasses}>
              I love to learn—whether it be a new programming framework,
              exploring scientific research, or mastering a new athletic skill.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EntrepreneurshipSection;
