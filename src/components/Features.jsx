import React, { useState } from "react";
import Feature from "./Feature";

const Features = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      icon: "icon-access-anywhere.svg",
      title: "Access your files , anywhere",
      description:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit Commodi explicabo adipisicing elit Commodi explicabo Lorem ipsum dolor sit, amet consectetur ",
    },
    {
      id: 2,
      icon: "icon-security.svg",
      title: "Security you can trust",
      description:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit Commodi explicabo adipisicing elit Commodi explicabo Lorem ipsum dolor sit, amet consectetur ",
    },
    {
      id: 3,
      icon: "icon-collaboration.svg",
      title: "Real-time collaboration",
      description:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit Commodi explicabo adipisicing elit Commodi explicabo Lorem ipsum dolor sit, amet consectetur ",
    },
    {
      id: 4,
      icon: "icon-any-file.svg",
      title: "Store any type of file",
      description:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit Commodi explicabo adipisicing elit Commodi explicabo Lorem ipsum dolor sit, amet consectetur ",
    },
  ]);
  return (
    <>
      <section className="bg-curvyColor z-40 pb-[50px]">
        <div className="container  grid grid-cols-1 md:grid-cols-2 gap-x-[100px] max-w-full md:w-[70%] p-0 ">
          {items.map((item) => (
            <Feature
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Features;
