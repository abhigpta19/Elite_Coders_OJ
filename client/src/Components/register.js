import './login.css'
import logo from '../images/Untitled.png'
import img from '../images/display.jpeg'
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import {useNavigate,Link} from "react-router-dom"

function Register() {

  const jump=useNavigate();
    const [user , setUser] = useState({
        Name : "",
        email : "",
        password : "",
        cnfpassword : ""
    });

    const handleChange= e => {
        const {name , value} =e.target
        
        setUser({
            ...user,
            [name]:value
        })
    }

    async function register_now(e){
      const {Name,email,password,cnfpassword} = user
      try
      {
        if(password===cnfpassword)
        await axios.post('http://localhost:5000/register',user);
        else
        alert("haa main galat")
      }
      catch(e)
      {
        console.log(e);
      }
    }

  return (
    <div classNameName="App">

      <section className="vh-100">
  <div>
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">
        <div className="card" >
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                alt="login form" className="img-fluid"/>
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">

                <form>

                <div className="d-flex align-items-center mb-3 pb-1">
                    <i className="fas-fa-cubes-fa-2x-me-3" ></i>
                    <span className="h1 fw-bold mb-0"><img src={logo} height="55px" alt='logo'/></span>
                    <span><h2 style = {{margin : "10px"}}>Elite Coders</h2></span>
                    
                  </div>

                  <h5 className="fw-normal-mb-3-pb-3">Register Yourself</h5>

                  <div className="form-outline mb-4">
                    <input type="text" id="nameform2Example17" className="form-control form-control-lg" name="Name" value={user.Name} onChange={handleChange}/>
                    <label className="form-label" for="nameform2Example17" >Name</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="email" id="form2Example17" className="form-control form-control-lg"  name="email" value={user.email} onChange={handleChange}/>
                    <label className="form-label" for="form2Example17">Email address</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="password" id="form2Example27" className="form-control form-control-lg"  name="password" value={user.password} onChange={handleChange}/>
                    <label className="form-label" htmlFor="form2Example27">Password</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="password" id="confirmform2Example27" className="form-control form-control-lg" name="cnfpassword" value={user.cnfpassword} onChange={handleChange}/>
                    <label className="form-label" htmlFor="confirmform2Example27" >Confirm Password</label>
                  </div>

                  <div className="pt-1 mb-4">
                    <button className="btn btn-dark btn-lg btn-block" type="button"  onClick={register_now}>Register</button>
                  </div>

                
                  <p className="mb-5-pb-lg-2">Already have an account? <a href="#"  className="linksudhar"  onClick={()=>jump("/")}>Log In</a></p>
                  <a href="#!" className="small text-muted">Terms of use.</a>
                  <a href="#!" className="small text-muted">Privacy policy</a>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}

export default Register;
