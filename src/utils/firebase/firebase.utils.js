
import { initializeApp } from "firebase/app"
import {
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth"
import {getFirestore, doc, setDoc, getDoc} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCrdxramIZiR6p-A0YJFBpWqAHTuKC-TaQ",
  authDomain: "ecommerce-app-b0220.firebaseapp.com",
  projectId: "ecommerce-app-b0220",
  storageBucket: "ecommerce-app-b0220.appspot.com",
  messagingSenderId: "972411220354",
  appId: "1:972411220354:web:1494c903c03876683cdf9b"
};

// Initialize Firebase

// eslint-disable-next-line no-unused-vars
const firebaseApp = initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => { 

  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid)

  const userSnapshot = await getDoc(userDocRef)

  if(!userSnapshot.exists()) { 
    const {displayName, email} = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName, 
        email, 
        createdAt, 
        ...additionalInformation
      })
    } catch (error) {
      console.log("error creating user", error.message)
    }
  }

  return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password)
}
