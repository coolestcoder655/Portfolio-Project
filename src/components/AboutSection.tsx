import { Zap, Users, Rocket } from "lucide-react";

interface AboutSectionProps {
  textClasses: string;
  cardClasses: string;
}

const AboutSection = ({ textClasses, cardClasses }: AboutSectionProps) => {
  return (
    <section id="about" className="relative py-20">
      <div className="max-w-6xl px-6 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
            Why I Stand Out
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-cyan-400 to-purple-400"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div
            className={`${cardClasses} rounded-xl p-6 border hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-slide-in-left`}
          >
            <Zap className="mb-4 text-cyan-400 animate-pulse" size={40} />
            <h3 className="mb-3 text-xl font-bold text-cyan-400">
              Unique Blend
            </h3>
            <p className={textClasses}>
              Academic excellence, technological fluency, creative innovation in
              robotics and software, leadership through service, and athletic
              resilience.
            </p>
          </div>

          <div
            className={`${cardClasses} rounded-xl p-6 border hover:border-purple-400/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-slide-in-up`}
          >
            <Users className="mb-4 text-purple-400 animate-pulse" size={40} />
            <h3 className="mb-3 text-xl font-bold text-purple-400">
              Team Player
            </h3>
            <p className={textClasses}>
              I thrive in team environments, whether coaching classmates,
              collaborating in science competitions, or building apps with
              peers.
            </p>
          </div>

          <div
            className={`${cardClasses} rounded-xl p-6 border hover:border-pink-400/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-slide-in-right`}
          >
            <Rocket className="mb-4 text-pink-400 animate-pulse" size={40} />
            <h3 className="mb-3 text-xl font-bold text-pink-400">
              Self-Driven
            </h3>
            <p className={textClasses}>
              Consistently pursuing excellence—from earning honors and awards to
              shipping production-level apps and standing tall on the podium.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
