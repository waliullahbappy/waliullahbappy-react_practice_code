// import React from 'react'

// const Profile  = (props) => {

//   return (
//     <>

//     <div>
//       <h1>Name : {props.name}</h1>
//       <p>Designation:{props.designation}</p>
//     </div>

//     <div>
//         <h2>Skills :</h2>
//         <li>{props.skillA}</li>
//         <li>{props.skillB}</li>
//         <li>{props.skillC}</li>
//     </div>
//     </>

//   )
// }

// export default Profile

// import React, { Component } from "react";
// import classes from "./Profile.module.css";

// export default class Profile extends Component {
//   state = {
//     text: "",
//   };

//   changeHandle = (event) => {
//     this.setState({ text: event.target.value });
//   };

//   render() {
//     return (
//       <>
//         <div>
//           <h1 className={classes.head}>This Profile component</h1>
//           <span className={classes.testing}> This is For Testing</span>
//         </div>
//         <div className="container">
//           <input
//             type="text"
//             placeholder="Enter Data"
//             className={classes.inputField}
//             onChange={this.changeHandle}
//             value={this.state.text}
//           />
//         </div>
//         <br></br>
//         <div className="container">
//           {this.state.text && <h3>welcome : {this.state.text}</h3>}
            
//         </div>
//       </>
//     );
//   }
// }
// import React, { Component } from 'react'

// export default class Profile extends Component {


//   state={
//     name:'',
//     country:'',
//     bio:'',
//     dob :''
//   }

//   handleChange =(event)=>{
//     this.setState({
//       [event.target.name]:event.target.value
//     })
//     // console.log(event.target.value);
//   }

//   showData =()=>{
//     console.log(this.state)
//   }


//   render() {

//     return (
//       <div className='container'>
//       <div>
//           <input 
//         type='text'
//         placeholder='name'
//         name='name'
//         value={this.state.name}
//         onChange={this.handleChange}

//         />
//       </div>

//         <div>
//           <select 
//           name="country"
//           onChange={this.handleChange}
//           value={this.state.country}
//           >
//           <option>Select Country</option>
//           <option>Bangladesh</option>
//           <option>Pakistan</option>
//           <option>India</option>
//         </select>
//         </div>

//         <div>
//           <textarea
//          type='text'
//          placeholder='BIO'
//          name='bio'
//          onChange={this.handleChange}
//          value={this.state.bio}
//         >
//           </textarea>

//        <div>
         
//         </div>
//         <input 
//         type='date'
//         name='dob'
//         onChange={this.handleChange}
//         value={this.state.dob} />
        
//        </div>
//        <div>
//         <button onClick={this.showData}>Click To Show</button>
//        </div>
//       </div>
//     )
//   }
// }


// import React, { Component } from 'react'

// export default class Profile extends Component {

//   state={
//     count:0
//   }

//   intervalId = null

// increamentCount =()=>{
//   this.setState(
//     {count:this.state.count+1}
//   )
// }


// decreamentCount =()=>{
//   if(this.state.count > 0){
//     this.setState(
//       {count:this.state.count - 1}
//     )
//   } 
// }

// startCountDown =()=>{
//  if(this.state.count > 0  && !this.intervalId){
//   this.intervalId = setInterval(()=>{
//     this.setState({count:this.state.count - 1},()=>{
//       if(this.state.count === 0){
//         alert('Count Down Finished........')
//         clearInterval(this.intervalFinished)
//         this.intervalId = null
//       }
//     })
//   },1000)
//  }
// }


// pauseCountDown =()=>{
// if(this.intervalId){
//   clearInterval(this.intervalId)
//   this.intervalId = null
// }
// }


// resetCounDown =()=>{
// this.setState({count:0})
// clearInterval(this.intervalId)
// this.intervalId = null
// }


