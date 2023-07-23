import './codearea.css'
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate, useLocation} from 'react-router-dom'
import axios from 'axios'
let lan="py";


function Landing() {


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


    const jump=useNavigate();
    const loca = useLocation();
    const token=localStorage.getItem("token");
    const id=loca.state.id;
  console.log('impotrtr',id);

    const [cd , setCd] = useState(
        {
            lang : lan,
            code : id.initcode[lan],
            problemid : id.problemid,
            token :token
        }
    );

    
  
    const handlelangChange = (e) => {
      const {name , value} =e.target
      lan=value;
      console.log("langwala",lan)
      console.log(e.target.name)
      setCd({
          [name] : value,
          code: id.initcode[lan],
          problemid : id.problemid,
          token : token
      })
    };
    

    const handleChange= e => {
        const {name , value} =e.target
        console.log("chang krne wala event",lan);
        setCd({
            lang : lan,
            [name]:value,
            problemid : id.problemid,
            token : token
        })
    }


    async function submit_now(e)
    {
        const {lang,code,problemid,token} = cd
        console.log(cd);
        console.log("now",cd)
        try
        {
          await axios.post('http://localhost:5000/compiler',cd)
          .then(res =>{
            alert(res.data)
            if(res.data==="login kro bsdk")
            {
              jump('/login');
            }   
        })
      }
      catch(e)
      {
        console.log(e);
      }
    }

  return (
    <> 
    <div className="App">
        
    <div className="topnav">
        <a href="/">Home</a>
        <a class ="active" href="#">Problems</a>
        <a href="#" onClick={profclick}>Profile</a>
        <a href="/About">About</a>
        <a className="right rt" href="/login">{stat}</a>
        <a  className="rt" href="/register">Register</a>
      </div>

      <div className="container">

     





      <main className="input">



      <div>
    <form>
        <select value={cd.lang} name="lang" onChange={handlelangChange}>
            <option value="py">Python</option>
            <option value="cpp">C++</option>
            <option value="java">Java</option>
        </select>
    </form>
</div>


        <svg className="icon" viewBox="0 0 100 60" width="75" height="45">
          <use href="#keyboard"></use>
        </svg>
        <textarea name="code" value={cd.code} onChange={handleChange}></textarea>
        <div className="controls">
          <button onClick={submit_now}>Submit</button>
          <button>Run</button>
        </div>
      </main>
    </div>

    <div className="question">
      <main className="input" >
        
        <h1 style={{color : "red"}}>Problem</h1>
        <pre>{id.problem_statement}</pre>
        <h3 style={{color : "red"}}>Sample Input</h3>
        <pre>{id.Sample_Input}</pre>
        <h3 style={{color : "red"}}>Output Input</h3>
        <pre>{id.Sample_Output}</pre>
        <h4 style={{color : "red"}}>Constraints</h4>
        <pre>{id.constraints}</pre>

      </main>
    </div>
    </div>
    </>
  );
}

export default Landing;
