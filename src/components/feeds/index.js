import React, { useEffect, useState } from "react";
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
import axios from "axios";
import Moment from "react-moment";

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

const API_URL = "http://localhost:8000/api/u/youtube/videos/?limit=10";

const Feeds = () => {
  const [data, setData] = useState([]);

  function fetchYTVideos() {
    axios(API_URL)
      .then((response) => {
        let jsonResponse = response.data.results;
        jsonResponse = jsonResponse.map((resp) => {
          const mdImg = resp.thumbnail_urls
            .split(",")
            .filter((img) => img.includes("mqdefault"))?.[0];
          let duration = resp.duration?.slice(2, resp.duration?.length - 1);
          duration = duration?.replace("M", ":");
          duration = duration?.replace("H", ":");
          return {
            ...resp,
            thumbnail_img: mdImg,
            duration,
            publishing_date: <Moment fromNow>{data.publishing_date}</Moment>,
          };
        });
        setData(jsonResponse);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    fetchYTVideos();
  }, []);

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

        {data?.map((data) => (
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
                  src="https://yt3.ggpht.com/W-kunEo7MD828DqKtSFMKRg8GsrEHSaroe31ZI54t6qgcWEyCGv8UsFeIRAE69E3zC3LLlFF3w=s88-c-k-c0x00ffffff-no-rj"
                  alt="img"
                />
                <AvatarText>Sai Ashish</AvatarText>
              </AvatarContainer>
              <VideoDesc>{data.description}</VideoDesc>
            </VideoContent>
          </FeedsContainer>
        ))}
      </Container>
    </Wrapper>
  );
};

export default Feeds;
