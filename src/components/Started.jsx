import React from "react";

const Started = () => {
  return (
    <>
      <section>
        <div className="element-center flex-col max-w-full md:w-[70%] min-h-[200px]   mx-auto  bg-curvyColor text-white py-[20px]  stand-margin">
          <h3 className="text-2xl font-bold tracking-wide mb-[20px]">
            Get early access today
          </h3>
          <p className="text-sm font-light tracking-wide  text-center mb-[20px] w-[70%] ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
            illum provident dolores doloribus omnis non tempore optio corrupti
          </p>
          <form
            action=""
            className="flex justify-between items-center gap-[20px] flex-col md:flex-row w-full px-[30px] "
          >
            <input
              type="text"
              name=""
              id=""
              placeholder="email@example.com"
              className="flex-1 p-2 rounded-full outline-none text-black pl-[20px] font-medium max-w-full w-full "
            />
            <a className="btn py-2 px-3 w-full md:w-[150px] text-center max-w-full ">
              Get Started Free
            </a>
          </form>
        </div>
      </section>
    </>
  );
};

export default Started;
