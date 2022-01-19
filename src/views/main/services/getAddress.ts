import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import { RootState } from '../../../redux/store';
import { setCurrentAddress, setInitialized } from '../../../redux/common/slice';
import { getAddressCollection } from '../../../firebase/collection';

export const getAddress = (id : string): ThunkAction<void, RootState, null, AnyAction> => async (dispatch) => {
  const result = await getAddressCollection(id);
  dispatch(setCurrentAddress(result));
  dispatch(setInitialized());
};
