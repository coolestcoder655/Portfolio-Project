import { initializeApp, type FirebaseApp } from "firebase/app";
import { getFirestore, type Firestore } from "firebase/firestore";

const requiredEnvKeys = [
  "VITE_FIREBASE_API_KEY",
  "VITE_FIREBASE_AUTH_DOMAIN",
  "VITE_FIREBASE_PROJECT_ID",
  "VITE_FIREBASE_STORAGE_BUCKET",
  "VITE_FIREBASE_MESSAGING_SENDER_ID",
  "VITE_FIREBASE_APP_ID",
] as const;

type RequiredEnvKey = (typeof requiredEnvKeys)[number];

type FirebaseConfig = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId?: string;
};

function buildFirebaseConfig(): FirebaseConfig | null {
  const missing = requiredEnvKeys.filter(
    (key) => !import.meta.env[key as RequiredEnvKey]
  );

  if (missing.length > 0) {
    console.error(
      `[firebase] Missing Vite env vars: ${missing.join(
        ", "
      )}. Add them to .env (dev) or as build args (docker build).`
    );
    return null;
  }

  return {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY!,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN!,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID!,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET!,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID!,
    appId: import.meta.env.VITE_FIREBASE_APP_ID!,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
  };
}

const firebaseConfig = buildFirebaseConfig();

export const isFirebaseConfigured = Boolean(firebaseConfig);

export const app: FirebaseApp | null = firebaseConfig
  ? initializeApp(firebaseConfig)
  : null;

export const db: Firestore | null = app ? getFirestore(app) : null;
