import React from "react";
import Input from "./input";
import "./styles.css";


function Todo(){

    return(
        <div className="body">
             <div className="main">
                <h1>To-Do</h1>
                <Input id="toDoItem" />
            </div>
        </div>
       
        
    )
}

export default Todo;