import { useState, type JSX, useEffect } from "react";
import { Star, X, Sun, Moon } from "lucide-react";
import { addReview, fetchReviews, type Review } from "./reviewsApi";
import { useTheme } from "./contexts/ThemeContext";
import HeroSection from "./components/HeroSection";
import UniqueSection from "./components/UniqueSection";
import AcademicSTEMHighlights from "./components/AcademicStemHighlights";
import TechSection from "./components/TechSection";
import LeadershipSection from "./components/LeadershipSection";
import AthleticSection from "./components/AthleticsSection";
import EntrepreuneurshipSection from "./components/EntrepreneurshipSection";
import ReviewSection from "./components/ReviewSection";
import Footer from "./components/Footer";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const [showModal, setShowModal] = useState(false);
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
    <div
      className={`min-h-screen transition-all duration-300 ${
        theme === "dark"
          ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
          : "bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"
      }`}
    >
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className={`fixed top-4 right-4 z-50 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border ${
          theme === "dark"
            ? "bg-slate-800 text-white border-slate-700 hover:bg-slate-700"
            : "bg-white text-slate-800 border-slate-200 hover:bg-slate-50"
        }`}
        aria-label="Toggle theme"
      >
        {theme === "light" ? (
          <Moon className="w-5 h-5" />
        ) : (
          <Sun className="w-5 h-5" />
        )}
      </button>

      {/* Hero Section */}
      <HeroSection />

      <div className="max-w-6xl px-6 py-12 mx-auto">
        <UniqueSection />

        {/* Academic & STEM Highlights */}
        <AcademicSTEMHighlights />

        {/* Tech, Innovation, and Projects */}
        <TechSection />

        {/* Leadership, Service, & School */}
        <LeadershipSection />

        {/* Athletics & Competitions */}
        <AthleticSection />

        {/* Entrepreneurship and Drive */}
        <EntrepreuneurshipSection />

        {/* Reviews Section */}
        <ReviewSection
          setShowModal={setShowModal}
          reviews={reviews}
          renderStars={renderStars}
        />

        {/* Footer */}
        <Footer />
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div
            className={`rounded-2xl shadow-2xl w-full max-w-md ${
              theme === "dark" ? "bg-slate-800" : "bg-white"
            }`}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3
                  className={`text-xl font-semibold ${
                    theme === "dark" ? "text-white" : "text-slate-800"
                  }`}
                >
                  Add a Review
                </h3>
                <button
                  onClick={() => setShowModal(false)}
                  className={`transition-colors ${
                    theme === "dark"
                      ? "text-slate-500 hover:text-slate-300"
                      : "text-slate-400 hover:text-slate-600"
                  }`}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label
                    className={`block text-sm font-medium mb-1 ${
                      theme === "dark" ? "text-slate-300" : "text-slate-700"
                    }`}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    value={newReview.name}
                    onChange={(e) =>
                      setNewReview({ ...newReview, name: e.target.value })
                    }
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                      theme === "dark"
                        ? "border-slate-600 bg-slate-700 text-white"
                        : "border-slate-300 bg-white text-slate-900"
                    }`}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    className={`block text-sm font-medium mb-1 ${
                      theme === "dark" ? "text-slate-300" : "text-slate-700"
                    }`}
                  >
                    Position
                  </label>
                  <input
                    type="text"
                    value={newReview.position}
                    onChange={(e) =>
                      setNewReview({ ...newReview, position: e.target.value })
                    }
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                      theme === "dark"
                        ? "border-slate-600 bg-slate-700 text-white"
                        : "border-slate-300 bg-white text-slate-900"
                    }`}
                    placeholder="Your job title and company"
                  />
                </div>
                <div>
                  <label
                    className={`block text-sm font-medium mb-1 ${
                      theme === "dark" ? "text-slate-300" : "text-slate-700"
                    }`}
                  >
                    Rating
                  </label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() =>
                          setNewReview({ ...newReview, rating: star })
                        }
                        className="text-2xl transition-transform hover:scale-110"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= newReview.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : theme === "dark"
                              ? "text-gray-600"
                              : "text-gray-300"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label
                    className={`block text-sm font-medium mb-1 ${
                      theme === "dark" ? "text-slate-300" : "text-slate-700"
                    }`}
                  >
                    Review
                  </label>
                  <textarea
                    value={newReview.text}
                    onChange={(e) =>
                      setNewReview({ ...newReview, text: e.target.value })
                    }
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                      theme === "dark"
                        ? "border-slate-600 bg-slate-700 text-white"
                        : "border-slate-300 bg-white text-slate-900"
                    }`}
                    rows={4}
                    placeholder="Share your experience working with Maaz..."
                  />
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setShowModal(false)}
                  className={`flex-1 px-4 py-2 border rounded-lg transition-colors ${
                    theme === "dark"
                      ? "border-slate-600 text-slate-300 bg-slate-700 hover:bg-slate-600"
                      : "border-slate-300 text-slate-700 bg-white hover:bg-slate-50"
                  }`}
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddReview}
                  className="flex-1 px-4 py-2 text-white transition-colors bg-indigo-600 rounded-lg hover:bg-indigo-700"
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
