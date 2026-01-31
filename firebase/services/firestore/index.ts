import { db } from "@/firebase";
import { ProductDataType, ProductWithId, UserCustomerData } from "@/types";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";

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

export const addProductToProductCollection = async (data: ProductDataType) => {
  try {
    const productDocRef = doc(collection(db, "product"));
    const result = await setDoc(productDocRef, data);

    console.log("Product database successfully created!", result);
  } catch (error) {
    throw new Error("Failed to create product document", { cause: error });
  }
};

export const getProduct = async (): Promise<ProductWithId[]> => {
  try {
    const q = await getDocs(collection(db, "product"));
    const products = q.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as ProductDataType),
    }));

    return products;
  } catch (error) {
    throw new Error("Failed to get products data:", { cause: error });
  }
};
