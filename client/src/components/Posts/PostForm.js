import React, { useState, useContext, useEffect } from "react";
import PostContext from "../../context/post/postContext";

const PostForm = () => {
  const postContext = useContext(PostContext);
  const [post, setPost] = useState({
    title: "",
    text: "",
    type: "JavaScript",
    date: "",
  });
  const { addPost, clearCurrent, updatePost, current } = postContext;

  useEffect(() => {
    if (current !== null) {
      setPost(current);
    } else {
      setPost({ title: "", text: "", type: "JavaScript", date: "" });
    }
  }, [postContext]);

  const onChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addPost(post);
    } else {
      updatePost(post);
    }
    setPost({ title: "", text: "", type: "JavaScript", date: "" });
  };
  const clearAll = () => {
    clearCurrent();
  };
  const { title, text, type, date } = post;
  return (
    <div>
      <form onSubmit={onSubmit}>
        <h2>{current ? "Edit post" : "Add post"}</h2>
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Title"
          onChange={onChange}
        ></input>
        <textarea
          name="text"
          value={text}
          type="text"
          placeholder="Post"
          onChange={onChange}
        />
        <input
          type="radio"
          name="type"
          id="JavaScript"
          value="JavaScript"
          checked={type === "JavaScript"}
          onChange={onChange}
        />
        <label forhtml="JavaScript">JavaScript</label>
        <input
          type="radio"
          name="type"
          id="React"
          value="React"
          checked={type === "React"}
          onChange={onChange}
        />
        <label forhtml="React">React</label>
        <button>{current ? "Update post" : "Add post"}</button>
        {current && <button onClick={clearAll}>Clear</button>}
      </form>
    </div>
  );
};

export default PostForm;
