import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Trending from "../Trending";
import Banner from "../../Components/Banner/Banner";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Trending />
      <Footer />
    </>
  );
}
