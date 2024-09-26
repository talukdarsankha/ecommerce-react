

import { Button, Grid, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserProfile, register } from '../../../Redux/Auth/Action';

function Register() {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const token = localStorage.getItem("jwt");

  const {auth} = useSelector(store=>store);

  const handleSubmit=(e)=>{
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const userData={
      firstName:data.get("firstName"),
      lastName:data.get("lastName"),
      email:data.get("email"),
      password:data.get("password") 
    }
    console.log(userData);

    dispatch(register(userData));
  }


  useEffect(()=>{
    if(token){
      console.log("register");
      dispatch(getUserProfile(token));
    }
  },[token,auth.jwt])
 

  return (
    <div>
      <form  onSubmit={handleSubmit} >
         <Grid container spacing={3} >
            <Grid item xs={12} md={6} >
                <TextField 
                required
                id='firstName'
                name='firstName'
                label="First Name" 
                fullWidth
                autoComplete='given-name'/> 
            </Grid>

            <Grid item xs={12} md={6} >
                <TextField
                 required
                id='lastName'
                name='lastName'
                label="Last Name" 
                fullWidth
                autoComplete='given-name'/> 
            </Grid>

            <Grid item xs={12}>
                <TextField 
                required
                id='email'
                name='email'
                label="Email" 
                fullWidth
                type='email'
                autoComplete='email'/> 
            </Grid>

            <Grid item xs={12}>
                <TextField 
                required
                id='password'
                name='password'
                label="Password" 
                fullWidth
                type='password'
                autoComplete='password'/> 
            </Grid>

            <Grid item xs={12}>
                <Button className='bg-[#9155fD w-full' type='submit' variant='contained' size='large' sx={{padding:".8rem,0"}}>
                  Register
                </Button>
            </Grid>
         </Grid>
      </form>

      <div className='flex justify-center items-center'>
        <div className='flex justify-center items-center p-2'>
           <p>if you already have an account ?</p>
           <Button onClick={()=>navigate("/login")} className='ml-5' size='small'>Login</Button>
        </div>
      </div>
    </div>
  )
}

export default Register


