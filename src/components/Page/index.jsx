import React from "react";
import { useParams } from "react-router-dom";

function Country() {
    let { isoCode } = useParams();
    return (
      <>
        <h3>Country {isoCode}</h3> 
      </>
    );
  }
  
  export default Country;
