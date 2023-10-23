import React from "react";
import "react-toastify/dist/ReactToastify.css";
import LeftSidebar from "./LeftSidebar";
import UserInfo from "./UserInfo";
import "../styles/WelcomePage.css";

const WelcomePage = () => {
  return (
    <main className="welcome-page-container">
      <section className="sidebar">
        <LeftSidebar />
      </section>
      <section className="articles-content">
        <h1>Welcome to the Dashboard</h1>
        <p>This is the dashboard page</p>
      </section>

      <section className="right-content">
        <UserInfo />
      </section>
    </main>
  );
};

export default WelcomePage;
