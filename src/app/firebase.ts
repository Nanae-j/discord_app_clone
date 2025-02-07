import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDdD9AOSls-S2TRBgY5Qd04WBztY9ZK_rE',
  authDomain: 'discord-clone-udemy-42978.firebaseapp.com',
  projectId: 'discord-clone-udemy-42978',
  storageBucket: 'discord-clone-udemy-42978.firebasestorage.app',
  messagingSenderId: '1073810906313',
  appId: '1:1073810906313:web:d97c9e5b964e4ec6d38118',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
