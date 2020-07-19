import React, { useReducer } from "react";
import axios from "axios";
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
  POST_ERROR,
  GET_POSTS,
  CLEAR_POSTS,
} from "../types";

const PostState = (props) => {
  const initialState = {
    posts: [],
    current: null,
    filtered: null,
    error: null,
  };
  const [state, dispatch] = useReducer(postReducer, initialState);

  const getPosts = async () => {
    try {
      const res = await axios.get(`/api/contacts`);
      dispatch({
        type: GET_POSTS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: POST_ERROR,
        payload: err.response.message,
      });
    }
  };
  const addPost = async (post) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(`/api/contacts`, post, config);
      dispatch({ type: ADD_POST, payload: res.data });
    } catch (err) {
      dispatch({
        type: POST_ERROR,
        payload: err.response.msg,
      });
    }
  };
  const clearPosts = () => {
    dispatch({ type: CLEAR_POSTS });
  };

  const deletePost = async (id) => {
    try {
      await axios.delete(`/api/contacts/${id}`);
      dispatch({ type: DELETE_POST, payload: id });
    } catch (err) {
      dispatch({
        type: POST_ERROR,
        payload: err.response.msg,
      });
    }
  };
  const updatePost = async (post) => {
    console.log("ppp", post);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.put(`/api/contacts/${post._id}`, post, config);
      console.log("res", res);
      dispatch({ type: UPDATE_POST, payload: res.data });
    } catch (err) {
      dispatch({
        type: POST_ERROR,
        payload: err.response.msg,
      });
    }
  };
  const setCurrent = (post) => {
    dispatch({ type: SET_CURRENT, payload: post });
  };
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
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
        error: state.error,
        setCurrent,
        clearCurrent,
        addPost,
        deletePost,
        updatePost,
        filterPost,
        clearFilter,
        getPosts,
        clearPosts,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

export default PostState;
