import { createSlice, current } from "@reduxjs/toolkit";
import { initialData } from "../data/initialData";

export const userSlice = createSlice({
  name: "travel",
  initialState: { value: initialData },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },

    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },

    selectDeselect: (state, action) => {
      console.log("secildi");

      let selectedTravel = { ...action.payload.selectedTravel };
      let clickedSeat = { ...action.payload.clickedSeat };

      clickedSeat.selected = clickedSeat.selected === 1 ? 0 : 1;

      let index = selectedTravel.seats.findIndex(
        (x) => x.number === clickedSeat.number
      );

      selectedTravel.seats = [
        ...selectedTravel.seats.slice(0, index),
        Object.assign({}, selectedTravel.seats[index], clickedSeat),
        ...selectedTravel.seats.slice(index + 1),
      ];

      let index2 = current(state.value).findIndex(
        (x) => x.number === selectedTravel.id
      );

      let allTravels = current(state.value);

      allTravels = [
        ...allTravels.slice(0, index2),
        Object.assign({}, allTravels[index2], selectedTravel),
        ...allTravels.slice(index2 + 1),
      ];

      console.log(allTravels[2].seats[3]);

      state.value = allTravels;

      // state.value.map((user) => {
      //   if (user.id === action.payload.id) {
      //     user.username = action.payload.username;
      //   }
      // });
    },
  },
});

export const { addUser, deleteUser, selectDeselect } = userSlice.actions;
export default userSlice.reducer;
