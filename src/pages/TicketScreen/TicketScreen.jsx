import React, { useEffect, useState } from "react";
import List from "../../components/List/List";
import "./TicketScreen.css";
//import { data } from "../../data/travels";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const TicketScreen = () => {
  const params = useParams();
  const travelData = useSelector((state) => state.travel);
  const { from, to, date } = params;

  const [company, setCompany] = useState("");

  const applyFilter = (data) => {
    return data.filter(
      (x) =>
        (company === "" ? true : x.company === company) &&
        x.from === from &&
        x.to === to &&
        x.date === date
    );
  };

  const comppanies = [
    { value: "", name: "Secim yapiniz.." },
    { value: "Metro", name: "Metro" },
    { value: "Nilufer", name: "Nilufer" },
    { value: "Truva", name: "Truva" },
  ];

  return (
    <div className="ticket-screen-div">
      <h2>{JSON.stringify(travelData.travels[2].seats[1])}</h2>
      <select
        className="travel-select"
        name="from"
        placeholder="Nereden"
        defaultValue={company}
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      >
        {comppanies.map((x, index) => (
          <option value={x.value} key={index}>
            {x.name}
          </option>
        ))}
      </select>

      {applyFilter(travelData.travels).length == 0 ? (
        <h2>Sefer Bulunamadi!</h2>
      ) : (
        <List data={applyFilter(travelData.travels)} />
      )}
    </div>
  );
};

export default TicketScreen;
