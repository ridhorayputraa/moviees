import React from "react";

import { Box } from "@mui/material";

import MovieCard from "../components/MovieCard";

import { useUpcomingQuery } from "../services/Api";

const Upcoming = () => {

    const {data, error, isLoading} = useUpcomingQuery();

    return(
        <>
        
            <Box className='containers'>
                {
                    error?(<>Error ngab</>)
                    :isLoading?(<>Loading bentar</>)
                    :(data.results.map((movies) => {
                        return <MovieCard key={movies.id} movie={movies}/>
                    }))
                }
            </Box>
        </>
    )
}

export default Upcoming