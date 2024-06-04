import React from "react";

const Productive = () => {
  return (
    <>
      <section>
        <div className="container stand-margin grid grid-cols-1 md:grid-cols-2 gap-[40px] place-items-center text-white mt-[200px]">
          <div>
            <img
              src="/src/assets/illustration-stay-productive.png"
              alt="Stay Productive"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-7">
              Stay Productive, <br /> Whererver you are
            </h3>
            <p className="text-sm font-light mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              nisi iusto optio vitae alias cupiditate, dolore sed ullam velit
            </p>
            <p className="text-sm font-light mb-7">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              nisi iusto optio vitae alias cupiditate, dolore sed ullam velit
            </p>
            <a
              href="/"
              className="flex items-center w-fit border-b-2 border-blue-300 pb-2"
            >
              See how Fylo works
              <img
                src="/src/assets/icon-arrow.svg"
                alt="Arrow"
                className="ml-2 w-[25px] h-[25px] animate-[MoveToRight_1s_ease-in-out_infinite]"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Productive;
