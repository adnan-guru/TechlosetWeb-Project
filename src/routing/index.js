import React from 'react';
import Home from '../modules/home';
import About from '../modules/about';
import Work from '../modules/work';
import Blog from '../modules/blog';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Navbar from '../commonComponents/navbar';
import Footer from '../commonComponents/footer';

function App(){
    return(
<Router>
    <Navbar />
      <Switch>
      <Route exact path="/">
          <Home />
        </Route>
        <Route  path="/about">
            <About />
        </Route>
        <Route path="/work">
          <Work />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
      </Switch>
      <Footer />
  </Router>
    )
}
export default App;