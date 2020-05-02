import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Posts from "./components/Posts/Posts";
import "./App.css";
import PostState from "./context/post/PostState";
import AuthState from "./context/auth/AuthState";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";

function App() {
  return (
    <AuthState>
      <PostState>
        <Router>
          <div>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route path="/posts" component={Posts} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
              </Switch>
            </div>
          </div>
        </Router>
      </PostState>
    </AuthState>
  );
}

export default App;
