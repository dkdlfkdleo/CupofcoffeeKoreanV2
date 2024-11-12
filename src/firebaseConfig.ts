// src/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAgR6saJq2jnGwuir_NCMX9Q69_EyakrGQ",
  authDomain: "cupofcoffeekorean-d6a4a.firebaseapp.com",
  projectId: "cupofcoffeekorean-d6a4a",
  storageBucket: "cupofcoffeekorean-d6a4a.firebasestorage.app",
  messagingSenderId: "473951486897",
  appId: "1:473951486897:web:195b59d0dcd5f79b937390",
  measurementId: "G-NDWXQBM82T"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
