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
import { ThemeProvider } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import {useSelector } from "react-redux";
import {useState } from "react";
import  utils  from "../../utils/utils"


function AddMemberComp() {
  const [memberData, setMemberData] = useState({email:"",name : "", image : "",city:""})
 
  const storeData = useSelector((state) => state);
  const theme = useTheme();


  const handleSubmit = async(event) => {
    event.preventDefault();
    await utils.addMember(memberData)
  .catch((err) => {
    console.log("Err: ", err);
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
            Add Member
          </Typography>
          <Box component="form" noValidate={false} onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Full Name"
                  autoFocus
                  onChange={event => setMemberData({...memberData, name : event.target.value})}
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  name="email"
                  id="email"
                  label="Email"
                  autoComplete="email"
                  onChange={event => setMemberData({...memberData, email :event.target.value})}
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  name="city"
                  id="city"
                  label="City"
                  autoComplete="city"
                  onChange={event => setMemberData({...memberData, city :event.target.value})}
                />
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

export default AddMemberComp;