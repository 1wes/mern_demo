import React from 'react'
import './App.css'
// import axios from './baseUrl';
import RefsExample from './refs';

class A extends React.Component{

  constructor(props){
    super(props);

    this.handleRegChange=this.handleRegChange.bind(this);
  }

  handleRegChange=e=>{
    this.props.handleRegChange(e.target.value)
  }

  render(){

    return(
      <React.Fragment>
        <div>
          <label>
            Reg. No
          </label>
          <input type='text' placeholder='Reg. No' value={this.props.reset_reg_no} onChange={this.handleRegChange}></input>
        </div>
      </React.Fragment>
    )
  }
}

class B extends React.Component{

  constructor(props){
    super(props);

    this.handleClick=this.handleClick.bind(this);
  }

  handleClick=(e)=>{
    this.props.handleClick(e);
  }

  render(){

    return(
      <React.Fragment>
        <div style={{marginTop:'20px'}}>
          <button type='submit' value='Submit' style={{backgroundColor:"green", padding:'20px', cursor:'pointer', borderRadius:'5px', border:'none', color:'whitesmoke'}}
          onClick={this.handleClick}>
            Reset password 
          </button>
        </div>
      </React.Fragment>
    )
  }
}

class App extends React.Component{

  constructor(props){
    super(props);

    this.state={
      validation:false,
      reset_reg_no:''
    }

  this.handleRegChange=this.handleRegChange.bind(this);
  this.handleClick=this.handleClick.bind(this);
  this.modalWrapper=React.createRef();
  this.midWrapper=React.createRef()

  }

  handleRegChange=(reg_no)=>{
    this.setState({
      text:reg_no
    });
    

    console.log(this.state.text)
  }
  
  handleClick=event=>{
    event.preventDefault();

    let wrapper=this.modalWrapper.current;

    wrapper.style.backgroundColor='yellow'

    // let reg_no=this.state.text

    // alert(reg_no);

    // if(reg_no!==''){
    //   this.setState({
    //     validation:true
    //   })
    // }

    // alert(this.state.validation)
  }

  render(){

    return(
      <React.Fragment>
        <A handleRegChange={this.handleRegChange} />
        <B handleClick={this.handleClick}/>
        <RefsExample ref={this.modalWrapper} />
      </React.Fragment>
    )
  }
}

// class App extends React.Component{

//   constructor (props){
//     super(props);

//     this.state={
//       username:'',
//       password:'',
//       message:''
//     }

//     // handlers binding
//     this.handleSubmitRegForm=this.handleSubmitRegForm.bind(this);
//     this.handleUsernameChange=this.handleUsernameChange.bind(this);
//     this.handlePasswordChange=this.handlePasswordChange.bind(this);
//     this.handleMessageChange=this.handleMessageChange.bind(this);
//   }

//   handleUsernameChange=(event)=>{
//     let username=event.target.value;

//     this.setState({
//       username:username
//     })
//   }

//   handlePasswordChange=(event)=>{
//     let password=event.target.value;

//     this.setState({
//       password:password
//     })
//   }

//   handleMessageChange=(event)=>{
//     let message=event.target.value;

//     this.setState({
//       message:message
//     })
//   }

//   handleSubmitRegForm=e=>{
    
//     // prevent the form from submitting itsekf
//     e.preventDefault();

//     axios.post("/message", this.state).then(res=>{
//       alert(JSON.stringify(res.data));
//     }).catch(err=>{
//       throw err;
//     });

//     // clear the state
//     this.setState({
//       username:'',
//       password:'',
//       message:''
//     });
//   }

//   render(){
//     return (
//       // use fragments for performance and a cleaner DOM
//       <>
//         <div className="registration">
//           <div className='registration-form'>
//           <form onSubmit={this.handleSubmitRegForm}>

//             <label>
//               <h2>Register Here to Join our Site</h2>
//             </label>

//             <label>
//               Username
//             </label>

//             <input type="text" placeholder="Enter your username" value={this.state.username} onChange={this.handleUsernameChange} required/>
//             <br />

//             <label>
//               Password
//             </label>
//             <input type="password" placeholder="Enter your password" value={this.state.password} onChange={this.handlePasswordChange} required />
//             <br />
//             <label>
//               Message
//             </label>

//             <textarea type="text" rows="6" cols="10" placeholder='Enter your message' value={this.state.message} onChange={this.handleMessageChange} required/>
//             <br />
//             <br />

//             <div className='reg-form-submit-btn'>
//               <button className='submit-btn' type="submit" value="Submit">
//                 Submit
//               </button>
//             </div>

//           </form>
//           </div>
//         </div>
//       </>
//     )
//   }
// }

export default App;