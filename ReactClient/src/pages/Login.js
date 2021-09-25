import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ToastContainer, toast } from 'react-toastify';
import {Link} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import authSrv from '../services/auth'
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  toastMessageStyle: {
    position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
  }
}));

const theme = createTheme();


 function LoginComp(props) {
const classes = useStyles();
    const handleSubmit = (event) => {

    event.preventDefault();
    const data = new FormData(event.currentTarget);
     authSrv.login({
      username: data.get('username'),
      password: data.get('password'),
    }).then(resp=>{
        if(resp.status===200)
        {
            let token =resp.data.token;
            authSrv.saveToken(token);
            props.history.push('/menu');
        }
    }).catch(function (error) {
      if(error.response.status===401){
        toast.info('🦄'+"Info"+':'+'Invalid username or password',classes.toastMessageStyle);   
      }
      else if(error.response.status===500)   {
        toast.error('🦄'+"Error"+':'+'SERVER ERROR',classes.toastMessageStyle);   
      }
    })
    

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
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField required
              margin="normal"
              fullWidth
              id="username"
              label="UserName"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField required
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
/>
      </Container>
    </ThemeProvider>
  );
}

export default LoginComp;