import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

// const key = 'api_key=f2e349fe9e8ecced437343534e51774f'

export const moviesApi = createApi({
reducerPath: 'moviesApi',
baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3/',
}),

//   global configuration for the api
  keepUnusedDataFor: 3000,
endpoints: (builder) => ({
//    POPULER !
   populer : builder.query({
    query: () => `movie/popular?${process.env.REACT_APP_TMDB_KEY}`
     
}),

   trending: builder.query({
    query: () => `trending/all/day?${process.env.REACT_APP_TMDB_KEY}`
    
}),
   upcoming: builder.query({
    query: () => `movie/upcoming?${process.env.REACT_APP_TMDB_KEY}`
   
})
}),

})

export const {
    usePopulerQuery,
    useTrendingQuery,
    useUpcomingQuery,
} = moviesApi;
