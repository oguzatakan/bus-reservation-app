import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import SeatComponent from "../SeatComponent/SeatComponent";
import "./BusLayout2.css";
import { selectDeselect } from "../../store/travel";

const BusLayout2 = (props) => {
  const { selectedTravel } = props;

  const dispatch = useDispatch();

  const onClick = (number, gender) => (e) => {
    let clickedSeat = selectedTravel.seats.find((x) => x.number == number);
    dispatch(selectDeselect({ clickedSeat, selectedTravel }));

    // const onClick = (number, gender) => (e) => {
    //   let clickedSeat = seatData.find((x) => x.number == number);
    //   if (clickedSeat.reserved == 0 && clickedSeat.selected == 0) {
    //     if (selectedSeats.length < 4) {
    //       clickedSeat.selected = 1;
    //       // clickedSeat.gender = gender;
    //       console.log(clickedSeat);
    //       updateItem(number, clickedSeat);
    //       let tmpSelectedSeats = [...selectedSeats];
    //       tmpSelectedSeats.push(clickedSeat);
    //       setSelectedSeats(tmpSelectedSeats);
    //     } else {
    //       alert("Max 4 koltuk secilebilir!");
    //     }
    //   } else if (clickedSeat.reserved == 0 && clickedSeat.selected == 1) {
    //     clickedSeat.selected = 0;
    //     // clickedSeat.gender = "";
    //     // setSelectedSeats(selectedSeats.pop());
    //     let tmpSelectedSeats = selectedSeats.filter(
    //       (item) => item.number !== number
    //     );
    //     setSelectedSeats([...tmpSelectedSeats]);
    //   } else {
    //     alert("Bu koltuk secilemez!");
    //   }
  };

  return (
    <div className="bus-component__2">
      <div>
        <div className="bus-component__2__right">
          {selectedTravel.seats
            .slice(22, 44)
            .flatMap((seat, index) =>
              seat.number % 2 == 0 ? (
                <SeatComponent
                  onClick={onClick(seat.number, seat.gender)}
                  key={index}
                  data={seat}
                />
              ) : (
                []
              )
            )}
        </div>
        <div className="bus-component__2__right__window">
          {selectedTravel.seats
            .slice(22, 44)
            .flatMap((seat, index) =>
              seat.number % 2 == 1 ? (
                <SeatComponent
                  onClick={onClick(seat.number, seat.gender)}
                  key={index}
                  data={seat}
                />
              ) : (
                []
              )
            )}
        </div>
      </div>

      <div>
        <div className="bus-component__2__right">
          {selectedTravel.seats
            .slice(0, 22)
            .flatMap((seat, index) =>
              seat.number % 2 == 0 ? (
                <SeatComponent
                  onClick={onClick(seat.number, seat.gender)}
                  key={index}
                  data={seat}
                />
              ) : (
                []
              )
            )}
        </div>
        <div className="bus-component__2__right__window">
          {selectedTravel.seats
            .slice(0, 22)
            .flatMap((seat, index) =>
              seat.number % 2 == 1 ? (
                <SeatComponent
                  onClick={onClick(seat.number, seat.gender)}
                  key={index}
                  data={seat}
                />
              ) : (
                []
              )
            )}
        </div>
      </div>
    </div>
  );
};

export default BusLayout2;
