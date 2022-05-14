import React, { useEffect, useState } from "react";
import SeatComponent from "../SeatComponent/SeatComponent";
import { useDispatch, useSelector } from "react-redux";
import { selectDeselect } from "../../store/travel";
import "./BusLayout1.css";

const BusLayout1 = (props) => {
  const { travelId } = props;

  const travel = useSelector((state) =>
    state.travel.travels.find((x) => x.id === travelId)
  );

  const dispatch = useDispatch();

  const onClick = (number) => (e) => {
    let clickedSeat = travel.seats.find((x) => x.number == number);
    console.log(clickedSeat);
    dispatch(selectDeselect({ clickedSeat, selectedTravel: travel }));
  };

  return (
    <div className="bus-component__1">
      <div>
        <div className="bus-component__1__right">
          {travel.seats
            .slice(11, 34)
            .flatMap((seat, index) =>
              seat.number % 2 == 0 ? (
                <SeatComponent
                  onClick={onClick(seat.number)}
                  key={index}
                  data={seat}
                />
              ) : (
                []
              )
            )}
        </div>
        <div className="bus-component__1__right__window">
          {travel.seats
            .slice(11, 34)
            .flatMap((seat, index) =>
              seat.number % 2 == 1 ? (
                <SeatComponent
                  onClick={onClick(seat.number)}
                  key={index}
                  data={seat}
                />
              ) : (
                []
              )
            )}
        </div>
      </div>
      <div className="bus-component__1__left">
        {travel.seats.slice(0, 11).map((seat, index) => {
          return (
            <SeatComponent
              onClick={onClick(seat.number)}
              key={index}
              data={seat}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BusLayout1;