import React from 'react'
import logo from "../images/Untitled.png"
import './open.css'
import axios from 'axios'
import {useNavigate, Link} from 'react-router-dom'

export default function Openingpage() {

    const tok=localStorage.getItem("token");
    let stat,prof;
    console.log(tok);
  
    const jump=useNavigate();
    
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
              console.log(res.data)
    
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

    

    async function ques_click(e){
       
        const id=e.currentTarget.id;

        axios.post('http://localhost:5000/problem',{problemid : id})
          .then(res =>{
            jump("/code",{state : {id : res.data}})
        })
      }

  return (
    <>
    

    <div className="topnav">
        <a href="/">Home</a>
        <a class ="active" href="#">Problems</a>
        <a href="#" onClick={profclick}>Profile</a>
        <a href="/About">About</a>
        <a className="right rt" href="/login">{stat}</a>
        <a  className="rt" href="/register">Register</a>
      </div>
      




  <ul className="list-group mt-5 text-white">
  <li className="list-group-item d-flex justify-content-between align-content-center">

      <div className="d-flex flex-row hoverit"  id="0" onClick={ques_click}>
          <img src="https://img.icons8.com/color/100/000000/folder-invoices.png" width="40" />
          <div className="ml-2">
              <h6 className="mb-0">Binary Search </h6>
              <div className="about">
                  
              </div>
          </div>
      </div>
      
  </li>

  <li className="list-group-item d-flex justify-content-between align-content-center">

      <div className="d-flex flex-row hoverit"  id="1" onClick={ques_click}>
          <img src="https://img.icons8.com/color/100/000000/folder-invoices.png" width="40" />
          <div className="ml-2">
              <h6 className="mb-0">Number Theory</h6>
              <div className="about">
                 
              </div>
          </div>
      </div>
      
  </li>

  <li className="list-group-item d-flex justify-content-between align-content-center">

      <div className="d-flex flex-row hoverit" id="2" onClick={ques_click}>
          <img src="https://img.icons8.com/color/100/000000/folder-invoices.png" width="40" />
          <div className="ml-2">
              <h6 className="mb-0">Graphs and Trees</h6>
              <div className="about">

              </div>
          </div>
      </div>
     

  </li>

  <li className="list-group-item d-flex justify-content-between align-content-center">

      <div className="d-flex flex-row hoverit" id="3" onClick={ques_click}>
          <img src="https://img.icons8.com/color/100/000000/folder-invoices.png" width="40" />
          <div className="ml-2">
              <h6 className="mb-0">Greedy</h6>
              <div className="about">
                  
              </div>
          </div>
      </div>
     

  </li>

  <li className="list-group-item d-flex justify-content-between align-content-center">

      <div className="d-flex flex-row hoverit" id="4" onClick={ques_click}>
          <img src="https://img.icons8.com/color/100/000000/folder-invoices.png" width="40" />
          <div className="ml-2">
              <h6 className="mb-0">DP</h6>
              <div className="about">
                  
              </div>
          </div>
      </div>

  </li>


  
  
</ul>

    

    </>
  )
}
