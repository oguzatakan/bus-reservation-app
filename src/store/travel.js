import { createSlice, current } from "@reduxjs/toolkit";
import { initialData } from "../data/initialData";
import { selectDeselectOperation } from "../helper/operations";

export const userSlice = createSlice({
  name: "travel",
  initialState: { travels: initialData, selectedSeatData: [] },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },

    selectDeselect: (state, action) => {
      // let clickedSeat = { ...action.payload.clickedSeat };
      // console.log("before", clickedSeat);
      // if (clickedSeat.selected == 0) {
      //   clickedSeat.selected = 1;
      // } else {
      //   clickedSeat.selected = 0;
      // }
      // console.log("after", clickedSeat);
      // state.seat = { ...clickedSeat };
      // state.value = state.value.filter((user) => user.id !== action.payload.id);
    },
    updatePassengerData: (state, action) => {
      state.selectedSeatData = [...action.payload.seats];
    },

    selectDeselect: (state, action) => {
     selectDeselectOperation(state,action);
    },
  },
});

export const { addUser, deleteUser, selectDeselect, updatePassengerData } =
  userSlice.actions;
export default userSlice.reducer;
