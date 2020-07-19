import React, { useContext } from "react";
import PropsTypes from "prop-types";

const PostItem = ({ post }) => {
  const { text, title, type, date } = post;
  return (
    <div className="post-item">
      <div>{title}</div>
      <div>{text}</div>
      <div>{type}</div>
      <div>{date}</div>
    </div>
  );
};
PostItem.propTypes = {
  post: PropsTypes.object.isRequired,
};
export default PostItem;
