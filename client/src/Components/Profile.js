// import './Profile.css'
// import prof from '../images/Untitled.png'
// import React from 'react'

// export default function About() {

//   const tok=localStorage.getItem("token");
//   let stat;
//   console.log(tok);
//   if(tok)
//   stat="Log out";
//   else
//   stat="Log In"

//   return (
//     <div className="yhakadiv">

// <div className="topnav">
//         <a href="/">Home</a>
//         <a href="/Problem">Problems</a>
//         <a class ="active" href="/Profile">Profile</a>
//         <a href="/About">About</a>
//         <a className="right rt" href="/login">{stat}</a>
//         <a  className="rt" href="/register">Register</a>
//       </div>



// <header>
//     <h1 className="badihead" >Elite Coder</h1>
//   </header>
//   <main className = "maincss">
//     <img src={prof} alt="Profile Picture"/>
//     <h1 className="badihead" >Abhishek Gupta</h1>
//     <p>
//         <div className="yhakadiv">Bakend</div>
//         <div className="yhakadiv">DS</div>
//         <div className="yhakadiv">CP</div>
//     </p>

//     <div className="yhakadiv" class="skills">
//       <h2>Skills</h2>
//       <ul>
//         <li>HTML</li>
//         <li>CSS</li>
//         <li>JavaScript</li>
//         <li>React</li>
//         <li>Python</li>
//       </ul>
//     </div>
//   </main>

//     </div>
//   )
// }




import './Profile.css'
import prof from '../images/Untitled.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import ProfilePage from './ProfilePage';
import {useNavigate,useLocation} from "react-router-dom"

function Profile() {

  const jump=useNavigate();
  const loca = useLocation();

  console.log("madarjaat",loca.state.id)
   
  
  const tok=localStorage.getItem("token");
  
  if(!tok)
  {
    alert("token nhi hai");
    jump("/");
  }
  


  return (
    <div className="yhakadiv">

<div className="topnav">
        <a href="/">Home</a>
        <a href="/Problem">Problems</a>
        <a class ="active" href="/Profile">Profile</a>
        <a href="/About">About</a>
      </div>



<header>
    <h1 className="badihead" >Elite Coder</h1>
  </header>
  <main className = "maincss">
    <img src={prof} alt="Profile Picture"/>
    <h1 className="badihead" >{loca.state.id.Name}</h1>
    <p>
        <div className="yhakadiv">Bakend</div>
        <div className="yhakadiv">DS</div>
        <div className="yhakadiv">CP</div>
    </p>

    <div className="yhakadiv" class="skills">
      <h2>Skills</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Python</li>
      </ul>
    </div>
  </main>

    </div>
  );
}


export default Profile;
