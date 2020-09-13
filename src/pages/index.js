import React from "react";
import "./public/css/style.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./index";
import Contact from "./contact";
import About from "./about";

function home() {
  return (
    <Router>
      <div>
        <header>
          <img id="logo" src="public/img/logo.png" width="200px" />
          <nav>
            <ul>
              <li>
                {/* <Link to="/">
                  <a href="index">Home</a>{" "}
                </Link> */}
                <a href="./index.js">Home</a>{" "}
              </li>
              <li>
                {/* <Link to="/about">
                  <a>About</a>{" "}
                </Link> */}
                <a href="./about.js">About</a>{" "}
              </li>
              <li>
                {/* <Link to="/contact">
                  <a>Movie List Editor</a>{" "}
                </Link> */}
                <a href="./contact.js">Movie List Editor</a>{" "}
              </li>
            </ul>
          </nav>
        </header>
        <body>
          <section>
            <h1>Featured Posts</h1>
            <div id="article-list">
              <div class="article">
                <a href="">
                  <h3>Lorem Post 1</h3>
                </a>
                <p>
                  Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per
                  illum labores ne. Blandit omnesque scripserit pri ex, et pri
                  dicant eirmod deserunt. Aeque perpetua ea nec. Sit erant
                  patrioque delicatissimi ut. Et sea quem sint, nam in minim
                  voluptatibus. Etiam placerat eam in.
                </p>
              </div>
              <div class="article">
                <a href="">
                  <h3>Lorem Post 2</h3>
                </a>
                <p>
                  Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per
                  illum labores ne. Blandit omnesque scripserit pri ex, et pri
                  dicant eirmod deserunt. Aeque perpetua ea nec. Sit erant
                  patrioque delicatissimi ut. Et sea quem sint, nam in minim
                  voluptatibus. Etiam placerat eam in.
                </p>
              </div>
              <div class="article">
                <a href="">
                  <h3>Lorem Post 3</h3>
                </a>
                <p>
                  Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per
                  illum labores ne. Blandit omnesque scripserit pri ex, et pri
                  dicant eirmod deserunt. Aeque perpetua ea nec. Sit erant
                  patrioque delicatissimi ut. Et sea quem sint, nam in minim
                  voluptatibus. Etiam placerat eam in.
                </p>
              </div>
              <div class="article">
                <a href="">
                  <h3>Lorem Post 4</h3>
                </a>
                <p>
                  Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per
                  illum labores ne. Blandit omnesque scripserit pri ex, et pri
                  dicant eirmod deserunt. Aeque perpetua ea nec. Sit erant
                  patrioque delicatissimi ut. Et sea quem sint, nam in minim
                  voluptatibus. Etiam placerat eam in.
                </p>
              </div>
              <div class="article">
                <a href="">
                  <h3>Lorem Post 5</h3>
                </a>
                <p>
                  Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per
                  illum labores ne. Blandit omnesque scripserit pri ex, et pri
                  dicant eirmod deserunt. Aeque perpetua ea nec. Sit erant
                  patrioque delicatissimi ut. Et sea quem sint, nam in minim
                  voluptatibus. Etiam placerat eam in.
                </p>
              </div>
              <div>
                <a href="">
                  <h3>Lorem Post 5</h3>
                </a>
                <p>
                  Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per
                  illum labores ne. Blandit omnesque scripserit pri ex, et pri
                  dicant eirmod deserunt. Aeque perpetua ea nec. Sit erant
                  patrioque delicatissimi ut. Et sea quem sint, nam in minim
                  voluptatibus. Etiam placerat eam in.
                </p>
              </div>
              <div>
                <a href="">
                  <h3>Lorem Post 5</h3>
                </a>
                <p>
                  Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per
                  illum labores ne. Blandit omnesque scripserit pri ex, et pri
                  dicant eirmod deserunt. Aeque perpetua ea nec. Sit erant
                  patrioque delicatissimi ut. Et sea quem sint, nam in minim
                  voluptatibus. Etiam placerat eam in.
                </p>
              </div>
            </div>
          </section>
          <footer>
            <h5>copyright &copy; 2020 by Sanbercode</h5>
          </footer>
        </body>
        {/* <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch> */}
      </div>
    </Router>
  );
}

export default home;
