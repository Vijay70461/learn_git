import React, { Component } from 'react'

export class Conditional extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isloggedin : true,
      }
    }
  render() {
//    --------------- if-else condition----------------
    // if(this.state.isloggedin)
    // {
    //     return(<div>Welcome vijay</div>)
    // }
    // else{
    //     return(<div>Welcome visitor</div>)
    // }
//    ------------------element variable-----------------
    // let Massage
    // if(this.state.isloggedin)
    // {
    //     Massage =<div>Welcome vijay</div>
    // }
    // else{
    //     Massage = <div>Welcome visitor</div>
    // }
    // return Massage;
// ---------------ternary opreter---------------------
    // return(
    //     this.state.isloggedin ?
    //     <div>Welcome vijay</div> :
    //     <div>Welcome visitor</div>
    // )
// ---------------------short-circuit opreter---------------
    return this.state.isloggedin && <div>Welcome vijay</div>
  }
}

export default Conditional