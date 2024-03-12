import React from "react";
import {
  Container,
  TagsContainer,
  Wrapper,
  Tag,
  FiltersTag,
  TagsContent,
  FiltersImg,
  FiltersContainer,
  FeedsContainer,
  VideoImg,
  ContentDuration,
  VideoContainer,
  VideoContent,
  VideoTitle,
  VideoDesc,
  AvatarContainer,
  AvatarImg,
  AvatarText,
} from "./styles";

import FiltersSvg from "../../assets/filters.svg";

const tags = [
  "All",
  "Shorts",
  "Videos",
  "Unwatched",
  "Watched",
  "Recently uploaded",
  "Live",
  "Playlists",
];

const Feeds = () => {
  return (
    <Wrapper>
      <Container>
        <TagsContent>
          <TagsContainer>
            {tags.map((tag) => (
              <Tag whitebg={tag === "Videos"} key={tag}>
                {tag}
              </Tag>
            ))}
          </TagsContainer>
          <FiltersContainer>
            <FiltersTag>Filters</FiltersTag>
            <FiltersImg alt="img" src={FiltersSvg} />
          </FiltersContainer>
        </TagsContent>

        {[...Array(100).keys()].map((data) => (
          <FeedsContainer key={data}>
            <VideoContainer>
              <VideoImg
                src="https://ergonotes.com/wp-content/uploads/2022/11/Find-YouTube-Thumbnail-Source.jpg"
                alt="img"
              />
              <ContentDuration>16:14</ContentDuration>
            </VideoContainer>
            <VideoContent>
              <VideoTitle>Jnjjj</VideoTitle>
              <VideoDesc>59 views • 4 years ago</VideoDesc>
              <AvatarContainer>
                <AvatarImg src="https://yt3.ggpht.com/ytc/AIdro_kYmnlAdVZtz4kEPAVUCBA4-4RTTKBjbHLGHQ=s68-c-k-c0x00ffffff-no-rj" alt="img" />
                <AvatarText>Nasir Amin</AvatarText>
              </AvatarContainer>
              <VideoDesc>Jnjjj.</VideoDesc>
            </VideoContent>
          </FeedsContainer>
        ))}
      </Container>
    </Wrapper>
  );
};

export default Feeds;
