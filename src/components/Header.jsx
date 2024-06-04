import React, { useEffect, useRef, useState } from "react";

const Header = () => {
  const headerRef = useRef();
  const [links, setLinks] = useState(["Features", "Team", "Singnin"]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        headerRef.current.style.backgroundColor = "#202a3c ";
        headerRef.current.style.padding = "30px";
      } else {
        headerRef.current.style.backgroundColor = "transparent";
        headerRef.current.style.padding = "40px";
      }
    });
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className="z-40 p-[60px] fixed top-0 left-0 bg-inherit w-full"
      >
        <div className="flex justify-between items-center ">
          <div className="logo">
            <img src="/src/assets/logo.svg" alt="logo" />
          </div>

          <nav>
            <ul className="flex justify-around items-center">
              {links.map((link) => (
                <li
                  key={link}
                  className="mx-2 px-2 py-1 text-textColor hover:bg-blueColor  hover:text-white  hover:rounded-lg hover:transition-colors duration-200 cursor-pointer"
                >
                  {" "}
                  <a href={`/${link.toLowerCase()}`}>{link}</a>{" "}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
