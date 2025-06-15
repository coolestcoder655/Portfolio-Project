import { useState, useEffect } from "react";
import HeroSection from "./components/HeroSection";
import LeadershipSection from "./components/LeadershipSection";
import EntrepreneurshipSection from "./components/EntrepreneurshipSection";
import AcademicSection from "./components/AcademicSection";
import TechSection from "./components/TechSection";
import AboutSection from "./components/AboutSection";
import AthleticsSection from "./components/AthleticsSection";
import ReviewsSection from "./components/ReviewsSection";
import Footer from "./components/Footer";
import { Sun, Moon } from "lucide-react";

const App = () => {
  const [, setActiveSection] = useState("hero");
  const [, setIsVisible] = useState({});
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeClasses = isDarkMode
    ? "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden transition-all duration-1000"
    : "min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-gray-900 overflow-x-hidden transition-all duration-1000";

  const cardClasses = isDarkMode
    ? "bg-white/5 backdrop-blur-lg border-white/10"
    : "bg-white/90 backdrop-blur-lg border-gray-200/60 shadow-xl";

  const navClasses = isDarkMode
    ? "bg-black/20 backdrop-blur-lg border-white/10"
    : "bg-white/80 backdrop-blur-lg border-gray-200/30";

  const textClasses = isDarkMode ? "text-gray-300" : "text-gray-700";

  return (
    <div className={themeClasses}>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        @keyframes float-particle {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          50% { transform: translateY(-30px) translateX(10px); opacity: 0.8; }
        }

        @keyframes gradient-text {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes slide-in-left {
          0% { opacity: 0; transform: translateX(-50px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        @keyframes slide-in-right {
          0% { opacity: 0; transform: translateX(50px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        @keyframes slide-in-up {
          0% { opacity: 0; transform: translateY(50px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .animate-float-particle {
          animation: float-particle 4s ease-in-out infinite;
        }

        .animate-gradient-text {
          background-size: 200% 200%;
          animation: gradient-text 3s ease infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out;
        }

        .animate-slide-in-up {
          animation: slide-in-up 0.8s ease-out;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-40 ${navClasses} border-b transition-all duration-500`}
      >
        <div className="px-6 py-4 mx-auto max-w-7xl">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text animate-pulse" />{" "}
            <div className="flex items-center space-x-6">
              {" "}
              <div className="hidden space-x-8 md:flex">
                {[
                  "About",
                  "Academic",
                  "Tech",
                  "Leadership",
                  "Athletics",
                  "Entrepreneurship",
                  "Reviews",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`transition-all duration-300 transform hover:scale-110 ${
                      isDarkMode
                        ? "hover:text-cyan-400"
                        : "hover:text-purple-600 text-gray-800 font-medium"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full transition-all duration-300 transform hover:scale-110 ${
                  isDarkMode
                    ? "bg-white/10 hover:bg-white/20 text-yellow-400"
                    : "bg-gray-900/10 hover:bg-gray-900/20 text-purple-600"
                }`}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection
        isDarkMode={isDarkMode}
        scrollToSection={scrollToSection}
        textClasses={textClasses}
      />

      {/* About Section */}
      <AboutSection textClasses={textClasses} cardClasses={cardClasses} />

      {/* Academic Section */}
      <AcademicSection
        isDarkMode={isDarkMode}
        textClasses={textClasses}
        cardClasses={cardClasses}
      />

      {/* Tech Section */}
      <TechSection
        isDarkMode={isDarkMode}
        textClasses={textClasses}
        cardClasses={cardClasses}
      />

      {/* Leadership Section */}
      <LeadershipSection
        isDarkMode={isDarkMode}
        textClasses={textClasses}
        cardClasses={cardClasses}
      />

      {/* Athletics Section */}
      <AthleticsSection isDarkMode={isDarkMode} textClasses={textClasses} />

      {/* Entrepreneurship Section */}
      <EntrepreneurshipSection
        isDarkMode={isDarkMode}
        textClasses={textClasses}
        cardClasses={cardClasses}
      />

      {/* Reviews Section */}
      <ReviewsSection
        cardClasses={cardClasses}
        textClasses={textClasses}
        isDarkMode={isDarkMode}
      />

      {/* Footer */}
      <Footer isDarkMode={isDarkMode} textClasses={textClasses} />
    </div>
  );
};

export default App;
