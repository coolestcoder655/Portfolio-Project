interface AthleticsSectionProps {
  isDarkMode: boolean;
  scrollToSection: (sectionId: string) => void;
  textClasses: string;
  cardClasses: string;
}

const AthleticsSection = ({
  isDarkMode,
  scrollToSection,
  textClasses,
  cardClasses,
}: AthleticsSectionProps) => {
  return (
    <section id="athletics" className="py-20">
      <div className="max-w-6xl px-6 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text">
            🏊‍♂️🏸 Athletics & Competitions
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-400 to-green-400"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div
            className={`$${
              isDarkMode
                ? "bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border-blue-900"
                : "bg-gradient-to-br from-blue-100/40 to-cyan-100/40 border-blue-200"
            } backdrop-blur-lg rounded-xl p-8 border-2 transition-all duration-300 transform hover:scale-105 hover:border-blue-400/70 hover:shadow-lg`}
          >
            <div className="mb-4 text-4xl group-hover:animate-bounce">🏊‍♂️</div>
            <h3 className="mb-4 text-2xl font-bold text-blue-400">
              Swimming Competitions
            </h3>
            <p className={textClasses}>
              Competed across multiple events, honing discipline, mental
              toughness, and an enduring competitive spirit.
            </p>
          </div>

          <div
            className={`$${
              isDarkMode
                ? "bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-green-900"
                : "bg-gradient-to-br from-green-100/40 to-emerald-100/40 border-green-200"
            } backdrop-blur-lg rounded-xl p-8 border-2 transition-all duration-300 transform hover:scale-105 hover:border-green-400/70 hover:shadow-lg`}
          >
            <div className="mb-4 text-4xl group-hover:animate-bounce">🏸</div>
            <h3 className="mb-4 text-2xl font-bold text-green-400">
              Badminton Competitions
            </h3>
            <p className={textClasses}>
              Sharpened hand-eye coordination, strategic thinking, and graceful
              sportsmanship on the court.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AthleticsSection;
