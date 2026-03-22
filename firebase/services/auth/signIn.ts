import { auth } from "@/firebase";
import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";

export const signInUser = async (email: string, password: string) => {
  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );

    const user = userCredentials.user;

    console.log("Login successfully!", user);

    return {
      user,
    };
  } catch (error) {
    const firebaseError = error as FirebaseError;

    console.error("Sign-in error:", firebaseError.code, firebaseError.message);

    return {
      error: firebaseError.message,
    };
  }
};
