import React from 'react'
import Navbar from './Navbar';
import '../styles/Home.css'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, MoveOut, Sticky } from "react-scroll-motion";
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <>
    <main className="home-container">
    <Navbar />
      <ScrollContainer snap="mandatory">
  <ScrollPage>
    <Animator animation={batch(Fade(), Sticky(50,50), MoveOut(10, -100))}>
      <div className="title-div"> <h1>Welcome to the Articles Hub!</h1></div>
    </Animator>
  </ScrollPage>
</ScrollContainer>


      <div className="text-div">
    <p>
     Sign up  or Sign in to create an account and start posting your own articles!
</p>
</div>




      <div className="text2-div">
      <p>
    Or, if you just want to browse, click on the Articles link above to see what others have posted.
  </p>
  <p>
    If you see an article you like, click on it to see the full article and leave a comment!
  </p>


</div>



 



 

    </main>
    <main className="home-container-mob">
<h1>
  Welcome to the Articles Hub!
</h1>
      <p>
      Sign up  or Sign in to create an account and start posting your own articles!
      </p>
      <p>
      Or, if you just want to browse, click on the Articles link above to see what others have posted.
      </p>
      <p>
      If you see an article you like, click on it to see the full article and leave a comment!
      </p>
      <div className="mob-btns">
        <Link to="/articles">
        <button className="home-button">Articles</button>
        </Link>
          <Link to="/register">
          <button className="home-button">Sign Up</button>
          </Link>
          <Link to="/login">
          <button className="home-button">Sign In</button>
          </Link>

      </div>
      </main>
    </>
  )
}

export default Home