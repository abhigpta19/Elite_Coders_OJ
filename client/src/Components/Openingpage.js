import React from 'react'
import logo from "../images/Untitled.png"
import './open.css'
import {useNavigate, Link} from 'react-router-dom'
import axios from 'axios'

export default function Openingpage() {
  // localStorage.removeItem("token");


  const jump=useNavigate();



  const tok=localStorage.getItem("token");

  let stat,prof;
  console.log(tok);

  
  if(tok)
  {
    prof="/Profile"
    stat="Logout";
  }
  else
  {
    prof="/login"
    stat="Login"
  }
  function profclick(){


    axios.post('http://localhost:5000/details',{token : tok})
        .then(res =>{
          console.log("tiririr",res.data)

          if(tok)
          {
            jump("/Profile",{state : {id : res.data}});
          }
          else 
          {
            alert("please login");
            jump("/login")
          }
        })
}
    

  return (
    <>

    <div className="topnav">
        <a class ="active" href="/">Home</a>
        <a href="/Problem">Problems</a>
        <a href="#" onClick={profclick}>Profile</a>
        <a href="/About">About</a>
        <a className="right rt" href="/login">{stat}</a>
        <a  className="rt" href="/register">Register</a>
      </div>
      
      
  <div className="cunt">
    <h1>Elite Coders</h1>
    <img src={logo} alt=""/>

    <h1>Welcome to our Coding Website</h1>
    <p>Learn coding from industry experts.</p>
    <a href="#" className="button">Get Started</a>
  </div>


    

    </>
  )
}
