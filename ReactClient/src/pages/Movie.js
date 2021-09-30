import { useEffect,useState } from "react";
import { useParams} from 'react-router-dom'
import utils from '../utils/utils';
import  CardMovieComp from '../components/CardMovie';
import { ThemeProvider } from "@emotion/react";
import Grid from '@mui/material/Grid';
import { createTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function MovieComp() {
    const [movie, setMovie] = useState([]);
    const theme = createTheme();
    let { id } = useParams()
useEffect(async()=>{
try { 
  
    let resp= await utils.getMovieById(id);
    console.log(resp.data.movie);
    setMovie(resp.data.movie);
} catch (error) {
    console.log(error.message);
}
    },[id])

  return (
    <ThemeProvider theme={theme}>
    <main>
    <Box  style={{maxHeight: 600, overflow:'auto' }}>
    

      <Container sx={{ py: 8 }} maxWidth="md">
     
        <Grid container spacing={4}>
       
        {
           movie.map((movieData,index)=>{
      
           return  <Grid item key={index} xs={12} sm={6} md={5}>
             
            <CardMovieComp sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} data={movieData}/>
             </Grid>
                    })
        }
           </Grid>
      </Container>
      </Box>
    </main>
  </ThemeProvider>
  );
}

export default MovieComp;

