import React, { useState } from "react";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons";

const Footer = () => {
  const [infos, setInfo] = useState([
    "About Us ",
    " Contact Us ",
    "Jobs",
    "Terms ",
    "Press",
    "Privacy",
    "Blog",
  ]);
  return (
    <>
      <footer>
        <div className="container text-white font-light tracking-wide">
          <div className="mb-10">
            <img src="/src/assets/logo.svg" alt="logo" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-[20px] items-place-center">
            <div className="flex justify-start">
              <img
                src="/src/assets/icon-location.svg"
                alt="location"
                className="object-contain w-[20px] h-[20px] mr-4"
              />
              <p className="">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit Vel
                sunt quaerat labore eaque exercitationem fugiat perferendis
              </p>
            </div>

            <div className="md:mx-auto ">
              <p className="flex  mb-5">
                <img
                  src="/src/assets/icon-phone.svg"
                  alt="phone"
                  className="object-contain mr-4 "
                />
                <span className="text-sm">+ 123-456-789</span>
              </p>
              <p className="flex ">
                <img
                  src="/src/assets/icon-email.svg"
                  alt="email"
                  className="object-contain mr-4"
                />
                <span className="text-sm">example@fylo.com</span>
              </p>
            </div>
            {/* Info using data from useState */}
            <div className="grid grid-cols-2 gap-[10px]">
              {infos.map((info) => (
                <p key={info}>{info}</p>
              ))}
            </div>
            {/* react icons */}
            <IconContext.Provider value={{ size: "1em", color: "white" }}>
              <div className="flex justify-start mx-auto ">
                <div className="ico">
                  <FaFacebookF />
                </div>
                <div className="ico">
                  <FaTwitter />
                </div>
                <div className="ico">
                  <FaInstagram />
                </div>
              </div>
            </IconContext.Provider>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
