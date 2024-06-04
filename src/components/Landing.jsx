import React from "react";

const Landing = () => {
  return (
    <>
      <section className="">
        <div className="container element-center text-white mt-[190px] z-40 ">
          <div className="w-[52%]  md:max-w-full">
            <img
              src="/src/assets/illustration-intro.png"
              alt="Landing"
              className="w-full h-fit"
            />
          </div>
          <div className="text-center py-[20px] z-40">
            <h1 className="text-4xl font-semibold">
              All your files in one secure location, <br /> accessible anywhere.
            </h1>
            <p className="text-md  font-light  leadeing-7 mt-4 max-w-full md:w-[50%] mx-auto ">
              Fylo stores all your most important files in one secure location.
              Access them wherever you need , share and collaborate with freinds
              family and co-workers.
            </p>

            <br />
            <a className="btn  w-[160px] h-[45px] p-3 inline-block ">
              Get Start{" "}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
