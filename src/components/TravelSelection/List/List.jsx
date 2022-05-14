import React from "react";
import TripDetails from "../../TripDetails/TripDetails";

const List = (props) => {
  const { data } = props;

  return (
    <div>
      {data.map((x, index) => {
       return <TripDetails data={x} key={index} />;
      })}
    </div>
  );
};

export default List;
