import React, { useEffect, useState } from "react";

import BusLayout1 from "../BusLayout1/BusLayout1";
import BusLayout2 from "../BusLayout2/BusLayout2";
import AddPassengerComponent from "../AddPassengerComponent/AddPassengerComponent";
import SeatComponent from "../SeatComponent/SeatComponent";
import "./BusComponent.css";
import { data } from "../../data/travels";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const BusComponent = (props) => {
  const navigate = useNavigate();

  //const travel = props.data;

  const travelRedux = useSelector((state) => state.travel.travels);
  const selectedSeatData = useSelector(
    (state) => state.travel.selectedSeatData
  );

  const [travel, setTravel] = useState(props.data);

  const applySelection = () => {
    navigate("/purchase", {
      state: { selectedSeats: selectedSeatData, travel: travel },
    });
  };

  useEffect(() => {
    if (travelRedux !== undefined) {
      const tmp = travelRedux.find((x) => x.id == travel.id);
      setTravel(tmp);
    }
  }, [travelRedux]);

  return (
    <div>
      <div className="bus-component__wrapper">
        {travel.busType == 1 ? (
          <BusLayout2 selectedTravel={travel} />
        ) : (
          <BusLayout2 selectedTravel={travel} />
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
