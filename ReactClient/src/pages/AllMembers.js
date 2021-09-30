import { useEffect,useState } from "react";
import utils from '../utils/utils';
import CardMemberComp from '../components/CardMember';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';


function AllMembersComp() {
    const [members, setMembers] = useState([]);
    const theme = createTheme();
useEffect(async()=>{
try {

    let resp= await utils.getMembers();
    let allmembers=resp.data.members;
    setMembers(allmembers);
} catch (error) {
    console.log(error.message);
}
    },[])

  return (
    <ThemeProvider theme={theme}>

         
        

      <main>
      <Box  style={{maxHeight: 600, overflow:'auto' }}>
      

        <Container sx={{ py: 8 }} maxWidth="md">
       
          <Grid container spacing={4}>
         
          {
             members.map((memberData,index)=>{
        
             return  <Grid item key={index} xs={12} sm={6} md={5}>
               
               <CardMemberComp sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} data={memberData}/>
               </Grid>
                      })
          }
             </Grid>
        </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}

export default AllMembersComp;

