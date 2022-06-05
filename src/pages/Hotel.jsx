import React, { useState } from "react";
import styled from "styled-components";
import {
  ArrowCircleLeft,
  ArrowCircleRight,
  Cancel,
  LocationOn,
} from "@mui/icons-material";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import MailList from "../components/MailList";
import Footer from "../components/Footer";

const photos = [
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
  },
];

const Hotel = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = (i) => {
    setSlideIndex(i);
    setOpen(true);
  };

  console.log(slideIndex);

  const handleMove = (direction) => {
    if (direction === "l") {
      slideIndex === 0
        ? setSlideIndex(photos.length - 1)
        : setSlideIndex(slideIndex - 1);
    } else {
      slideIndex === photos.length - 1
        ? setSlideIndex(0)
        : setSlideIndex(slideIndex + 1);
    }
  };

  return (
    <Container>
      <Navbar />
      <Header type="list" />
      <HotelContainer>
        {open && (
          <Slider>
            <CloseSlider onClick={() => setOpen(false)}>
              <Cancel
                className="cancel"
                sx={{ fontSize: "30px", color: "lightGray" }}
              />
            </CloseSlider>

            <NavigateSlider>
              <ArrowCircleLeft
                className="arrow"
                direction="left"
                fontSize="large"
                sx={{ fontSize: "50px", color: "lightGray" }}
                onClick={() => handleMove("l")}
              />
            </NavigateSlider>

            <SliderWrapper>
              <SliderImage src={photos[slideIndex].src} alt="" />
            </SliderWrapper>

            <NavigateSlider>
              <ArrowCircleRight
                className="arrow"
                fontSize="large"
                direction="right"
                sx={{ fontSize: "50px", color: "lightGray" }}
                onClick={() => handleMove("r")}
              />
            </NavigateSlider>
          </Slider>
        )}
        <Wrapper>
          <BookButton>Reserve or Book Now!</BookButton>
          <HotelTitle>Grand Hotel</HotelTitle>

          <AddressBox>
            <LocationOn />
            <AddressText>Elton St 125 New York</AddressText>
          </AddressBox>

          <HotelDistance>Excellent location - 500m from center</HotelDistance>
          <PriceHighlight>
            Book a stay over $114 at this property and get a free airport taxi
          </PriceHighlight>

          <HotelImages>
            {photos.map((photo, i) => (
              <ImageWrapper key={i}>
                <Image onClick={() => handleOpen(i)} src={photo.src} alt="" />
              </ImageWrapper>
            ))}
          </HotelImages>

          <HotelDetails>
            <DetailsText>
              <DetailsTitle>Stay in the heart of Krakow</DetailsTitle>
              <DetailsDesc>
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </DetailsDesc>
            </DetailsText>

            <DetailsPrice>
              <DetailsTitle>Perfect for a 9-night stay</DetailsTitle>
              <DetailsDesc>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </DetailsDesc>

              <DetailsSubtitle>
                <b>$945</b> (9 nights)
              </DetailsSubtitle>

              <DetailsButton>Reserve or Book Now!</DetailsButton>
            </DetailsPrice>
          </HotelDetails>
        </Wrapper>
        <MailList />
        <Footer />
      </HotelContainer>
    </Container>
  );
};

export default Hotel;

const Container = styled.div``;

const HotelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Slider = styled.div`
  max-width: 98.9vw;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.426);
  z-index: 999;
  display: flex;
  align-items: center;
`;

const CloseSlider = styled.div`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  border-radius: 50%;
  overflow: hidden;
`;

const NavigateSlider = styled.div`
  margin: 20px;
  cursor: pointer;
`;

const SliderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SliderImage = styled.img`
  width: 80%;
  height: 80vh;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`;

const BookButton = styled.button`
  position: absolute;
  top: 10px;
  right: 0px;
  border: none;
  padding: 10px;
  background-color: #0071c2;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
`;

const HotelTitle = styled.h1`
  font-size: 24px;
`;

const AddressBox = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const AddressText = styled.span``;

const HotelDistance = styled.span`
  color: #0071c2;
  font-weight: 500;
`;

const PriceHighlight = styled.span`
  color: #008009;
  font-weight: 500;
`;

const HotelImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 5px;
`;

const ImageWrapper = styled.div`
  width: 33%;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const HotelDetails = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
`;

const DetailsText = styled.div`
  flex: 3;
`;

const DetailsTitle = styled.h1``;

const DetailsDesc = styled.p`
  font-size: 14px;
  margin-top: 20px;
  text-align: justify;
`;

const DetailsPrice = styled.div`
  flex: 1;
  background-color: #ebf3ff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  & > p {
    margin-top: 0;
  }

  & > h1 {
    font-size: 18px;
    color: #555;
  }

  & > span {
    font-size: 14px;
    color: #555;
  }

  & > h2 {
    font-weight: 300;
  }
`;

const DetailsSubtitle = styled.h2``;

const DetailsButton = styled.button`
  background-color: #0071c2;
  color: white;
  border: none;
  padding: 10px 20px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
`;
