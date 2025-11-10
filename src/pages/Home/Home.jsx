import React from "react";
import Banner from "../../components/Banner";
import About from "./About";
import Services from "./Services";
import UpcomingEvents from "./UpcomingEvents";
import TopTeachers from "./TopTeachers";
import Testimonials from "./Testimonials";
import AdmissionCards from "../../components/Admission/AdmissionCards";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <AdmissionCards />
      <Services />
      <UpcomingEvents />
      <TopTeachers />
      <Testimonials />
    </>
  );
};

export default Home;
