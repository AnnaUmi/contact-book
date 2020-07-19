import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Posts from "./components/Posts/Posts";
import "./App.css";
import PostState from "./context/post/PostState";
import AlertState from "./context/alert/AlertState";
import AuthState from "./context/auth/AuthState";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Alerts from "./layout/Alert";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./components/routing/PrivateRoute";
import AddPost from "./components/Posts/AddPost";

function App() {
  if (localStorage.token) {
    console.log("localStorage.token", localStorage.token);
    setAuthToken(localStorage.token);
  }
  return (
    <AuthState>
      <PostState>
        <AlertState>
          <Router>
            <div>
              <Navbar />
              <div className="container">
                <Alerts />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route path="/posts" component={Posts} />
                  <PrivateRoute path="/add-post" component={AddPost} />
                  <Route path="/register" component={Register} />
                  <Route path="/login" component={Login} />
                </Switch>
              </div>
            </div>
          </Router>
        </AlertState>
      </PostState>
    </AuthState>
  );
}

export default App;
