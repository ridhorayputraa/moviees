import { configureStore} from "@reduxjs/toolkit";

// Endpoints
import { moviesApi } from "../services/Api";

export const store = configureStore({
reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
},

middleware: (getDefaultMiddleware) => 
  getDefaultMiddleware().concat(moviesApi.middleware),
})
// setupListeners(store.dispatch)
