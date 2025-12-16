import { auth } from "@/firebase";
import { signOut } from "firebase/auth";

export const signOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log("Error singing user out:", error);

    throw new Error("Failed to sign user out!", { cause: error });
  }
};
