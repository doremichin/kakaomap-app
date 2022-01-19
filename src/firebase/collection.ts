import {
  collection, getDocs, orderBy, query,
} from 'firebase/firestore';

import { db } from './firebase';

export const getAddressCollection = async (collectionId : string) => {
  const q = query(collection(db, collectionId), orderBy('timestamp', 'asc'));
  const querySnapshot = await getDocs(q);
  const result : any[] = [];
  querySnapshot.forEach((document) => {
    const docItem = {
      id: document.id,
      ...document.data(),
    };
    result.push(docItem);
  });
  return result;
};