// timerStart = () => {
//       if (this.state.count > 0 && !this.intervalId) {
//         this.intervalId = setInterval(() => {
//           this.setState({ count: this.state.count - 1 }, () => {
//             if (this.state.count === 0) {
//               alert("Timer Finished ..........!");
//               clearInterval(this.intervalId);
//               this.intervalId = null;
//             }
//           });
//         }, 1000);
//       }
//     };


//   render() {
//     return (
//       <div className='container'>
//         <div>
//           <h1>Count : {this.state.count}</h1>
//         </div>
//         <div><button onClick={this.increamentCount} >+</button></div>
//         <div><button onClick={this.decreamentCount} >-</button></div>
//         <div><button onClick={this.startCountDown}>Start</button></div>
//         <div><button onClick={this.pauseCountDown} >Puase</button></div>
//         <div><button onClick={this.resetCounDown} >Reset</button></div>
        
//       </div>
//     )
//   }
// }



import React, { Component } from 'react'
import {Button,InputGroup} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

export default class Profile extends Component {
  state ={
    name:'',
    country:'',
    bio:'',
    dob:'',
    gender:'',
    agree:false,
    skills:[]
  }

  handleChange=(event)=>{
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  handleCheckBox =(event)=>{
    this.setState(
      {agree:event.target.checked}
    )
  }

 handleMultiCheckBox =(event)=>{
  if(event.target.checked){
    this.setState({
      skills: [...this.state.skills,event.target.value]
    })
  }else{
    const skills = this.state.skills.filter(skill => skill !== event.target.value)
    this.setState({skills})
  }
 }





  render() {
    return (
      <Form className='container w-50'>
        <h1>Form Handling</h1>
        <InputGroup className="mt-5">
        <Form.Control
          name="name"
          onChange={this.handleChange}
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={this.state.name}
        />
      </InputGroup>
      <Form.Select
       aria-label="Default select example"className='mt-4 mb-3'
       name='country'
       onChange={this.handleChange}
       value={this.state.country}
       >
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
        <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
        <Form.Control
         as="textarea"
         rows={3}
         name='bio'
         onChange={this.handleChange}
         value={this.state.bio}
          />
      </Form.Group>
      <InputGroup className="mt-3">
        <Form.Control

          name='dob'
          value={this.state.dob}
          onChange={this.handleChange}
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          type='date'
        />
      </InputGroup>
      <div className='mt-3'>
      <Form.Check
            inline
            label="Male"
            name="gender"
            type='radio'
            onChange={this.handleChange}
            value='Male'
           
          />
          <Form.Check
          inline
          label="Female"
          name="gender"
          type='radio'
          value='Female'
          onChange={this.handleChange}
          />
          <Form.Check
            inline
            label="Other"
            name="gender"
            type='radio'
            value='Other'
            onChange={this.handleChange}
          />
          </div>

        <div>
        <Form.Check
            inline
            label="Java"
            name="skills"
            value='Java'
            onChange={this.handleMultiCheckBox}
            checked={this.state.skills.includes('Java')}
           
          />
            <Form.Check
            inline
            label="Python"
            name="skills"
            value='Python'
            onChange={this.handleMultiCheckBox}
            checked={this.state.skills.includes('Python')}
           
          />
            <Form.Check
            inline
            value='C++'
            onChange={this.handleMultiCheckBox}
            label="C++"
            name="skills"
            checked={this.state.skills.includes('C++')}
           
          />
            <Form.Check
            inline
            label="Javascript"
            name="skills"
            value='Javascript'
            onChange={this.handleMultiCheckBox}
            checked={this.state.skills.includes('Javascript')}
          
           
          />
        </div>
         
          <div>
          <InputGroup className="mb-3">
            
        <InputGroup.Checkbox 
          label="Checkbox for following text input"
          onChange={this.handleCheckBox}
          name='agree'
          checked={this.state.agree}
         />
        
      </InputGroup>
          </div>
    
      <Button 
      variant="success"
      className='mt-2'
      onClick={()=>console.log(this.state)}
      >Secondary</Button>
     
      
    </Form>
    )
  }
}
