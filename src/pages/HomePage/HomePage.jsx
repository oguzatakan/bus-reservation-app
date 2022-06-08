import React from "react";
import { useNavigate } from "react-router-dom";
import TravelSelection from "../../components/TravelSelection/TravelSelection";

import "./HomePage.css";

const HomePage = () => {
  let navigate = useNavigate()
  return (
    <div className="home-div">
      <div className="admin-div" onClick={()=>navigate("/travelPanel")}>
        <img
          className="admin-img"
          src="https://pos.bakiyem.com/surucuimg/0C6299908F669B21AA05485DC74D8D05.jpeg"
        />
      </div>

      <div className="project-name-div">
        <h1 className="project-name">Otobüs Bilet Uygulaması</h1>
      </div>

      <TravelSelection />

      <div className="name-div">
        <span>Atakan OĞUZ</span>
        <span>1191602092</span>
      </div>
    </div>
  );
};

export default HomePage;