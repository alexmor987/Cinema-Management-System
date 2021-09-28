import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MovieComp from './Movies';

export default function CardMemberComp(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
        <CardHeader
        title={props.data.Name} 
        
      />
     
      <CardContent>
        <Typography paragraph  variant="body2" color="text.secondary">
          <b>Email:</b> {props.data.Email}<br/>
          <b>City:</b> {props.data.City}
        </Typography>
       {
       (props.data.Movies.length>0)&&<Typography paragraph>
           
           Watched Movies:
           <MovieComp movies={props.data.Movies}/>

          </Typography>}
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  );
}
