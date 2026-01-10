import React from 'react'
import Header from './Header'
import { useState,useRef } from 'react'
import { checkValidData, toastObj } from '../utils/validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { USER_AVTAR } from '../utils/constans';
import { useDispatch } from 'react-redux';
import { addUser,  } from '../utils/userSlice.js';

const Login = () => {
  const [signUp, setSignUp]=useState(false);
  const [errMessage, setErrMessage] = useState(null)
  const email = useRef(null)
  const password = useRef(null)
  const name = useRef(null)
  const dispatch = useDispatch()
  const handleSubmit = ()=>{
    const message = checkValidData(email.current.value,password.current.value)
    setErrMessage(message)
    toast(message, toastObj);
    
    if(message) return ;

    if(signUp) {
      createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
      .then((userCredential) => { 
        const user = userCredential.user;
        console.log("user???>>>>>>>",user)
         updateProfile(user, {
          displayName: name.current.value,
          photoURL: USER_AVTAR
        }).then(() => {
          const { uid , email , displayName , photoURL} = auth.userCredential
          dispatch( 
            addUser({
              uid:uid , email:email , displayName:displayName , photoURL:photoURL
            })
          );
        }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode+':-'+errorMessage)
          toast(errorCode+':-'+errorMessage, toastObj);
        });
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrMessage(errorCode+':-'+errorMessage)
        toast(errorCode+':-'+errorMessage, toastObj);
    });
    } else {
          signInWithEmailAndPassword(auth, email.current.value,password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrMessage(errorCode+':-'+errorMessage)
        toast(errorCode+':-'+errorMessage)
      });
    }
  }
  return (
    <div>
      <Header login={'loginPage'}/>
      <div className='absolute'>
         <img src='https://assets.nflxext.com/ffe/siteui/vlv3/8e4a7625-f942-48f5-a9b0-d470b772bc8c/web/IN-en-20251215-TRIFECTA-perspective_a8575e53-99ab-4f16-a2d6-c037acaf12a6_large.jpg'
            alt='logo'/>
      </div>
      <form className='w-3/12 absolute p-12 bg-black/75 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'
        onSubmit={(e)=>e.preventDefault()}>
        <h1>{signUp ? "Sign Up" : "Sign In"}</h1>
        {signUp && <input ref={name} type='text' placeholder='Full Name' className='p-4 my-6 w-full bg-gray-700 rounded-lg'/> }
        <input ref={email} type='text' placeholder='Email Address' className='p-4 my-6 w-full bg-gray-700 rounded-lg'/>
        <input ref={password} type='password' placeholder='Password' className='p-4 my-6 w-full bg-gray-700 rounded-lg'/>
        <button className='p-4 my-6 bg-red-400 w-full rounded-lg' onClick={handleSubmit}>{signUp ? "Sign Up" : "Sign In"}</button>
        <p className='text-red-700'>{errMessage}</p>
        <p className='py-4 cursor-pointer' onClick={()=>setSignUp(prev=>!prev)}> {!signUp ? "New to Netflix ? Sign Up" : "Already registered ? Sign In Now"}</p>
      </form>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
          />
    </div>
  )
}

export default Login