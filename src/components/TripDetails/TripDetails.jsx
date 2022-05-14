import React, { useState } from "react";
import BusComponent from "../BusComponent/BusComponent";
import "./TripDetails.css";

const TripDetails = (props) => {
  const {
    busType,
    id,
    company,
    price,
    duration,
    plate,
    from,
    to,
    seats,
    date,
  } = props.data;

  const [expand, setExpand] = useState(false);

  return (
    <div className="trip-details__wrapper">
      <div className="trip-details__components">
        <div className="trip-details-company">
          <span className="trip-details-company-text">{company}</span>
          <span className="trip-details-company-text">{price}</span>
        </div>

        <div className="trip-details-row">
          <span className="trip-details-text">{date}</span>
        </div>

        <div className="trip-details-row">
          <span className="trip-details-text">
            {from} {"  -  "}
            {to}
          </span>
          <span className="trip-details-text">{plate}</span>
        </div>

        <div className="trip-details-row">
          <span className="trip-details-text">Seyahat Suresi: {duration}</span>
          <span className="trip-details-text">
            Koltuk Sayisi {busType === 1 ? "33" : "44"}
          </span>
        </div>

        <div className="trip-details__col">
          <div style={{ display: expand == true ? "block" : "none" }}>
            <BusComponent seats={seats} busType={busType} travelId={id} />
          </div>
        </div>

        <h1
          className="trip-details-more"
          onClick={() => {
            setExpand(!expand);
          }}
        >
          {expand == true ? "▲" : "▼"}
        </h1>
      </div>
    </div>
  );
};

export default TripDetails;