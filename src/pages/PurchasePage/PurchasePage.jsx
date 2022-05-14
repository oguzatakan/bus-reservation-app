import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PurchasePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state === null) {
      navigate("/");
    }
  }, [location]);

  return (
    <div>
      <h1>PurchasePage</h1>
      <h2>{JSON.stringify(location.state)}</h2>
    </div>
  );
};

export default PurchasePage;
