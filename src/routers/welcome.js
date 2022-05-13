import React from "react";
import { useLocation } from "react-router-dom";

function Welcome() {
  let location = useLocation();
  return (
    <>
      <div>Welcome {location.state.toliqIsm}</div>
    </>
  );
}

export default Welcome;
