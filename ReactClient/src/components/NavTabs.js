import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Link } from "react-router-dom";



export default function NavTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs">
        <Tab component={Link} label={props.tabsName.firstTabName} to={props.url+props.tabsUrl.firstTabUrl} />
        <Tab component={Link} label={props.tabsName.secondTabName} to={props.url+props.tabsUrl.secondTabUrl}/>
      </Tabs>
    </Box>
  );
}
