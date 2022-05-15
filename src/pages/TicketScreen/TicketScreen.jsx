import React, { useEffect, useState } from "react";
import List from "../../components/List/List";
import "./TicketScreen.css";

import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const TicketScreen = () => {
  let navigate = useNavigate();
  const params = useParams();
  const travelData = useSelector((state) => state.travel.travels);
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

  const onClick = () => {
    console.log("data", travelData);
    navigate("/");
  };

  return (
    <div className="ticket-screen-div">
      <button className="ticket-screen-back-btn" onClick={() => onClick()}>
        Anasayfaya Geri Dön
      </button>
      <select
        className="travel-select"
        name="from"
        placeholder="Nereden"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      >
        {comppanies.map((x, index) => (
          <option value={x.value} key={index}>
            {x.name}
          </option>
        ))}
      </select>

      {applyFilter(travelData).length == 0 ? (
        <h2>Sefer Bulunamadi!</h2>
      ) : (
        <List data={applyFilter(travelData)} />
      )}
    </div>
  );
};

export default TicketScreen;
