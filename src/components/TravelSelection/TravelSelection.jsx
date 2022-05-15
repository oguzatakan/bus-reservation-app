import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TravelSelection.css";
const TravelSelection = () => {
  let navigate = useNavigate();

  const [travelData, setTravelData] = useState({
    from: "Edirne",
    to: "Canakkale",
    date: new Date().toISOString().split("T")[0],
  });

  const cities = [
    { value: "Edirne", name: "Edirne (Edirne Otobüs Terminali)" },
    { value: "Ankara", name: "Ankara (Ankara Otobüs Terminali)" },
    { value: "Canakkale", name: "Çanakkale (Çanakkale Otobüs Terminali)" },
    { value: "Istanbul-Esenler", name: "İstanbul (Esenler Otobüs Terminali)" },
    { value: "Istanbul-Samandira", name: "İstanbul (Samandira Otobüs Terminali)" },
  ];

  const onChangeHandler = (e) => {
    setTravelData((values) => {
      return { ...values, [e.target.name]: e.target.value };
    });
  };

  const onClick = () => {
    console.log("data", travelData);
    navigate(
      "/ticket/" + travelData.from + "/" + travelData.to + "/" + travelData.date
    );
  };

  return (
    <div className="travel-div">
      <select
        className="travel-select"
        name="from"
        placeholder="Nereden"
        value={travelData.from}
        onChange={(e) => onChangeHandler(e)}
      >
        {cities
          .filter((x) => x.value !== travelData.to)
          .map((x, index) => (
            <option value={x.value} key={index}>
              {x.name}
            </option>
          ))}
      </select>

      <select
        name="to"
        className="travel-select"
        placeholder="Nereye"
        value={travelData.to}
        onChange={(e) => onChangeHandler(e)}
      >
        {cities
          .filter((x) => x.value !== travelData.from)
          .map((x, index) => (
            <option value={x.value} key={index}>
              {x.name}
            </option>
          ))}
      </select>

      <input
        type="date"
        className="travel-select"
        name="date"
        placeholder="Tarih"
        value={travelData.date}
        onChange={(e) => onChangeHandler(e)}
      />
      <button className="travel-btn" onClick={() => onClick()}>
        Ara
      </button>
    </div>
  );
};

export default TravelSelection;