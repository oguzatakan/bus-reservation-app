import React from "react";
import "./AddPassengerComponent.css";
const AddPassengerComponent = (props) => {
  const { reserved, selected, gender, number } = props.data;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="add-passenger__wrapper">
      {/* <div className="add-passenger__form">
        <h3>Secilen Koltuk No: {number}</h3>
        <div className="add-passenger__row">
          <input type="text" placeholder="isim"></input>
          <input type="text" placeholder="soyisim"></input>
        </div>
        <input type="text" placeholder="tc"></input>

        <label for="gender"> Select you gender</label>
        <select name="gender">
          <option value="none" selected>
            Cinsiyet
          </option>
          <option value="female">Erkek</option>
          <option value="male">Kadin</option>
        </select>
        <button className="add-passenger__form__remove__btn" type="submit">
          Kaldir
        </button>
      </div> */}
      <form onSubmit={handleSubmit} className="add-passenger__form">
        <div className="add-passenger__form__remove__btn__wrapper">
          <button
            onClick={props.onClick}
            className="add-passenger__form__remove__btn"
          >
            x
          </button>
        </div>
        <h3 style={{ color: "white" }}>Secilen Koltuk No: {number}</h3>
        {/* <label for="fname">Isim</label> */}
        <input
          className="add-passenger__form__input"
          type="text"
          id="name"
          name="name"
          placeholder="adiniz.."
          onChange={(e) => props.onChange(e, number)}
        />

        {/* <label for="lname">Soyisim</label> */}
        <input
          type="text"
          className="add-passenger__form__input"
          id="surname"
          name="surname"
          placeholder="soyadiniz.."
          onChange={(e) => props.onChange(e, number)}
        />

        {/* <label for="lname">TC No</label> */}
        <input
          type="text"
          className="add-passenger__form__input"
          id="tcNo"
          name="tcNo"
          placeholder="tc kimlik.."
          onChange={(e) => props.onChange(e, number)}
        />

        {/* <label for="gender">Cinsiyet</label> */}
        <select
          className="add-passenger__form__input"
          id="gender"
          name="gender"
          onChange={(e) => props.onChange(e, number)}
        >
          <option value="none">Cinsiyet</option>
          <option value="male">Erkek</option>
          <option value="female">Kadin</option>
        </select>
      </form>
    </div>
  );
};

export default AddPassengerComponent;
