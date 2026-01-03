import { db } from './firebase.ts';
import { collection, getDocs, addDoc } from 'firebase/firestore';

export interface Review {
  name: string;
  rating: number;
  position: string;
  text: string;
};

const reviewsCollection = db ? collection(db, 'reviews') : null;

export async function fetchReviews(): Promise<Review[]> {
  if (!reviewsCollection) return [];
  const snapshot = await getDocs(reviewsCollection);
  return snapshot.docs.map(doc => doc.data() as Review);
}

export async function addReview(review: Review): Promise<void> {
  if (!reviewsCollection) throw new Error('Firestore is not configured (missing Vite Firebase env vars).');
  await addDoc(reviewsCollection, review);
}
