import React, { useState } from "react";
import {
  Container,
  Img,
  InputContainer,
  MicContainer,
  SearchButtonContainer,
  SearchInput,
} from "./styles";

import MicImg from "../../../../assets/mic.svg";
import SearchImg from "../../../../assets/search.svg";
import { useStore } from "../../../../store";
import { useNavigate } from "react-router-dom";

const SearchContainer = () => {
  const [inputValue, setInputValue] = useState("");

  const {
    actions: { fetchYTVideos },
  } = useStore();

  const navigate = useNavigate();

  async function handleButtonClick() {
    await fetchYTVideos("/search/?search=" + inputValue);
    navigate("?search_query=" + inputValue);
  }

  return (
    <Container>
      <InputContainer>
        <SearchInput
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search"
        />
      </InputContainer>
      <SearchButtonContainer onClick={handleButtonClick}>
        <Img alt="img" src={SearchImg} />
      </SearchButtonContainer>
      <MicContainer>
        <Img alt="img" src={MicImg} />
      </MicContainer>
    </Container>
  );
};

export default SearchContainer;
