import { ChevronDown, Trophy, Code, Users, Zap, Rocket } from "lucide-react";

interface HeroSectionProps {
  isDarkMode: boolean;
  scrollToSection: (sectionId: string) => void;
  textClasses: string;
  cardClasses: string;
}

const HeroSection = ({
  isDarkMode,
  scrollToSection,
  textClasses,
  cardClasses,
}: HeroSectionProps) => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
    >
      <div
        className={`absolute inset-0 transition-all duration-1000 ${
          isDarkMode
            ? "bg-gradient-to-r from-blue-600/20 to-purple-600/20"
            : "bg-gradient-to-r from-blue-400/10 to-purple-400/10"
        }`}
      ></div>

      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full animate-float-particle opacity-30 ${
              isDarkMode ? "bg-cyan-400" : "bg-purple-500"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl px-6 mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 p-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600">
            <div
              className={`w-full h-full rounded-full flex items-center justify-center ${
                isDarkMode ? "bg-slate-900" : "bg-white"
              }`}
            >
              <img
                src="/mugshot.jpeg"
                alt="Maaz's Avatar"
                className="rounded-full"
              />
            </div>
          </div>
        </div>
        <h1 className="mb-6 text-5xl font-bold text-transparent md:text-7xl bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text animate-gradient-text">
          Hi! I'm Maaz
        </h1>
        <p
          className={`text-xl md:text-2xl mb-8 leading-relaxed animate-fade-in-up ${textClasses}`}
        >
          A curious, ambitious, and multidisciplinary student passionate about
          <span className="text-cyan-500 animate-pulse"> science</span>,
          <span className="text-purple-500 animate-pulse"> technology</span>,
          <span className="text-pink-500 animate-pulse"> leadership</span>, and
          <span className="text-green-500 animate-pulse"> athletics</span>
        </p>
        <button
          onClick={() => scrollToSection("about")}
          className="px-8 py-4 font-medium text-white transition-all duration-300 transform rounded-full group bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 animate-bounce-subtle"
        >
          Explore My Journey
          <ChevronDown
            className="inline ml-2 group-hover:animate-bounce"
            size={20}
          />
        </button>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Code
          className={isDarkMode ? "text-cyan-400" : "text-purple-600"}
          size={40}
        />
      </div>
      <div className="absolute top-40 right-20 animate-float-delayed">
        <Trophy
          className={isDarkMode ? "text-yellow-400" : "text-orange-500"}
          size={35}
        />
      </div>
      <div className="absolute bottom-20 left-20 animate-float">
        <Rocket
          className={isDarkMode ? "text-pink-400" : "text-purple-500"}
          size={30}
        />
      </div>
    </section>
  );
};

export default HeroSection;
