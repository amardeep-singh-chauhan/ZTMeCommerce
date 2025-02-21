import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBRM2KuJqG3lWLcYLLBgjYueHx2tzlbH7A",
    authDomain: "crown-db-7c5bc.firebaseapp.com",
    projectId: "crown-db-7c5bc",
    storageBucket: "crown-db-7c5bc.firebasestorage.app",
    messagingSenderId: "219467104419",
    appId: "1:219467104419:web:114a26ac474d13045e7f16"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInwithGooglePopup = () => signInWithPopup(auth, provider);