import React from "react";
import styled from "styled-components";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import PropertyList from "../components/PropertyList";
import Featured from "../components/Featured";
import FeaturedProperties from "../components/FeaturedProperties";
import MailList from "../components/MailList";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <HomeContainer>
        <Featured />
        <HomeTitle>Browse by property type</HomeTitle>
        <PropertyList />
        <HomeTitle>Browse by property type</HomeTitle>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </HomeContainer>
    </div>
  );
};

export default Home;

const HomeContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const HomeTitle = styled.h1`
  width: 100%;
  max-width: 1024px;
  font-size: 20px;
`;
