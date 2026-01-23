
import { collection, getDocs } from "firebase/firestore";
import { db } from "..";

export const getCollection = async () => {
  const snapshot = await getDocs(collection(db, "users"));

  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
