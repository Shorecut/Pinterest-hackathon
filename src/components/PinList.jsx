import React, { useEffect } from "react";
import { usePinContext } from "../contexts/PinContext";
import PinItem from "./PinItem";

const PinList = () => {
  const { pins, getPins } = usePinContext();
  useEffect(() => {
    getPins();
  }, []);
  return (
    <div className="mainContainer">
      {pins.map((item) => (
        <PinItem key={item.id} item={item} pinSize={item.size} />
      ))}
    </div>
  );
};

export default PinList;
