import { createSlice, current } from "@reduxjs/toolkit";
import { initialData } from "../data/initialData";

export const userSlice = createSlice({
  name: "travel",
  initialState: { travels: initialData, seat: { number: 1 } },
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

    selectDeselect: (state, action) => {
      console.log("secildi");

      const tmpTravelsArray = current(state.travels);

      let selectedTravel = { ...action.payload.selectedTravel };
      let clickedSeat = { ...action.payload.clickedSeat };

      console.log("before", clickedSeat);

      const existingSeat = tmpTravelsArray
        .find((x) => x.id === selectedTravel.id)
        .seats.find((x) => x.number === clickedSeat.number);

      clickedSeat.selected = existingSeat.selected === 1 ? 0 : 1;
      console.log("after", clickedSeat);

      let index = selectedTravel.seats.findIndex(
        (x) => x.number === clickedSeat.number
      );

      selectedTravel.seats = [
        ...selectedTravel.seats.slice(0, index),
        Object.assign({}, selectedTravel.seats[index], clickedSeat),
        ...selectedTravel.seats.slice(index + 1),
      ];

      let index2 = tmpTravelsArray.findIndex((x) => x.id === selectedTravel.id);

      console.log(index2);

      let allTravels = [...tmpTravelsArray];

      allTravels = [
        ...allTravels.slice(0, index2),
        Object.assign({}, allTravels[index2], selectedTravel),
        ...allTravels.slice(index2 + 1),
      ];

      state.travels = [...allTravels];
    },
  },
});

export const { addUser, deleteUser, selectDeselect } = userSlice.actions;
export default userSlice.reducer;
