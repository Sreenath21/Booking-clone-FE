import React from "react";
import styled from "styled-components";

const SearchItem = () => {
  return (
    <Container>
      <SearchItemImage
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
      />

      <SearchItemDesc>
        <SearchItemTitle>Tower Street Apartments</SearchItemTitle>
        <SearchItemDistance>500m from center</SearchItemDistance>
        <SearchItemTaxiOp>Free airport taxi</SearchItemTaxiOp>
        <SearchItemSubtitle>
          Studio Apartment with Air conditioning
        </SearchItemSubtitle>
        <SearchItemFeatures>
          Entire studio • 1 bathroom • 21m² full bed
        </SearchItemFeatures>
        <SearchItemCancelOp>Free cancellation</SearchItemCancelOp>
        <SearchItemCancelOpSubtitle>
          You can cancel later, so lock in this great price today!
        </SearchItemCancelOpSubtitle>
      </SearchItemDesc>

      <SearchItemDetails>
        <SIRating>
          <SIRatingSpan>Excellent</SIRatingSpan>
          <SIRatingButton>8.9</SIRatingButton>
        </SIRating>

        <SIDetailsTexts>
          <SIPrice>$123</SIPrice>
          <SITaxOp>Includes taxes and fees</SITaxOp>
          <SICheckButton>See availability</SICheckButton>
        </SIDetailsTexts>
      </SearchItemDetails>
    </Container>
  );
};

export default SearchItem;

const Container = styled.div`
  border: 1px solid lightgray;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
`;

const SearchItemImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

const SearchItemDesc = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SearchItemTitle = styled.h1`
  font-size: 20px;
  color: #0071c2;
`;

const SearchItemDistance = styled.span`
  font-size: 12px;
`;

const SearchItemTaxiOp = styled.span`
  font-size: 12px;
  background-color: #008009;
  color: white;
  width: max-content;
  padding: 3px;
  border-radius: 5px;
`;

const SearchItemSubtitle = styled.span`
  font-size: 12px;
  font-weight: bold;
`;

const SearchItemFeatures = styled.span`
  font-size: 12px;
`;

const SearchItemCancelOp = styled.span`
  font-size: 12px;
  color: #008009;
  font-weight: bold;
`;

const SearchItemCancelOpSubtitle = styled.span`
  font-size: 12px;
  color: #008009;
  font-weight: bold;
`;

const SearchItemDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SIRating = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SIRatingSpan = styled.span`
  font-weight: 500;
`;

const SIRatingButton = styled.button`
  background-color: #0071c2;
  color: white;
  padding: 5px;
  font-weight: bold;
  border: none;
`;

const SIDetailsTexts = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const SIPrice = styled.span`
  font-size: 24px;
`;

const SITaxOp = styled.span`
  font-size: 12px;
  color: gray;
`;

const SICheckButton = styled.button`
  background-color: #0071c2;
  color: white;
  padding: 10px 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
