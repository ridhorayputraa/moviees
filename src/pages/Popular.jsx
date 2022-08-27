import React from "react";

import { usePopulerQuery } from "../services/Api";

import { Box } from "@mui/material";

import MovieCard from "../components/MovieCard";
const Popular = () => {
  
  const { data, error, isLoading} = usePopulerQuery();
  
    return (
        <>
            
           <Box className='containers' >
            {
                error?(<>ADa error</>)
                :isLoading?(<>Loading</>)
                :(data.results.map((movies) => {
                    return <MovieCard key={movies.id} movie={movies} />
                }))
            }
           </Box>
        </>
    )
}

export default Popular;