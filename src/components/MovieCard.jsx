import React from "react";
import { Card, CardContent, CardMedia, Typography} from '@mui/material'
import '../containers/style.css'
const urlAwal = 'https://image.tmdb.org/t/p/w200'

const MovieCard = ({movie: movies}) =>{
    return(
        <>    
     
      
        <Card sx={{backgroundColor:'#38486A'}} className="cards">
          <CardMedia
            className="card"
            component='img'
            image={`${urlAwal}${movies.poster_path}`}
          />
          <CardContent>
            <Typography color='white' component='div' variant="body1">{movies.title}</Typography>
          </CardContent>

        </Card>

      </>
           
    
    )
}

export default MovieCard