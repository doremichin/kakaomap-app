import {
  collection, getDocs, orderBy, query,
} from 'firebase/firestore';

import { db } from './firebase';

export const getAddressCollection = async (collectionId : string) => {
  const q = query(collection(db, collectionId), orderBy('timestamp', 'asc'));
  const querySnapshot = await getDocs(q);
  const result : any[] = [];
  querySnapshot.forEach((document : any) => {
    const docItem = {
      id: document.id,
      ...document.data(),
    };
    delete docItem?.timestamp;
    result.push(docItem);
  });
  return result;
};
