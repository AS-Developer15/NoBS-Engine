import 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import { Route, Routes} from "react-router-dom"
import HeaderComp from './Components/HeaderComponent'
import SSearch from './Components/SSearch'
import Features from './Components/Features'
import Information from './Components/Information'
import HomePage from './Components/HomePage'
import Translate from './Components/Translate'
import FooterComp from './Components/FooterComp'
import CodeGen from './Components/CodeGenerator'

function App() {
  return (
    <>
<HeaderComp/>
     <div className="appbody">

       {/* Routes */}
      <Routes>
      <Route path='/SafeSearch'   element={<SSearch/>}/>
      <Route path='/Features'     element={<Features/>}/>
      <Route path='/Info'     element={<Information/>} />
      <Route path='/'     element={<HomePage/>} />
      <Route path='/Translate' element={<Translate/>}/>
      <Route path='/CodeGenerator' element={<CodeGen/>}/>
    </Routes> 
     </div>

    <center>

      <FooterComp/>
    </center>
    </> )
}

export default App