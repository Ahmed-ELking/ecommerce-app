
import { initializeApp } from "firebase/app"
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from "firebase/auth"
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
const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => { 
  const userDocRef = doc(db, "users", userAuth.uid)

  const userSnapshot = await getDoc(userDocRef)

  if(!userSnapshot.exists()) { 
    const {displayName, email} = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName, email, createdAt
      })
    } catch (error) {
      console.log("error creating user", error.message)
    }
  }

  return userDocRef
}



