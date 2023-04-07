import React, { Component } from 'react'
import Childomponent from './childComponent'

export class Parentcomponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        parentname : "Parent"
      }
      this.greetParent = this.greetParent.bind(this)
    }
    greetParent(){
        alert`Hello ${this.state.parentname}`
    }
  render() {
    return (
      <div>
            <Childcomponent greetHandlar={this.greetParent}></Childcomponent>
      </div>
    )
  }
}

export default Parentcomponent