import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDvvp7NZN37h70sdSVsyaH2MT0IG_ljYho',
  authDomain: 'address-db-f9f0a.firebaseapp.com',
  projectId: 'address-db-f9f0a',
  storageBucket: 'address-db-f9f0a.appspot.com',
  messagingSenderId: '194053929810',
  appId: '1:194053929810:web:94975a6e0929405179588b',
  measurementId: 'G-4MMH2DND41',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
