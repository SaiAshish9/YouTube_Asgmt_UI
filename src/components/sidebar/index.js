import React from "react";
import { Container, LogoContainer, LogoImg, LogoText } from "./styles";
import HomeImg from "../../assets/home.svg";
import ShortsImg from "../../assets/shorts.svg";
import SubscriptionsImg from "../../assets/subscriptions.svg";
import PlayImg from "../../assets/play.svg";

const data = [
  {
    img: HomeImg,
    text: "Home",
  },
  {
    img: ShortsImg,
    text: "Shorts",
  },
  {
    img: SubscriptionsImg,
    text: "Subscriptions",
  },
  {
    img: PlayImg,
    text: "You",
  },
];

const Sidebar = () => {
  return (
    <Container>
      {data.map((item) => (
        <LogoContainer key={item.text}>
          <LogoImg src={item.img} alt="img" />
          <LogoText>{item.text}</LogoText>
        </LogoContainer>
      ))}
    </Container>
  );
};

export default Sidebar;
