import React from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentDetails from "./component/StudentDetails";

const App = () =>{
    return(
       <div className="app-component"> 
           <StudentDetails/>
       </div>
)
}

export default App