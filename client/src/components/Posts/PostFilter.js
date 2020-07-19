import React, { useContext, useRef, useEffect } from "react";
import PostContext from "../../context/post/postContext";

const PostFilter = () => {
  const postContext = useContext(PostContext);
  const text = useRef("");
  const { filterPost, clearFilter, filtered } = postContext;
  console.log("filtered ", filtered);

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  }, []);

  const onChange = (e) => {
    if (text.current.value !== "") {
      filterPost(e.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <div>
      <input
        ref={text}
        type="text"
        placeholder="Filter posts"
        onChange={onChange}
      ></input>
    </div>
  );
};

export default PostFilter;
