import { useEffect,useState } from "react";
import utils from '../utils/utils';
import CardMovieComp from '../components/CardMovie';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import SearchField from "react-search-field";
import { makeStyles } from  "@material-ui/core";
import { useParams} from 'react-router-dom';

const useStyles = makeStyles({
  root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center', 
  }
  
});


function AllMoviesComp(props) {
    const [movies, setMovies] = useState([]);
    const theme = createTheme();
    const [search, setSearch] = useState('');
    const classes = useStyles();
    let { id } = useParams();

useEffect(async()=>{

try {
    let resp= await utils.getMovies();
    let allmovies=resp.data.movies;
    setMovies(allmovies);
} catch (error) {
  console.log(error.message);
}
    },[])
    
    const filteredMovies = search.length === 0 ? movies : 
    movies.filter(movies => movies.moviename.
                toLowerCase().includes(search.toLowerCase()))
   
  return (
    
<ThemeProvider theme={theme}>
  <div className={classes.root}>
    <SearchField 
          placeholder="Search..."
          onChange={(value) => setSearch(value)}/>
  <CssBaseline />
  </div>

         
        

      <main>
      <Box  style={{maxHeight: 600, overflow:'auto' }}>
      

        <Container sx={{ py: 8 }} maxWidth="md">
       
          <Grid container spacing={4}>
         
          {
             filteredMovies.map((movieData,index)=>{
        
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

export default AllMoviesComp;

