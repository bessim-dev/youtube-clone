import React from "react";
import "./App.css";
import Header from "./Components/header/header";
import Sidebar from "./Components/sidebar/sidebar";
import VideoSection from "./Components/videosSection/videoSection";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchResults from "./Components/Search/Search";
import Trending from "./Components/trending/trending";
import Grid from '@material-ui/core/Grid';
const API_KEY = "AIzaSyBe1VQSCIy9ABdy1jOI_fGAQ5N7SuwzeiU";

function App() {
  return (
    <div className="App">
      <Router>
          <Header />
          <Sidebar />
        <Route path="/trending">
              <Trending />
          </Route>
        <Switch>
          <Route exact path="/">
            <VideoSection />
          </Route>
          <Route path="/search/:searchTerm">
            <SearchResults />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
