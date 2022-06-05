import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";

import Navbar from "../components/Navbar";
import Header from "../components/Header";
import SearchItem from "../components/SearchItem";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);

  return (
    <Conatainer>
      <Navbar />
      <Header type="list" />
      <ListContainer>
        <Wrapper>
          <ListSearch>
            <ListTitle>Search</ListTitle>
            <ListItem>
              <ItemLabel>Destination</ItemLabel>
              <Input type="text" placeholder={destination} />
            </ListItem>

            <ListItem>
              <ItemLabel>Check-in date</ItemLabel>
              <CheckInDate onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "dd/MM/yyyy"
              )} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</CheckInDate>
              {openDate && (
                <DateRangeWrapper>
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    minDate={new Date()}
                  />
                </DateRangeWrapper>
              )}
            </ListItem>

            <ListItem>
              <ItemLabel>Options</ItemLabel>
              <ListOption>
                <ListOptionItem>
                  <OptionsText>
                    Min price <small>per night</small>
                  </OptionsText>
                  <OptionsInput type="number" />
                </ListOptionItem>

                <ListOptionItem>
                  <OptionsText>
                    Max price <small>per night</small>
                  </OptionsText>
                  <OptionsInput type="number" />
                </ListOptionItem>

                <ListOptionItem>
                  <OptionsText>Adult</OptionsText>
                  <OptionsInput
                    type="number"
                    min={1}
                    placeholder={options.adult}
                  />
                </ListOptionItem>

                <ListOptionItem>
                  <OptionsText>Children</OptionsText>
                  <OptionsInput
                    type="number"
                    min={0}
                    placeholder={options.children}
                  />
                </ListOptionItem>

                <ListOptionItem>
                  <OptionsText>Room</OptionsText>
                  <OptionsInput
                    type="number"
                    min={1}
                    placeholder={options.room}
                  />
                </ListOptionItem>
              </ListOption>
            </ListItem>

            <ListSearchButton>Search</ListSearchButton>
          </ListSearch>

          <ListResult>
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </ListResult>
        </Wrapper>
      </ListContainer>
    </Conatainer>
  );
};

export default List;

const Conatainer = styled.div``;

const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  gap: 20px;
`;

const ListSearch = styled.div`
  flex: 1;
  background-color: #febb02;
  padding: 10px;
  border-radius: 10px;
  position: sticky;
  top: 10px;
  height: max-content;
`;

const ListTitle = styled.h1`
  font-size: 20px;
  color: #555;
  margin-bottom: 10px;
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;
  // position: relative;
`;

const ItemLabel = styled.label`
  font-size: 12px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  height: 30px;
  padding: 5px;
`;

const CheckInDate = styled.span`
  height: 30px;
  padding: 5px;
  background-color: white;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const DateRangeWrapper = styled.div`
  // position: absolute;
  // bottom: 0px;
`;

const ListOption = styled.div`
  padding: 10px;
`;

const ListOptionItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  color: #555;
  font-size: 12px;
`;

const OptionsText = styled.span``;

const OptionsInput = styled.input`
  width: 50px;
`;

const ListSearchButton = styled.button`
  padding: 10px;
  background-color: #0071c2;
  color: white;
  border: none;
  width: 100%;
  font-weight: 500;
  cursor: pointer;
`;

const ListResult = styled.div`
  flex: 3;
  background-color: ;
`;
