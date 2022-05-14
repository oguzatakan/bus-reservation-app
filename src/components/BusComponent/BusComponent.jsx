import React, { useEffect, useState } from "react";

import BusLayout1 from "../BusLayout1/BusLayout1";
import BusLayout2 from "../BusLayout2/BusLayout2";
import AddPassengerComponent from "../AddPassengerComponent/AddPassengerComponent";
import SeatComponent from "../SeatComponent/SeatComponent";
import "./BusComponent.css";
import { data } from "../../data/travels";

const BusComponent = (props) => {
  const travel = props.data;

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seatData, setSeatData] = useState(travel.seats);

  return (
    <div>
      <div className="bus-component__wrapper">
        {travel.busType == 1 ? (
          <BusLayout1
            seatData={seatData}
            setSeatData={setSeatData}
            selectedSeats={selectedSeats}
            setSelectedSeats={setSelectedSeats}
            data={data}
          />
        ) : (
          <BusLayout2
            seatData={seatData}
            setSeatData={setSeatData}
            selectedSeats={selectedSeats}
            setSelectedSeats={setSelectedSeats}
            data={data}
          />
        )}
      </div>
      {/* <div className="bus-component__passenger">
        {selectedSeats.map((tmp, index) => {
          return (
            <AddPassengerComponent
              onChange={onChange}
              onClick={onClick(tmp.number)}
              data={tmp}
              key={tmp.number}
            />
          );
        })}
      </div> */}
      {/* <div className="bus-component__buy_button__wrapper">
        {selectedSeats.length > 0 ? (
          <button className="bus-component__buy_button" onClick={buy}>
            Satin Al
          </button>
        ) : (
          <div></div>
        )}
      </div> */}
    </div>
  );
};

export default BusComponent;
