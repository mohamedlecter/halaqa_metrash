import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  client: { toggleForm: false },
  update: { toggleForm: false, fomrId: undefined },
};

export const ReducerSlice = createSlice({
  name: "halaqa_metrah",
  initialState,
  reducers: {
    toggleChangeAction: (state) => {
      state.client.toggleForm = !state.client.toggleForm;
    },
    updateAction: (state, action) => {
      state.update.toggleForm = !state.update.toggleForm;
      state.update.fomrId = action.payload;
    },
  },
});

export const { toggleChangeAction, updateAction } = ReducerSlice.actions;

export default ReducerSlice.reducer;
