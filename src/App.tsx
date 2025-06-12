import { useState, useEffect } from 'react';
import { ChevronDown, Trophy, Code, Users, Zap, Award, Rocket, Star, Github, Mail, Phone, MapPin, Sun, Moon } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState({});
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeClasses = isDarkMode
    ? "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden transition-all duration-1000"
    : "min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-gray-900 overflow-x-hidden transition-all duration-1000";

  const cardClasses = isDarkMode
    ? "bg-white/5 backdrop-blur-lg border-white/10"
    : "bg-white/80 backdrop-blur-lg border-gray-200/50 shadow-lg";

  const navClasses = isDarkMode
    ? "bg-black/20 backdrop-blur-lg border-white/10"
    : "bg-white/20 backdrop-blur-lg border-gray-200/20";

  return (
    <div className={themeClasses}>
      {/* Cursor follower */}
      <div
        className="fixed w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full pointer-events-none z-50 opacity-50 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: 'translate3d(0,0,0)'
        }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 ${navClasses} border-b transition-all duration-500`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              Maaz
            </div>
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex space-x-8">
                {['About', 'Academic', 'Tech', 'Leadership', 'Athletics'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`transition-all duration-300 transform hover:scale-110 ${isDarkMode ? 'hover:text-cyan-400' : 'hover:text-purple-600'
                      }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full transition-all duration-300 transform hover:scale-110 ${isDarkMode
                    ? 'bg-white/10 hover:bg-white/20 text-yellow-400'
                    : 'bg-gray-900/10 hover:bg-gray-900/20 text-purple-600'
                  }`}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className={`absolute inset-0 transition-all duration-1000 ${isDarkMode
            ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20'
            : 'bg-gradient-to-r from-blue-400/10 to-purple-400/10'
          }`}></div>

        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 rounded-full animate-float-particle opacity-30 ${isDarkMode ? 'bg-cyan-400' : 'bg-purple-500'
                }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 p-1 animate-spin-slow">
              <div className={`w-full h-full rounded-full flex items-center justify-center ${isDarkMode ? 'bg-slate-900' : 'bg-white'
                }`}>
                <span className="text-4xl font-bold animate-bounce">M</span>
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-text">
            Hi! I'm Maaz
          </h1>
          <p className={`text-xl md:text-2xl mb-8 leading-relaxed animate-fade-in-up ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
            A curious, ambitious, and multidisciplinary student passionate about
            <span className="text-cyan-400 animate-pulse"> science</span>,
            <span className="text-purple-400 animate-pulse"> technology</span>,
            <span className="text-pink-400 animate-pulse"> leadership</span>, and
            <span className="text-green-400 animate-pulse"> athletics</span>
          </p>
          <button
            onClick={() => scrollToSection('about')}
            className="group bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 animate-bounce-subtle"
          >
            Explore My Journey
            <ChevronDown className="inline ml-2 group-hover:animate-bounce" size={20} />
          </button>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <Code className={isDarkMode ? "text-cyan-400" : "text-purple-600"} size={40} />
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed">
          <Trophy className={isDarkMode ? "text-yellow-400" : "text-orange-500"} size={35} />
        </div>
        <div className="absolute bottom-20 left-20 animate-float">
          <Rocket className={isDarkMode ? "text-pink-400" : "text-purple-500"} size={30} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Why I Stand Out
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className={`${cardClasses} rounded-xl p-6 border hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-slide-in-left`}>
              <Zap className="text-cyan-400 mb-4 animate-pulse" size={40} />
              <h3 className="text-xl font-bold mb-3 text-cyan-400">Unique Blend</h3>
              <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                Academic excellence, technological fluency, creative innovation in robotics and software, leadership through service, and athletic resilience.
              </p>
            </div>

            <div className={`${cardClasses} rounded-xl p-6 border hover:border-purple-400/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-slide-in-up`}>
              <Users className="text-purple-400 mb-4 animate-pulse" size={40} />
              <h3 className="text-xl font-bold mb-3 text-purple-400">Team Player</h3>
              <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                I thrive in team environments, whether coaching classmates, collaborating in science competitions, or building apps with peers.
              </p>
            </div>

            <div className={`${cardClasses} rounded-xl p-6 border hover:border-pink-400/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-slide-in-right`}>
              <Rocket className="text-pink-400 mb-4 animate-pulse" size={40} />
              <h3 className="text-xl font-bold mb-3 text-pink-400">Self-Driven</h3>
              <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                Consistently pursuing excellence—from earning honors and awards to shipping production-level apps and standing tall on the podium.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Section */}
      <section id="academic" className={`py-20 transition-all duration-1000 ${isDarkMode
          ? 'bg-gradient-to-r from-blue-900/20 to-purple-900/20'
          : 'bg-gradient-to-r from-blue-100/50 to-purple-100/50'
        }`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              🏆 Academic & STEM Highlights
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className={`${cardClasses} rounded-xl p-6 border hover:border-yellow-400/50 transition-all duration-500 transform hover:scale-105 hover:rotate-1 animate-slide-in-left`}>
              <div className="flex items-center mb-4">
                <Trophy className="text-yellow-400 mr-3 animate-bounce" size={30} />
                <h3 className="text-xl font-bold text-yellow-400">UIL Science 2nd Place</h3>
              </div>
              <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                Showcased analytical rigor and creative problem-solving in a highly competitive academic environment.
              </p>
            </div>

            <div className={`${cardClasses} rounded-xl p-6 border hover:border-green-400/50 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 animate-slide-in-right`}>
              <div className="flex items-center mb-4">
                <Award className="text-green-400 mr-3 animate-pulse" size={30} />
                <h3 className="text-xl font-bold text-green-400">Science Olympiad</h3>
              </div>
              <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                Regular participant developing strong teamwork, precise experimentation, and rapid on-your-feet thinking.
              </p>
            </div>

            <div className={`${cardClasses} rounded-xl p-6 border hover:border-purple-400/50 transition-all duration-500 transform hover:scale-105 hover:rotate-1 animate-slide-in-left`}>
              <div className="flex items-center mb-4">
                <Star className="text-purple-400 mr-3 animate-spin-slow" size={30} />
                <h3 className="text-xl font-bold text-purple-400">GT Program</h3>
              </div>
              <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                Advanced coursework that cultivated deeper critical thinking and an enriched love for learning.
              </p>
            </div>

            <div className={`${cardClasses} rounded-xl p-6 border hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 animate-slide-in-right`}>
              <div className="flex items-center mb-4">
                <Award className="text-cyan-400 mr-3 animate-bounce" size={30} />
                <h3 className="text-xl font-bold text-cyan-400">All-Honors Coursework</h3>
              </div>
              <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                Full schedule of honors classes, consistently challenging myself to excel in every subject.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Section */}
      <section id="tech" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              ⚙️ Tech, Innovation & Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto"></div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 backdrop-blur-lg rounded-xl p-8 border border-cyan-400/30">
              <div className="flex items-center mb-4">
                <Code className="text-cyan-400 mr-3" size={30} />
                <h3 className="text-2xl font-bold text-cyan-400">Sunday School App</h3>
                <span className="ml-3 px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">In Production</span>
              </div>
              <p className="text-gray-300 mb-4">
                Architecting and building a fully functional, community-oriented app. Handling everything from UI/UX design to back-end integration.
              </p>
              <div className="flex flex-wrap gap-2">
                {['React Native', 'UI/UX Design', 'Backend Integration'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-lg rounded-xl p-8 border border-purple-400/30">
              <div className="flex items-center mb-4">
                <Trophy className="text-purple-400 mr-3" size={30} />
                <h3 className="text-2xl font-bold text-purple-400">Competitive Robotics</h3>
                <span className="ml-3 px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">Award Winner</span>
              </div>
              <p className="text-gray-300 mb-4">
                Core contributor on RC Robotics Team, earned the "Plethora of Features" award by integrating remarkable range of capabilities—demonstrating versatility and innovation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <h4 className="text-lg font-bold text-green-400 mb-3">Programming Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'React', 'React Native', 'Tailwind CSS'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-green-400/20 text-green-400 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <h4 className="text-lg font-bold text-orange-400 mb-3">Striker Competition</h4>
                <p className="text-gray-300 text-sm">
                  Developed robotic-control systems in high-stakes simulation environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              📚 Leadership, Service & School
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105">
              <Award className="text-purple-400 mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3 text-purple-400">NJHS Inductee</h3>
              <p className="text-gray-300">
                National Junior Honor Society recognition for academic excellence, leadership, and community commitment.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-pink-400/50 transition-all duration-300 transform hover:scale-105">
              <Users className="text-pink-400 mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3 text-pink-400">Tutoring</h3>
              <p className="text-gray-300">
                Volunteered regularly to tutor peers in math, science, and programming—fostering academic growth in others.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105">
              <Star className="text-yellow-400 mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3 text-yellow-400">Fabulous Falcon Award</h3>
              <p className="text-gray-300">
                Honored for outstanding school spirit, positive contributions to campus life, and consistent character.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Athletics Section */}
      <section id="athletics" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              🏊‍♂️🏸 Athletics & Competitions
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-lg rounded-xl p-8 border border-blue-400/30">
              <div className="text-4xl mb-4">🏊‍♂️</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Swimming Competitions</h3>
              <p className="text-gray-300">
                Competed across multiple events, honing discipline, mental toughness, and an enduring competitive spirit.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-lg rounded-xl p-8 border border-green-400/30">
              <div className="text-4xl mb-4">🏸</div>
              <h3 className="text-2xl font-bold mb-4 text-green-400">Badminton Competitions</h3>
              <p className="text-gray-300">
                Sharpened hand-eye coordination, strategic thinking, and graceful sportsmanship on the court.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Entrepreneurship Section */}
      <section className="py-20 bg-gradient-to-r from-orange-900/20 to-red-900/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              💡 Entrepreneurship & Drive
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
              <Rocket className="text-orange-400 mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4 text-orange-400">Entrepreneurial Spirit</h3>
              <p className="text-gray-300">
                Always on the lookout for new opportunities—whether launching small ventures, leading peer projects, or exploring tech startups.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
              <Zap className="text-red-400 mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4 text-red-400">Growth Mindset</h3>
              <p className="text-gray-300">
                I love to learn—whether it be a new programming framework, exploring scientific research, or mastering a new athletic skill.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black/40 backdrop-blur-lg border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Let's Connect
            </h3>
            <p className="text-gray-300 mb-6">
              Ready to collaborate on exciting projects or discuss opportunities?
            </p>
          </div>

          <div className="text-center">
            <p className="text-gray-400">
              © 2025 Maaz. Passionate about science, technology, leadership, and athletics.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
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
    </div>
  );
};

export default App;