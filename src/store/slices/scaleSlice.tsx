import { createSlice } from "@reduxjs/toolkit";
import { IscaleInitialState } from "../types/types";

const initialState: IscaleInitialState = {
  scaleVal: 0.25,
};

export const scaleSliceReducer = createSlice({
  name: "scale",
  initialState,
  reducers: {
    setScaleVal: (state, action) => {
      state.scaleVal = action.payload.value / 200;
    },
  },
});

export const { setScaleVal } = scaleSliceReducer.actions;

export default scaleSliceReducer.reducer;
