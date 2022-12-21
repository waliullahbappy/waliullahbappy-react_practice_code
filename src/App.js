// import React, { Component } from "react";
// import "./index.css";

// export default class App extends Component {
//   state = {
//     count: 0,
//   };

//   intervalId = null;

//   increament = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   decreament = () => {
//     if (this.state.count > 0) {
//       this.setState({ count: this.state.count - 1 });
//     }
//   };

//   timerStart = () => {
//     if (this.state.count > 0 && !this.intervalId) {
//       this.intervalId = setInterval(() => {
//         this.setState({ count: this.state.count - 1 }, () => {
//           if (this.state.count === 0) {
//             alert("Timer Finished ..........!");
//             clearInterval(this.intervalId);
//             this.intervalId = null;
//           }
//         });
//       }, 1000);
//     }
//   };

//   stopTimer = () => {
//     if (this.intervalId) {
//       clearInterval(this.intervalId);
//       this.intervalId = null;
//     }
//   };

//   resetTimer = () => {
//     this.setState({ count: 0 });
//     clearInterval(this.intervalId);
//     this.intervalId = null;
//   };

//   render() {
//     return (
//       <>
//         <div className="container">
//           <h1>Timer :{this.state.count}</h1>
//         </div>
//         <div>
//           <button onClick={this.increament}>+</button>
//           <button onClick={this.decreament}>-</button>
//           <button onClick={this.timerStart}>Start</button>
//           <button onClick={this.stopTimer}>Pause</button>
//           <button onClick={this.resetTimer}>Reset</button>
//         </div>
//       </>
//     );
//   }
// }


import React, { Component } from 'react'
import Profile from './components/profile/Profile'




export default class App extends Component {


  render() {
    return (
      <div>
       <Profile />
      
      </div>
    )
  }
}
