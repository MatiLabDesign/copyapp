import { useState } from 'react'
import './App.css'
import { NavBar } from './components/Header/NavBar/NavBar'
import { SideBar } from './components/Main/SideBar/SideBar'
import { PrincipalMain } from './components/Main/PrincipalMain/PrincipalMain';
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/UpBar/Header'
// import Acomponent from './components/pruebas/Acomponent';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <div className="header">
      <Header/>
      <NavBar/>
      </div>
      <div className="container-main">
        <SideBar/>
        <PrincipalMain/>
      </div>
      <div className="container-footer">
      <Footer/>
      </div>

      {/* <Acomponent/> */}
      
    </div>
  )
}

export default App
