import React, {Component} from "react";
import "./ClassComponent.css";


class ClassComponent extends Component{

    state = {
        time: new Date().toLocaleTimeString()
    }

    componentDidMount(){
        setInterval(
            () => this.setState({time : new Date().toLocaleTimeString()}),
            1000
        )
    }



    render(){
        return(
            <div>
                <h2>
                    Using Class Component
                </h2>
                <h1>
                    {this.state.time}
                </h1>
            </div>
        );
    }

}

export default ClassComponent;