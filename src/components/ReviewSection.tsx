import { Star, Plus } from 'lucide-react';
import { type JSX } from 'react';
import { type Review } from '../reviewsApi';

interface Props {
    setShowModal: (show: boolean) => void;
    reviews: Review[];
    renderStars: (rating: number) => JSX.Element[];
}

const ReviewSection: React.FC<Props> = ({ setShowModal, renderStars, reviews }) => {
    return (
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
    );
};

export default ReviewSection;