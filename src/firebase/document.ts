import {
  collection, doc, setDoc, deleteDoc, serverTimestamp,
} from 'firebase/firestore';

import { db } from './firebase';

export const setAddressDocument = async (collectionId : string, data : any) => {
  const ref = doc(collection(db, collectionId));

  await setDoc(ref, {
    ...data,
    timestamp: serverTimestamp(),
  });
};

export const deleteAddressDocument = async (collectionId : string, documentId : string) => {
  await deleteDoc(doc(db, collectionId, documentId));
};
