import './App.css'
import Openingpage from './Components/Openingpage.js'
import Problem from './Components/Problem.js'
import ProfilePage from './Components/ProfilePage.js'
import Login from './Components/loginpage.js'
import CodeArea from './Components/Codearea.js'
//import Landing from './Components/Landing.js'
 import Register from './Components/register.js'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Profile from './Components/Profile.js'
import About from './Components/About.js'

function App() {
  return (
    <>
    
      <Router>
        <Routes>
          <Route path="/" element={<Openingpage/>}/>
          <Route path="/Problem" element={<Problem/>}/>


          <Route path="/Profile" element={<Profile/>}/>
          <Route path="/About" element={<About/>}/>

          <Route path="/login" element={<Login/>}/>
          {/* <Route path="/Landing" element={<Landing/>}/>  */}
          <Route path="/Code" element={<CodeArea/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </Router>  
    </>
  );
}

export default App;
