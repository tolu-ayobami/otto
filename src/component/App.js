import React, { useState } from "react";
import Login from "./login page";
import "./App.css";
import Dashboard from "./dashboard";
import Signup from "./signup"
import Forget from "./forget";
import{ Routes, Route } from "react-router-dom";

function App() {



return(

  <div className="section"> 

 
<Routes>
  <Route path="/" element={ <Login />}/>
  <Route path="/signup" element={  <Signup />}/>
  <Route path="/dashboard" element={ <Dashboard/>}/>
  <Route path="/forget" element={ <Forget/>}/>
</Routes>

 



  </div>
);


}
export default App; 