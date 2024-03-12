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
import { useStore } from "../../store";

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

const PROFILE_PIC = "https://yt3.ggpht.com/W-kunEo7MD828DqKtSFMKRg8GsrEHSaroe31ZI54t6qgcWEyCGv8UsFeIRAE69E3zC3LLlFF3w=s88-c-k-c0x00ffffff-no-rj";

const Feeds = () => {
  const {
    state: { videos },
  } = useStore();

  function renderTagsContent() {
    return (
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
    );
  }

  return (
    <Wrapper>
      <Container>
        {renderTagsContent()}
        {videos?.map((data) => (
          <FeedsContainer key={data.id}>
            <VideoContainer>
              <VideoImg src={data.thumbnail_img} alt="img" />
              <ContentDuration>{data.duration}</ContentDuration>
            </VideoContainer>
            <VideoContent>
              <VideoTitle>{data.title}</VideoTitle>
              <VideoDesc>
                {data.view_count} views • {data.publishing_date}
              </VideoDesc>
              <AvatarContainer>
                <AvatarImg
                  src={PROFILE_PIC}
                  alt="img"
                />
                <AvatarText>Sai Ashish</AvatarText>
              </AvatarContainer>
              <VideoDesc>
                {data.description.length > 500
                  ? data.description.substring(0, 500) + "..."
                  : data.description}
              </VideoDesc>
            </VideoContent>
          </FeedsContainer>
        ))}
      </Container>
    </Wrapper>
  );
};

export default Feeds;
