import React, { Component } from 'react';
import './App.css';
import Input from './Container/Input/Input';
import ItemArea from './Components/ItemArea/ItemArea';
import Header from './Container/Header/Header'

class App extends Component {

  constructor(props){
    super(props)
    this.state={
        TaskList:[]
    }
    
}
IdCounter=0;

RemoveItem=(Itemkey)=>{
  console.log('remove me')
  let KeyList=this.state.TaskList.map(x=>x.key)
  let TaskListHolder=this.state.TaskList
  TaskListHolder.splice(KeyList.indexOf(Itemkey),1)
  console.log(TaskListHolder)
 this.setState({TaskList:[...TaskListHolder]})
      
}

AddItem=(Item)=>{
  console.log()
    this.IdCounter=this.IdCounter+=1;
    let TaskListHolder=this.state.TaskList
     console.log([...TaskListHolder])
    this.setState({
        TaskList:[...TaskListHolder,{
            key:this.IdCounter,
            Description:Item
        }]
    })


}

OldTasks=()=>{
  this.setState(
    {
      TaskList:[...JSON.parse(localStorage.getItem('todoList'))]
    }
  )
}


componentWillMount(){

  
  if(localStorage.getItem('todoList')){
    let ItemsStored=localStorage.getItem('todoList');
    let ItemsParsed=JSON.parse(ItemsStored);
    this.OldTasks()
  }
}
componentDidUpdate(){
  localStorage.setItem('todoList',JSON.stringify(this.state.TaskList))

}


render(){
  return (
    <React.Fragment>
<div className="movingBack">
 
</div>
    <div className="App">
      <Header/>

      <Input AddItem={this.AddItem}></Input>
      <div className="TodoArea">
        {
      (this.state.TaskList===[])?<p>Add Item</p>:(
      this.state.TaskList.map((x)=>{
        console.log(x.key)
  return<ItemArea RemoveItem={this.RemoveItem} Key={x.key}
    Item={x.Description}/>}))}
      </div>
    </div>
    </React.Fragment>
  );
}

}

export default App;
