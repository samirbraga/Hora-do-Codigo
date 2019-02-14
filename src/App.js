import React, { Component, Fragment } from 'react';
import Introduce from "./components/introduce";
import Explain from './components/explain';
import Video from './components/video';
import Voluntary from './components/voluntary';
import About from './components/about';
import Team from './components/team';
import Donate from './components/donate';
import Wallpaper from './components/wallpaper';
import Contact from './components/contact';
import Footer from './components/footer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import './App.css';

library.add(faInstagram, faFacebook, faGithub, faHeart)

class App extends Component {
  render() {
    return (
      <Fragment>
        <Introduce />
        <Explain />
        <Video />
        <Voluntary />
        <About />
        <Team />
        <Donate />
        <Wallpaper />
        <Contact />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
