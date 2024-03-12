import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0 24px 16px;
  width: 100%;
  margin-left: 10%;
`;

export const Container = styled.div`
  width: 1096px;
`;

export const TagsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Tag = styled.div`
  font-size: 0.8rem;
  font-weight: 700;
  margin: 8px;
  margin-left: 0px;
  padding: 0 12px;
  height: 32px;
  background: ${({ whitebg }) =>
    whitebg ? "#fff" : "rgba(255, 255, 255, 0.1)"};
  color: ${({ whitebg }) => (whitebg ? "#0f0f0f" : "#fff")};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  min-width: 12px;
  width: fit-content;
  cursor: pointer;
`;

export const FiltersTag = styled.div`
  font-size: 0.8rem;
  font-weight: 700;
  margin: 8px;
  margin-left: 0px;
  height: 32px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 12px;
  width: fit-content;
  cursor: pointer;
`;

export const TagsContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const FiltersImg = styled.img``;

export const FiltersContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const FeedsContainer = styled.div`
  width: 100%;
  margin-bottom: 16px;
  position: relative;
  display: flex;
  align-items: flex-start;
`;

export const VideoContainer = styled.div`
  position: relative;
  width: 360px;
  height: 202px;
  margin-right: 16px;
`;

export const VideoImg = styled.img`
  cursor: pointer;
  width: 360px;
  max-width: 360px;
  min-width: 240px;
  margin-right: 16px;
  border-radius: 12px;
  height: 202px;
`;

export const ContentDuration = styled.div`
  position: absolute;
  background: #000;
  padding: 2px 4px;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  right: 6px;
  bottom: 6px;
  border-radius: 2px;
`;

export const VideoContent = styled.div`
  align-self: flex-start;
  padding: 0px;
`;

export const VideoTitle = styled.p`
  font-size: 1.2rem;
  line-height: 1;
  color: #f1f1f1;
  margin-block-start: 0em !important;
  margin-block-end: 0em !important;
  padding: 0px;
`;

export const VideoDesc = styled.p`
  color: #aaa;
  font-size: 0.72rem;
  font-weight: 500;
  padding-top: 0.4rem;
`;

export const AvatarContainer = styled.div`
  padding: 12px 0;
  color: #aaa;
  font-size: 0.72rem;
  font-weight: 500;
  display: flex;
  align-items: center;
`;

export const AvatarImg = styled.img`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  margin-right: 8px;
`;

export const AvatarText = styled.p`
  font-size: 0.72rem;
`;
