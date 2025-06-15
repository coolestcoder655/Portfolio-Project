import { useEffect, useState } from "react";
import { fetchReviews, addReview } from "./reviewsApi";
import type { Review } from "./reviewsApi";
import { Star } from "lucide-react";

const ReviewsSection = ({
  cardClasses,
  textClasses,
  isDarkMode,
}: {
  cardClasses: string;
  textClasses: string;
  isDarkMode: boolean;
}) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchReviews().then(setReviews);
  }, []);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      await addReview({ name, message, rating });
      setSuccess("Review submitted!");
      setName("");
      setMessage("");
      setRating(5);
      setReviews(await fetchReviews());
      // Close modal immediately after successful submission
      setIsModalOpen(false);
    } catch (err) {
      setError("Failed to submit review.");
    } finally {
      setLoading(false);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
    setError("");
    setSuccess("");
  };

  return (
    <section id="reviews" className="py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
          Reviews
        </h2>

        <div className="flex justify-center mb-8">
          <button
            onClick={openModal}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-400 text-white font-semibold shadow-lg hover:from-purple-400 hover:to-cyan-400 transition-colors transform hover:scale-105 duration-200"
          >
            Add Your Review
          </button>
        </div>

        {/* Review Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm">
            <div
              className={`relative w-full max-w-md p-6 rounded-xl border ${cardClasses} animate-fade-in-up`}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <h3 className="text-xl font-bold mb-4 text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
                Share Your Review
              </h3>{" "}
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  className={`p-3 rounded border focus:outline-none ${
                    isDarkMode
                      ? "bg-slate-800 text-white border-white/10"
                      : "bg-white text-gray-900 border-gray-300"
                  }`}
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <div className="mb-2">
                  <label className="block text-sm mb-1">Your Rating</label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="transition-transform hover:scale-110"
                      >
                        <Star
                          size={24}
                          fill={
                            (hoverRating || rating) >= star ? "#38BDF8" : "none"
                          }
                          color={
                            (hoverRating || rating) >= star
                              ? "#38BDF8"
                              : "#9CA3AF"
                          }
                          className="transition-colors duration-200"
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <textarea
                  className={`p-3 rounded border focus:outline-none ${
                    isDarkMode
                      ? "bg-slate-800 text-white border-white/10"
                      : "bg-white text-gray-900 border-gray-300"
                  }`}
                  placeholder="Your Review"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={3}
                />
                <button
                  type="submit"
                  className="px-6 py-2 rounded bg-gradient-to-r from-cyan-400 to-purple-400 text-white font-semibold shadow-md hover:from-purple-400 hover:to-cyan-400 transition-colors"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit Review"}
                </button>
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                {success && (
                  <p className="text-green-500 text-sm mt-2">{success}</p>
                )}
              </form>
            </div>
          </div>
        )}

        <div className="space-y-6">
          {reviews.length === 0 && (
            <p className={textClasses + " text-center"}>
              No reviews yet. Be the first!
            </p>
          )}
          {reviews.map((review) => (
            <div
              key={review.id}
              className={`p-5 rounded-xl border ${cardClasses}`}
            >
              {" "}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <span className="font-semibold mr-2 text-cyan-400">
                    {review.name}
                  </span>
                  <span className="text-xs text-gray-400">
                    {review.createdAt?.toDate?.().toLocaleString?.() || ""}
                  </span>
                </div>
                <div className="flex">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill={i < (review.rating || 5) ? "#38BDF8" : "none"}
                      color={i < (review.rating || 5) ? "#38BDF8" : "#9CA3AF"}
                    />
                  ))}
                </div>
              </div>
              <p className={textClasses}>{review.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
