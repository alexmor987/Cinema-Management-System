import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Switch, Route,Link } from "react-router-dom";
import {useRouteMatch} from 'react-router-dom';

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function NavTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        <Tab component={Link} label="All Movies" to={props.url+"/allmovies"} />
        <Tab component={Link} label="Add Movie" to={props.url+"/addmovie"}/>
      </Tabs>
    </Box>
  );
}
