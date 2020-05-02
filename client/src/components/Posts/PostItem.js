import React, { useContext } from "react";
import PropsTypes from "prop-types";
import PostContext from "../../context/post/postContext";

const PostItem = ({ post }) => {
  const postContext = useContext(PostContext);
  const { deletePost, setCurrent, clearCurrent } = postContext;
  const { id, text, title, type, date } = post;
  const onDelete = () => {
    deletePost(id);
    clearCurrent();
  };
  return (
    <div className="post-item">
      <div>{title}</div>
      <div>{text}</div>
      <div>{type}</div>
      <div>{date}</div>
      <button onClick={() => setCurrent(post)}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};
PostItem.propTypes = {
  post: PropsTypes.object.isRequired,
};
export default PostItem;
