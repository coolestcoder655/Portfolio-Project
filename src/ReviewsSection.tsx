import { useEffect, useState } from 'react';
import { fetchReviews, addReview } from './reviewsApi';
import type { Review } from './reviewsApi';

const ReviewsSection = ({ cardClasses, textClasses, isDarkMode }: { cardClasses: string, textClasses: string, isDarkMode: boolean }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchReviews().then(setReviews);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      await addReview({ name, message });
      setSuccess('Review submitted!');
      setName('');
      setMessage('');
      setReviews(await fetchReviews());
      setShowModal(false);
    } catch (err) {
      setError('Failed to submit review.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="reviews" className="py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">Reviews</h2>
        <div className="flex justify-center mb-10">
          <button
            onClick={() => setShowModal(true)}
            className="px-6 py-2 rounded bg-gradient-to-r from-cyan-400 to-purple-400 text-white font-semibold shadow-md hover:from-purple-400 hover:to-cyan-400 transition-colors"
          >
            Add Review
          </button>
        </div>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className={`p-8 rounded-xl border ${cardClasses} w-full max-w-md relative`}>
              <button
                className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-xl font-bold"
                onClick={() => setShowModal(false)}
                aria-label="Close"
              >
                ×
              </button>
              <h3 className="text-xl font-bold mb-4 text-center">Add a Review</h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  className={`p-3 rounded border focus:outline-none ${isDarkMode ? 'bg-slate-800 text-white border-white/10' : 'bg-white text-gray-900 border-gray-300'}`}
                  placeholder="Your Name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                />
                <textarea
                  className={`p-3 rounded border focus:outline-none ${isDarkMode ? 'bg-slate-800 text-white border-white/10' : 'bg-white text-gray-900 border-gray-300'}`}
                  placeholder="Your Review"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  required
                  rows={3}
                />
                <button
                  type="submit"
                  className="px-6 py-2 rounded bg-gradient-to-r from-cyan-400 to-purple-400 text-white font-semibold shadow-md hover:from-purple-400 hover:to-cyan-400 transition-colors"
                  disabled={loading}
                >
                  {loading ? 'Submitting...' : 'Submit Review'}
                </button>
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                {success && <p className="text-green-500 text-sm mt-2">{success}</p>}
              </form>
            </div>
          </div>
        )}
        <div className="space-y-6">
          {reviews.length === 0 && <p className={textClasses + ' text-center'}>No reviews yet. Be the first!</p>}
          {reviews.map((review) => (
            <div key={review.id} className={`p-5 rounded-xl border ${cardClasses}`}>
              <div className="flex items-center mb-2">
                <span className="font-semibold mr-2 text-cyan-400">{review.name}</span>
                <span className="text-xs text-gray-400">{review.createdAt?.toDate?.().toLocaleString?.() || ''}</span>
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
