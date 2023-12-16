import React, {Component} from "react";

class ClassStateComponent extends Component{
    constructor(){
        super();
        this.state={
            count:100
        }
    }

    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAdd}>Increment</button>
                <button>Decrement</button>
                <button>Set Zero</button>
            </div>
        )
    }


}

export default ClassStateComponent