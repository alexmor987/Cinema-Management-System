import React, { useState } from "react";
import { useEffect } from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";
import authSrv from '../services/auth';


const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    color:"pink",
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar(props) {
  const [isAdmin,setIsAdmin] = useState(false);
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(()=>{
    let role=authSrv.getRole();
    setIsAdmin(role==="true"?true:false);
    },[])
  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h6" className={classes.logo}>
        Connected with: {authSrv.getUserName()}
    
        </Typography>
        {isMobile ? (
          <DrawerComponent url={props.url} />
        ) : (
          <div className={classes.navlinks}>
            <Link  onClick={()=>authSrv.logout()} to="/" className={classes.link}>
              LogOut
            </Link>
            <Link to={props.url+"/movies"} className={classes.link}>
              Movies
            </Link>
            
            <Link to={props.url+"/subscriptions"} className={classes.link}>
            Subscriptions
            </Link>
            {isAdmin &&<Link to={props.url+"/usersmanagement"} className={classes.link}>
            Users Management
            </Link>}
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;