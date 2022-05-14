export const selectDeselectOperation = (state, action) => {
  console.log("secildi");

  const tmpTravelsArray = state.travels;

  let selectedTravel = { ...action.payload.selectedTravel };
  let clickedSeat = { ...action.payload.clickedSeat };

  console.log("before", clickedSeat);

  const existingSeat = tmpTravelsArray
    .find((x) => x.id === selectedTravel.id)
    .seats.find((x) => x.number === clickedSeat.number);

  //clickedSeat.selected = existingSeat.selected === 1 ? 0 : 1;
  if (existingSeat.selected === 1) {
    clickedSeat.selected = 0;

    let tmpSeats = [...state.selectedSeatData];
    tmpSeats = tmpSeats.filter((x) => x.number !== clickedSeat.number);
    state.selectedSeatData = [...tmpSeats];
  } else {
    clickedSeat.selected = 1;
    let tmpSeats = [...state.selectedSeatData];
    tmpSeats.push(clickedSeat);
    state.selectedSeatData = [...tmpSeats];
  }
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
};
