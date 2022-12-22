import React from 'react';
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <ul>
        <li><Link to={"/lolconsole"}>ddd</Link></li>
      </ul>
    </div>
  )
}

export default Home