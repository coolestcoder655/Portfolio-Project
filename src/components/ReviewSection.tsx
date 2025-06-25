import { Star, Plus } from 'lucide-react';
import { type JSX } from 'react';
import { type Review } from '../reviewsApi';
import { useTheme } from '../contexts/ThemeContext';

interface Props {
    setShowModal: (show: boolean) => void;
    reviews: Review[];
    renderStars: (rating: number) => JSX.Element[];
}

const ReviewSection: React.FC<Props> = ({ setShowModal, renderStars, reviews }) => {
    const { theme } = useTheme();
    
    return (
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Star className={`w-8 h-8 transition-colors duration-300 ${
                theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'
              }`} />
              <h2 className={`text-3xl font-bold transition-colors duration-300 ${
                theme === 'dark' ? 'text-white' : 'text-slate-800'
              }`}>
                Professional Reviews
              </h2>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-2 px-6 py-3 font-medium text-white transition-colors bg-indigo-600 rounded-lg hover:bg-indigo-700"
            >
              <Plus className="w-5 h-5" />
              Add Review
            </button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.length > 1 ? (
              reviews.map((review, index) => (
                <div
                  key={index}
                  className={`rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 ${
                    theme === 'dark' ? 'bg-slate-800' : 'bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100'
                    }`}>
                      <Star className={`w-8 h-8 ${
                        theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                      }`} />
                    </div>
                    <div>
                      <h3 className={`text-lg font-semibold transition-colors duration-300 ${
                        theme === 'dark' ? 'text-white' : 'text-slate-800'
                      }`}>
                        {review.name}
                      </h3>
                      <p className={`text-sm transition-colors duration-300 ${
                        theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                      }`}>
                        {review.position}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    {renderStars(review.rating)}
                  </div>
                  <p className={`transition-colors duration-300 ${
                    theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                  }`}>{review.text}</p>
                </div>
              ))
            ) : (
              <div className={`col-span-full text-center rounded-2xl p-6 transition-colors duration-300 ${
                theme === 'dark' 
                  ? 'text-slate-400 bg-slate-700' 
                  : 'text-slate-500 bg-slate-100'
              }`}>
                No reviews yet. Be the first to add one!
              </div>
            )}
          </div>
        </section>
    );
};

export default ReviewSection;