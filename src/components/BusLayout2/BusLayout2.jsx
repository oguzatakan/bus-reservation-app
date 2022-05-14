import React, { useEffect, useState } from "react";
import SeatComponent from "../SeatComponent/SeatComponent";
import "./BusLayout2.css";

const BusLayout2 = (props) => {
  const { data, selectedSeats, setSelectedSeats, seatData, setSeatData } =
    props;

  const updateItem = (number, itemAttributes) => {
    let index = seatData.findIndex((x) => x.number === number);
    if (index === -1) {
    }
    // handle error
    else {
      setSeatData([
        ...seatData.slice(0, index),
        Object.assign({}, seatData[index], itemAttributes),
        ...seatData.slice(index + 1),
      ]);
    }
  };

 
  const onClick = (number, gender) => (e) => {
    let clickedSeat = seatData.find((x) => x.number == number);
    if (clickedSeat.reserved == 0 && clickedSeat.selected == 0) {
      if (selectedSeats.length < 4) {
        clickedSeat.selected = 1;
        // clickedSeat.gender = gender;
        console.log(clickedSeat);
        updateItem(number, clickedSeat);
        let tmpSelectedSeats = [...selectedSeats];
        tmpSelectedSeats.push(clickedSeat);
        setSelectedSeats(tmpSelectedSeats);
      } else {
        alert("Max 4 koltuk secilebilir!");
      }
    } else if (clickedSeat.reserved == 0 && clickedSeat.selected == 1) {
      clickedSeat.selected = 0;
      // clickedSeat.gender = "";
      // setSelectedSeats(selectedSeats.pop());
      let tmpSelectedSeats = selectedSeats.filter(
        (item) => item.number !== number
      );
      setSelectedSeats([...tmpSelectedSeats]);
    } else {
      alert("Bu koltuk secilemez!");
    }
  };

  return (
    <div className="bus-component__2">
      <div>
        <div className="bus-component__2__right">
          {seatData
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
          {seatData
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
          {seatData
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
          {seatData
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
