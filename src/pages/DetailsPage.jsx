import React from "react";
import { useEffect } from "react";
import { usePinContext } from "../contexts/PinContext";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const { getOnePin, pin } = usePinContext();
  const { id } = useParams();

  console.log(pin, "pin");

  useEffect(() => {
    getOnePin(id);
  }, []);

  return (
    <div style={{ backgroundColor: "rgb(242, 160, 123, 0.7)", margin: "0px" }}>
      {pin && (
        <div>
          <img width={400} src={pin.image} style={{ padding: "20px" }} />
          <div>
            <p style={{ fontSize: "30px" }}>{pin.title}</p>
            <p>{pin.category}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
