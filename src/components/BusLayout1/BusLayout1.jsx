import React, { useEffect, useState } from "react";
import SeatComponent from "../SeatComponent/SeatComponent";
import "./BusLayout1.css";

const BusLayout1 = (props) => {
  const { data, selectedSeats, setSelectedSeats, seatData, setSeatData } =
    props;

  return (
    <div className="bus-component__1">
      <div>
        <div className="bus-component__1__right">
          {seatData
            .slice(11, 34)
            .flatMap((seat, index) =>
              seat.number % 2 == 0 ? (
                <SeatComponent key={index} data={seat} />
              ) : (
                []
              )
            )}
        </div>
        <div className="bus-component__1__right__window">
          {seatData
            .slice(11, 34)
            .flatMap((seat, index) =>
              seat.number % 2 == 1 ? (
                <SeatComponent key={index} data={seat} />
              ) : (
                []
              )
            )}
        </div>
      </div>
      <div className="bus-component__1__left">
        {seatData.slice(0, 11).map((seat, index) => {
          return <SeatComponent key={index} data={seat} />;
        })}
      </div>
    </div>
  );
};

export default BusLayout1;
