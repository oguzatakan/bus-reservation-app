import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SeatComponent from "../SeatComponent/SeatComponent";
import "./BusLayout2.css";
import { selectDeselect } from "../../store/travel";

const BusLayout2 = (props) => {
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
    <div className="bus-component__2">
      <div>
        <div className="bus-component__2__right">
          {travel.seats
            .slice(22, 44)
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
        <div className="bus-component__2__right__window">
          {travel.seats
            .slice(22, 44)
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

      <div>
        <div className="bus-component__2__right">
          {travel.seats
            .slice(0, 22)
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
        <div className="bus-component__2__right__window">
          {travel.seats
            .slice(0, 22)
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
    </div>
  );
};

export default BusLayout2;