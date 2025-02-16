import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBRM2KuJqG3lWLcYLLBgjYueHx2tzlbH7A",
    authDomain: "crown-db-7c5bc.firebaseapp.com",
    projectId: "crown-db-7c5bc",
    storageBucket: "crown-db-7c5bc.firebasestorage.app",
    messagingSenderId: "219467104419",
    appId: "1:219467104419:web:114a26ac474d13045e7f16"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider =  new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;