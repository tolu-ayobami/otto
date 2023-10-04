
import React, {useState} from "react";
import img from "./images/e6d010182cc29c9d4801558a8510d529.png"
import { FaArrowLeft} from "react-icons/fa";


import { Link, useNavigate} from "react-router-dom";



const Forget = () =>{




    const [phone, setPhone] = useState("");

    const phon = (e) =>{
        setPhone(e.target.value);

    }


    
    const[code, setCode] = useState("")

    const cod = (e) =>{
       setCode(e.target.value)
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
    
    if(!code){
        alert("input code")
    }

    setPhone("")
    setPassword("")


 }
    return(
        <div className="all">
            <div className="arrow">
            <Link to="/" style={{ textDecoration:"none" , color:"red"}}>
                <span><FaArrowLeft/></span>
                </Link>
            </div>

        <div className="forget">
         <div className="head">
            <span className="imgspan"><img src={img} className="img"/></span>
            <h2>Forget</h2>

            </div>


            
            <form  className="fom" onSubmit={HandleSubmit}>

                <div className="labelphone">
                <label for="phone"><b>PHONE</b></label>

                <div className="phoneinput">
                    <span><b>+234</b></span>
                <input type="number" placeholder="Please enter account number" value={phone} onChange={phon}/>
                 </div>

                 </div>

                 
                 <div className="invitationcode">
                <label for="password"><b>VERIFICATION CODE</b></label>

                <div className="invitationinput">
                <input type="text" placeholder="Please enter inviation code" value={code} onChange={cod} />
                <span className="send"><b>send</b></span>
                </div>

                </div>

                 <div className="labelpassword">
                <label for="password"><b>PASSWORD</b></label>

                <div className="passwordinput">
                <input type="password" placeholder="Please password"  value={password} onChange={pass} />
                </div>

                </div>

                <button type="submit" className="loginbtn">Confirm</button>

            </form>
            
</div>

        </div>
    );
}
export default Forget;