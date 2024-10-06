import React from "react";
import Banner from "../components/Banner";
import Howitworks from "../components/Howitworks";
import ImageSection from "../components/ImageSection";
import ContactUs from "../components/ContactUs";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Howitworks />
      <ImageSection />
      <ContactUs />
    </div>
  );
};

export default HomePage;
