import React from "react";
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

const item = (x) => {
    return(
        <Card body bg="info" text="white" style={{ width: '18rem'}} className="m-2">{x}</Card>
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
                <Button variant="info" onClick={this.handleClick} className="m-2">Add To-do</Button>
                {this.state.toDoItem}
            </div>
        )
    }
}

export default Input;