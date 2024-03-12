import { SET_VIDEOS } from "./types";
import axios from "axios";
import Moment from "react-moment";

const BASE_URL = "http://localhost:8000/api/u/youtube/videos";

export default function useActions(_, dispatch) {
  const setVideos = (videos) => dispatch({ type: SET_VIDEOS, payload: videos });

  const fetchYTVideos = (url) => {
    axios(BASE_URL + url + (url.includes("search") ? "&" : "?limit=100"))
      .then((response) => {
        let jsonResponse = url.includes("search")
          ? response.data
          : response.data.results;
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
            publishing_date: <Moment fromNow>{resp.publishing_date}</Moment>,
          };
        });
        dispatch({ type: SET_VIDEOS, payload: jsonResponse });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: SET_VIDEOS, payload: [] });
      });
  };

  return {
    setVideos,
    fetchYTVideos,
  };
}
