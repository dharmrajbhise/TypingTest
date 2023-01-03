import React, { Component } from 'react'

export default class Forms extends Component {
    constructor() {
      super();
    
      this.state = {
        username : "",
        Password : "",
        userError : "",
        PassError : ""
         
      }
    }

    valid(){
        if(!this.state.username.includes("@") && this.state.Password.length<5){
            this.setState({
                userError : "Invalid username",
                PassError : "Password should be greater than 5"
            })
        }
        else if(!this.state.username.includes("@")){
            this.setState({
                userError : "Invalid username"
            });
        }
        else if(this.state.Password.length<5){
            this.setState ( {
                PassError : "Password should greater than 5"
            });
        }
        else{
        return true;
        }
        
    }

    submit(){

        this.setState({
            userError : "",
            PassError : ""
        })
        if(this.valid()){

            alert("Form submitted");
            console.warn(this.state);
        }
    }
    
  render() {
    return (
      <div className="App" >
        <h1>Registration Form</h1>
        username :<input type="text" name="username" placeholder='username' onChange={(e)=>{this.setState({username:e.target.value})}}></input>
        <p style={{color:"red",fontsize : "14px"}}>{this.state.userError}</p>
        Password :<input type="password" name="password" placeholder='password' onChange={(e)=>{this.setState({Password:e.target.value})}}></input>
        <p style={{color:"red",fontsize : "14px"}}>{this.state.PassError}</p>
        <br/>
        <button onClick={()=>this.submit()}>Submit Form</button>
      </div>
    )
  }
}
