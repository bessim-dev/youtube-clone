import React from "react";
import "./App.css";
import Header from "./Components/header/header";
import Sidebar from "./Components/sidebar/sidebar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import SearchResults from "./Components/Search/Search";
import Trending from "./Components/trending/trending";
import Watch from "./Components/watch/watch";
import axios from 'axios'
const API_KEY = "AIzaSyBe1VQSCIy9ABdy1jOI_fGAQ5N7SuwzeiU";


export default class App extends React.Component {
state = {
 data : [],
 relatedVideosData : []
}
componentDidMount(){
      axios
        .get(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=TN&key=${API_KEY}`
        )
        .then(res => this.setState({data : res.data.items}))
        axios
        .get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&relatedToVideoId=wtLJPvx7-ys&type=video&key=${API_KEY}`
        )
        .then(res => this.setState({relatedVideosData : res.data.items}))
}

  render() {
    return (
      <div className="App">
      <Router>
        <Header />
        <Route path="/trending">
          <Sidebar/>
          <Trending data = {this.state.data} />
        </Route>
        <Switch>
          <Route exact path="/">
          <Sidebar/>
          
          </Route>
          <Route path="/search/:searchTerm">
            <SearchResults />
          </Route>
          <Route path="/watch/:videoId">
            <Watch videoData = {this.state.relatedVideosData}/>
          </Route>
        </Switch>
      </Router>
    </div>
    )
  }
}

