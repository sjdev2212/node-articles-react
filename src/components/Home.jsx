import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <main>
<h1>
    Welcome to the Articles Hub!
</h1>

<p>
    <Link to="/register"> Sign up </Link> or <Link to="/login">Sign in</Link> to create an account and start posting your own articles!
</p>
  <p>
    Or, if you just want to browse, click on the Articles link above to see what others have posted.
  </p>

  <p>
    If you see an article you like, click on it to see the full article and leave a comment!
  </p>


    </main>
  )
}

export default Home