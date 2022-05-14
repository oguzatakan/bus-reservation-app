import React, { useEffect, useState } from "react";

import BusLayout1 from "../BusLayout1/BusLayout1";
import BusLayout2 from "../BusLayout2/BusLayout2";
import AddPassengerComponent from "../AddPassengerComponent/AddPassengerComponent";
import SeatComponent from "../SeatComponent/SeatComponent";
import "./BusComponent.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const BusComponent = (props) => {
  const { seats, busType, travelId } = props;

  const navigate = useNavigate();

  //const travel = props.data;

  const selectedSeatData = useSelector(
    (state) => state.travel.selectedSeatData
  );

  const applySelection = () => {
    navigate("/purchase", {
      state: { travelId: travelId },
    });
  };

  return (
    <div>
      <div className="bus-component__wrapper">
        {busType == 1 ? (
          <BusLayout1 travelId={travelId} />
        ) : (
          <BusLayout2 travelId={travelId} />
        )}
      </div>
      <div className="bus-component__buy_button__wrapper">
        {selectedSeatData.length > 0 ? (
          <button
            onClick={() => applySelection()}
            className="bus-component__buy_button"
          >
            Satin Al
          </button>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default BusComponent;