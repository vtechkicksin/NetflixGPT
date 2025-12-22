import React from 'react'
import Header from './Header'
import { useState } from 'react'
const Login = () => {
  const [signUp, setSignUp]=useState(false);
  return (
    <div>
      <Header />
      <div className='absolute'>
         <img src='https://assets.nflxext.com/ffe/siteui/vlv3/8e4a7625-f942-48f5-a9b0-d470b772bc8c/web/IN-en-20251215-TRIFECTA-perspective_a8575e53-99ab-4f16-a2d6-c037acaf12a6_large.jpg'
            alt='logo'/>
      </div>
      <form className='w-3/12 absolute p-12 bg-black/75 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1>{signUp ? "Sign Up" : "Sign In"}</h1>
        {signUp && <input type='text' placeholder='Full Name' className='p-4 my-6 w-full bg-gray-700 rounded-lg'/> }
        <input type='text' placeholder='Email Address' className='p-4 my-6 w-full bg-gray-700 rounded-lg'/>
        <input type='password' placeholder='Password' className='p-4 my-6 w-full bg-gray-700 rounded-lg'/>
        <button className='p-4 my-6 bg-red-400 w-full rounded-lg'>{signUp ? "Sign Up" : "Sign In"}</button>
        <p className='py-4 cursor-pointer' onClick={()=>setSignUp(prev=>!prev)}> {!signUp ? "New to Netflix ? Sign Up" : "Already registered ? Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login