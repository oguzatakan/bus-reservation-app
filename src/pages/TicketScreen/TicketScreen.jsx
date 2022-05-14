import React from "react";
import List from "../../components/TravelSelection/List/List";
import "./TicketScreen.css";
import { data } from "../../data/travels";
const TicketScreen = () => {
  return (
    <div>
      <List data={data} />
    </div>
  );
};

export default TicketScreen;
