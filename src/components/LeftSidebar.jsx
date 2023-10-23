import React, { useState } from "react";
import { logout } from "../features/users/LoginSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logoutIcon from "../images/logout.png";
import settings from "../images/settings.png";
import notification from "../images/notification.png";
import articles from "../images/articles.png";

import "../styles/LeftSidebar.css";

const LeftSidebar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const logingOut = () => {
    toast("logged out", { type: "info" });
  };

  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logout());
    logingOut();
    navigate("/login");
  };

  const sidebarClosed = "left-sidebar-container";
  const sidebarOpen = "left-sidebar-container-open";

  const toggleSidebarOpen = () => {
    setOpen(true);
  };
  const toggleSidebarClosed = () => {
    setOpen(false);
  };

  return (
    <main
      onMouseEnter={toggleSidebarOpen}
      onMouseLeave={toggleSidebarClosed}
      className={open ? sidebarOpen : sidebarClosed}
    >
      <div className="sidebar-icons-cont">
        <img onClick={logOut} src={logoutIcon} />
        <span>Logout</span>
      </div>
      <div className="sidebar-icons-cont">
        <img src={settings} />
        <span>Settings</span>
      </div>
      <div className="sidebar-icons-cont">
        <img src={notification} />
        <span>Notifications</span>
      </div>
      <div className="sidebar-icons-cont">
        <img src={articles} />
        <span>Articles</span>
      </div>
    </main>
  );
};

export default LeftSidebar;
