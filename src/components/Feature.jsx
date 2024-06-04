import React from "react";

const Feature = ({ id, icon, title, description }) => {
  return (
    <>
      <div className="text-white  flex flex-col justify-center items-center z-30">
        <img src={`/src/assets/${icon}`} alt={`image${id}`} />
        <h4 className="font-semibold text-lg mb-1">{title}</h4>
        <p className="font-light text-sm text-center ">{description}</p>
      </div>
    </>
  );
};

export default Feature;
