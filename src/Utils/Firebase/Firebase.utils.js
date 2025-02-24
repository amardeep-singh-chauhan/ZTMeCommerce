import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect, signOut } from 'firebase/auth';
import { collection, doc, getDoc, getFirestore, setDoc, writeBatch } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBRM2KuJqG3lWLcYLLBgjYueHx2tzlbH7A",
    authDomain: "crown-db-7c5bc.firebaseapp.com",
    projectId: "crown-db-7c5bc",
    storageBucket: "crown-db-7c5bc.firebasestorage.app",
    messagingSenderId: "219467104419",
    appId: "1:219467104419:web:114a26ac474d13045e7f16"
};

initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInwithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInwithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd, field = 'title') => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach(object => {
        const docRef = doc(collectionRef, object[field].toUpperCase())
        batch.set(docRef, object)
    });

    await batch.commit();
    console.log("Documents added successfully!");
} 

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid)

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })
        } catch (error) {
            console.log(error);
        }
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return createUserWithEmailAndPassword(auth, email, password);
}

export const signInUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)