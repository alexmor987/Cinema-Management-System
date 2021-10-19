
import utils from '../../utils/utils';
import CardMovieComp from '../../components/CardMovie';

import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import SearchField from "react-search-field";
import { makeStyles } from  "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../../redux/actions/moviesActions"
import React, { useEffect,useState } from "react";
import authSrv from '../../services/auth';
import {useHistory} from "react-router-dom";

const useStyles = makeStyles({
  root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center', 
  }
  
});


function AllMoviesComp() {

  const history = useHistory();
  const storeData = useSelector((state) => state);
  const dispatch = useDispatch();

  const theme = createTheme();
  const [search, setSearch] = useState('');
  const classes = useStyles();
    


useEffect(()=>{
  let token=authSrv.getToken();

  const fetchMovies = async () => {

  const response = await utils.getMovies()
        .catch((err) => {
          console.log("Err: ", err);
        });
        dispatch(setMovies(response.data));
          
        };

  if(token===undefined)
  {
    history.push("/");
  }
  else{
    fetchMovies();
  }

    
    },[])

    const filteredMovies = search.length === 0 ? storeData.movies : 
    storeData.movies.filter(movies => movies.moviename.
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
               
               <CardMovieComp sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} data={movieData} genres={storeData.genres}/>
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

