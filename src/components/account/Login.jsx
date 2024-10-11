import { Component, useState } from 'react';
import React from "react";
import { Box, TextField, Button, styled, Typography} from "@mui/material";

function Login() {
  let imageURL =
    "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";

  const [account , toggleAccount] = useState('login');
  
  const Component = styled(Box)`
    width: 400px;
    margin: auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
  `;
  const Image = styled("img")({
    width: 100,
    display: "flex",
    margin: "auto",
    padding: "50px 0 0",
  });
  const Wrapper = styled(Box)`
   padding: 25px 35px;
   display: flex;
   flex-direction : column;
   & > div , & > button, & > p{
   margin-top : 20px}
  `
  
  const Loginbutton = styled(Button)`
    text-transform : none;
    background: #fb641b;
    height: 48px;
    border-radius : 2px;
  `
  const Signupbutton =styled(Button)`
    text-transform : none;
    background: #fff;
    color: #2B74F0;
    height: 48px;
    border-radius : 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
  `
  const Text = styled(Typography)`
  color : #878787;
  font-size: 14px;
  `

   const toggleSignup = () => {
    account === 'signup' ? toggleAccount('login'): toggleAccount('signup')
   }
  
  
  return (
    <Component>
      <Box>
        <Image src={imageURL} alt="login" />
        {
            account === 'login' ? 
        
            <Wrapper>
                   <TextField variant="standard" label="Enter username"></TextField>
                   <TextField variant="standard" label="Enter password"></TextField>
                   <Loginbutton variant="contained">Login</Loginbutton>
                    <Text style={ {textAlign : 'center'} } >OR</Text>
                   <Signupbutton onClick={()=> toggleSignup ()} >Create an account?</Signupbutton>
           </Wrapper>
            :
        <Wrapper>
          <TextField variant="standard" label="Enter Fullname"></TextField>
          <TextField variant="standard" label="Enter Username"></TextField>
          <TextField variant="standard" label="Enter Password"></TextField>
          <Signupbutton variant="contained">Signup</Signupbutton>
           <Text style={ {textAlign : 'center'} } >OR</Text>
          <Loginbutton onClick={()=> toggleSignup()} variant="contained" >Already have an account</Loginbutton>
        </Wrapper>
}
      </Box>
    </Component>
  );
}

export default Login;
