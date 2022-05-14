import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AddPassengerComponent from "../../components/AddPassengerComponent/AddPassengerComponent";
import "./PurchasePage.css";
const PurchasePage = () => {
  const location = useLocation();

  const [seats, setSeats] = useState(location.state.selectedSeats);
  const [travel, setTravel] = useState(location.state.travel);
  const [customerDetail, setCustomerDetail] = useState({
    name: "",
    surname: "",
    email: "",
    cardNumber: "",
    cvc: "",
    expireDate: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (location.state === null) {
      navigate("/");
    }
  }, [seats]);

  useEffect(() => {
    console.log("koltuklar", seats);
    if (seats.length == 0) {
      navigate("/");
    }
  }, [seats]);

  const onDeleteClick = (number) => (e) => {
    const tmpSelectedSeats = seats.filter((item) => item.number !== number);
    console.log("Kalanlar: ", tmpSelectedSeats);
    setSeats(tmpSelectedSeats);
  };

  const onPurchase = () => {
    alert(
      "satin alindi!\nLutfen: " +
        customerDetail.email +
        " isimli eposta adresinizi kontrol edin."
    );
    navigate("/");
  };

  const onChangeCustomerHandler = (e) => {
    setCustomerDetail((values) => {
      return { ...values, [e.target.name]: e.target.value };
    });
  };

  const onChangePassenger = (e, number) => {
    const { name, value, checked } = e.target;
    let list = [...seats];
    list.forEach((x) => {
      if (x.number === number) {
        x.passenger[name] = value;
      }
    });
    setSeats(list);
  };

  return (
    <div className="purchase-page-div">
      <h1>PurchasePage</h1>
      <div className="purchase-page-passenger-data">
        {seats.map((tmp, index) => {
          return (
            <AddPassengerComponent
              onChange={onChangePassenger}
              onClick={onDeleteClick(tmp.number)}
              data={tmp}
              key={tmp.number}
            />
          );
        })}
      </div>

      <div className="purchase-page-customer">
        <h3>Odeme Bilgileri</h3>
        <input
          className="travel-select"
          name="name"
          placeholder="Name"
          defaultValue={customerDetail.name}
          value={customerDetail.name}
          onChange={(e) => onChangeCustomerHandler(e)}
        />
        <input
          className="travel-select"
          name="surname"
          placeholder="Surname"
          defaultValue={customerDetail.surname}
          value={customerDetail.surname}
          onChange={(e) => onChangeCustomerHandler(e)}
        />

        <input
          className="travel-select"
          name="email"
          placeholder="Email"
          defaultValue={customerDetail.email}
          value={customerDetail.email}
          onChange={(e) => onChangeCustomerHandler(e)}
        />
        <input
          type="text"
          className="travel-select"
          name="cardNumber"
          placeholder="Card Number"
          defaultValue={customerDetail.cardNumber}
          value={customerDetail.cardNumber}
          onChange={(e) => onChangeCustomerHandler(e)}
        />
        <input
          className="travel-select"
          name="expireDate"
          placeholder="Expire Date"
          defaultValue={customerDetail.expireDate}
          value={customerDetail.expireDate}
          onChange={(e) => onChangeCustomerHandler(e)}
        />
        <input
          className="travel-select"
          type="number"
          name="cvc"
          placeholder="CVC"
          defaultValue={customerDetail.cvc}
          value={customerDetail.cvc}
          onChange={(e) => onChangeCustomerHandler(e)}
        />
      </div>

      <button className="travel-btn" onClick={() => onPurchase()}>
        Satin Al
      </button>
      {/* <h2>{JSON.stringify(seats)}</h2>
      <h2>{JSON.stringify(travel)}</h2> */}
    </div>
  );
};

export default PurchasePage;
