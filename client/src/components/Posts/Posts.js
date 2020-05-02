import React, { useContext } from "react";
import PostContext from "../../context/post/postContext";
import PostItem from "./PostItem";
import PostForm from "../PostForm";
import PostFilter from "./PostFilter";

const Posts = () => {
  const postContext = useContext(PostContext);
  const { posts, filtered } = postContext;
  if (posts.length === 0) {
    return <div>Please add post</div>;
  }
  return (
    <div>
      <PostFilter />
      <PostForm />
      {filtered !== null
        ? filtered.map((post) => <PostItem key={post.id} post={post} />)
        : posts.map((post) => <PostItem key={post.id} post={post} />)}
    </div>
  );
};

export default Posts;
