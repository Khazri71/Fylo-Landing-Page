import React, { useState } from "react";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ullam, laudantium similique explicabo nobis fugit est natus, minus dolores",
      profile: "profile-1.jpg",
      name: "Satish Patel",
      position: "Founder & CEO , Hudle",
    },
    {
      id: 2,
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ullam, laudantium similique explicabo nobis fugit est natus, minus dolores",
      profile: "profile-2.jpg",
      name: "Bruce McKenzie",
      position: "Founder & CEO , Hudle",
    },
    {
      id: 3,
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ullam, laudantium similique explicabo nobis fugit est natus, minus dolores",
      profile: "profile-3.jpg",
      name: "Iva Boyd",
      position: "Founder & CEO , Hudle",
    },
  ]);
  return (
    <>
      <section>
        <div className="container relative">
          <div className="absolute top-[-30px] left-[23px]">
            <img src="/src/assets/bg-quotes.png" alt="Quotes" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] ">
            {items.map((item) => (
              <Testimonial key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
