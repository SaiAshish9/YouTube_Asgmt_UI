import React from "react";
import {
  Container,
  Img,
  InputContainer,
  MicContainer,
  SearchButtonContainer,
  SearchInput,
} from "./styles";

import MicImg from "../../../../assets/mic.svg";
import SeachImg from "../../../../assets/search.svg";

const SearchContainer = () => {
  return (
    <Container>
      <InputContainer>
        <SearchInput placeholder="Search" />
      </InputContainer>
      <SearchButtonContainer>
        <Img alt="img" src={SeachImg} />
      </SearchButtonContainer>
      <MicContainer>
        <Img alt="img" src={MicImg} />
      </MicContainer>
    </Container>
  );
};

export default SearchContainer;
