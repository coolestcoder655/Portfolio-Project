import { db } from '../firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';

export type Review = {
  name: string;
  rating: number;
  position: string;
  text: string;
};

const reviewsCollection = collection(db, 'reviews');

export async function fetchReviews(): Promise<Review[]> {
  const snapshot = await getDocs(reviewsCollection);
  return snapshot.docs.map(doc => doc.data() as Review);
}

export async function addReview(review: Review): Promise<void> {
  await addDoc(reviewsCollection, review);
}
