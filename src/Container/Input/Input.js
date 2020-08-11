import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
    constructor(props){
        super(props);
        this.inputRef=React.createRef();
        this.getInputVal=this.getInputVal.bind(this)
    }

    getInputVal=()=>{
        this.props.AddItem(this.inputRef.current.value);
        this.inputRef.current.value='';
    }

    enterVal=(e)=>{
        if(e.keyCode===13){
            this.getInputVal();
        }

    }

    render(){
    return (
        <React.Fragment>
            <div class="inputField">
                <div>
                <input onKeyDown={this.enterVal} ref ={this.inputRef} placeholder="Enter Item Here"></input>
                </div>
                <div>
                <button onClick={this.getInputVal} ><img src={require("./../../Assets/Check.png")}></img></button>
                </div>
            </div>
        </React.Fragment>
    );
    }
}

export default Input;