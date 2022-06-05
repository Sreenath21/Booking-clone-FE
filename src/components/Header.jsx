import React, { useState } from "react";
import styled from "styled-components";
import {
  Hotel,
  Flight,
  CarRental,
  Attractions,
  LocalTaxi,
  CalendarMonth,
  Man,
} from "@mui/icons-material";
import { DateRange } from "react-date-range";
import { format } from "date-fns";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  return (
    <Container>
      <Wrapper listmode={type === "list" ? "listmode" : ""}>
        <HeaderList>
          <HeaderListItem border={"border"}>
            <Hotel />
            <HeaderListTitle>Stays</HeaderListTitle>
          </HeaderListItem>

          <HeaderListItem>
            <Flight />
            <HeaderListTitle>Flights</HeaderListTitle>
          </HeaderListItem>

          <HeaderListItem>
            <CarRental />
            <HeaderListTitle>Car rentals</HeaderListTitle>
          </HeaderListItem>

          <HeaderListItem>
            <Attractions />
            <HeaderListTitle>Attractions</HeaderListTitle>
          </HeaderListItem>

          <HeaderListItem>
            <LocalTaxi />
            <HeaderListTitle>Airport taxis</HeaderListTitle>
          </HeaderListItem>
        </HeaderList>

        {type !== "list" && (
          <>
            <HeaderTitle>A lifetime of discounts? It's Genius</HeaderTitle>
            <Description>
              Get rewarded for your travels - unlock instant savings of 10% or
              more with a free Lama Booking account
            </Description>
            <HeaderButton>Sign in/Register</HeaderButton>

            <HeaderSearch>
              <HeaderSearchItem>
                <Hotel sx={{ color: "lightgray" }} />
                <HeaderSearchInput
                  type="text"
                  placeholder="Where are you going?"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </HeaderSearchItem>

              <HeaderSearchItem>
                <CalendarMonth sx={{ color: "lightgray" }} />
                <HeaderSearchText
                  onClick={() => setOpenDate(!openDate)}
                >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )}`}</HeaderSearchText>
                {openDate && (
                  <HeaderCalendarWrapper>
                    <DateRange
                      // editableDateInputs={true}
                      onChange={(item) => setDate([item.selection])}
                      // moveRangeOnFirstSelection={false}
                      ranges={date}
                      minDate={new Date()}
                    />
                  </HeaderCalendarWrapper>
                )}
              </HeaderSearchItem>

              <HeaderSearchItem>
                <Man sx={{ color: "lightgray" }} />
                <HeaderSearchText
                  onClick={() => setOpenOptions(!openOptions)}
                >{`${options.adult} adults • ${options.children} children • ${options.room} room`}</HeaderSearchText>
                {openOptions && (
                  <RoomOptions>
                    <RoomOptionsItem>
                      <OptionsText>Adult</OptionsText>
                      <OptionsCounter>
                        <CounterButton
                          disabled={options.adult <= 1}
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </CounterButton>
                        <CounterNumber>{options.adult}</CounterNumber>
                        <CounterButton
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </CounterButton>
                      </OptionsCounter>
                    </RoomOptionsItem>

                    <RoomOptionsItem>
                      <OptionsText>Children</OptionsText>
                      <OptionsCounter>
                        <CounterButton
                          disabled={options.children <= 1}
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </CounterButton>
                        <CounterNumber>{options.children}</CounterNumber>
                        <CounterButton
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </CounterButton>
                      </OptionsCounter>
                    </RoomOptionsItem>

                    <RoomOptionsItem>
                      <OptionsText>Room</OptionsText>
                      <OptionsCounter>
                        <CounterButton
                          disabled={options.room <= 1}
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </CounterButton>
                        <CounterNumber>{options.room}</CounterNumber>
                        <CounterButton
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </CounterButton>
                      </OptionsCounter>
                    </RoomOptionsItem>
                  </RoomOptions>
                )}
              </HeaderSearchItem>

              <HeaderSearchItem>
                <HeaderSearchButton onClick={handleSearch}>
                  Search
                </HeaderSearchButton>
              </HeaderSearchItem>
            </HeaderSearch>
          </>
        )}
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  background-color: #003580;
  color: white;
  display: flex;
  justify-content: center;
  position: relative;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: ${(props) =>
    props.listmode === "listmode" ? "20px 0px 0px 0px" : "20px 0px 100px 0px"};
`;

const HeaderList = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 50px;
`;

const HeaderListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 20px;
  border: ${(props) =>
    props.border === "border" ? "1px solid white" : "none"};
`;

const HeaderListTitle = styled.div``;

const HeaderTitle = styled.h1``;

const Description = styled.p`
  margin: 20px 0px;
`;

const HeaderButton = styled.button`
  background-color: #0071c2;
  color: white;
  font-weight: 500;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

const HeaderSearch = styled.div`
  width: 100%;
  max-width: 1024px;
  height: 30px;
  background-color: white;
  border: 3px solid #febb02;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 0;
  border-radius: 10px;
  position: absolute;
  bottom: -25px;
`;

const HeaderSearchItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
`;

const HeaderSearchInput = styled.input`
  border: none;
  outline: none;
`;

const HeaderSearchText = styled.span`
  color: lightgray;
  cursor: pointer;
`;

const HeaderSearchButton = styled(HeaderButton)``;

const HeaderCalendarWrapper = styled.div`
  position: absolute;
  top: 40px;
  z-index: 2;
`;

const RoomOptions = styled.div`
  position: absolute;
  top: 40px;
  background-color: white;
  color: gray;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);
  z-index: 2;
`;

const RoomOptionsItem = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;

const OptionsCounter = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  color: black;
`;

const OptionsText = styled.span``;

const CounterButton = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid #0071c2;
  color: #0071c2;
  font-weight: 700;
  background-color: white;

  &:hover {
    background-color: #f1f1f1;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const CounterNumber = styled.span``;
