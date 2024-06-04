import React from "react";
import {
  Curvy,
  Features,
  Landing,
  Productive,
  Started,
  Testimonials,
} from "../components";

const Home = () => {
  return (
    <main className="relative">
      <Landing />
      <div className="relative">
        <Curvy />
        <Features />
      </div>

      <Productive />
      <Testimonials />
      <Started />
    </main>
  );
};

export default Home;
