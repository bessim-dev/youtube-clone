import React from "react";
import { NavLink } from "react-router-dom";

const SidebarRow = ({ selected, title, Icon, link }) => {
  return (
    <NavLink to={link} exact={true} className="sidebarRow" activeClassName="selected">
      <Icon className="sidebarIcon" />
      <h2 className="sidebartitle">{title}</h2>
    </NavLink>
  );
};
export default SidebarRow;
