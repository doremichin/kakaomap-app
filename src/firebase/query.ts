import {
  collection, getDocs, doc, setDoc, deleteDoc, serverTimestamp, orderBy, query,
} from 'firebase/firestore';

import { db } from './firebase';
import { setCurrentAddress } from '../redux/common/slice';
import { store } from '../redux/store';

export const getAddressCollection = async () => {
  const q = query(collection(db, 'address'), orderBy('timestamp', 'asc'));
  const querySnapshot = await getDocs(q);
  const result : any[] = [];
  querySnapshot.forEach((document) => {
    const docItem = {
      id: document.id,
      ...document.data(),
    };
    result.push(docItem);
  });
  store.dispatch(setCurrentAddress(result));

  return result;
};

export const setAddressDocument = async (data : any) => {
  const ref = doc(collection(db, 'address'));

  await setDoc(ref, {
    ...data,
    timestamp: serverTimestamp(),
  });
};

export const deleteAddressDocument = async (id : string) => {
  await deleteDoc(doc(db, 'address', id));
};
