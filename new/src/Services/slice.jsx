import { createSlice } from "@reduxjs/toolkit";

const initialvalue = {
  value: 0,
};

const addtoCart = createSlice({
  name: "cart",
  initialState: initialvalue,
  reducers: {
    addItem: (state) => {
      state.value += 1;
    },
  },
});

export const { addItem } = addtoCart.actions;
export default addtoCart.reducer;
