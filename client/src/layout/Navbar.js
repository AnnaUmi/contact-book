import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import AuthContext from "../context/auth/authContext";
import PostContext from "../context/post/postContext";

const Navbar = ({ title }) => {
  const authContext = useContext(AuthContext);
  const postContext = useContext(PostContext);
  const { isAuthenticated, logout, user } = authContext;
  const { clearPosts } = postContext;

  const onLogout = () => {
    logout();
    clearPosts();
  };
  const authLinks = (
    <>
      <li>Hello {user && user.name}</li>
      <li>
        <a href="#!" onClick={onLogout}>
          Logout
        </a>
      </li>
      <li>
        <NavLink to="/add-post/">Add Post</NavLink>
      </li>
    </>
  );
  const guestLinks = (
    <>
      <NavLink to="/register/">Register</NavLink>
      <NavLink to="/login/">Login</NavLink>
    </>
  );
  return (
    <div>
      <h1>{title}</h1>
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/about/">About</NavLink>
      <NavLink to="/posts/">Posts</NavLink>
      {isAuthenticated ? authLinks : guestLinks}
    </div>
  );
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Contact Book",
};
export default Navbar;
