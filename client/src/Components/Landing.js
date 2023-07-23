import './lists.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import ProfilePage from './ProfilePage';
import {useNavigate,useLocation} from "react-router-dom"

function Landing() {

    const jump=useNavigate();
    const loca = useLocation();

    async function ques_click(e){
       
        const id=e.currentTarget.id;

        axios.post('http://localhost:5000/problem',{problemid : id})
          .then(res =>{
            jump("/code",{state : {id : res.data}})
        })
      }

  return (
    <div classNameName="App">


        <ProfilePage info={loca.state.id.info}/>

        <div className="container d-flex justify-content-center">

<ul className="list-group mt-5 text-white">
  <li className="list-group-item d-flex justify-content-between align-content-center">

      <div className="d-flex flex-row"  id="0" onClick={ques_click}>
          <img src="https://img.icons8.com/color/100/000000/folder-invoices.png" width="40" />
          <div className="ml-2">
              <h6 className="mb-0">Binary Search </h6>
              <div className="about">
                  
              </div>
          </div>
      </div>
      
  </li>

  <li className="list-group-item d-flex justify-content-between align-content-center">

      <div className="d-flex flex-row" id="1" onClick={ques_click}>
          <img src="https://img.icons8.com/color/100/000000/folder-invoices.png" width="40" />
          <div className="ml-2">
              <h6 className="mb-0">Number Theory</h6>
              <div className="about">
                 
              </div>
          </div>
      </div>
      
  </li>

  <li className="list-group-item d-flex justify-content-between align-content-center">

      <div className="d-flex flex-row" id="2" onClick={ques_click}>
          <img src="https://img.icons8.com/color/100/000000/folder-invoices.png" width="40" />
          <div className="ml-2">
              <h6 className="mb-0">Graphs and Trees</h6>
              <div className="about">

              </div>
          </div>
      </div>
     

  </li>

  <li className="list-group-item d-flex justify-content-between align-content-center">

      <div className="d-flex flex-row" id="3" onClick={ques_click}>
          <img src="https://img.icons8.com/color/100/000000/folder-invoices.png" width="40" />
          <div className="ml-2">
              <h6 className="mb-0">Greedy</h6>
              <div className="about">
                  
              </div>
          </div>
      </div>
     

  </li>

  <li className="list-group-item d-flex justify-content-between align-content-center">

      <div className="d-flex flex-row" id="4" onClick={ques_click}>
          <img src="https://img.icons8.com/color/100/000000/folder-invoices.png" width="40" />
          <div className="ml-2">
              <h6 className="mb-0">DP</h6>
              <div className="about">
                  
              </div>
          </div>
      </div>

  </li>


  
  
</ul>

</div>


    </div>
  );
}


export default Landing;