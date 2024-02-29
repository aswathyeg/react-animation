
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

import ChallengePage from './components/pages/Challenge.jsx'
import WelcomePage from './components/pages/Welcome.jsx'
const router=createBrowserRouter([
  {
    path:'/',element:<WelcomePage/>,

  },
  {
    path:'/challenges',element:<ChallengePage/>
  }
])
function App() {
 

  return (
   <RouterProvider router={router}/>
  )
}

export default App
