import { useState, type JSX, useEffect } from "react";
import {
  Star,
  Plus,
  X,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Award,
  Briefcase,
  GraduationCap,
  Trophy,
  Zap,
  Users,
} from "lucide-react";
import { addReview, fetchReviews, type Review } from "./reviewsApi";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const isOutOfCollege = false; // Change this to false if you want to simulate being in college
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newReview, setNewReview] = useState<Review>({
    name: "",
    rating: -1,
    position: "",
    text: "",
  });

  useEffect(() => {
    fetchReviews().then(setReviews);
  }, []);

  const handleAddReview = () => {
    if (
      !newReview.name ||
      newReview.rating < 1 ||
      newReview.rating > 5 ||
      !newReview.position ||
      !newReview.text
    ) {
      alert("Please fill out all fields correctly.");
      return;
    }

    // Add the new review to the state
    addReview(newReview)
      .then(() => {
        fetchReviews().then(setReviews);
        alert("Review added successfully!");
        setNewReview({ name: "", rating: -1, position: "", text: "" });
        setShowModal(false);
      })
      .catch((error) => {
        console.error("Error adding review:", error);
        alert("Failed to add review. Please try again later.");
        setShowModal(false);
      });
  };

  const renderStars = (rating: number): JSX.Element[] => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }`}
        />
      ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <img
              src="/mugshot.jpeg"
              alt="Maaz Khokhar"
              className="w-48 h-48 rounded-full shadow-lg border-4 border-white"
            />
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Maaz Khokhar
              </h1>
              <p className="text-xl text-slate-300 mb-6">
                Full-Stack Developer
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  khokharmaaz@gmail.com
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  (214) 732-2569
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Dallas, TX
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Why I Stand Out */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Zap className="w-8 h-8 text-indigo-600" />
            <h2 className="text-3xl font-bold text-slate-800">
              What Makes Me Unique
            </h2>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-indigo-500">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              I bridge the gap between cutting-edge technology and real-world
              impact. With a unique combination of technical expertise,
              entrepreneurial mindset, and leadership experience, I transform
              complex problems into elegant solutions that drive meaningful
              change.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-800">
                  Innovation Driver
                </h3>
                <p className="text-sm text-slate-600">
                  Transforming ideas into scalable solutions
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-slate-800">Team Catalyst</h3>
                <p className="text-sm text-slate-600">
                  Inspiring collaboration and excellence
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Briefcase className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-slate-800">
                  Results Focused
                </h3>
                <p className="text-sm text-slate-600">
                  Delivering measurable impact consistently
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Academic & STEM Highlights */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-8 h-8 text-indigo-600" />
            <h2 className="text-3xl font-bold text-slate-800">
              Academic & STEM Excellence
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {isOutOfCollege && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  Education
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-700">
                      Master of Science in Computer Science
                    </h4>
                    <p className="text-slate-600">
                      Stanford University • GPA: 3.9/4.0
                    </p>
                    <p className="text-sm text-slate-500">
                      Specialization: AI & Machine Learning
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700">
                      Bachelor of Science in Engineering
                    </h4>
                    <p className="text-slate-600">
                      MIT • Summa Cum Laude • GPA: 3.95/4.0
                    </p>
                    <p className="text-sm text-slate-500">
                      Double Major: Computer Science & Mathematics
                    </p>
                  </div>
                </div>
              </div>
            )}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                STEM Achievements
              </h3>
              <ul className="space-y-3 text-slate-700">
                {[
                  "Developed 5+ freelance applications serving diverse client needs",
                  "Specialized in full-stack web development and mobile applications",
                  "Maintained 100% client satisfaction rate with on-time delivery",
                  "Expertise in React, TypeScript, and modern web technologies",
                ].map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Award className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Tech, Innovation, and Projects */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-8 h-8 text-indigo-600" />
            <h2 className="text-3xl font-bold text-slate-800">
              Technology & Innovation
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Featured Projects
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <a
                    href="https://ialfm-attendance.netlify.app"
                    className="font-semibold text-slate-700"
                  >
                    Local School Attendance App
                  </a>
                  <p className="text-sm text-slate-600 mb-2">
                    Lead Developer | 2025
                  </p>
                  <p className="text-slate-600">
                    Developed and deployed a comprehensive attendance management
                    system for a local educational institution, streamlining
                    their administrative processes and improving data accuracy.
                    The application continues to serve the organization daily,
                    demonstrating successful long-term solution delivery.
                  </p>
                </div>
                {isOutOfCollege && (
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-slate-700">Sun-Scope</h4>
                    <p className="text-sm text-slate-600 mb-2">
                      Full-Stack Engineer | 2025
                    </p>
                    <p className="text-slate-600">
                      Built IoT solution reducing energy consumption by 35%
                      across 200+ commercial buildings
                    </p>
                  </div>
                )}
                <div className="border-l-4 border-purple-500 pl-4">
                  <a
                    href="https://i-dazzle.netlify.app"
                    className="font-semibold text-slate-700"
                  >
                    I-Dazzle E-Commerce Platform
                  </a>
                  <p className="text-sm text-slate-600 mb-2">
                    Technical Lead | 2025
                  </p>
                  <p className="text-slate-600">
                    Architected and developed a custom e-commerce platform for a
                    luxury bag retailer, enabling direct-to-consumer sales and
                    reducing third-party marketplace dependency. Implemented
                    responsive design, secure payment processing, and inventory
                    management features to support business growth and brand
                    independence.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Technical Skills
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">
                    Programming Languages
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "JavaScript", "TypeScript"].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">
                    Frameworks & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React",
                      "React Native",
                      "Docker",
                      "React Native",
                      "TailwindCSS",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                {isOutOfCollege && (
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-2">
                      Specializations
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["UI/UX Design", ""].map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership, Service, & School */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-8 h-8 text-indigo-600" />
            <h2 className="text-3xl font-bold text-slate-800">
              Leadership & Service
            </h2>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-6">
                  Leadership Roles
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-700">
                      NJHS Inductee
                    </h4>
                    <p className="text-slate-600">
                      National Junior Honor Society Inductee • 2024
                    </p>
                    <p className="text-sm text-slate-600">
                      Recognized for academic excellence, leadership, and
                      community service in middle school
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700">
                      "Fabulous Falcon" Award
                    </h4>
                    <p className="text-slate-600">
                      Forestwood Middle School • 2024
                    </p>
                    <p className="text-sm text-slate-600">
                      Awarded for outstanding contributions to school community
                      and leadership in student activities
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700">
                      Peer Learning Mentor
                    </h4>
                    <p className="text-slate-600">
                      Forestwood Middle School • 2023-2024
                    </p>
                    <p className="text-sm text-slate-600">
                      Mentored 50+ students in computer science fundamentals,
                      fostering a collaborative learning environment
                    </p>
                  </div>
                </div>
              </div>
              {isOutOfCollege && (
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-6">
                    Community Service
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-700">
                        Code for Good Volunteer
                      </h4>
                      <p className="text-slate-600">
                        2020-Present • 500+ hours
                      </p>
                      <p className="text-sm text-slate-600">
                        Built digital solutions for 10+ nonprofits, impacting
                        10,000+ lives
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {isOutOfCollege && (
          /* Athletics & Competitions */
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Trophy className="w-8 h-8 text-indigo-600" />
              <h2 className="text-3xl font-bold text-slate-800">
                Athletics & Competitions
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  Competitive Programming
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-gold-500" />
                    <span className="text-sm">
                      ACM ICPC World Finals - Top 20
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-silver-400" />
                    <span className="text-sm">
                      Google Code Jam - Round 3 Qualifier
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-bronze-400" />
                    <span className="text-sm">
                      Facebook Hacker Cup - Top 100
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  Hackathons
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-gold-500" />
                    <span className="text-sm">
                      TechCrunch Disrupt - 1st Place
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-gold-500" />
                    <span className="text-sm">MIT HackMIT - Winner</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-silver-400" />
                    <span className="text-sm">
                      Stanford TreeHacks - 2nd Place
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  Athletic Achievements
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-gold-500" />
                    <span className="text-sm">
                      Varsity Tennis - Team Captain
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-silver-400" />
                    <span className="text-sm">
                      Marathon Finisher - Sub 3:30
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-bronze-400" />
                    <span className="text-sm">
                      Rock Climbing - Advanced Level
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* Entrepreneurship and Drive */}
        {isOutOfCollege && (
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Zap className="w-8 h-8 text-indigo-600" />
              <h2 className="text-3xl font-bold text-slate-800">
                Entrepreneurial Ventures
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  Founded Startups
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <h4 className="font-semibold text-slate-700">
                      EcoTech Solutions
                    </h4>
                    <p className="text-sm text-slate-600 mb-2">
                      Co-Founder & CTO • 2023-Present
                    </p>
                    <p className="text-slate-600">
                      $2M in funding raised, 50+ employees, revolutionizing
                      renewable energy storage
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-slate-700">StudySync</h4>
                    <p className="text-sm text-slate-600 mb-2">
                      Founder • 2022-2023
                    </p>
                    <p className="text-slate-600">
                      EdTech platform with 10K+ users, acquired by major
                      educational publisher
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-slate-700">
                      DevTools Pro
                    </h4>
                    <p className="text-sm text-slate-600 mb-2">
                      Co-Founder • 2021-2022
                    </p>
                    <p className="text-slate-600">
                      Developer productivity suite, $500K ARR before successful
                      exit
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  Investment & Advisory
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-700">
                      Angel Investor
                    </h4>
                    <p className="text-slate-600">
                      15+ early-stage investments in AI and sustainability
                      startups
                    </p>
                    <p className="text-sm text-slate-600">
                      3 successful exits, 2 unicorns in portfolio
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700">
                      Startup Accelerator Mentor
                    </h4>
                    <p className="text-slate-600">
                      Y Combinator, Techstars, 500 Startups
                    </p>
                    <p className="text-sm text-slate-600">
                      Mentored 50+ startups, $100M+ in follow-on funding
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700">
                      Innovation Consultant
                    </h4>
                    <p className="text-slate-600">
                      Fortune 500 digital transformation advisor
                    </p>
                    <p className="text-sm text-slate-600">
                      Led innovation workshops for 20+ enterprises
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        {/* Reviews Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Star className="w-8 h-8 text-indigo-600" />
              <h2 className="text-3xl font-bold text-slate-800">
                Professional Reviews
              </h2>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
            >
              <Plus className="w-5 h-5" />
              Add Review
            </button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.length > 1 ? (
              reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Star className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800">
                        {review.name}
                      </h3>
                      <p className="text-sm text-slate-600">
                        {review.position}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    {renderStars(review.rating)}
                  </div>
                  <p className="text-slate-700">{review.text}</p>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-slate-500 bg-slate-200 outline-1 outline-white rounded-2xl p-6">
                No reviews yet. Be the first to add one!
              </div>
            )}
          </div>
        </section>

        {/* Let's Connect */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl text-white p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
            <p className="text-xl mb-8 opacity-90">
              Ready to collaborate on something amazing? I'm always excited to
              discuss new opportunities and innovative projects.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="khokharmaaz@gmail.com"
                className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg hover:bg-white/30 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Email Me
              </a>
              {isOutOfCollege && (
                <a
                  href="https://linkedin.com/MyLinkedinProfile"
                  className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg hover:bg-white/30 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              )}
              <a
                href="https://github.com/coolestcoder655"
                className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg hover:bg-white/30 transition-colors"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-slate-800">
                  Add a Review
                </h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    value={newReview.name}
                    onChange={(e) =>
                      setNewReview({ ...newReview, name: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Position
                  </label>
                  <input
                    type="text"
                    value={newReview.position}
                    onChange={(e) =>
                      setNewReview({ ...newReview, position: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Your job title and company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Rating
                  </label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() =>
                          setNewReview({ ...newReview, rating: star })
                        }
                        className="text-2xl hover:scale-110 transition-transform"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= newReview.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Review
                  </label>
                  <textarea
                    value={newReview.text}
                    onChange={(e) =>
                      setNewReview({ ...newReview, text: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    rows={4}
                    placeholder="Share your experience working with Maaz..."
                  />
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddReview}
                  className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Add Review
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
