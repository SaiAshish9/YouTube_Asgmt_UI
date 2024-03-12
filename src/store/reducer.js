import { SET_VIDEOS } from "./types";

export const initialState = {
  videos: [],
};

export default function reducer(state, action) {
  switch (action.type) {
    case SET_VIDEOS: {
      return {
        ...state,
        videos: action.payload,
      };
    }

    default:
      return state;
  }
}
