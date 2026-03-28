// Firebase upload helper

import { storage } from "@/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

// helper function that generates the url for uploaded images
export const uploadToFirebase = async (file: File) => {
  const fileRef = ref(storage, `products/${crypto.randomUUID()}-${file.name}`);

  await uploadBytes(fileRef, file);

  return getDownloadURL(fileRef);
};

// Upload multiple files and return all download URLs
export const uploadManyToFirebase = async (files: File[]) => {
  const uploads = files.map(async (file) => {
    const fileRef = ref(
      storage,
      `products/${crypto.randomUUID()}-${file.name}`,
    );

    await uploadBytes(fileRef, file);

    return getDownloadURL(fileRef);
  });

  return Promise.all(uploads);
};
