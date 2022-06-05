import React from "react";
import styled from "styled-components";

const MailList = () => {
  return (
    <Container>
      <Title>Save time, save Money!</Title>
      <Description>Sign up and we'll send the best deals for you</Description>
      <InputContainer>
        <EmailInput type="text" placeholder="Your Email" />
        <SubscribeButton>Subscribe</SubscribeButton>
      </InputContainer>

      <CheckBoxContainer>
        <CheckBox type="checkbox" />
        <CheckBoxText>
          Send me a link to get the free Booking.com app!
        </CheckBoxText>
      </CheckBoxContainer>
    </Container>
  );
};

export default MailList;

const Container = styled.div`
  width: 100%;
  margin-top: 50px;
  background-color: #003580;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 50px;
  box-sizing: border-box;
`;

const Title = styled.h1``;

const Description = styled.span``;

const InputContainer = styled.div``;

const EmailInput = styled.input`
  width: 300px;
  height: 30px;
  padding: 10px;
  border: none;
  outline: none;
  margin-right: 10px;
  border-radius: 5px;
`;

const SubscribeButton = styled.button`
  height: 50px;
  background-color: #0071c2;
  color: white;
  font-weight: 500px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const CheckBox = styled.input``;

const CheckBoxText = styled.span``;
