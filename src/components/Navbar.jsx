import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Link to="/">
          <Logo>LamaBooking</Logo>
        </Link>
        <NavItems>
          <NavButton>Register</NavButton>
          <NavButton>Login</NavButton>
        </NavItems>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  height: 50px;
  background-color: #003580;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Logo = styled.span`
  font-weight: 500;
`;

const NavItems = styled.div``;

const NavButton = styled.button`
  margin-left: 20px;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  color: #003580;
`;
