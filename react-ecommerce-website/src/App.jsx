import { useState } from 'react'
import Navbar from './components/Navbar'
import SiteRoutes from './SiteRoutes'



function App() {
  const [user,setUser] = useState(null)

  const handleLogin = () => {
    const user = {id:1,name:"Emir"}
  }
  return (
    <>
      <Navbar />

      <div className="container">
        <div className='col-sm-12'>
          <SiteRoutes/>
        </div>
      </div>
    </>
  )
}

export default App
