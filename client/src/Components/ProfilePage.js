import React from 'react'
import batch from '../images/batch.jpeg'
import './testcssfile/profilepage.css'
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import {useNavigate,Link} from "react-router-dom"

export default function ProfilePage(props) {
  return (
    <div>
      {console.log("hello",props.info.Name)}

<div className="container d-flex justify-content-center align-items-center">
             
             <div className="card">
       
              <div className="upper">
       
                <img src={batch} className="img-fluid"/>
                
              </div>
       
              <div className="user text-center">
       
                <div className="profile">
       
                  <img src="https://i.imgur.com/JgYD2nQ.jpg" className="rounded-circle" width="80"/>
                  
                </div>
       
              </div>
       
       
              <div className="mt-5 text-center">
       
                <h4 className="mb-0">{props.info.Name}</h4>
                <span className="text-muted d-block mb-2">{props.info.email}</span>
       
                <button className="btn btn-primary btn-sm follow">Log Out</button>
       
       
                <div className="d-flex justify-content-between align-items-center mt-4 px-4">
       
                  <div className="stats">
                    <h6 className="mb-0">Questions Solved</h6>
                    <span>500</span>
       
                  </div>
       
       
                  <div className="stats">
                    <h6 className="mb-0">Projects</h6>
                    <span>142</span>
       
                  </div>
       
       
                  <div className="stats">
                    <h6 className="mb-0">Rank</h6>
                    <span>1</span>
       
                  </div>
                  
                </div>
                
              </div>
               
             </div>
       
           </div>
       


    </div>
  )
}
