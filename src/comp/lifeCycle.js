import React from "react";
class LifeCycleDemo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            counter: 0,
        };
        console.log("Constructor:Component is being created");
    }
    componentDidMount(){
        console.log("ComponentDidMount:Componen mounted");

    }
    componentDidUpdate(prevProps,prevState){
        console.log("ComponentDidUpdate:Component updated");
        console.log("Previous State:", prevState);
        console.log("Current State:",this.state);
    }
    componentWillUnmount(){
        console.log("ComponentWillUnmount:Component will unmount");
    }
     incrementCounter=() =>{
        this.setState((prevState) =>({
            counter:prevState.counter+1,
        }));
     };

     render(){
        console.log("Render: Component is rendering");
        return (    
            <div>
                <h1>React  LifeCycleDemo</h1>
                <p>Counter: {this.state.counter}</p>
                <button onClick={this.incrementCounter}>Increment Counter</button>
            </div> 
            );
     }

}
export default LifeCycleDemo;