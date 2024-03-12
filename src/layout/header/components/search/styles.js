import styled from "styled-components";

export const MicImg = styled.img`
  height: 24px;
  width: 24px;
`;

export const Container = styled.div`
  color: #fff;
  display: flex;
  width: 732px;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  height: 24px;
  width: 24px;
`;

export const MicContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  margin-left: 12px;
`;

export const InputContainer = styled.div`
  background-color: hsl(0, 0%, 7%);
  border: 1px solid hsl(0, 0%, 18.82%);
  border-radius: 40px 0 0 40px;
  padding: 0 4px 0 16px;
  margin-left: 32px;
  height: 40px;
  width: calc(100% - 128px);
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  color: hsla(0, 100%, 100%, 0.88);
  font-size: 1rem;
`;

export const SearchButtonContainer = styled.div`
  border-radius: 0 40px 40px 0;
  cursor: pointer;
  height: 40px;
  width: 64px;
  background-color: hsla(0, 0%, 100%, 0.08);
  border: 1px solid hsl(0, 0%, 18.82%);
  border-left: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
