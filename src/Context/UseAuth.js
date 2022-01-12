import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


// import initializeAuthentication from "../Firebase/firebase.insialize";

// initializeAuthentication()

// const creteUserWithPassword = createUserWithEmailAndPassword(auth, email, password)

const provider = new GoogleAuthProvider();

const auth = getAuth();

export default {
    auth,
    signInWithPopup,
    provider,
    // creteUserWithPassword
}