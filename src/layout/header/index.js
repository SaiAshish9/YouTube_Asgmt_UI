import LogoSvg from "../../assets/logo.svg";
import BarsSvg from "../../assets/bars.svg";
import VideoSvg from "../../assets/video.svg";
import BellSvg from "../../assets/bell.svg";

import {
  Container,
  LogoImg,
  Img,
  ImgContainer,
  LogoContainer,
  ProfileImg,
} from "./styles";
import { SearchContainer } from "./components";

function Header() {
  return (
    <Container>
      <LogoContainer>
        <ImgContainer zeroPadding>
          <Img alt="img" src={BarsSvg} />
        </ImgContainer>
        <LogoImg alt="img" src={LogoSvg} />
      </LogoContainer>

      <SearchContainer />

      <LogoContainer>
        <ImgContainer>
          <Img alt="img" src={VideoSvg} />
        </ImgContainer>
        <ImgContainer>
          <Img alt="img" src={BellSvg} />
        </ImgContainer>
        <ProfileImg
          src="https://yt3.ggpht.com/W-kunEo7MD828DqKtSFMKRg8GsrEHSaroe31ZI54t6qgcWEyCGv8UsFeIRAE69E3zC3LLlFF3w=s88-c-k-c0x00ffffff-no-rj"
          alt="img"
        />
      </LogoContainer>
    </Container>
  );
}

export default Header;
