import React from 'react'
import {  useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import LeftSidebar from './LeftSidebar';
import '../styles/WelcomePage.css';



const WelcomePage = () => {
   
    const user = useSelector((state) => state.loginStore.currentUser);
    const avatar = useSelector((state) => state.loginStore.avatar);


  return (
    <main className="welcome-page-container">
        <section className="sidebar">
        <LeftSidebar/>
        </section>
        <section className="articles-content">
        <h1>Welcome to the Dashboard</h1>
        <p>
            This is the dashboard page
        </p>
        </section>

     <section className="right-content">
        <div>
            <img style={{width: "80px"}} src={avatar} alt="avatar" />
        </div>
        <p>
          Logged in as  {user}
</p>
        </section>


    </main>
  )
}

export default WelcomePage