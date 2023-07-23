import React from 'react';
import {useNavigate, Link} from 'react-router-dom'
import axios from 'axios'

const About = () => {

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
    stat="Logon"
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
            alert("login kro bsdk");
            jump("/login")
          }
        })
}
  return (
    <>

<div className="topnav">
        <a href="/">Home</a>
        <a href="/Problem">Problems</a>
        <a href="#" onClick={profclick}>Profile</a>
        <a class ="active" href="/About">About</a>
        <a className="right rt" href="/login">{stat}</a>
        <a  className="rt" href="/register">Register</a>
      </div>

      <header style={{ backgroundColor: '#4BE34670', color: 'black', textAlign: 'center', padding: '20px' }}>
        <h1>Elite Coders</h1>

      </header>
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
        <h1>About Us</h1>
        <p>Welcome to Elite Coders! We are a team of passionate developers who love to code and share knowledge with others. Our mission is to make coding accessible and enjoyable for everyone.</p>

        <div className="team" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div className="team-member" style={{ flexBasis: '48%', marginBottom: '20px', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
            <img src="team_member1.jpg" alt="Team Member 1" style={{ maxWidth: '100%', borderRadius: '50%' }} />
            <h2>John Doe</h2>
            <p>Frontend Developer</p>
          </div>
          <div className="team-member" style={{ flexBasis: '48%', marginBottom: '20px', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
            <img src="team_member2.jpg" alt="Team Member 2" style={{ maxWidth: '100%', borderRadius: '50%' }} />
            <h2>Jane Smith</h2>
            <p>Backend Developer</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
