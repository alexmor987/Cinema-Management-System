import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

export default function CardComponent(props) {
  return (
    <Grid item xs="auto">
      <Card align="center" sx={{ maxWidth: 345 }}>
        {props.image ?
        (<CardMedia
            component="img"
            alt="img"
            height="140"
            image={props.image}/>)
          :
        (<Avatar sx={{m:1,bgcolor: 'secondary.main',boxShadow: 5 }}>
          <PeopleAltIcon/>
          </Avatar>)}
        <CardContent >
          <Typography gutterBottom variant="h5" component="div">
            {props.cardTitle}
          </Typography>
          {props.cardText.map((line) => (
            <Typography component="div" variant="inherit" key={line}>
              {line}
            </Typography>
          ))}
         { props.children}
        </CardContent>
        <CardActions>{props.btn}</CardActions>
      </Card>
    </Grid>
  );
}