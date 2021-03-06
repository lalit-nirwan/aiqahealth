import React from 'react';
import './App.css';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Home from './pages/Home';
import About from './pages/About'
import Plan from './pages/Plan'
import Home1 from './pages/Home1'
import Blog from './pages/Blog'
import Term from './pages/Term'
import Blogdetails from './pages/Blogdetails'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
    <Header></Header>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/plan">
          <Plan />
        </Route>
        <Route path="/Home1">
          <Home1 />
        </Route>
        <Route path="/blogs">
          <Blog />
        </Route>
        <Route path="/terms">
          <Term />
        </Route>
        <Route path="/:slug">
          <Blogdetails />
        </Route>
      </Switch>
      <Footer></Footer>
    </div>
  </Router>
    );
}
export default App;