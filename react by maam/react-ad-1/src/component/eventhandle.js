import React, { Component } from 'react'

export class Eventhandle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         msg : <h1>Press button </h1>
      }
      this.red=this.red.bind(this)
      this.yellow=this.yellow.bind(this)
      this.blue=this.blue.bind(this)
      this.green=this.green.bind(this)
    }
    red(){
        this.setState({
            msg : <h1 style={{color: "red"}}>You press RED button</h1>
        })
    }
    yellow(){
        this.setState({
            msg : <h1 style={{color:"yellow"}}>You press YELLOW button</h1>
        })
    }
    blue(){
        this.setState({
            msg : <h1 style={{color:"blue"}}>You press BLUE button</h1>
        })
    }
    green(){
        this.setState({
            msg : <h1 style={{color:"green"}}>You press GREEN button</h1>
        })
    }
  render() {
    return (
      <div>
            <h1>{this.state.msg}</h1><br />
           <button onClick={this.red}>Red</button>
           <button onClick={this.yellow}>yellow</button>
           <button onClick={this.blue}>Blue</button>
           <button onClick={this.green}>Green</button>
      </div>
    )
  }
}

export default Eventhandle