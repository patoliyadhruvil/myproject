import React from "react";

class Test extends React.Component{

    constructor(){

        super() 
        this.state =  {name : "Dhruvil Patel"};

    }

    componentDidMount(){

        console.log("Component Mounting...");

    }

    changeName(){

        this.setState({name : "Niraj Patel"})

    }

    render(){

        return(
            <div>
                <h1>Hello, {this.state.name}</h1>
                <button onClick={this.changeName.bind(this)}>
                    Clickkk
                </button>
            </div>

        )

    }

    componentDidUpdate(){

        console.log("Component Updating...");

    }

}
export default Test;