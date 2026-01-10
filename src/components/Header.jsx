import React, { useEffect } from 'react'
import { auth } from '../utils/firebase'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice.js';
import { NETFLIXLOGO, USER_AVTAR } from '../utils/constans.js';


const Header = ({login}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const signOutUser = ()=>{
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      // An error happened.
    });
  }
    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate('/browse')
      } else {
        dispatch(removeUser());
        navigate('/')
      }
    });

    return () => unsubscribe();
  },[])
  return (
    <div className=' px-8 w-full py-2 bg-gradient-to-b from-black z-10 flex justify-between' 
    style={{ 
      position: 'absolute' 
      }}>
      <img className='w-44'
      src={NETFLIXLOGO}
      alt='logo'/>
      {!login &&
        <div className='flex items-center gap-2 text-white'>
          <img className='w-8 h-8'
          src={USER_AVTAR}
          alt='sign out'/>
          <button onClick={signOutUser}>(Sign Out)</button>
        </div>
      }
      
    </div>
  )
}

export default Header