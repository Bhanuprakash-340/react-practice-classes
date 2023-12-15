import React from "react";
import ChildComponent from "../ChildComponent";

const ParentComponent = () =>{

   
    return (
        <div>
            Parent Component
            <ChildComponent name="sai" age="24" lastName="krishna" />
        </div>
    )
}

export default ParentComponent