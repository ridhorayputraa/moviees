import React from "react";

import Navbar from "../components/Navbar";
import './style.css'

// Pages
import Popular from "../pages/Popular";
import Trending from "../pages/Trending";



// Router
import {
    Routes,
    Route
} from 'react-router-dom'
import Upcoming from "../pages/Upcoming";


const MoviePages = () => {
    return(
        <>
        <Navbar/>
        <div className="content">
      <Routes>
                <Route path='/popular' element={<Popular/>} />
                <Route path='/trending' element={<Trending/>} />
                <Route path="/soon" element={<Upcoming/> } />
            </Routes>
          
            </div>
        </>
    )
}

export default MoviePages;