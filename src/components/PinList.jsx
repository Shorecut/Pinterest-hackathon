import React, { useEffect } from "react";
import { usePinContext } from "../contexts/PinContext";
import PinItem from "./PinItem";

const PinList = () => {
  const { pins, getPins } = usePinContext();
  useEffect(() => {
    getPins();
  }, []);
  return (
    <div>
      {pins.map((item) => (
        <PinItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default PinList;
