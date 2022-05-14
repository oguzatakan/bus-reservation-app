import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import AddPassengerComponent from "../../components/AddPassengerComponent/AddPassengerComponent";
import {
  passengersDataChecker,
  purchaseDataChecker,
} from "../../helper/dataChecker";
import {
  selectDeselect,
  updatePassengerData,
  updatePassengerComponents,
  purchase,
} from "../../store/travel";
import "./PurchasePage.css";
const PurchasePage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [travelId, setTravelId] = useState();
  const travel = useSelector((state) =>
    state.travel.travels.find((x) => x.id === travelId)
  );
  const selectedSeatData = useSelector(
    (state) => state.travel.selectedSeatData
  );

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
    } else {
      setTravelId(location.state.travelId);
    }
  }, [location.state]);

  const onDeleteClick = (number) => (e) => {
    const clickedSeat = selectedSeatData.find((item) => item.number === number);
    const tmpSelectedSeats = selectedSeatData.filter(
      (item) => item.number !== number
    );
    dispatch(
      updatePassengerComponents({
        seats: tmpSelectedSeats,
        clickedSeat,
        selectedTravel: travel,
      })
    );
    if (tmpSelectedSeats.length == 0) {
      navigate("/");
    }
  };

  const onPurchase = () => {
    const passengerCheckError = passengersDataChecker(selectedSeatData);
    const purchaseCheckError = purchaseDataChecker(
      customerDetail.name,
      customerDetail.surname,
      customerDetail.email,
      customerDetail.cardNumber,
      customerDetail.cvc,
      customerDetail.expireDate
    );

    if (passengerCheckError == false && purchaseCheckError == false) {
      alert(
        "satin alindi!\nLutfen: " +
          customerDetail.email +
          " isimli eposta adresinizi kontrol edin."
      );

      dispatch(
        purchase({
          seats: selectedSeatData,
          selectedTravel: travel,
        })
      );

      navigate("/");
    } else {
      if (passengerCheckError == true) {
        alert(
          "Lutfen tum alanlari eksiksiz ve dogru olarak doldurun! \n\n- Tc no 11 karakter olmali \n- Ad, Soyad ve Cinsiyet alanlari bos birakilmamali"
        );
      }
      if (purchaseCheckError == true) {
        alert(
          "Lutfen odemeyle alakali bilgileri eksiksiz ve dogru olarak doldurun!"
        );
      }
    }
  };

  const onChangeCustomerHandler = (e) => {
    setCustomerDetail((values) => {
      return { ...values, [e.target.name]: e.target.value };
    });
  };

  const onChangePassenger = (e, number) => {
    const { name, value, checked } = e.target;
    dispatch(
      updatePassengerData({
        name,
        value,
        number,
      })
    );
  };

  return (
    <div className="purchase-page-div">
      <h1>PurchasePage</h1>

      <div className="purchase-page-customer">
        <h3>Odeme Bilgileri</h3>
        <input
          className="travel-select"
          name="name"
          placeholder="Name"
          value={customerDetail.name}
          onChange={(e) => onChangeCustomerHandler(e)}
        />
        <input
          className="travel-select"
          name="surname"
          placeholder="Surname"
          value={customerDetail.surname}
          onChange={(e) => onChangeCustomerHandler(e)}
        />

        <input
          className="travel-select"
          name="email"
          placeholder="Email"
          value={customerDetail.email}
          onChange={(e) => onChangeCustomerHandler(e)}
        />
        <input
          type="text"
          className="travel-select"
          name="cardNumber"
          placeholder="Card Number"
          value={customerDetail.cardNumber}
          onChange={(e) => onChangeCustomerHandler(e)}
        />
        <input
          className="travel-select"
          name="expireDate"
          placeholder="Expire Date"
          value={customerDetail.expireDate}
          onChange={(e) => onChangeCustomerHandler(e)}
        />
        <input
          className="travel-select"
          type="number"
          name="cvc"
          placeholder="CVC"
          value={customerDetail.cvc}
          onChange={(e) => onChangeCustomerHandler(e)}
        />
      </div>
      <div className="purchase-page-passenger-data">
        {selectedSeatData.map((tmp, index) => {
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
      <button className="travel-btn" onClick={() => onPurchase()}>
        Satin Al
      </button>
    </div>
  );
};

export default PurchasePage;