import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../root/store';
import UI from '../../../models/UI';

const initialState: UI = {
    isShown: false,
};

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setIsShown: (state, action) => {
            state.isShown = action.payload;
        },
    }
  })
  
  export const { setIsShown } = uiSlice.actions;

  export const selectIsShown = (state: RootState) => state.ui.isShown;
  
  export default uiSlice.reducer;