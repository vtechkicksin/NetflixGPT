import { createBrowserRouter  } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Login from './Login.jsx'
import Browse from './Browse.jsx'
import { useEffect } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice.js';
import { auth } from '../utils/firebase.js'

const Body = () => {
  const dispatch = useDispatch();
  const approuter = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/browse", element: <Browse /> },
  ])

  useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
      } else {
        dispatch(removeUser());
      }
    });

    return () => unsubscribe();
  },[dispatch])

  return (
    <div>
       <RouterProvider router={approuter}/>
    </div>
  )
}

export default Body