import React from "react";
import Banner from "../../components/Banner";
import About from "./About";
import Services from "./Services";
import UpcomingEvents from "./UpcomingEvents";
import TopTeachers from "./TopTeachers";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Services />
      <UpcomingEvents />
      <TopTeachers />
    </>
  );
};

export default Home;
