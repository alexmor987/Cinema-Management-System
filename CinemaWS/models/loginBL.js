const usersJsonDAL=require ('../dals/usersJsonDAL');
const usersDBDAL=require('../dals/usersDBDAL');
//require('../configs/database');

exports.getAllUsers=async()=>
{
  let allUsers= await usersDBDAL.getUsers();

  return allUsers;
    
}

exports.loginAuthentication=async(username,pwd)=>
{
       let allusers=await usersDBDAL.getUsers();
       let userdata= allusers.find(x=>x.UserName===username && x.Password===pwd);
       return (typeof userdata !== "undefined")?true:false;    
}
exports.usernameAuthentication=async(username)=>
{
       let allusers=await usersDBDAL.getUsers();
       let userdata= allusers.find(x=>x.UserName===username);
       return userdata; 
}
exports.findUserIdForUserName=async(username)=>
{
       let allusers=await usersDBDAL.getUsers();
       let userdata= allusers.find(x=>x.UserName===username);
       return userdata._id; 
}
exports.passwordUpdate=async(userid,obj)=>
{
     return  await usersDBDAL.updateUserPwd(userid,obj.password);
    
}
//this.findUserIdForUserName("anna");