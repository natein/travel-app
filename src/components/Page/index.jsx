import React from "react";
import { useParams } from "react-router-dom";
import SightGallery from "./SightGallery";

function Country() {
  const { isoCode } = useParams();
  return (
    <>
      <h3>Страна {isoCode}</h3>
        <h1 align="center">Достопримечательности</h1>
      <SightGallery />
    </>
  );
}

export default Country;
