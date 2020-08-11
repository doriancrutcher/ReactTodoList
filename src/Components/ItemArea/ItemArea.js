import React, { Component } from 'react';
import './ItemArea.css'


class ItemArea  extends Component {
constructor(props){
    super(props)
    this.state={
        keyval:this.props.key,
        striking:''
    }
    
}

RemoveMe=()=>{
    console.log('it should be'+this.props.key)
    this.props.RemoveItem(this.props.Key)
}

ChangeStyle=()=>{
    if(this.state.striking===''){
        this.setState({
            striking:'Done'
        })

    }
    else{
        this.setState({
            striking:''
        }
        )
    }

}
render(){
        return (
            <React.Fragment>
            <div onClick={this.ChangeStyle} className={"ItemStyle"+' '+this.state.striking} >
            {this.props.Item}
            </div>
            <div className="remove">
                <button onClick={this.RemoveMe} >
                    <img src={require('./../../Assets/Delete.png')}></img>
                    </button>
                    </div>
            
            </React.Fragment>
        );
}
    
}

export default ItemArea;