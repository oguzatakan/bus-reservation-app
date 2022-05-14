import React, { useEffect, useState } from "react";

import BusLayout1 from "../BusLayout1/BusLayout1";
import BusLayout2 from "../BusLayout2/BusLayout2";
import AddPassengerComponent from "../AddPassengerComponent/AddPassengerComponent";
import SeatComponent from "../SeatComponent/SeatComponent";
import "./BusComponent.css";
import { data } from "../../data/travels";
import { useNavigate } from "react-router-dom";

const BusComponent = (props) => {
  const navigate = useNavigate();

  const travel = props.data;

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seatData, setSeatData] = useState(travel.seats);

  const applySelection = () => {
    console.log(selectedSeats);
    navigate("/purchase", {
      state: { selectedSeats: selectedSeats, travel: travel },
    });
  };

  return (
    <div>
      <div className="bus-component__wrapper">
        {travel.busType == 1 ? (
          <BusLayout1
            selectedTravel={travel}
            seatData={seatData}
            setSeatData={setSeatData}
            selectedSeats={selectedSeats}
            setSelectedSeats={setSelectedSeats}
          />
        ) : (
          <BusLayout2
            selectedTravel={travel}
            seatData={seatData}
            setSeatData={setSeatData}
            selectedSeats={selectedSeats}
            setSelectedSeats={setSelectedSeats}
          />
        )}
      </div>
      <div className="bus-component__buy_button__wrapper">
        {selectedSeats.length > 0 ? (
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
