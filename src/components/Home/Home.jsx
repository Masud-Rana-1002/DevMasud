import React from "react";
import Banner from "../Header/Banner";
import AboutMe from "../AboutMe/AboutMe";
import Skills from "../Skills/Skills";
import MyProjects from "../MyProjects/MyProjects";
import Languages from "../Languages/Languages";
import ContactUs from "../ContactUs/ContactUs";


const Home = () => {
  return (
    <div className="text-white">

      <Banner />
      <AboutMe />
      <Skills />
      <MyProjects />
      <Languages />
      <ContactUs />
  
    </div>
  );
};

export default Home;
