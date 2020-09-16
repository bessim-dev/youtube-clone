import React from "react";
import { Link } from "react-router-dom";

const SidebarRow = ({ selected, title, Icon, link }) => {
  return (
    <Link to={link} className={`sidebarRow ${selected && "selected"}`}>
        <Icon className="sidebarIcon" />
        <h2 className="sidebartitle">{title}</h2>
    </Link>
  );
};
export default SidebarRow;
