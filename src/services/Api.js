import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const key = process.env.REACT_APP_TMDB_KEY

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
    query: () => `movie/popular?${key}`
     
}),

   trending: builder.query({
    query: () => `trending/all/day?${key}`
    
}),
   upcoming: builder.query({
    query: () => `movie/upcoming?${key}`
   
})
}),

})

export const {
    usePopulerQuery,
    useTrendingQuery,
    useUpcomingQuery,
} = moviesApi;
