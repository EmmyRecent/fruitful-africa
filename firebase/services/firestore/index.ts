import { db } from "@/firebase";
import {
  CartItem,
  ProductDataType,
  ProductWithId,
  UserCustomerData,
} from "@/types";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  writeBatch,
} from "firebase/firestore";

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

/**
 * `customer/{customerId}/cartItems/{productId}` — one doc per line item.
 * Deletes docs for products no longer in `items`, upserts the rest.
 */
export const syncCartItemsSubcollection = async (
  customerId: string,
  items: CartItem[],
): Promise<void> => {
  try {
    const colRef = collection(db, "customer", customerId, "cartItems");
    const snapshot = await getDocs(colRef);
    const keepIds = new Set(items.map((i) => i.id));

    const batch = writeBatch(db);

    snapshot.docs.forEach((d) => {
      if (!keepIds.has(d.id)) {
        batch.delete(d.ref);
      }
    });

    items.forEach((item) => {
      const ref = doc(colRef, item.id);
      batch.set(ref, item, { merge: true });
    });

    await batch.commit();
  } catch (error) {
    throw new Error("Failed to sync cart to Firestore", { cause: error });
  }
};

export const getCartItemsFromCartCollection = async (
  customerId: string,
): Promise<CartItem[]> => {
  try {
    const cartItemsCol = collection(db, "customer", customerId, "cartItems");
    const q = await getDocs(cartItemsCol);
    const cartItems = q.docs.map((d) => ({
      ...(d.data() as CartItem),
      id: d.id,
    }));

    return cartItems;
  } catch (error) {
    throw new Error("Failed to get cart items data", { cause: error });
  }
};
