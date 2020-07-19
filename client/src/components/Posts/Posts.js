import React, { useContext, useEffect } from "react";
import PostContext from "../../context/post/postContext";
import PostItem from "./PostItem";

import PostFilter from "./PostFilter";
import Spinner from "../../layout/Spinner";

const Posts = () => {
  const postContext = useContext(PostContext);
  const { posts, filtered, getPosts, loading } = postContext;
  useEffect(() => {
    getPosts();
  }, []);
  // if (posts.length === 0) {
  //   return <Spinner />;
  // }

  if (posts === null && loading) return <Spinner />;
  return (
    <div>
      <PostFilter />
      {filtered !== null
        ? filtered &&
          filtered.map((post) => <PostItem key={post._id} post={post} />)
        : posts && posts.map((post) => <PostItem key={post._id} post={post} />)}
    </div>
  );
};

export default Posts;
