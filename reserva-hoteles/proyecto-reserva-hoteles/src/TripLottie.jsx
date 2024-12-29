import React from "react";
import Lottie from "react-lottie";
import animationData from "./lotties/4138-trip.json";

export default function TripLottie() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={300} width={350} />
    </div>
  );
}
