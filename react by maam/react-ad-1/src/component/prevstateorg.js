import React, { Component } from 'react'
import Prevstate from './prevstate'

export class Prevstateorg extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
      // this.increment=this.increment.bind(this)
      this.increment5=this.increment5.bind(this)
    }
    increment(){
        this.setState((prevState)=>({
            count:prevState.count +1
        }))
    }
    increment5(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
  render() {
    return (
      <div> 
        <h1>{this.state.count}</h1>
        <button onClick={this.increment5}>Click</button>
      </div>
    )
  }
}

export default Prevstateorg