import { auth } from "@/firebase";
import { clearServerSession } from "@/lib/auth/clientSession";
import { signOut } from "firebase/auth";

export const signOutUser = async () => {
  try {
    try {
      await clearServerSession();
    } catch {
      /* continue with client sign-out */
    }
    await signOut(auth);
  } catch (error) {
    console.log("Error singing user out:", error);

    throw new Error("Failed to sign user out!", { cause: error });
  }
};
