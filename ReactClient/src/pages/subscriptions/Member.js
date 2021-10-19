import { useEffect,useState } from "react";
import { useParams} from 'react-router-dom'
import utils from '../../utils/utils';
import CardMemberComp from '../../components/CardMember';
import { ThemeProvider } from "@emotion/react";
import Grid from '@mui/material/Grid';
import { createTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function MemberComp() {
    const [member, setMember] = useState([]);
    const theme = createTheme();
    let { id } = useParams()
useEffect(async()=>{
try { 
    let resp= await utils.getMemberById(id);
    setMember(resp.data.member);
} catch (error) {
    console.log(error.message);
}
    },[id])

  return (
    <ThemeProvider theme={theme}>
    <main>
    <Box  style={{maxHeight: 600, overflow:'auto' }}>
    

      <Container sx={{ py: 8 }} maxWidth="md">
     
        <Grid container spacing={4}>
       
        {
           member.map((memberData,index)=>{
      
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

export default MemberComp;

