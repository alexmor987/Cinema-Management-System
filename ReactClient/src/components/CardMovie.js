
import Box from '@mui/material/Box';
import {useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import TextField from '@mui/material/TextField';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import SubscriptionsComp from './Subscriptions';
import  Button  from '@mui/material/Button';
import { useDispatch } from "react-redux";
import { removeMovie,updateMovie } from "../redux/actions/moviesActions";
import  utils  from "../utils/utils"
import Modal from '../components/Modal/Modal';
import dayjs from 'dayjs'
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(genre, genres, theme) {
  return {
    fontWeight:
    genres.indexOf(genre) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
export default function CardMovieComp(props) {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [show, setShow] = useState(false);
  const [movieData, setMovieData] = useState({movieid:props.data.movieid,premiered:props.data.premiered,moviename : props.data.moviename, image : props.data.image,genres:props.data.genres,subscriptions:props.data.subscriptions})


  const handleChange = (event) => {
    setMovieData({...movieData,genres:event.target.value});
  };
 

 const deleteMovie=async(id)=>
  {
    dispatch(removeMovie(id));
  await utils.deleteMovieById(id)
  .catch((err) => {
    console.log("Err: ", err);
  })
 
  }
  const editMovie=async()=>{
    setShow(false);
    dispatch(updateMovie(movieData));
    
    await utils.updateMovie(movieData)
    .catch((err) => {
      console.log("Err: ", err);
    })
    
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
        <CardHeader
        title={props.data.moviename} 
        subheader={dayjs(props.data.premiered).format('DD/MM/YYYY')}
        
      />
      <CardMedia
        component="img"
        alt="movie-img"
        image={props.data.image}
      />
      <CardContent>
        <Typography paragraph  variant="body2" color="text.secondary">
          <b>Genres:</b> {props.data.genres.join(' , ')}
        </Typography>
       {
       (props.data.subscriptions.length>0)&& <Typography paragraph>
           
           Subscriptions watched:
           <SubscriptionsComp subscriptions={props.data.subscriptions}/>

          </Typography>}
      </CardContent>
      <CardActions>
        <Button onClick={()=>setShow(true)} size="small" >Edit</Button>
        <Modal onSubmit={editMovie} title="Edit Movie" onClose={() => setShow(false)} show={show}>
        <Box
           component="form"
         sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-uncontrolled"
        label="Movie Name"
        defaultValue={props.data.moviename}
        onChange={event => setMovieData({...movieData, moviename : event.target.value})}  
        
      />

      <TextField
                id="date"
                label="Premiered"
                type="date"
                defaultValue={(props.data.premiered.substring(0,10))}
                onChange={event => setMovieData({...movieData, premiered :dayjs(event.target.value).toISOString()})}
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
        <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Genres</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          defaultValue={props.data.genres}
          onChange={handleChange}
          input={<OutlinedInput label="Genres" />}
          MenuProps={MenuProps}
        >
          {props.genres.map((genre) => (
            <MenuItem
              key={genre}
              value={genre}
              style={getStyles(genre, movieData.genres, theme)}
            >
              {genre}
            </MenuItem>
          ))}
        </Select>
        </FormControl>
      <TextField
        id="outlined-uncontrolled"
        label="Image URL"
        defaultValue={props.data.image}
        onChange={event => setMovieData({...movieData, image :event.target.value})}
      />
    </Box>
        </Modal>
        <Button onClick={()=>deleteMovie(props.data.movieid)}  size="small">Delete</Button>
      </CardActions>
    </Card>
    
  );
}
