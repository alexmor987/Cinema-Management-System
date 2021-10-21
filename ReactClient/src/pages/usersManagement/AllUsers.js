import { useEffect } from "react";
import utils from "../../utils/utils";
import React from "react";
import ReusableButton from "../../components/button/Button";
import CardComponent from "../../components/card/Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useDispatch ,useSelector} from "react-redux";
import { removeUser,updateUser,setUsers } from "../../redux/actions/usersActions";

function AllUsersComp(props) {
   const dispatch = useDispatch();
   const storeData = useSelector((state) => state.usersReducer);
  useEffect(async () => {
    try {
      let resp = await utils.getUsers();
      let users = resp.data;
      dispatch(setUsers(users));
    } catch (error) {
      console.log("Alex error",error.message);
    }
    
  }, []);

  const deleteUser = (userid) => {
   dispatch(removeUser(userid));
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
              >
                <ReusableButton
                  size={"small"}
                  //onClick={onClick}
                  buttonText={"edit"}
                />
                <ReusableButton
                  size={"small"}
                  onClick={()=>deleteUser(x.userid)}
                  buttonText={"delete"}
                />
              </CardComponent>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
}

export default AllUsersComp;
