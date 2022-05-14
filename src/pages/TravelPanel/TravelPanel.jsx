import React, { useState } from "react";
import { busType1 } from "../../data/busType1";
import { busType2 } from "../../data/busType2";
import "./TravelPanel.css";
const TravelPanel = () => {
  const [travelDetail, setTravelDetail] = useState({
    busType: 0,
    price: "",
    company: "Metro",
    from: "Edirne",
    duration: "",
    plate: "",
    to: "Canakkale",
    date: "",
    seats: [],
  });

  const comppanies = [
    { value: "Metro", name: "Metro" },
    { value: "Nilufer", name: "Nilufer" },
    { value: "Truva", name: "Truva" },
  ];

  const cities = [
    { value: "Edirne", name: "Edirne Otogari" },
    { value: "Ankara", name: "Ankara Otogari" },
    { value: "Canakkale", name: "Canakkale Otogari" },
    { value: "Istanbul-Esenler", name: "Istanbul Esenler Otogari" },
    { value: "Istanbul-Samandira", name: "Istanbul Samandira Otogari" },
  ];

  const onClick = () => {
    let data = travelDetail;
    if (travelDetail.busType == 1) {
      data.seats = busType1;
    } else {
      data.seats = busType2;
    }
    console.log(travelDetail);
  };

  const onChangeTravelHandler = (e) => {
    setTravelDetail((values) => {
      return { ...values, [e.target.name]: e.target.value };
    });
  };

  return (
    <div>
      <div className="purchase-page-customer">
        <h3>Seyahat Oluşturma</h3>
        <input
          className="travel-select"
          name="price"
          placeholder="Price"
          value={travelDetail.price}
          onChange={(e) => onChangeTravelHandler(e)}
        />
        <select
          className="travel-select"
          name="company"
          placeholder="Company"
          value={travelDetail.company}
          onChange={(e) => onChangeTravelHandler(e)}
        >
          {comppanies.map((x, index) => (
            <option value={x.value} key={index}>
              {x.name}
            </option>
          ))}
        </select>
        <select
          className="travel-select"
          name="from"
          placeholder="Nereden"
          value={travelDetail.from}
          onChange={(e) => onChangeTravelHandler(e)}
        >
          {cities
            .filter((x) => x.value !== travelDetail.to)
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
          value={travelDetail.to}
          onChange={(e) => onChangeTravelHandler(e)}
        >
          {cities
            .filter((x) => x.value !== travelDetail.from)
            .map((x, index) => (
              <option value={x.value} key={index}>
                {x.name}
              </option>
            ))}
        </select>

        <input
          type="text"
          className="travel-select"
          name="duration"
          placeholder="Duration"
          value={travelDetail.duration}
          onChange={(e) => onChangeTravelHandler(e)}
        />
        <input
          className="travel-select"
          name="plate"
          placeholder="Plate"
          value={travelDetail.plate}
          onChange={(e) => onChangeTravelHandler(e)}
        />

        <select
          className="travel-select"
          name="busType"
          value={travelDetail.busType}
          onChange={(e) => onChangeTravelHandler(e)}
        >
          <option value={1}>Otobüs Tip:1 (33 Yolcu)</option>
          <option value={2}>Otobüs Tip:2 (44 Yolcu)</option>
        </select>
        <input
          type="date"
          className="travel-select"
          name="date"
          placeholder="Tarih"
          value={travelDetail.date}
          onChange={(e) => onChangeTravelHandler(e)}
        />
        <button className="travel-btn" onClick={() => onClick()}>
          Sefer Oluştur
        </button>
      </div>
    </div>
  );
};

export default TravelPanel;
