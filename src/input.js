import React from "react";
// import "./styles.css";

const item = (x) => {
    return(
            <li className="todo-li">{x}</li>
    )
}

class Input extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            toDoItem: [],
        };
        
        this.handleClick.bind(this.handleClick);

    }

    handleClick = () =>{
        var toDoText = document.getElementById(this.props.id);
        this.setState({toDoItem: [...this.state.toDoItem, item(toDoText.value)]});
        toDoText.innerText="";

    }
    
    
    render(){
        console.log(this.state.toDoItem);
        return(
            <div className="toDomain">
                <input type="text" placeholder="To-Do" id={this.props.id} />
                <button onClick={this.handleClick}>Add To-do</button>
                <ul>
                    {this.state.toDoItem}
                </ul>
               
            </div>
        )
    }
}

export default Input;