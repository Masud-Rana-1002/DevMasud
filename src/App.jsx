import { useState } from "react";
// import reactLogo from "./assets/react.svg";

import Navbar from "./components/Header/Navbar";
// import Banner from "./components/Header/Banner";
// import AboutMe from "./components/AboutMe/AboutMe";
// import Skills from "./components/Skills/Skills";
// import Languages from "./components/Languages/Languages";
// import MyProjects from "./components/MyProjects/MyProjects";
// import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
// import DownloadButton from "./components/DownloadButton/DownloadButton";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="space-y-4 container md:w-full mx-auto">
        <Navbar />

        <main className="container w-11/12 mx-auto ">
          <Outlet />
        </main>
    <ScrollToTopButton />
        <Footer />
      </div>
    </>
  );
}

export default App;
