import { useState, useEffect } from "react";
import {
  ChevronDown,
  Trophy,
  Code,
  Users,
  Zap,
  Award,
  Rocket,
  Star,
  Sun,
  Moon,
} from "lucide-react";

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
            <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text animate-pulse" />
            <div className="flex items-center space-x-6">
              <div className="hidden space-x-8 md:flex">
                {["About", "Academic", "Tech", "Leadership", "Athletics"].map(
                  (item) => (
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
                  )
                )}
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
            <span className="text-pink-500 animate-pulse"> leadership</span>,
            and
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

      {/* About Section */}
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
                Academic excellence, technological fluency, creative innovation
                in robotics and software, leadership through service, and
                athletic resilience.
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
                Consistently pursuing excellence—from earning honors and awards
                to shipping production-level apps and standing tall on the
                podium.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Section */}
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
                <Award
                  className="mr-3 text-green-400 animate-pulse"
                  size={30}
                />
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
                <Award
                  className="mr-3 text-cyan-400 animate-bounce"
                  size={30}
                />
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

      {/* Tech Section */}
      <section id="tech" className="py-20">
        <div className="max-w-6xl px-6 mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text">
              ⚙️ Tech, Innovation & Projects
            </h2>
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-cyan-400 to-green-400"></div>
          </div>

          <div className="space-y-8">
            <div
              className={`${
                isDarkMode
                  ? "bg-gradient-to-r from-cyan-900/20 to-blue-900/20"
                  : "bg-gradient-to-r from-cyan-100/40 to-blue-100/40"
              } backdrop-blur-lg rounded-xl p-8 border ${
                isDarkMode ? "border-cyan-400/30" : "border-cyan-300/50"
              }`}
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
            </div>

            <div
              className={`${
                isDarkMode
                  ? "bg-gradient-to-r from-purple-900/20 to-pink-900/20"
                  : "bg-gradient-to-r from-purple-100/40 to-pink-100/40"
              } backdrop-blur-lg rounded-xl p-8 border ${
                isDarkMode ? "border-purple-400/30" : "border-purple-300/50"
              }`}
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
              <div
                className={`${cardClasses} rounded-xl p-6 border border-white/10`}
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
                      className="px-3 py-1 text-sm text-green-400 rounded-full bg-green-400/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className={`${cardClasses} rounded-xl p-6 border border-white/10`}
              >
                <h4 className="mb-3 text-lg font-bold text-orange-400">
                  Striker Competition
                </h4>
                <p className={`${textClasses} text-sm`}>
                  Modeled an operationg room for a Striker Competition
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
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
                National Junior Honor Society recognition for academic
                excellence, leadership, and community commitment.
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

      {/* Athletics Section */}
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
              className={`${
                isDarkMode
                  ? "bg-gradient-to-br from-blue-900/20 to-cyan-900/20"
                  : "bg-gradient-to-br from-blue-100/40 to-cyan-100/40"
              } backdrop-blur-lg rounded-xl p-8 border ${
                isDarkMode ? "border-blue-400/30" : "border-blue-300/50"
              }`}
            >
              <div className="mb-4 text-4xl">🏊‍♂️</div>
              <h3 className="mb-4 text-2xl font-bold text-blue-400">
                Swimming Competitions
              </h3>
              <p className={textClasses}>
                Competed across multiple events, honing discipline, mental
                toughness, and an enduring competitive spirit.
              </p>
            </div>

            <div
              className={`${
                isDarkMode
                  ? "bg-gradient-to-br from-green-900/20 to-emerald-900/20"
                  : "bg-gradient-to-br from-green-100/40 to-emerald-100/40"
              } backdrop-blur-lg rounded-xl p-8 border ${
                isDarkMode ? "border-green-400/30" : "border-green-300/50"
              }`}
            >
              <div className="mb-4 text-4xl">🏸</div>
              <h3 className="mb-4 text-2xl font-bold text-green-400">
                Badminton Competitions
              </h3>
              <p className={textClasses}>
                Sharpened hand-eye coordination, strategic thinking, and
                graceful sportsmanship on the court.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Entrepreneurship Section */}
      <section
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
              className={`${cardClasses} rounded-xl p-8 border border-white/10`}
            >
              <Rocket className="mb-4 text-orange-400" size={40} />
              <h3 className="mb-4 text-2xl font-bold text-orange-400">
                Entrepreneurial Spirit
              </h3>
              <p className={textClasses}>
                Always on the lookout for new opportunities—whether launching
                small ventures, leading peer projects, or exploring tech
                startups.
              </p>
            </div>

            <div
              className={`${cardClasses} rounded-xl p-8 border border-white/10`}
            >
              <Zap className="mb-4 text-red-400" size={40} />
              <h3 className="mb-4 text-2xl font-bold text-red-400">
                Growth Mindset
              </h3>
              <p className={textClasses}>
                I love to learn—whether it be a new programming framework,
                exploring scientific research, or mastering a new athletic
                skill.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-12 ${
          isDarkMode ? "bg-black/40" : "bg-gray-900/10"
        } backdrop-blur-lg border-t ${
          isDarkMode ? "border-white/10" : "border-gray-300/30"
        }`}
      >
        <div className="max-w-6xl px-6 mx-auto text-center">
          <div className="mb-8">
            <h3 className="mb-4 text-2xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
              Let's Connect
            </h3>
            <p className={`${textClasses} mb-6`}>
              Ready to collaborate on exciting projects or discuss
              opportunities?
            </p>
          </div>

          <div className="text-center">
            <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
              © 2025 Maaz Khokhar. All rights reserved.
            </p>
            <a
              href="mailto:khokharmaaz@gmail.com"
              className={`block mt-2 underline hover:text-cyan-400 transition-colors duration-200 ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              khokharmaaz@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
