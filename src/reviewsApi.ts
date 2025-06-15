import { db } from '../firebase';
import { collection, getDocs, addDoc, Timestamp } from 'firebase/firestore';

export type Review = {
  id?: string;
  name: string;
  message: string;
  rating: number;
  createdAt?: Timestamp;
};

const reviewsCollection = collection(db, 'reviews');

export async function fetchReviews(): Promise<Review[]> {
  const snapshot = await getDocs(reviewsCollection);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Review));
}

export async function addReview(review: Omit<Review, 'id' | 'createdAt'>): Promise<void> {
  await addDoc(reviewsCollection, {
    ...review,
    createdAt: Timestamp.now(),
  });
}
