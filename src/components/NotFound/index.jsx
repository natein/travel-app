import React from "react";
import { useLocation } from "react-router-dom";

function NotFound() {
  let location = useLocation();

  return (
      <h1>
        Not found for {location.pathname}
      </h1>
  );
}

export default NotFound;
