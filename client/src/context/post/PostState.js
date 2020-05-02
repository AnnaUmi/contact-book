import React, { useReducer } from "react";
import { v1 as uuidv1 } from "uuid";
import PostContext from "./postContext";
import postReducer from "./postReducer";
import {
  ADD_POST,
  DELETE_POST,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_POST,
  FILTER_POSTS,
  CLEAR_FILTER,
} from "../types";

const PostState = (props) => {
  const initialState = {
    posts: [
      {
        id: 1,
        text: "Lala",
        email: "lala",
        title: "ksks",
        type: "personal",
        date: "12.12",
      },
      {
        id: 2,
        text: "2Lala",
        email: "2lala",
        title: "2ksks",
        type: "2personal",
        date: "12.12",
      },
      {
        id: 3,
        text: "3Lala",
        email: "3lala",
        title: "3ksks",
        type: "3personal",
        date: "12.12",
      },
    ],
    current: null,
    filtered: null,
  };
  const [state, dispatch] = useReducer(postReducer, initialState);
  const addPost = (post) => {
    post.id = uuidv1();
    dispatch({ type: ADD_POST, payload: post });
  };
  const deletePost = (id) => {
    dispatch({ type: DELETE_POST, payload: id });
  };
  const setCurrent = (post) => {
    dispatch({ type: SET_CURRENT, payload: post });
  };
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  const updatePost = (post) => {
    dispatch({ type: UPDATE_POST, payload: post });
  };
  const filterPost = (text) => {
    dispatch({ type: FILTER_POSTS, payload: text });
  };
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };
  return (
    <PostContext.Provider
      value={{
        posts: state.posts,
        current: state.current,
        filtered: state.filtered,
        setCurrent,
        clearCurrent,
        addPost,
        deletePost,
        updatePost,
        filterPost,
        clearFilter,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

export default PostState;
