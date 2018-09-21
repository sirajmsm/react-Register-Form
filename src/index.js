import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state={mytext:'hello world'}; 
    this.state={myList:[{
      name:''
    }]}
  
    this.name = React.createRef();
    this.age = React.createRef();
    this.address = React.createRef();
    this.gender = React.createRef();
    
    
    this.addMyClick = this.addMyClick.bind(this);
    this.addClear = this.addClear.bind(this);
  }
  addMyClick() {
    
    this.setState({myList:[{
      name:this.name.current.value,
      age:this.age.current.value,
      address:this.address.current.value,
      gender:this.gender.current.value
      
    }]});
    this.setState({
      name:this.name.current.value ="",
      age:this.age.current.value="",
      address:this.address.current.value="",
      gender:this.gender.current.value="",
    });
  }
  addClear(){

    

  }

  render() {
    return (
      <div >
        <h3 class="divcall">Registeration Form</h3>
        
        <div class="divcall"><label>Name: </label><input ref ={this.name}/> </div>
        <div class="divcall"><label>Age:</label><input ref ={this.age}/> </div>
        <div class="divcall"><label>Address:</label><input ref ={this.address}/> </div>
        <div class="divcall"><label>Gender:</label><input ref ={this.gender}/> </div>
        
         
         <h3 class="divcall">Register Information</h3>
        {this.state.myList.map((myList, index) => { 
          return(
            <div>
            <div class="divcall"> <p>Name is : {myList.name}</p></div> 
            <div class="divcall"><p>Age is : {myList.age}</p></div> 
          <div class="divcall"><p>Address is : {myList.address}</p></div> 
          <div class="divcall"><p>Gender is : {myList.gender}</p></div>  
          </div>

        )})}

        <div class="divcall" id="btnSubmit"><button onClick={this.addMyClick}>Add</button>
        <button onClick={this.addClear}>Clear</button></div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));