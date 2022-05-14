import React, { useEffect, useState } from "react";
import List from "../../components/TravelSelection/List/List";
import "./TicketScreen.css";
import { data } from "../../data/travels";
import { useParams } from "react-router-dom";
const TicketScreen = () => {
  const params = useParams();

  const [company, setCompany] = useState("");
  const [travelData, setTravelData] = useState({
    from: "",
    to: "",
    date: "",
  });

  useEffect(() => {
    const arr = params.travel.split(",");
    const tmp = {
      from: arr[0],
      to: arr[1],
      date: arr[2],
    };

    setTravelData(tmp);
  }, [params]);

  const applyFilter = (data) => {
    return data.filter(
      (x) =>
        (company === "" ? true : x.company === company) &&
        x.from === travelData.from &&
        x.to === travelData.to &&
        x.date === travelData.date
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

      {applyFilter(data).length == 0 ? (
        <h2>Sefer Bulunamadi!</h2>
      ) : (
        <List data={applyFilter(data)} />
      )}
    </div>
  );
};

export default TicketScreen;
