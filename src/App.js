import React from 'react';
import './App.css';
import Header from './Components/header/header'
import Sidebar from './Components/sidebar/sidebar';
import VideoSection from './Components/videosSection/videoSection';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import SearchResults from './Components/Search/Search';
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/'>
            <div className="underHeader">
              <Sidebar/>
              <VideoSection/>
            </div>
          </Route>
          <Route path='/search/:searchTerm'>
          <div className="underHeader">
              <Sidebar/>
              <SearchResults/>
            </div>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
