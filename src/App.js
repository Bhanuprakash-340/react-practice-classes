import React from "react";
import './App.css'
import ClassComponent from "./components/ClassComponent";
import ParentComponent from "./components/ParentComponent";


const App = () =>{
    return(
       <div className="main-container"> 
           <ClassComponent/>
           <ParentComponent/>
       </div>
)
}

export default App