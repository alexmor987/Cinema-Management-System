import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SubscriptionsComp from './Subscriptions';

export default function CardComp(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
        <CardHeader
        title={props.data.moviename} 
        subheader={props.data.premiered.substring(0,10)}
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
        <Button size="small">Edit</Button>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  );
}
