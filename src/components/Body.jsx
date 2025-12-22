import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Login from './Login.jsx'
import Browse from './Browse.jsx'

const Body = () => {
  const approuter = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/browse", element: <Browse /> },
  ])
  return (
    <div>
       <RouterProvider router={approuter}/>
    </div>
  )
}

export default Body