import { useEffect,useState } from "react";
import React from "react";
import ReusableButton from "../../components/button/Button";
import CardComponent from "../../components/card/Card";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useDispatch ,useSelector} from "react-redux";
import { removeUser,updateUser,setUsers } from "../../redux/actions/usersActions";
import Modal from '../../components/modal/Modal';
import  utils  from "../../utils/utils";
import CheckboxGroup from "react-checkbox-group";

function AllUsersComp(props) {
   const dispatch = useDispatch();
   const storeData = useSelector((state) => state.usersReducer);
   const [show, setShow] = useState(false);
   
   const [permission, setPermission] = useState([]);
   const [userData, setUserData] = useState({})


  useEffect(async () => {
    setPermission(["subcreate", "subdelete"]);
    try {
      let resp = await utils.getUsers();
      let users = resp.data;
      dispatch(setUsers(users));
    } catch (error) {
      console.log("Error:",error.message);
    }
    
  }, []);

  const deleteUser =async (userid) => {
   dispatch(removeUser(userid));
   await utils.deleteUserById(userid)
  .catch((err) => {
    console.log("Err: ", err);
  })
  };
    const editUser = () => {
     
      setUserData({...userData,permissions:permission})
      console.log(userData);
      setShow(false);
      
  // dispatch(updateUser(userData));
  };

  return (
    <div>
      <Box
        sx={{
          marginTop: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h4"sx={{mb:10}}>
          All Users
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {storeData.users.map((x, i) => {
            return (
              <CardComponent
                key={i}
                cardTitle={x.fullname}
                cardText={[
                  "UserName: " + x.username,
                  "Admin: " + (x.isAdmin ? "Yes" : "No"),
                  "Session TimeOut: " +
                    (x.isAdmin ? "Unlimited" : x.sessionTimeOut),
                ]}
                btn={<div>
                  <ReusableButton
                  size={"small"}
                  onClick={()=>{setShow(true);setUserData(x)}}
                  buttonText={"edit"}
                />
                 <ReusableButton
                  size={"small"}
                  onClick={()=>deleteUser(x.userid)}
                  buttonText={"delete"}
                /></div>
              
              }
                
              >
                <Typography variant="h6">permission:</Typography>
               {
               x.permissions.map(x=>{
                 return <Typography>{x}<br/></Typography> ;
          })

               }

                
              </CardComponent>
            );
          })}

          {/*start modal */}
<Modal onSubmit={editUser} title="Edit User" onClose={() => setShow(false)} show={show}>
        <Box
           component="form"
         sx={{
        '& > :not(style)': { m: 1, width: '27ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-uncontrolled"
        label="Full Name"
        defaultValue={userData.fullname}
        onChange={event => setUserData({...userData, fullname : event.target.value})}  
        
      />
      <TextField
        id="outlined-uncontrolled"
        label="User Name"
        defaultValue={userData.username}
        onChange={event => setUserData({...userData, username : event.target.value})}  
        
      />

      <TextField
                id="outlined-uncontrolled"
                label="Admin"
                defaultValue={userData.isAdmin}
                onChange={() => setUserData({...userData, isAdmin :false})}
              />
      <TextField
        id="outlined-uncontrolled"
        label="Session TimeOut"
        type="number"
        defaultValue={userData.sessionTimeOut}
        onChange={event => setUserData({...userData, sessionTimeOut :event.target.value})}
      />
      <Box sx={{ display: 'flex' }} >
       <CheckboxGroup name="permission" value={permission} onChange={setPermission} >
         
        {(Checkbox) => (
          
          <>
       <Box sx={{ m: 3 }} component="fieldset" variant="standard">
            <label>Subscriptions permissions:</label>
            <Stack spacing={1}>
            <label>
              <Checkbox value="subcreate"/> Create
            </label>
            <label>
              <Checkbox value="subupdate" /> Update
            </label>
            <label>
              <Checkbox value="subdelete" /> Delete
            </label>
              <label>
              <Checkbox value="subview" /> View
            </label>
            </Stack>
        </Box>
         <Box sx={{ m: 3 }} component="fieldset" variant="standard">
           <label>Movies permissions:</label>
            <Stack spacing={1}>
            <label>
              <Checkbox value="movcreate"/> Create
            </label>
            <label>
              <Checkbox value="movupdate" /> Update
            </label>
            <label>
              <Checkbox value="movdelete" /> Delete
            </label>
              <label>
              <Checkbox value="movview" /> View
            </label>
            </Stack>
          </Box>
          </>
        )}
      </CheckboxGroup>
     
     </Box>
    </Box>
        </Modal>
{/*end modal */}
        </Grid>
      </Box>
    </div>
  );
}

export default AllUsersComp;
