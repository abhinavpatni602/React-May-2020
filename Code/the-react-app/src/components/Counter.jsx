import React, { Component } from 'react';

class Counter extends Component{

    //immutatable
    state = {
        count: 5,
        message: "Hello"
    }

    constructor(props){
        var x;
        super(props);

        // ES6
        this.inc = this.inc.bind(this);
    }

    // bind or arrow fn
    inc(){
        console.log("inc...");
        //this.state.count++;
        const updatedCount = this.state.count + 1;
        //async
        this.setState({
            count:   updatedCount
        }, () => {
            console.log(this.state);
        });
    }

    //ES 7
    decr = () => {
        console.log("decr...");
        const updatedCount = this.state.count - 1;
        //async
        this.setState({
            count: updatedCount
        }, () => {
            console.log(this.state);
        });
    }

    change = (evt) => {

        //evt.persist();
        const value = evt.target.value;
        this.setState({
            count: value ? parseInt(value) : 0
        });
    }
    changeMessage = (evt) => {
        const value = evt.target.value;
        this.setState({
            message: value
        });
    }

    update = () => {

        this.setState({
            count: this.inputRef.value ? parseInt(this.inputRef.value): 0
        });
    }

    render(){
        //return JSX
        return (
            <div>
                <h3>{this.props.title ? this.props.title : "Counter"}</h3>
                <p>Count: {this.state.count}</p>
                <div>
                    <button onClick={this.inc}>Increment</button>&nbsp;
                    <button onClick={this.decr}>Decrement</button>
                </div>
                <div>
                    {/* Controlled Input */}
                    Count: <input type="number" 
                        value={this.state.count} onChange={this.change} />
                    {/* Message: <input type="text" value={this.state.message} onChange={this.changeMessage}/> */}
                </div>
                <div>
                    {/* Uncontrolled Input */}
                    Count: <input type="number" ref={(r) => {this.inputRef = r}}/> &nbsp;
                    <button onClick={this.update}>Update</button>
                </div>
            </div>
        )
    }
}

export default Counter;