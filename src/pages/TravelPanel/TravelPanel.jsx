import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginComponent } from "../../components/LoginComponent/LoginComponent";
import { busType1 } from "../../data/busType1";
import { busType2 } from "../../data/busType2";
import { newTravelDataChecker } from "../../helper/dataChecker";
import { addTravel } from "../../store/travel";
import "./TravelPanel.css";
const TravelPanel = () => {
  const [userData, setuserData] = useState({
    userName: "",
    password: "",
  });

  const [login, setlogin] = useState(false);

  const [travelDetail, setTravelDetail] = useState({
    id: 0,
    busType: 0,
    price: "",
    company: "Metro",
    from: "Edirne",
    duration: "",
    plate: "",
    hour: "",
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

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onClick = () => {
    let data = travelDetail;
    if (newTravelDataChecker(data) == false) {
      data.id = Math.random();
      data.price = Number(data.price);
      if (travelDetail.busType == 1) {
        data.seats = busType1;
      } else {
        data.seats = busType2;
      }
      dispatch(addTravel({ travel: data }));

      console.log(travelDetail);
      alert("Sefer başarılı biçimde oluşturuldu.");
      navigate("/");
    } else {
      alert("Lütfen Alanların Tam Dolu Olduğundan Emin Olunuz.");
    }
  };

  const onLoginClick = () => {
    if (userData.userName == "atakan" && userData.password == "admin") {
      setlogin(true);
    } else {
      alert("Kullanıcı Adı veya Şifre Hatalı.");
    }
  };

  const onChangeTravelHandler = (e) => {
    setTravelDetail((values) => {
      return { ...values, [e.target.name]: e.target.value };
    });
  };

  const onChangeUserHandler = (e) => {
    setuserData((values) => {
      return { ...values, [e.target.name]: e.target.value };
    });
  };

  return (
    <div>
      {login == true ? (
        <div>
          <div className="travel-panel-back-btn-wrapper">
          <button className="travel-panel-back-btn" onClick={() => navigate("/")}>
          ⤾ 
      </button>
          </div>
          <div className="purchase-page-customer">
            <h3>Seyahat Oluşturma Paneli</h3>
            <input
              className="travel-select"
              type="number"
              name="price"
              placeholder="Tutar (₺)"
              value={travelDetail.price}
              onChange={(e) => onChangeTravelHandler(e)}
            />
            <select
              className="travel-select"
              name="company"
              placeholder="Şirket İsmi"
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
              placeholder="Seyehat Süresi (Dk)"
              value={travelDetail.duration}
              onChange={(e) => onChangeTravelHandler(e)}
            />
            <input
              className="travel-select"
              name="plate"
              placeholder="Araç Plakası(*(11 AA 11))"
              value={travelDetail.plate}
              onChange={(e) => onChangeTravelHandler(e)}
            />
            <input
              type="text"
              className="travel-select"
              name="hour"
              placeholder="Saat(*(21.30))"
              value={travelDetail.hour}
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
              placeholder="Seyehat Tarihi"
              value={travelDetail.date}
              onChange={(e) => onChangeTravelHandler(e)}
            />
            <button className="travel-btn" onClick={() => onClick()}>
              Sefer Oluştur
            </button>
          </div>
        </div>
      ) : (
        <LoginComponent
          onClick={onLoginClick}
          userData={userData}
          onChangeUserHandler={onChangeUserHandler}
        />
      )}
    </div>
  );
};

export default TravelPanel;
