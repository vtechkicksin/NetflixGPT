import React from 'react'
import { auth } from '../utils/firebase'
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
const Header = ({login}) => {
  const navigate = useNavigate();
  const signOutUser = ()=>{
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className=' px-8 w-full py-2 bg-gradient-to-b from-black z-10 flex justify-between' 
    style={{ 
      position: 'absolute' 
      }}>
      <img className='w-44'
      src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
      alt='logo'/>
      {!login &&
        <div className='flex items-center gap-2 text-white'>
          <img className='w-8 h-8'
          src='https://img.icons8.com/?size=100&id=5HW1YsFkzHio&format=png&color=000000'
          alt='sign out'/>
          <button onClick={signOutUser}>(Sign Out)</button>
        </div>
      }
      
    </div>
  )
}

export default Header