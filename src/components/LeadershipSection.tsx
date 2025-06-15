import { Award, Star, Users } from "lucide-react";

interface LeadershipSectionProps {
  isDarkMode: boolean;
  scrollToSection: (sectionId: string) => void;
  textClasses: string;
  cardClasses: string;
}

const LeadershipSection = ({
  isDarkMode,
  scrollToSection,
  textClasses,
  cardClasses,
}: LeadershipSectionProps) => {
  return (
    <section
      id="leadership"
      className={`py-20 ${
        isDarkMode
          ? "bg-gradient-to-r from-purple-900/20 to-pink-900/20"
          : "bg-gradient-to-r from-purple-100/60 to-pink-100/60"
      }`}
    >
      <div className="max-w-6xl px-6 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
            📚 Leadership, Service & School
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-purple-400 to-pink-400"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div
            className={`${cardClasses} rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105`}
          >
            <Award className="mb-4 text-purple-400" size={40} />
            <h3 className="mb-3 text-xl font-bold text-purple-400">
              NJHS Inductee
            </h3>
            <p className={textClasses}>
              National Junior Honor Society recognition for academic excellence,
              leadership, and community commitment.
            </p>
          </div>

          <div
            className={`${cardClasses} rounded-xl p-6 border border-white/10 hover:border-pink-400/50 transition-all duration-300 transform hover:scale-105`}
          >
            <Users className="mb-4 text-pink-400" size={40} />
            <h3 className="mb-3 text-xl font-bold text-pink-400">Tutoring</h3>
            <p className={textClasses}>
              Volunteered regularly to tutor peers in math, science, and
              programming—fostering academic growth in others.
            </p>
          </div>

          <div
            className={`${cardClasses} rounded-xl p-6 border border-white/10 hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105`}
          >
            <Star className="mb-4 text-yellow-400" size={40} />
            <h3 className="mb-3 text-xl font-bold text-yellow-400">
              Fabulous Falcon Award
            </h3>
            <p className={textClasses}>
              Honored for outstanding school spirit, positive contributions to
              campus life, and consistent character.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
