import { useState, type JSX, useEffect } from "react";
import {
  Star,
  X,
} from "lucide-react";
import { addReview, fetchReviews, type Review } from "./reviewsApi";
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <HeroSection />

      <div className="max-w-6xl mx-auto px-6 py-12">
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
        <ReviewSection setShowModal={setShowModal} reviews={reviews} renderStars={renderStars} />

        {/* Footer */}
        <Footer />
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
