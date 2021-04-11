import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import Notifications from "@material-ui/icons/Notifications";
import "./header.css";
import { Avatar } from "@material-ui/core";
import { withRouter } from "react-router-dom";
const Header = ({ history }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const hundleSubmit = () => {
    if (searchTerm) {
      history.push({
        pathname: `/search/${searchTerm}`,
        state: {
          searchTerm
        },
      });
    }

  };
  const hundleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const hundleEnterKey = e => {
    //it triggers by pressing the enter key

    if (e.key === "Enter") {
      hundleSubmit();
    }
  }
  const goHome = () => {
    history.push("/");
  };
  return (
    <div className="header">
      <div className="header-right">
        <MenuIcon />
        <img
          onClick={goHome}
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt="youtube Icon"
        />
      </div>
      <div className="header-input">
        <input
          placeholder="Search"
          value={searchTerm}
          type="text"
          onChange={hundleChange}
          onKeyPress={hundleEnterKey}
        />
        <button
          onClick={hundleSubmit}
          className="header-input-button"
          type="submit"
        >
          <SearchIcon className="search-icon" />
        </button>
      </div>
      <div className="header-left">
        <VideoCallIcon className="right-icons" />
        <AppsIcon className="right-icons" />
        <Notifications className="right-icons" />
        <Avatar alt="" src="" />
      </div>
    </div>
  );
};
export default withRouter(Header);
