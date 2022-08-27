import React from "react";
import {Link} from 'react-router-dom'

const Navbar = () => {
    return(
        <>
         <nav>
            <ul>
                <li className="home"><Link to='/'>Home</Link></li>
                <li className="nav"><Link to='/popular'>Popular</Link></li>
                <li className="nav" ><Link to='/trending'>Trending</Link></li>
                <li className="nav"><Link to='/soon'>Upcoming</Link></li>
            </ul>
         </nav>
        </>
    )
}

export default Navbar