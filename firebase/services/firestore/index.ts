import { db } from "@/firebase";
import { UserCustomerData } from "@/types";
import { doc, getDoc, setDoc } from "firebase/firestore";

export const addUserToCustomerCollection = async (
  data: UserCustomerData,
  id: string,
) => {
  try {
    const customerDocRef = doc(db, "customer", id);
    const result = await setDoc(customerDocRef, data);

    console.log("Customer database successfully created!", result);
  } catch (error) {
    throw new Error("Failed to create customer document", { cause: error });
  }
};

export const getUserCustomer = async (
  id: string,
): Promise<UserCustomerData> => {
  try {
    const userDocRef = doc(db, "customer", id);
    const docSnap = await getDoc(userDocRef);

    if (!docSnap.exists()) {
      throw new Error("User not found");
    }

    return docSnap.data() as UserCustomerData;
  } catch (error) {
    throw new Error("Failed to fetch user data", { cause: error });
  }
};
