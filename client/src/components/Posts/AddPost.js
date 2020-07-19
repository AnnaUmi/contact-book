import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import PostForm from "./PostForm";
import PostContext from "../../context/post/postContext";
import Spinner from "../../layout/Spinner";

const AddPost = ({ post }) => {
  const postContext = useContext(PostContext);
  const { posts, getPosts, loading } = postContext;
  const { deletePost, setCurrent, clearCurrent, current } = postContext;
  console.log("current", current);
  const onDelete = (id) => {
    deletePost(id);
    clearCurrent();
  };
  useEffect(() => {
    getPosts();
  }, []);
  if (posts.length === 0) {
    return (
      <div>
        <PostForm />
        Add post
      </div>
    );
  }

  if (posts === null && loading) return <Spinner />;

  return (
    <div>
      <PostForm />
      {posts.map((post) => (
        <div>
          <div>{post.title}</div>
          <div>{post.text}</div>
          <div>{post.type}</div>
          <div>{post.date}</div>
          <button onClick={() => setCurrent(post)}>Edit</button>
          <button onClick={() => onDelete(post._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default AddPost;
