import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useSelector } from "react-redux";
import {useState } from "react";
import dayjs from 'dayjs';
import  utils  from "../../utils/utils"

const theme = createTheme();



function getStyles(genre, genres, theme) {
  return {
    fontWeight:
    genres.indexOf(genre) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function AddMovieComp() {
  const [movieData, setMovieData] = useState({premiered:"",moviename : "", image : "",genres:[]})
 
  const storeData = useSelector((state) => state);
  const theme = useTheme();


  const handleSubmit = async(event) => {
    event.preventDefault();
    await utils.addMovie(movieData)
  .catch((err) => {
    console.log("Err: ", err);
  })
  };

  const handleChange = (event) => {
    setMovieData({...movieData,genres:event.target.value});
  };
 

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add Movie
          </Typography>
          <Box component="form" noValidate={false} onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="moviename"
                  required
                  fullWidth
                  id="moviename"
                  label="Movie Name"
                  autoFocus
                  onChange={event => setMovieData({...movieData, moviename : event.target.value})}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                required
                fullWidth
                name="premiered"
                id="premiered"
                label="Premiered"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={event => setMovieData({...movieData, premiered :dayjs(event.target.value).toISOString()})}
                
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  name="image"
                  id="image"
                  label="Image URL"
                  name="URL"
                  autoComplete="URL"
                  onChange={event => setMovieData({...movieData, image :event.target.value})}
                />
              </Grid>
              <Grid item xs={12}>{/* start select with all genres*/ }
              <FormControl sx={{  width: 430 }}>
        <InputLabel id="demo-multiple-name-label" >Genres</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              defaultValue={movieData.genres}
              multiple
              onChange={handleChange}
              input={<OutlinedInput label="Genres" />}
          
        >
          {
              storeData.genres.map((genre) => (
                <MenuItem
                  key={genre}
                  value={genre}
                  style={getStyles(genre, storeData.genres, theme)}
                >
                  {genre}
                </MenuItem>
          ))}
        </Select>
        </FormControl>
              </Grid>
            </Grid>{/* end select with all genres*/ }
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default AddMovieComp;