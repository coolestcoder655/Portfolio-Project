import { GraduationCap, Award } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

interface AcademicSTEMHighlightsProps {
  isOutOfCollege?: boolean;
}

const AcademicSTEMHighlights: React.FC<AcademicSTEMHighlightsProps> = ({
  isOutOfCollege = false,
}) => {
  const { theme } = useTheme();

  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        <GraduationCap
          className={`w-8 h-8 transition-colors duration-300 ${
            theme === "dark" ? "text-indigo-400" : "text-indigo-600"
          }`}
        />
        <h2
          className={`text-3xl font-bold transition-colors duration-300 ${
            theme === "dark" ? "text-white" : "text-slate-800"
          }`}
        >
          Academic & STEM Excellence
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {isOutOfCollege && (
          <div
            className={`rounded-2xl shadow-lg p-6 transition-all duration-300 ${
              theme === "dark" ? "bg-slate-800" : "bg-white"
            }`}
          >
            <h3
              className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
                theme === "dark" ? "text-white" : "text-slate-800"
              }`}
            >
              Education
            </h3>
            <div className="space-y-4">
              <div>
                <h4
                  className={`font-semibold transition-colors duration-300 ${
                    theme === "dark" ? "text-slate-200" : "text-slate-700"
                  }`}
                >
                  Master of Science in Computer Science
                </h4>
                <p
                  className={`transition-colors duration-300 ${
                    theme === "dark" ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  Stanford University • GPA: 3.9/4.0
                </p>
                <p
                  className={`text-sm transition-colors duration-300 ${
                    theme === "dark" ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  Specialization: AI & Machine Learning
                </p>
              </div>
              <div>
                <h4
                  className={`font-semibold transition-colors duration-300 ${
                    theme === "dark" ? "text-slate-200" : "text-slate-700"
                  }`}
                >
                  Bachelor of Science in Engineering
                </h4>
                <p
                  className={`transition-colors duration-300 ${
                    theme === "dark" ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  MIT • Summa Cum Laude • GPA: 3.95/4.0
                </p>
                <p
                  className={`text-sm transition-colors duration-300 ${
                    theme === "dark" ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  Double Major: Computer Science & Mathematics
                </p>
              </div>
            </div>
          </div>
        )}
        <div
          className={`rounded-2xl shadow-lg p-6 transition-all duration-300 ${
            theme === "dark" ? "bg-slate-800" : "bg-white"
          }`}
        >
          <h3
            className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
              theme === "dark" ? "text-white" : "text-slate-800"
            }`}
          >
            STEM Achievements
          </h3>
          <ul
            className={`space-y-3 transition-colors duration-300 ${
              theme === "dark" ? "text-slate-200" : "text-slate-700"
            }`}
          >
            {[
              "Developed 5+ freelance applications serving diverse client needs",
              "Specialized in full-stack web development and mobile applications",
              "Maintained 100% client satisfaction rate with on-time delivery",
              "Expertise in React, TypeScript, and modern web technologies",
            ].map((achievement, index) => (
              <li key={index} className="flex items-start gap-2">
                <Award
                  className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                    theme === "dark" ? "text-yellow-400" : "text-yellow-500"
                  }`}
                />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AcademicSTEMHighlights;
