import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Search } from "./Pages/Search/Search";
import { Trending } from "./Pages/trending/trending";
import Watch from "./Pages/watch/watch";
import Header from "./Components/header/header";
import { Sidebar } from "./Components/sidebar/sidebar";
import "./App.css";
import { Home } from "./Pages/Home/Home";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="underHeader">
          <Sidebar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/trending">
              <Trending />
            </Route>
            <Route path="/search/:searchTerm" component={Search} />
            <Route path="/watch/:videoId" component={Watch} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};
export default App;
