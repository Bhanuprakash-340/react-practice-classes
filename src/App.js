import React from "react";
import './App.css'
import Counter from "./components/Counter";
import UserInput from "./components/UserInput";
import ToggleMessage from "./components/ToggleMessage";
import ArrayComponent from "./components/ArrayComponent";
import StudentDetails from "./components/StudentDetails";


const App = () =>{
    return(
       <div className="app-component"> 
          <Counter/>
          <UserInput/>
          <ToggleMessage/>
          <ArrayComponent/>
          <StudentDetails/>
       </div>
)
}

export default App