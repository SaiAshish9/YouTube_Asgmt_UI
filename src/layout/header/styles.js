import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 16px;
  height: 56px;
  position: sticky;
  top: 0;
  z-index: 2;
  background: #0f0f0f;
  overflow: hidden;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
`;

export const LogoImg = styled.img`
  height: 20px;
  width: 90px;
  padding: 18px 14px 18px 8px;
  cursor: pointer;
`;

export const ImgContainer = styled.div`
  height: 40px;
  width: 40px;
  padding: ${({ zeroPadding }) => (zeroPadding ? "0px" : "8px")};
  padding-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Img = styled.img`
  height: 24px;
  width: 24px;
`;

export const ProfileImg = styled.img`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  cursor: pointer;
  margin: 0 8px;
`;

