import { getAuth, signInWithPopup } from "firebase/auth";

const auth = getAuth();

export default {
  auth,
  signInWithPopup,
};
