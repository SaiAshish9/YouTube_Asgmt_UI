import styled from "styled-components";

export const Container = styled.div`
  width: 72px;
  height: calc(100vh - 60px);
  z-index: 1;
  position: fixed;
  left: 0;
  bottom: 0;
  top: 60px;
`;

export const LogoImg = styled.img`
  margin: 0px;
  margin-bottom: 6px;
  padding: 0px;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 16px 0 14px;
  cursor: pointer;
`;

export const LogoText = styled.p`
  font-size: 10px;
  color: #f1f1f1;
  font-weight: 500;
  padding: 0px;
  margin-block-start: 0em;
  margin-block-end: 0em;
`;
