
import React, {useState} from "react";
import img from "./images/e6d010182cc29c9d4801558a8510d529.png"
import { Link, useNavigate} from "react-router-dom";


const Login = ()=>{

const navigate = useNavigate();

    const [phone, setPhone] = useState("");

    const phon = (e) =>{
        setPhone(e.target.value);

    }


    const [password, setPassword] = useState("")
    
    const pass = (e) =>{
        setPassword(e.target.value)
    }

 const HandleSubmit = (e) =>{
    e.preventDefault();

    if(!phone){
        alert("input number")
    }

    if(!password){
        alert("input password")
    }

    
    

    setPhone("")
    setPassword("")

 }

    return(
       
        <div className="login">
            <div className="head">
            <span className="imgspan"><img src={img} className="img"/></span>
            <h2>Login</h2>

            </div>
            
            <form  className="fom" onSubmit={HandleSubmit}>

                <div className="labelphone">
                <label for="phone"><b>PHONE</b></label>

                <div className="phoneinput">
                <input type="number" placeholder="Please enter account number" value={phone} onChange={phon}/>
                 </div>

                 </div>

                 <div className="labelpassword">
                <label for="password"><b>PASSWORD</b></label>

                <div className="passwordinput">
                <input type="password" placeholder="Please password" value={password} onChange={pass} />
                </div>

                </div>

                <button type="submit" className="loginbtn">Login</button>

                <div className="footer">
                    <Link to="/signup" style={{color:"gray", textDecoration:"none"}}>
                       <span>Signup</span> 
                    </Link>

                    
                    <Link to="/forget" style={{color:"gray", textDecoration:"none"}}>
                       <span>Forget</span> 
                    </Link>



                </div>
            </form>

           
              
               
        </div>


    

    );


}

export default Login;