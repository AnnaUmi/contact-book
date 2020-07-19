import {
  ADD_POST,
  DELETE_POST,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_POST,
  FILTER_POSTS,
  CLEAR_FILTER,
  POST_ERROR,
  GET_POSTS,
  CLEAR_POSTS,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
        loading: false,
        loading: false,
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id != action.payload),
        loading: false,
      };
    case CLEAR_POSTS:
      return {
        ...state,
        posts: null,
        filtered: null,
        error: null,
        current: null,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case UPDATE_POST: {
      return {
        ...state,
        posts: state.posts.map((post) => {
          return post._id === action.payload._id ? action.payload : post;
        }),
        loading: false,
      };
    }
    case FILTER_POSTS: {
      return {
        ...state,
        filtered: state.posts.filter((post) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          console.log("regex", regex);
          console.log("post", post);
          return post.title.match(regex);
        }),
      };
    }
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    case POST_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
