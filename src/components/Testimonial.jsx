import React from "react";

const Testimonial = (props) => {
  const { id, description, profile, name, position } = props.item;
  return (
    <>
      <div className="text-white bg-curvyColor py-5 px-7 rounded-lg">
        <p className="font-light text-2 tracking-widest">{description}</p>
        <div className="flex items-center mt-5">
          <img
            src={`/src/assets/${profile}`}
            alt={`profile-${id}`}
            className="w-[40px] h-[40px] rounded-full mr-3"
          />
          <div className=" text-sm mt-1">
            <h4 className="font-bold  tracking-widest">{name}</h4>
            <span className="font-light  tracking-wide ">{position}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
