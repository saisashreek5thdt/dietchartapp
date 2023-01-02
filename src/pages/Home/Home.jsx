import React from "react";
import {
  Topbar,
  Slides,
  Bottombar,
  About,
  Features,
  Userfeatures,
  GetStarted
} from "../../Components/Home/index";

const Home = () => {
  return (
    <>
      <Topbar />
      <Slides />
      <main>
        <About />
        <Features />
        <GetStarted />
        <Userfeatures />
      </main>
      <Bottombar />
    </>
  );
};

export default Home;
