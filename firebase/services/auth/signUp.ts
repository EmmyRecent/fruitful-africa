import { auth } from "@/firebase";
import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const signUpUser = async (email: string, password: string) => {
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredentials.user;

    console.log("Sign up successfully!", user);

    return {
      user,
    };
  } catch (error) {
    const firebaseError = error as FirebaseError;

    console.error("Sign-up error:", firebaseError.code, firebaseError.message);

    return {
      error: firebaseError.message,
    };
  }
};
