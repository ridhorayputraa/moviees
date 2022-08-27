import React from "react";

import { Box } from "@mui/material";

import { useTrendingQuery } from "../services/Api";

import MovieCard from "../components/MovieCard";

const Trending = () => {

    const {data, error, isLoading} = useTrendingQuery();

    return(
        <>
          
           <Box className='containers'>
            {
                error?(<>Erorr NGAB</>)
                :isLoading?(<>loading</>)
                :(data.results.map((movies) => {
                    return <MovieCard key={movies.id} movie={movies} />
                }))
            }
           </Box>
        </>
    )
}

export default Trending